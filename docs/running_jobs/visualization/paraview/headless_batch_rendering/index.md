When producing rendering a video we can speed things up tremendously by recognizing that each frame is independent of every other. This allows us to perform the rendering of each frame of a video output in parallel. In this tutorial you will learn to prepare a scene in Paraview, and save its "state" so that a slurm array batch processing job can then render all the frames in a fraction of the time. At the end of the process we will use ffmpeg to stitch all the frames together into a movie that we can use to share our visualization results.

## Part one: Making an animation in the Paraview Graphical User Interface

First follow the steps to launch Paraview that are explained in [Getting Started With ParaView GUI](../getting_started_with_paraview_gui/). Go ahead and generate a simple geometry that we are going to use for visualizing.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-27-20_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-27-20_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-27-20_0.png 1x" width="1500" /></span>

Here I'm going with a cone shape selected from the **Sources** drop down menu. Make sure to select apply or you won't see your geometry in the viewport on the right.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-28-56_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-28-56_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-28-56_0.png 1x" height="250" /></span>

Next, make sure the `animation view`is visible by using the drop down menu.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-30-5_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-30-5_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-30-5_0.png 1x" height="400" /></span>.

We are going to add an orbit camera animation track which is also talked about in greater detail here [Cameras And Keyframes](../cameras_and_keyframes/). Don't forget to select the blue cross to add the track.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-31-13_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-31-13_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-31-13_0.png 1x" height="400" /></span>

Then double click on the Camera and double click the cell that says
`Path`.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-32-21_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-32-21_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-32-21_0.png 1x" height="400" /></span>

This opens up a window with another panel, and once you select the positions element you will see a yellow line added to the viewport containing the cone geometry.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-35-22_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-35-22_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-35-22_0.png 1x" height="250" /></span>

Use the middle mouse button to move the track slightly of from the mid line of the cone

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-36-9_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-36-9_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-36-9_0.png 1x" height="250" /></span>

Then select the `Up Direction` element and make sure that we have 0,0,1 or the camera will be facing sideways

 <span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-37-31_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-37-31_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-37-31_0.png 1x" height="250" /></span>

Click **Ok**, and return to the animation view. On here we are going to set the` number of frames` to 1000 and the `end time` to 1000. This distinction is important for allowing our parallel tasks to use whole numbers to identify which frame to render. 

<span class="legacy-color-text-default"><span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-40-4_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-40-4_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-40-4_0.png 1x" height="250" /></span></span>

At this point you should be able to click the play button and see the camera orbiting around the cone in the viewport.

<span class="legacy-color-text-default"><span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-42-18_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-42-18_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-42-18_0.png 1x" height="250" /></span></span>

If this looks correct to you save the `paraview state file` with the name `cone_orbit.pvsm` with the file drop down menu.

<span class="legacy-color-text-default"><span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-41-54_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-41-54_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-41-54_0.png 1x" height="400" /></span></span>

## Part two: Slurm Array Batch Parallel Rendering

We are ready to render now that we have the paraview state file representing our data and the animated camera perspective we want to make into a video. The first step is to get the singularity container that has a headless version of paraview in it. This means that we don't have to have a display connected for the program to be able to make graphical outputs. The code below is

```bash
apptainer pull -F docker://ghcr.io/devinbayly/paraview_headless:latest
```

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_21-41-3_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_21-41-3_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_21-41-3_0.png 1x" height="150" /></span>

There will probably be more output if you haven't done this container pull before since it will need to fetch the individual layers and add them to the `.sif` file that is created in the current directory.

We will now construct 3 separate scripts that we will use for our rendering. The first one is the slurm array job batch submission script. For more information about these kinds of allocation requests read up on [Batch Jobs](../../../batch_jobs/intro/).

In this code you will need to replace your allocation account where it says `visteam`, but that is the only critical modification.

### `headless_batch.sh`

```bash
#!/bin/bash
#SBATCH --output=logs/Sample_SLURM_Job-%a.out
#SBATCH --job-name=paraview_headless
#SBATCH --ntasks=1
#SBATCH --nodes=1
#SBATCH --time=00:30:00
#SBATCH --partition=standard
#SBATCH --account=visteam
mkdir -p logs
pvsm_pth=$1 
apptainer exec paraview_headless_latest.sif /bin/bash render_headless.sh "$pvsm_pth" ${SLURM_ARRAY_TASK_ID}
```

As it is written this will allocate 1 CPU task for the task of headlessly rendering a single frame with an upper time limit of 30 mins. Note that there is a `${SLURM_ARRAY_TASK_ID}` environment variable in use but no `#SBATCH --array=` line. This is because it is often nice to have the option to specify the size of the array job at run time as we will see below. This will simply start our headless singularity container for each array job and execute a script that is a wrapper around the ParaView `pvpython` program.

### `render_headless.sh`

```bash
!/bin/bash

/opt/ParaView-5.11.0-RC2-osmesa-MPI-Linux-Python3.9-x86_64/bin/pvpython  render.py --pvsm "$1" --frame "$2"
```

This file is really only here to allow us to encapsulate a rather long command which uses the path to the ParaView `pvpython` program inside the container to run the render.py python script with our ParaView state file's path, and our array job task ID as a frame number to render.

This next file is where many of the interesting bits actually are. It should also be noted that this program was initially generated with the `trace` utility built into ParaView. This allows us to make a Python script by recording interactions within the GUI. For more information see, [https://www.paraview.org/Wiki/ParaView_and_Python#Trace_Recorder](https://www.paraview.org/Wiki/ParaView_and_Python#Trace_Recorder") Since most of the important explanations for this code are context sensitive I will switch to comments in code block below.

### `render.py`

```python
# state file generated using paraview version 5.11.0-RC1
from paraview.simple import *
import paraview
import os
import argparse
from pathlib import Path
import time
import uuid

# this is for helping us determine the run time of each frame's render
start = time.perf_counter()
# get frame number to render and the path to the pvsm file to load
parser = argparse.ArgumentParser()
parser.add_argument("--pvsm")
parser.add_argument("--frame")
args = parser.parse_args()

#load the pvsm file
# this brings in our cone geometry, as well as the animation track that we created with the orbiting camera
paraview.simple.LoadState(args.pvsm)
paraview.compatibility.major = 5
paraview.compatibility.minor = 11

#### import the simple module from the paraview
#### disable automatic camera reset on 'Show'
paraview.simple._DisableFirstRenderCameraReset()

# ----------------------------------------------------------------
# setup views used in the visualization
# ----------------------------------------------------------------
timekeeper = GetTimeKeeper()

renderView1 = GetActiveViewOrCreate("RenderView")
# ensure axes are hidden
renderView1.OrientationAxesVisibility = 0
renderView1.CenterAxesVisibility = 0

# ----------------------------------------------------------------
# setup color maps and opacity mapes used in the visualization
# note: the Get..() functions create a new object, if needed
# ----------------------------------------------------------------


print(GetSources())

#find out how many frames are in our animation

anim = GetAnimationScene()
print("animation length is",anim.EndTime)


if __name__ == '__main__':
#figure out what the output folder is for the frame

    render_folder = Path(f"{Path(args.pvsm.stem)}_renders")

# we will make this folder if it doesn't already exist
    render_folder.mkdir(parents=True,exist_ok =True)

# get the argument provided  indicating which frame we are supposed to render
    frame = int(args.frame)

# find out the maximum array job id
    max_array_id = int(os.environ["SLURM_ARRAY_TASK_MAX"])
    print("starting render")

# as long as we aren't above the last frame number continue to run
    while (frame < int(anim.EndTime)):
      print("running frame,",frame)

# move our animation track head to the frame we want to render
      anim.AnimationTime = float(frame)

# establish the HD and 4K file paths for our still frame render
      png_pth_hd = Path(f"{render_folder}/frame_{frame:06d}_HD.png")
      png_pth_4k = Path(f"{render_folder}/frame_{frame:06d}_4K.png")

# if there's already renders for this frame go ahead and skip
      if png_pth_hd.exists() and png_pth_4k.exists():
        print("skipping, already exists")
        frame+=max_array_id
        continue

# Otherwise go ahead and render them out using the correct resolutions
      SaveScreenshot(f"{png_pth_hd}",renderView1,ImageResolution=[1920,1080])
      SaveScreenshot(f"{png_pth_4k}",renderView1,ImageResolution=[3840,2160])
      print("saved")

# move on to the next frame that might need rendering using the number of array jobs as our offset. This ensures that we can use smaller sets of array jobs and still render all the frames we need.
      frame+=max_array_id

# get an end time for performance measuring
    end = time.perf_counter()
    print(f"elapsed {end-start}")
``` 

The following command actually kicks off our rendering job. It allows us to dynamically specify the number of array jobs that will be run, and we will pass in the Slurm batch script as the second argument followed by the name of the ParaView state file. This state file's name will be used to generate a folder where our images are getting saved. We are using a vertical tmux split so that we can watch the queue of these jobs and see if they are actually running. It will take close to 14 seconds per frame for a simple animated scene like this, and since we have more frames to render than we have jobs to run, some jobs will take longer than others because they will render more than one frame. Note, you don't have to perform both an HD and a 4K render of your material either if the render times are becoming too long.

```bash
    sbatch --array=0-900 headless_batch.sh cone_orbit.pvsm
```

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-11-38_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-11-38_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-11-38_0.png 1x" height="400" /></span>

{==Before moving on to the next step ensure that all tasks have cleared because even one or two missing frames will cause errors in the next video production step.==}

Making a video from the frames is a common task in visualization and is mentioned in other pages ([VisIt](../../visit/), [Blender](../../blender/)).

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-14-15_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-14-15_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989289/image2023-2-4_22-14-15_0.png 1x" width="412" height="250" /></span>

First ensure you have access to ffmpeg:

```bash
module load ffmpeg
```

Then use each frame as input to generate a video with no codec for the highest possible quality in other editing softwares

```bash
ffmpeg -i frame_%06d_HD.png -r 10 -c:v copy cone_orbit_HD.mov
```

You now should have an HD movie showing the entire render in sequence even though all the frames were generated in parallel. Enjoy!
