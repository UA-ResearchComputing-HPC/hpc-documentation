
Roadmap
=======
<div class="grid" markdown>

* Roadmap
* Overview
* OOD Remote Desktop Session
* Download and Configure Blender
* Running the Blender Scene Render from the Command Line
* Viewing Your Results

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-4-12_14-3-19_0.png"  class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-4-12_14-3-19_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-4-12_14-3-19_0.png 1x" width="600" /></span>
</div>
Overview
========

Blender is a tremendously useful open source 3D modeling program, and
can be run on the HPC to create high fidelity visualizations of data and
general 3D modeling. One of the benefits of running Blender on the HPC
is you're able to transfer in a blender file containing your scene
already configured and you can start the rendering process and leave it
running overnight or during the week depending on the size of the
rendering that needs to be done. Using command line rendering makes it
possible to render from blender in a headless fashion, meaning no GPU is
has to be allocated for your rendering.  Another benefit of rendering on
the supercomputer is large single frame Renderings can take up a
significant amount of computer memory which HPC environments have to
spare.

------------------------------------------------------------------------
OOD Remote Desktop Session
==========================

Start up Open On Demand by going to
<a href="http://ood.hpc.arizona.edu" class="external-link">ood.hpc.arizona.edu</a>
or reading up about [OOD within our
documentation](/wiki/spaces/UAHPC/pages/75990636/Open+On+Demand)

class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-6-14.pngversion=1modificationDate=1648598775000cacheVersion=1api=v2width=758height=400" class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-6-14.pngversion=1modificationDate=1648598775000cacheVersion=1api=v2width=1280height=675 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-6-14.pngversion=1modificationDate=1648598775000cacheVersion=1api=v2width=758height=400 1x" height="400" /></span>

Enter details of your request. Here we are requesting a 5 hour 16 core
interactive session on elgato. Important to note that your own PI Group
must be entered instead of `visteam` 

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-6-43_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-6-43_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-6-43_0.png 1x" height="400" /></span>

when the request clears the allocation queue you will be able to launch
your interactive desktop

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-7-12_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-7-12_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-7-12_0.png 1x" width="700" /></span>

------------------------------------------------------------------------

Download and Configure Blender
==============================

In this section we will download Blender, and unzip it, and then write a
rendering python script

At the remote desktop start screen open a terminal

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-4-12_14-21-29_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-4-12_14-21-29_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-4-12_14-21-29_0.png 1x" width="476" /></span><span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-4-12_14-22-14_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-4-12_14-22-14_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-4-12_14-22-14_0.png 1x" height="250" /></span>

Navigate to an existing folder where you have space

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-4-12_14-23-41_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-4-12_14-23-41_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-4-12_14-23-41_0.png 1x" height="400" /></span>

Download blender with this `wget`  command from their clarkson mirror

    wget "../../all_images/mirror.clarkson.edu/blender/release/Blender2.93/blender-2.93.8-linux-x64.tar.xz"

 This lets us download the Long Term Support version of blender from
their homepage
<a href="../../all_images/www.blender.org/download/lts/2-93/" class="external-link">../../all_images/www.blender.org/download/lts/2-93/</a>

Also make sure to uncompress the `tar.xz`  at the end using this command

    tar -xf blender-2.93.8-linux-x64.tar.xz

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-4-12_14-30-8_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-4-12_14-30-8_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-4-12_14-30-8_0.png 1x" height="400" /></span><span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-4-12_15-7-9_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-4-12_15-7-9_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-4-12_15-7-9_0.png 1x" height="250" /></span>

Here is the code that we will put into the `render.py`  file  

    #get the blender python library
    import bpy
    #set the scene 
    scene = bpy.context.scene
    # set the output format as .tif
    scene.render.image_settings.file_format = "TIFF"
    # specify where the rendered image/s will go and what their names should be
    scene.render.filepath = "./frames/render"
    # set the engine to high performance CYCLES renderer
    scene.render.engine = "CYCLES"
    # set the resolution percentage down for testing, turn this up to 100 when it's worked once
    scene.render.resolution_percentage = 25
    # how many cpu threads we should create, this is a good default for Elgato, but should be higher on Puma and Ocelote
    # set it to the number of CPU cores you have in your allocation
    scene.render.threads = 15
    scene.render.threads_mode = "FIXED"
    # write a still frame render of the scene
    bpy.ops.render.render(write_still=1) 

  

  

  

------------------------------------------------------------------------

Running the Blender Scene Render from the Command Line
======================================================

Once you have created/edited the `render.py`  using a command line
editor like vi, use this command to start the headless rendering

This will ensure that the blender file you have configured gets run in
the background ( `-b`  ) and that the `render.py`  script is used as a
python ( `-P`  ) script 

    blender-2.93.8-linux-x64/blender -b <blender file here> -P render.py

With any luck your terminal will output that the process is
initializing. This scene renders a landscape mesh of flagstaff using a
heightmap in a tiff format which is why we see messages like
`TIFFFetchNormalTag` , which shouldn't appear on your screen unless you
are doing a similar task.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-10-31_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-10-31_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-10-31_0.png 1x" height="250" /></span>

This output shows the initialization of other blender systems that may
or may not be part of the rendering that you are doing. Unused systems
are unlikely to detract from the rendering performance and are simply
listed for diagnostic purposes it seems.

  

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-11-4_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-11-4_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-11-4_0.png 1x" height="250" /></span>

Once the initialization has completed the individual tiles of the larger
image will begin rendering. This is where the massive multicore
environments can really shine because a rendering thread can be
dispatched for each core provided there's enough memory to support all
of them running at the same time.

  

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-11-26_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-11-26_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-11-26_0.png 1x" width="600" /></span>

There is also a time estimate which is usually an over estimate for the
full duration of the rendering task.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-11-45_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-11-45_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-11-45_0.png 1x" height="400" /></span>

If you want to make sure that all the cpu cores you have allocated are
in use use the `htop -u <username>`  in a new terminal tab.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-12-12_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-12-12_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-12-12_0.png 1x" width="700" /></span>

When the process completes you will see blender quit after saving out an
image to the folder you specify

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-12-43_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-12-43_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-12-43_0.png 1x" width="700" /></span>

------------------------------------------------------------------------

Viewing Your Results
====================

This is a view of the image produced by the workflow

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-13-41_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-13-41_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75990901/image2022-3-29_17-13-41_0.png 1x" height="250" /></span>

<span
class="confluence-embedded-file-wrapper"><img src="../../all_images/uarizona.atlassian.net/wiki/download/attachments/75990901/image2022-3-29_17-13-7_0.png " class="confluence-embedded-image" /></span>

<span id="confluence-server-performance"
style="display:none;">{"serverDuration": 21, "requestCorrelationId":
"ca405ed9ac024358b0ff2ea1e8cbddc2"}</span>
