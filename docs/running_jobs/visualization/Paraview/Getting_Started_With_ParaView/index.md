
ParaView is a powerful data visualization software that many researchers
can find useful for getting a visual understanding of their data. This
guide will be a brief introduction to ParaView including how to install
it and use its GUI interface. For more information on how to use the
ParaView terminal (PvPython), see the tutorial
<a href="https://www.notion.so/Getting-Started-With-The-Paraview-Terminal-PvPython-b81abd6f027e4b9c87d716ec36c02129" class="external-link">here</a>.
This tutorial was created using Windows 10 but should apply to most if
not all ParaView installations.

*Note: while programming experience with python is not required to
follow along, it can be useful for working with more advanced ParaView
features.*

Installation (for HPC)
----------------------

These instructions will get you setup with the Paraview GUI on our HPC
systems. Feel free to copy and paste this code into an OOD Remote
Desktop Terminal, and consult the lower explanations for details about
each line.

    singularity pull docker://ghcr.io/devinbayly/vtk:latest
    wget "https://www.paraview.org/paraview-downloads/download.php?submit=Download&version=v5.11&type=binary&os=Linux&downloadFile=ParaView-5.11.0-MPI-Linux-Python3.9-x86_64.tar.gz" -O paraview.tar.gz
    tar xf paraview.tar.gz
    singularity exec vtk_latest.sif ./ParaView-5.11.0-MPI-Linux-Python3.9-x86_64/bin/paraview

  

`singularity pull docker://ghcr.io/devinbayly/vtk:latest`

This line of code will pull a container the packages provided by our
visualization consultant

`wget "https://www.paraview.org/paraview-downloads/download.php?submit=Download&version=v5.11&type=binary&os=Linux&downloadFile=ParaView-5.11.0-MPI-Linux-Python3.9-x86_64.tar.gz" -O paraview.tar.gz`

This line will pull the paraview binary from their downloads, and
rename  it to `paraview.tar.gz`

`tar xf paraview.tar.gz`

This line will extract the contents of the gzipped tar file

`singularity exec vtk_latest.sif ./ParaView-5.11.0-MPI-Linux-Python3.9-x86_64/bin/paraview`

This line will execute the paraview binary and launch the GUI

  

If you'd like to know more about what's happening here, we are
technically using the container to package the dependencies needed by
paraview, and using the program downloaded to our local folder launch to
the gui. This decouples the paraview version from the dependencies,
freeing you up to use whatever version suits you without having to
download other singularity containers.

  

  

Installation (for workstations)
-------------------------------

ParaView is available for Windows, Mac, and Linux and can be downloaded
at this website:
<a href="https://www.paraview.org/download/" class="external-link">https://www.paraview.org/download/</a>

Find the installation option that best applies to you. For most cases,
the top option will work.

Run the downloaded executable and follow the instructions to install it.

Running ParaView
----------------

  

There are two ways to work with ParaView, either through the GUI (visual
editor) or through a terminal. This tutorial will focus on the GUI, if
you wish to use the terminal, check out the PvPython tutorial
<a href="https://www.notion.so/Getting-Started-With-The-Paraview-Terminal-PvPython-b81abd6f027e4b9c87d716ec36c02129" class="external-link">here</a>.

### ParaView GUI

To run the ParaView GUI, find the Paraview executable and run it on your
computer.

Once open, close any popups and you will see the default layout

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/1.jpg?version=2" class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/1.jpg?version=22x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/1.jpg?version=21x" width="1000" /></span>

  

  

If you plan on working with python, from the top drop-down you can click
View→Python Shell. This python shell is equivalent to PvPython in the
ParaView Terminal option.

To get started with the terminal, first, add a shape. Try adding a
sphere to the scene from the drop-down by clicking Sources→Geometric
Shapes→Sphere. While nothing is added to the view here, you can see that
in the pipeline tab on the left, a sphere has been added. To show this
in the view, you can click the eye icon to the left of the new object.

To maneuver in the view you can use your left mouse button to rotate,
your right mouse button to zoom, and your middle mouse button to pan.
Alternatively, shift+ right mouse button can be used to pan and the
scroll wheel can be used to zoom. The view can be reset at any time with
the Reset button shown below:

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/2.jpg?version=3" class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/2.jpg?version=32x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/2.jpg?version=31x" width="1000" /></span>

### Loading Data

Let’s load some example data into ParaView. Click the “Open” button from
the toolbar (shown below), go to File → Open, or press Crtl + O.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/3.jpg?version=2" class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/3.jpg?version=22x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/3.jpg?version=21x" width="1000" /></span>

On the left side under Favorites, there should be a directory called
Examples. From that, click can.ex2 and hit OK.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/4.jpg?version=2" class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/4.jpg?version=22x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/4.jpg?version=21x" width="1000" /></span>

No data should appear yet but information about the data should appear
in the properties tab. In this, we can select what information from our
data set we want to load. For this example, we can leave all the default
settings. Press Apply to confirm the settings and you should see the
example data appear in the view.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/5.jpg?version=2" class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/5.jpg?version=22x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/5.jpg?version=21x" height="400" /></span>

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/7.jpg?version=3" class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/7.jpg?version=32x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/7.jpg?version=31x" height="93" /></span><span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/6.jpg?version=2" class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/6.jpg?version=22x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/6.jpg?version=21x" width="1000" /></span>

### Changing The Visualization

This visualization can be played with the green play button at the top
of the screen.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/7.jpg?version=3" class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/7.jpg?version=32x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/7.jpg?version=31x" width="1000" /></span> 

Currently, the colors just show the two different shapes. Let’s say we
want to visualize the acceleration of all the points of the shape. In
the toolbar, find the drop-down that currently says vtkBlockColors and
switch it to vel. Play the animation again to visualize the result.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/8.jpg?version=2" class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/8.jpg?version=22x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/8.jpg?version=21x" width="1000" /></span>

While this does provide some useful information, it may not be the best
way of visualizing velocity. Instead, let's add some vectors to see how
each point is moving.

  

Start by adding a Glyph to your data. With your data selected click the
Glyph button from the toolbar. Next, set both the Orientation Array and
Scale Array to vel and hit apply. You should notice that the arrows do
get added but they are way too large. Change this by editing your scale
factor until it looks right (0.0005 worked for me).

  

  

  

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/9.jpg?version=2" class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/9.jpg?version=22x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/9.jpg?version=21x" width="1000" /></span>

And there you have it! You can play the animation and watch as the
arrows change with time.

  

Later tutorials will work with specific data types as well as other
features included in ParaView but after this, you should have a base
understanding of how to navigate the scene and load some basic data.

<a href="https://www.youtube.com/watch?v=Ku9rtS3DHlU" class="external-link">Visualization on HPC</a> youtube video
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<a href="https://www.youtube.com/watch?v=Ku9rtS3DHlU" class="external-link"><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/image2023-2-9_14-5-51_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/image2023-2-9_14-5-51_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989684/image2023-2-9_14-5-51_0.png 1x" height="400" /></span></a>

  

  

  

  

  

<span id="confluence-server-performance"
style="display:none;">{"serverDuration": 18, "requestCorrelationId":
"ab72a95d9f4b40179c6ccfe7f323516a"}</span>
