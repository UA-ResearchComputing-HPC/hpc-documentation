<link rel="stylesheet" href="../../../assets/stylesheets/embedded_files.css">
# Intro to Containers on HPC

There are times when the use of containers is more efficient for using HPC resources, and there are other times when it is the only way. This workshop will give you a quick view of the concepts and how we implement them. We can also bring these to department meetings.


## Workshop Presentation Files

<center>
[Click here to download PDF Version](files/ContainersOnHPC.pdf){ .md-button }
[Click here to download PowerPoint Version](files/ContainersOnHPC.pptx){ .md-button }
</center>

## Interactive Materials

### Apptainer

> note that if you create many containers many gigibytes of cache files
> may be written  to ~/.apptainer.  The files can be safely deleted,
> so be careful not to fill your home directory.
<br>

First start an interactive session
```console
[laptop ~]$ ssh netid@hpc.arizona.edu
[netid@gatekeeper ~]$ shell
(puma) [netid@wentletrap ~]$ elgato
(elgato) [netid@wentletrap ~]$ interactive
[netid@cpu37 ~]$ apptainer help
[netid@cpu37 ~]$ apptainer help build
```

#### Creating a Container

##### Pull from Docker registry 

> Less reproducible -- image can change

```console
apptainer pull docker://godlovedc/lolcow
```

##### Pull from container library 

> More reproducible

```console
apptainer pull library://sylabsed/examples/lolcow
```

##### Build from Docker registry

> More optionsconverts to latest format, & needs a name

```console
apptainer build lolcow.sif docker://godlovedc/lolcow
```


#### Running Apptainer on HPC

##### Apptainer shell

```apptainer shell``` opens a command prompt to the environment inside the container.
Try executing some commands.  Notice that although you are inside 
the container (a separate operating system), you will be able to 
list the contents of your home directory.

```console
[netid@i16n2 ~]$ apptainer shell lolcow_latest.sif
Apptainer> 
Apptainer> exit
```

##### Apptainer run

```apptainer run``` executes the default run script within the container,
which was specified when the container was created.

```console
[netid@i16n2 ~]$ apptainer run lolcow_latest.sif
[netid@i16n2 ~]$ # Or
[netid@i16n2 ~]$ ./lolcow_latest.sif
```

```console
[netid@i16n2 ~]$ apptainer run library://sylabsed/examples/lolcow
INFO:    Using cached image
 _______________________________________
/ Wrinkles should merely indicate where \
| smiles have been.                     |
|                                       |
\ -- Mark Twain                         /
 ---------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

#### Apptainer on HPC as a Batch Job

No modules need to be loaded to execute a container in 
a Slurm batch submission.

```sh
#!/bin/bash
#SBATCH --job-name=lolcow
#SBATCH --ntasks=1 
#SBATCH --nodes=1 
#SBATCH --mem=1gb 
#SBATCH --time=00:01:00 
#SBATCH --partition=standard 
#SBATCH --account=YOUR_GROUP 


cd /path/to/container
apptainer run lolcow_latest.sif
```

#### Binding File Paths

Access to your files outside the container: Binding 
You automatically get ```/home```, ```/tmp```, ```/xdisk```, ```/groups```, and ```$PWD```

```console
[netid@i16n8 ~]$ echo "Hello from inside the container" > $HOME/hostfile.txt
[netid@i16n8 ~]$ apptainer exec lolcow_latest.sif cat $HOME/hostfile.txt
Hello from inside the container
```

```console
[netid@i16n8 ~]$ echo "Drink milk (and never eat hamburgers)." > data/cow_advice.txt
[netid@i16n8 ~]$ apptainer exec --bind $PWD/data:/mnt lolcow_latest.sif cat /mnt/cow_advice.txt
Drink milk (and never eat hamburgers).
```
Alternatives:

```console
$ apptainer shell --bind /data my-container.sif
```
```console
$ export APPTAINER_BINDPATH=/data
```

### GPUs and Containers

We show three ways to use tensorflow containers on HPC. We just use Tensorflow as an example

1. [Tensorflow example using a system module*](https://ua-researchcomputing-hpc.github.io/Apptainer-Examples/Tensorflow-Module-Job)
2. [Tensorflow using a custom image pulled from Nvidia](https://ua-researchcomputing-hpc.github.io/Apptainer-Examples/Nvidia-Tensorflow-Build)
3. [Tensorflow from DockerHub](https://ua-researchcomputing-hpc.github.io/Apptainer-Examples/Tensorflow-From-Cuda)

> *Containers as modules: caffe, pytorch, rapids, tensorflow, and theano

### References

In addition to our [Apptainer documentation](../../../software/containers/what_are_containers/), see the following resources for helpful information on getting started with containers:

| Reference | Link |
| ----------| ---- |
| UArizona HPC Examples Github | [https://ua-researchcomputing-hpc.github.io](https://ua-researchcomputing-hpc.github.io) |
| NIH Containers Documentation | [https://hpc.nih.gov/apps/Apptainer.html](https://hpc.nih.gov/apps/Apptainer.html) |
| Sylabs User Guide | [https://sylabs.io/guides/3.5/user-guide/introduction.html](https://sylabs.io/guides/3.5/user-guide/introduction.html) |
| Sylabs Examples | [https://github.com/sylabs/examples](https://github.com/sylabs/examples) |
| TACC Container Basics | [https://containers-at-tacc.readthedocs.io/en/latest/](https://containers-at-tacc.readthedocs.io/en/latest/) |
| CyVerse Container Camp | [https://cyverse-container-camp-workshop-2018.readthedocs-hosted.com](https://cyverse-container-camp-workshop-2018.readthedocs-hosted.com) |