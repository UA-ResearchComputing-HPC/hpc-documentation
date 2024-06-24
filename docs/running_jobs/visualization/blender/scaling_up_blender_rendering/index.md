Rendering a single frame headlessly:
====================================

### Pre Reqs

-   This tutorial assumes you have followed steps from [Blender Command
    Line
    Rendering](/wiki/spaces/UAHPC/pages/75990901/Blender+Command+Line+Rendering)
    to get a copy of blender and a folder to work in.
-   **Download the blender file
    [test-headless.blend](/wiki/download/attachments/75989477/test-headless.blend?version=1&modificationDate=1664484241000&cacheVersion=1&api=v2)
    to your hpc workspace**
-   It also assumes an understanding of singularity commands for working
    with
    containers [Containers](/wiki/spaces/UAHPC/pages/75990594/Containers),
    and  [Introduction to Containers on
    HPC](/wiki/spaces/UAHPC/pages/75989283/Introduction+to+Containers+on+HPC)

### Attribution

This article forms the base and background of this technique

<a href="https://linuxmeerkat.wordpress.com/2014/10/17/running-a-gui-application-in-a-docker-container/" class="external-link">https://linuxmeerkat.wordpress.com/2014/10/17/running-a-gui-application-in-a-docker-container/</a>

### Summary

The example that follows aims at producing a rendered frame from a
default blender scene using \`Xvfb\` within a preconfigured singularity
container. In each section there will be screen shot footage on the
right and a code block provided for each command entered to make copying
and reproducing the steps easier.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://i.ytimg.com/vi/FNhUnPWzVaw/maxresdefault.jpg" alt="DIY Renderfarm Building Tutorial for Distributed Blender Rendering - YouTube" class="confluence-embedded-image n3VNCb KAlRDb confluence-external-resource" height="250" /></span>

image credit (
<a href="https://www.youtube.com/watch?v=FNhUnPWzVaw" class="external-link">https://www.youtube.com/watch?v=FNhUnPWzVaw</a>
)

The first step here is to start an interactive job and get our copy of
the singularity image from the github container repository. The code
used are

    interactive -a <your account name> -n 4

With your account specified here instead of the `visteam` account. Then
navigate to a folder where you would like do do your work.

You will then need a singularity container configured for` Xvfb`

    singularity pull -F docker://ghcr.io/devinbayly/xvfb:test

This retrieves the docker image from github container repository and
converts it into a singularity image. The `-F` is for forcing the
command to overwrite an existing image if you have already pulled this
in the past. This helps make sure that you work with the newest image if
there were changes made.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_12-52-47.png?version=1&amp;modificationDate=1664481167000&amp;cacheVersion=1&amp;api=v2&amp;width=1156&amp;height=138" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_12-52-47.png?version=1&amp;modificationDate=1664481167000&amp;cacheVersion=1&amp;api=v2&amp;width=1156&amp;height=138 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_12-52-47.png?version=1&amp;modificationDate=1664481167000&amp;cacheVersion=1&amp;api=v2&amp;width=1156&amp;height=138 1x" height="138" /></span>

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_12-53-43.png?version=1&amp;modificationDate=1664481223000&amp;cacheVersion=1&amp;api=v2&amp;width=583&amp;height=116" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_12-53-43.png?version=1&amp;modificationDate=1664481223000&amp;cacheVersion=1&amp;api=v2&amp;width=583&amp;height=116 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_12-53-43.png?version=1&amp;modificationDate=1664481223000&amp;cacheVersion=1&amp;api=v2&amp;width=583&amp;height=116 1x" height="116" /></span>

Now we go inside the container and start the Xvfb program to generate a
virtual display named 99 with a screen 0 associated of 1024x720
resolution with a depth of 16 images.

    singularity shell xvfb_test.sif
    Xvfb :99 -screen 0 1024x720x16 &> xvfb.log &

This will ensure the display remains as a background task and sends
messages to the log file.

To check whether this is working we can grep for the X process.

    ps -aux | grep X

But of course this also reveals any of the other users who are also
trying to create displays, so I've blurred that out. Part of
picking` :99` is to avoid using the same name as other folks on a node.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_12-59-36.png?version=1&amp;modificationDate=1664481575000&amp;cacheVersion=1&amp;api=v2&amp;width=438&amp;height=86" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_12-59-36.png?version=1&amp;modificationDate=1664481575000&amp;cacheVersion=1&amp;api=v2&amp;width=438&amp;height=86 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_12-59-36.png?version=1&amp;modificationDate=1664481575000&amp;cacheVersion=1&amp;api=v2&amp;width=438&amp;height=86 1x" height="86" /></span>

  

  

  

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-1-7.png?version=1&amp;modificationDate=1664481667000&amp;cacheVersion=1&amp;api=v2&amp;width=697&amp;height=116" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-1-7.png?version=1&amp;modificationDate=1664481667000&amp;cacheVersion=1&amp;api=v2&amp;width=697&amp;height=116 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-1-7.png?version=1&amp;modificationDate=1664481667000&amp;cacheVersion=1&amp;api=v2&amp;width=697&amp;height=116 1x" height="116" /></span>

We are now ready to try to run a headless blender render.

  

The first screenshot shows the result of jumping the gun and running the
command without mentioning which display to use. A more complete command
that achieves the result is provided as follows.

    DISPLAY=:99.0 blender-3.3.0-linux-x64/blender -b test-headless.blend -f 1

This will make the blender command use the correct display for our
rendering of a single frame from the blender scene. There's an
exhausting, ahem I mean exhaustive treatment of the command line
rendering flags here
<a href="https://docs.blender.org/manual/en/latest/advanced/command_line/render.html" class="external-link">https://docs.blender.org/manual/en/latest/advanced/command_line/render.html</a>
if you are curious.

The output of the command will be lines suggesting the scene is loaded
and that samples are being taken and rendered to the image. The final
line shows where the resulting png frame ends up.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-2-21.png?version=1&amp;modificationDate=1664481741000&amp;cacheVersion=1&amp;api=v2&amp;width=707&amp;height=111" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-2-21.png?version=1&amp;modificationDate=1664481741000&amp;cacheVersion=1&amp;api=v2&amp;width=707&amp;height=111 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-2-21.png?version=1&amp;modificationDate=1664481741000&amp;cacheVersion=1&amp;api=v2&amp;width=707&amp;height=111 1x" height="111" /></span>

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-3-0.png?version=1&amp;modificationDate=1664481780000&amp;cacheVersion=1&amp;api=v2&amp;width=559&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-3-0.png?version=1&amp;modificationDate=1664481780000&amp;cacheVersion=1&amp;api=v2&amp;width=638&amp;height=285 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-3-0.png?version=1&amp;modificationDate=1664481780000&amp;cacheVersion=1&amp;api=v2&amp;width=559&amp;height=250 1x" height="250" /></span>

If you would like to watch the steps in video form feel free.

  

Your browser does not support the HTML5 video element

{panel

------------------------------------------------------------------------

  

  

  

  

  

Scaling Up
----------

The process of using many cpu cores with blender is as follows.

The image for this step is pretty small, but you may click on it to view
it in a larger window. That or you can trust me that the code blocks
below are all you need.

The contents of the file on the left simply capture what was done in the
interactive session in the previous step. So create a file called
`run_blender.sh` with these contents.

    #!/bin/bash
    Xvfb :99 -screen 0 1024x720x16 &> xvfb.log &
    DISPLAY=:99.0 blender-3.3.0-linux-x64/blender -b test-headless.blend -o ./test_$1_ -f 1

We don't need to use the singularity shell command because that will be
part of our slurm batch submission script. Also the` -o ./test_$1_ `lets
us name the output images with a templated pattern using a number passed
to the script.

  

The file on the right is our slurm batch submission script named
`batch.sh`. Read more about them in [Jobs and
Scheduling](/wiki/spaces/UAHPC/pages/75989245/Jobs+and+Scheduling). The
content of this one is:

    #!/bin/bash
    #SBATCH --output=Sample_SLURM_Job-%a.out
    #SBATCH --ntasks=4
    #SBATCH --nodes=1             
    #SBATCH --time=00:15:00   
    #SBATCH --partition=standard
    #SBATCH --account=<your account name>   
    #SBATCH --array 0-64
     
    # SLURM Inherits your environment. cd $SLURM_SUBMIT_DIR not needed
    singularity exec xvfb_test.sif bash run_blender.sh ${SLURM_ARRAY_TASK_ID}

The primary change you will need to make is to write your own account in
the place where it says `--account=<your account name> `. Besides that
you will notice that the variable`${SLURM_ARRAY_TASK_ID} `is being
passed into the shell script so that each separate task will create a
frame png output. To run this batch file we use:

    sbatch batch.sh

Once the command to run the batch.sh is provided we see that all our 64
tasks with 4 cores each get kicked off.

  

To view the results you may return to the open on demand panel and
select one of the many finished pngs. I'm hopeful that you will find
better ways to apply this to visualizing data besides leveraging 256
cores to render a gray cube on a gray background.

  

  

  

  

  

  

  

  

  

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-11-32.png?version=1&amp;modificationDate=1664482291000&amp;cacheVersion=1&amp;api=v2&amp;width=800&amp;height=116" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-11-32.png?version=1&amp;modificationDate=1664482291000&amp;cacheVersion=1&amp;api=v2&amp;width=1280&amp;height=187 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-11-32.png?version=1&amp;modificationDate=1664482291000&amp;cacheVersion=1&amp;api=v2&amp;width=800&amp;height=116 1x" width="800" /></span>

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-12-16.png?version=1&amp;modificationDate=1664482336000&amp;cacheVersion=1&amp;api=v2&amp;width=500&amp;height=726" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-12-16.png?version=1&amp;modificationDate=1664482336000&amp;cacheVersion=1&amp;api=v2&amp;width=537&amp;height=780 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-12-16.png?version=1&amp;modificationDate=1664482336000&amp;cacheVersion=1&amp;api=v2&amp;width=500&amp;height=726 1x" width="500" /></span>

  

  

<span
class="confluence-embedded-file-wrapper"><img src="https://uarizona.atlassian.net/wiki/download/attachments/75989477/image2022-9-29_13-12-41.png?version=1&amp;modificationDate=1664482361000&amp;cacheVersion=1&amp;api=v2" class="confluence-embedded-image" /></span>

<table>
<thead>
<tr class="header">
<th><div class="content-wrapper">
<p><br />
</p>
</div>
<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-13-1.png?version=1&amp;modificationDate=1664482381000&amp;cacheVersion=1&amp;api=v2&amp;width=411&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-13-1.png?version=1&amp;modificationDate=1664482381000&amp;cacheVersion=1&amp;api=v2&amp;width=822&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-13-1.png?version=1&amp;modificationDate=1664482381000&amp;cacheVersion=1&amp;api=v2&amp;width=411&amp;height=250 1x" height="250" /></span></th>
<th><div class="content-wrapper">
<p><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-13-30.png?version=1&amp;modificationDate=1664482410000&amp;cacheVersion=1&amp;api=v2&amp;width=456&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-13-30.png?version=1&amp;modificationDate=1664482410000&amp;cacheVersion=1&amp;api=v2&amp;width=912&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75989477/image2022-9-29_13-13-30.png?version=1&amp;modificationDate=1664482410000&amp;cacheVersion=1&amp;api=v2&amp;width=456&amp;height=250 1x" height="250" /></span></p>
</div></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

  

  

  

  

If you would like to watch the steps unfold instead of looking at the
still frames feel free to use this video.

<video controls src="2022-09-29 12-05-48.mp4" title="Title"></video>
  
