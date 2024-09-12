# SLURM Job Dependencies Example

[Click here to download the example](files/volcano.tar.gz){ .md-button .md-button--primary }

## Overview

Sometimes projects need to be split up into multiple parts where each step is dependent on the step (or several steps) that came before. SLURM dependencies are a way to automate this process. 

In this example, we'll create a number of three-dimensional plots using Python and will combine them into a gif as the last step. A job dependency is a good solution in this case since the job that creates the gif is dependent on all the images being present.

## Data structure

We'll try to keep things in order by partitioning our data, output, and images in distinct directories. These directories and files can be downloaded by clicking the button at the top of the page.

```bash
(elgato) [user@wentletrap volcano]$ tree
.
├── create_gif.slurm
├── data
│   └── volcano.csv
├── generate_frames.slurm
├── images
├── output
│   ├── archives
│   └── slurm_files
├── submit-gif-job
└── volcano.py
```

*****

# Scripts

## Python script
The Python example script was pulled and modified from the [Python graph gallery](https://www.python-graph-gallery.com/3d/) and the CSV file used to generate the image was downloaded from: [https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/master/static/data/volcano.csv](https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/master/static/data/volcano.csv)

Below you'll notice one modification to the original script: ```n = int(sys.argv[1])```. We're going to execute this in an array job and will be importing the array indices (integers ```n``` where ```1 ≤ n ≤ 360```) into this script as arguments so that we can manipulate the viewing angle (```ax.view_init(30, 45 + n)```). Each frame will be slightly different and, when combined into a gif, will allow us to execute a full rotation of the 3D volcano plot. 

```python
#!/usr/bin/env python3
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
import sys

n = int(sys.argv[1]) # <- We'll import an array index to rotate our image

# Original example from: https://www.python-graph-gallery.com/3d/
# CSV available from   : https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/master/static/data/volcano.csv
data = pd.read_csv("data/volcano.csv")
 
# Transform it to a long format
df=data.unstack().reset_index()
df.columns=["X","Y","Z"]
 
# And transform the old column name in something numeric
df['X']=pd.Categorical(df['X'])
df['X']=df['X'].cat.codes
 
# Make the plot
fig = plt.figure()
ax = fig.add_subplot(projection='3d')
ax.set_axis_off()
ax.plot_trisurf(df['Y'], df['X'], df['Z'], cmap=plt.cm.viridis, linewidth=0.2)
ax.view_init(30, 45 + n)
plt.savefig('images/image%s.png'%n,format='png',transparent=False)
```

## Slurm Script to Generate Images
This is the job where we will generate all of our images. In each step, we will pass our array index to our python script to determine the viewing angle of our plot. 

Script: ```generate_frames.slurm```

```bash
#!/bin/bash

#SBATCH --account=hpcteam
#SBATCH --partition=standard
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --time=00:05:00
#SBATCH --job-name=generate_frames
#SBATCH -o output/slurm_files/%x-%A.out
#SBATCH -e output/slurm_files/%x-%A.err
#SBATCH --open-mode=append
#SBATCH --array=1-360

python3 volcano.py $SLURM_ARRAY_TASK_ID
```

## SLURM script to combine frames into gif

Once each frame has been generated, we'll use ffmpeg to combine our images into a gif and will clean up our workspace. The bash script shown in the next section is what will ensure that this script isn't run until the array has completed. 

Script: ```create_gif.slurm```

```bash
#!/bin/bash

#SBATCH --account=hpcteam
#SBATCH --partition=standard
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --time=00:10:00
#SBATCH --job-name=make_gif
#SBATCH -o output/slurm_files/%x-%j.out
#SBATCH -e output/slurm_files/%x-%j.err

module load ffmpeg 
ffmpeg -framerate 25 -i $PWD/images/image%d.png -r 30  -b 5000k volcano.mp4
ffmpeg -i volcano.mp4 -loop 0 -vf scale=400:240 volcano.gif
rm volcano.mp4
cd images
DATE_FORMAT=$(date +%m-%d-%Y.%H:%M:%S)
tar czvf volcano-images-${DATE_FORMAT}.tar.gz image*.png
mv *tar.gz ../output/archives
rm -rf ./*.png
```


## Script to Automate Job Submissions

This simple bash script is what implements the SLURM job dependency magic. Each step is described in detail below.

Script: ```submit-gif-job```

```bash
#!/bin/bash

printf "Submitting job to generate images\n"
jobid=$(sbatch --parsable generate_frames.slurm)

printf "Job submitted with ID: $jobid\n\n"

printf "Submitting job dependency. Combines images into a gif\n"
sbatch --dependency=afterany:$jobid create_gif.slurm 
```

#### Step-by-step:
1) ```jobid=$(sbatch --parsable generate_frames.slurm)```

In this case, we're capturing the job ID output from our array submission. Typically, when you submit a SLURM job without arguments, you get back something that looks like: 
```
(elgato) [user@wentletrap ~]$ sbatch example.slurm 
Submitted batch job 448243
```
The parsable option is what reduces this to simply the job ID and allows us to easily capture it:
```
(elgato) [user@wentletrap ~]$ sbatch --parsable example.slurm 
448244
```
As a general comment, when you run something like:
```
VAR=$(command)
```
You are running ```command``` and setting the variable ```VAR``` to the output. In the specifc case of our bash script, we've set the bash variable ```jobid``` to the output of our ```sbatch --parsable``` command. 


2) ```sbatch --dependency=afterany:$jobid create_gif.slurm```

Now that we have the Job ID, we'll submit the next job with a dependency flag: ```--dependency=afterany:$jobid```. 

The ```dependency``` option tells the scheduler that this job should not be run until the job with Job ID ```$jobid``` has completed. The ```afterany``` specifies that the exit status of the previous job does not matter. Other options are ```afterok``` (meaning only execute the dependent job if the previous job ended successfully) or ```afternotok``` (meaning only execute if the previous job terminated abnormally, e.g. was cancelled or failed). You might consider setting up multiple job dependencies that depend on the previous job's exit status. 

*****

# Submitting the Jobs

Once we've gotten everything set up, it's time to execute our workflow. We can check our jobs once we've run our bash script. In this case, while the array job used to generate the different image frames is running, the ```make_gif``` job will sit in queue with the reason ```(Dependency)``` indicating that it is waiting to run until its dependency has been satisfied. 

```bash
(elgato) [user@wentletrap volcano]$ bash submit-gif-job 
Submitting job to generate images
Job submitted with ID: 447878

Submitting job dependency. Combines images into a gif file
Submitted batch job 447879

(elgato) [user@wentletrap volcano]$ squeue --user user
             JOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST(REASON)
    447878_[9-360]  standard generate     user PD       0:00      1 (None)
            447879  standard make_gif     user PD       0:00      1 (Dependency)
          447878_1  standard generate     user  R       0:02      1 cpu16
          447878_2  standard generate     user  R       0:02      1 cpu37
          447878_3  standard generate     user  R       0:02      1 cpu37
          447878_4  standard generate     user  R       0:02      1 cpu37
          447878_5  standard generate     user  R       0:02      1 cpu37
          447878_6  standard generate     user  R       0:02      1 cpu37
          447878_7  standard generate     user  R       0:02      1 cpu37
          447878_8  standard generate     user  R       0:02      1 cpu37
```

Once the job has completed, you should see something that looks like the following structure with output files:
```bash
(elgato) [user@wentletrap volcano]$ tree
.
├── create_gif.slurm
├── data
│   └── volcano.csv
├── generate_frames.slurm
├── images
├── output
│   ├── archives
│   │   └── volcano-images-10-25-2022.12:52:19.tar.gz
│   ├── gifs
│   │   └── volcano.gif
│   └── slurm_files
│       ├── generate_frames-447878.err
│       ├── generate_frames-447878.out
│       ├── make_gif-447879.err
│       └── make_gif-447879.out
├── submit-gif-job
└── volcano.py

6 directories, 11 files
```

# Output
If everything is successful, there should be a gif of a rotating volcano under ```./output/gifs/volcano.gif```

![](images/volcano.gif)



*****
[![](/Images/home.png)](https://ua-researchcomputing-hpc.github.io/) 
[![](/Images/back.png)](../)
