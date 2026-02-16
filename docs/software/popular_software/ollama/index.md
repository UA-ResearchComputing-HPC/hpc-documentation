# Ollama

## Overview

Ollama is a popular open-source platform to run LLMs. Ollama can be built as a container on HPC and run efficiently using GPU nodes on Puma or Ocelote. The full library of models available on ollama can be found [here](https://ollama.com/library). 

## Building Ollama

The ollama executable can easily be built using apptainer. For more information on apptainer see our page on [containers](../../containers/containers_on_hpc/). 

To access the apptainer command and sufficient compute resources to build the container, please use a compute node via [interactive session](../../../running_jobs/interactive_jobs/). The apptainer command is not available on login nodes:

<!-- ```bash
(puma) [ejahn@junonia:~]$ apptainer
-bash: apptainer: command not found
``` -->

Once you have launched an interactive session, the command to download and create ollama is:

```bash
apptainer build ollama.sif docker://ollama/ollama
```

This will take some time to complete. Once it is finished, you will find a ~2 GB file called `ollama.sif` in the current folder.

## Running Ollama

The ollama program creates a background process that accepts queries and returns responses. 

To start the background process (hiding messages):

```bash
apptainer exec --nv --env "OLLAMA_MODELS=/path/to/your/models" ollama.sif ollama serve > /dev/null 2>&1 &
```

To start the background process (showing messages):

```bash
apptainer exec --nv --env "OLLAMA_MODELS=/path/to/your/models" ollama.sif ollama serve &
```

Once the background process is running, you will need to pull the model you intend to use if you have not done so already.

```bash
apptainer exec --nv --env "OLLAMA_MODELS=/path/to/your/models" ollama.sif ollama pull tinyllama
```

**Model files are large! Manage your space carefully.**

LLM model images can be a few to hundreds of gigabytes in size. Storing these files in the default location (your home folder) is very likely to cause storage space issues. It is highly recommended to create a dedicated folder for your models somewhere in `/groups` or `/xdisk`. Note that the command above specifies a folder to the environment variable `OLLAMA_MODELS`. It is recommend to include this option every time you run the command, otherwise models will be saved to `/home/.ollama/models`. If you accidentally save a model there, you should remove `/home/.ollama/models` to free up space in your home.

Not only do we have to consider disk space when storing our models, but we also have to consider VRAM (GPU memory). Models that are larger than the amount of GPU memory available will not run! Check the size of the model file on the ollama webside before pulling it to ensure that it will run on your GPU configuration. 

The P100 GPUs (16 GB VRAM) on Ocelote are good options because they can be run in tandem, giving twice the available GPU memory as a single P100 for a total of 32 GB VRAM. Plus, they are significantly more available than GPUs on Puma. To request an interactive session with two P100 GPUs on Ocelote, use this command:

```bash
salloc --job-name=interactive --account=<your_group> --partition=gpu_standard --nodes=1 --gres=gpu:2 --ntasks=6 --time=4:0:0  
```

A general rule of thumb for GPU jobs is to provide at least as much CPU memory as GPU memory. Since Ocelote has 6 GB per core, we requested 6 cores to provide 36 GB of CPU memory.

Other GPU configurations can be found on our [batch directives](../../../running_jobs/batch_jobs/batch_directives/) page, and a description of the GPU resources can be found in our [compute resources](../../../resources/compute_resources/) page. 

Once the background process has been started and the model pulled, you can launch the model with:

```bash
apptainer exec --nv --env "OLLAMA_MODELS=/path/to/your/models" ollama.sif ollama run tinyllama
```



## Using Ollama in a Jupyter Notebook

Another popular workflow to save and analyze responses from an LLM is to use a Juptyer Notebook. You can launch a Jupyter Notebook on HPC through [Open OnDemand](https://ood.hpc.arizona.edu) under the Interactive Apps dropdown. GPUs are available by changing the queue from "standard" to "standard with GPU". Once Jupyter is running, use the following code blocks to run ollama in the background while you pull and query models.

Import necessary libraries.

```python
import subprocess, os, time, requests, json
from IPython.display import clear_output
```

Start Ollama in the background. Be sure to set your models folder and active directory.

```python
ollama_process = subprocess.Popen([
    'apptainer', 'exec', '--nv',
    '--env', 'OLLAMA_MODELS=/path/to/your/ollama/models', # replace with your models folder, ideally somewhere other than your home
    '/path/to/your/ollama/ollama.sif',
    'ollama', 'serve'
], 
stdout=subprocess.PIPE, 
stderr=subprocess.PIPE,
cwd='/path/to/your/ollama'  # set your active directory here
)

# give it a few seconds to start up
time.sleep(5)

# check if it's running
print(f"Ollama process PID: {ollama_process.pid}")
print(f"Process running: {ollama_process.poll() is None}")
```

    Ollama process PID: 19218
    Process running: True

Now, use `requests` to check if ollama is responsive.

```python
try:
    response = requests.get('http://127.0.0.1:11434/api/tags')
    print("Ollama is responding")
    print(response.json())
except Exception as e:
    print(f"Error: {e}")
```

    Ollama is responding
    {'models': [{'name': 'llama3.2:1b', 'model': 'llama3.2:1b', 'modified_at': '2026-02-16T10:50:38.012249548-07:00', 'size': 1321098329, 'digest': 'baf6a787fdffd633537aa2eb51cfd54cb93ff08e28040095462bb63daf552878', 'details': {'parent_model': '', 'format': 'gguf', 'family': 'llama', 'families': ['llama'], 'parameter_size': '1.2B', 'quantization_level': 'Q8_0'}}]}

Pull a small model:

```python
print("Pulling model llama3.2:1b...")
response = requests.post('http://127.0.0.1:11434/api/pull',
                        json={'name': 'llama3.2:1b'},
                        stream=True)

for line in response.iter_lines():
    if line:
        progress = json.loads(line)
        if 'status' in progress:
            status = progress['status']
            if 'total' in progress and 'completed' in progress:
                pct = (progress['completed'] / progress['total']) * 100
                clear_output(wait=True)
                print(f"Pulling model: {status} - {pct:.1f}%")
            elif status == 'success':
                clear_output(wait=True)
                print("Model pulled successfully")

print("\nDone")
```

    Model pulled successfully
    
    Done

Submit a simple query"

```python
print("\nQuerying model...")
response = requests.post('http://127.0.0.1:11434/api/generate',
                        json={
                            'model': 'llama3.2:1b',
                            'prompt': 'Explain what a black hole is at a college level in one paragraph.',
                            'stream': False
                        })

result = response.json()
print("\nResponse:")
print(result['response'])
```

    
    Querying model...
    
    Response:
    A black hole is a region in space where the gravitational pull is so strong that nothing, including light, 
    can escape once it falls within a certain boundary known as the event horizon. This occurs when a massive 
    star undergoes a supernova explosion, and its remaining mass collapses under its own gravity, causing a 
    singularity at its center. The event horizon, which marks the point of no return, is not a physical 
    boundary but rather a mathematical concept that demarcates the region beyond which anything that enters 
    cannot escape. Once something crosses the event horizon, it is inevitably pulled towards the singularity, 
    where its mass and energy are compressed to an infinitely small point, effectively creating a "black hole." 
    The presence of matter or energy in this region warps the fabric of spacetime around it, causing intense 
    gravitational forces that can distort the surrounding environment.

Pull a larger model:

```python
model_name = 'deepseek-r1:32b'

print(f"Pulling model {model_name}...")
response = requests.post('http://127.0.0.1:11434/api/pull',
                        json={'name': model_name},
                        stream=True)

for line in response.iter_lines():
    if line:
        progress = json.loads(line)
        if 'status' in progress:
            status = progress['status']
            if 'total' in progress and 'completed' in progress:
                pct = (progress['completed'] / progress['total']) * 100
                completed_gb = progress['completed'] / (1024**3)
                total_gb = progress['total'] / (1024**3)
                clear_output(wait=True)
                print(f"{status}: {completed_gb:.2f}/{total_gb:.2f} GB ({pct:.1f}%)")
            elif status == 'success':
                clear_output(wait=True)
                print(f"✓ {model_name} pulled successfully")

print("\nReady to use")
```

    ✓ deepseek-r1:32b pulled successfully
    
    Ready to use

