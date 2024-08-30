Visualization Consulting
========================

UA HPC offers consulting services in visualization. You can send an
email to <span class="s1">**vislab-consult@list.arizona.edu** for
technical support from Data & Visualization consultant.  
We also offer drop-in hours at the Main Library.
<a href="https://libcal.library.arizona.edu/event/10712342" class="external-link" title="https://libcal.library.arizona.edu/event/10712342">https://libcal.library.arizona.edu/event/10712342</a></span>

<span class="s1">To see a gallery of past projects please visit
<a href="https://rtdatavis.github.io/" class="external-link">https://rtdatavis.github.io/</a>.  
  
</span>

------------------------------------------------------------------------

<span class="s1">Software</span>
================================

<span class="s1">Paraview</span>
--------------------------------

<span class="s1"><span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75990536/ParaView.jpg?version=1&amp;modificationDate=1520981505000&amp;cacheVersion=1&amp;api=v2&amp;width=404&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75990536/ParaView.jpg?version=1&amp;modificationDate=1520981505000&amp;cacheVersion=1&amp;api=v2&amp;width=750&amp;height=464 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75990536/ParaView.jpg?version=1&amp;modificationDate=1520981505000&amp;cacheVersion=1&amp;api=v2&amp;width=404&amp;height=250 1x" height="250" /></span></span>

**Paraview**  is available as a module. You will use those in server
mode where the calculations are done on HPC nodes and the rendering is
back on your workstation. View our material on  [Visualization With
ParaView](/wiki/spaces/UAHPC/pages/75989764/Visualization+With+ParaView)
for more information.

-   [Essential Ideas for
    ParaView](/wiki/spaces/UAHPC/pages/75989804/Essential+Ideas+for+ParaView)
-   [Getting Started With
    ParaView](/wiki/spaces/UAHPC/pages/75989684/Getting+Started+With+ParaView)
-   [ParaView Cameras and
    Keyframes](/wiki/spaces/UAHPC/pages/75989756/ParaView+Cameras+and+Keyframes)
-   [Visualizing NetCDF
    Files](/wiki/spaces/UAHPC/pages/75989800/Visualizing+NetCDF+Files)
-   [Getting Started With The Paraview Terminal
    (PvPython)](/wiki/spaces/UAHPC/pages/75989151)
-   [Graphs and Exporting
    Data](/wiki/spaces/UAHPC/pages/75989398/Graphs+and+Exporting+Data)
-   [Paraview Headless Batch
    Rendering](/wiki/spaces/UAHPC/pages/75989289/Paraview+Headless+Batch+Rendering)
-   [Speeding up Filters & Rendering with Client Server
    configurations](/wiki/spaces/UAHPC/pages/75989606)
-   [Advanced Computational Geometry in Paraview with CGAL &
    Vespa](/wiki/spaces/UAHPC/pages/75989475)
-   [Demystifying Paraview Python Plugins (or at least a little less
    mystery)](/wiki/spaces/UAHPC/pages/75989510)

Blender
-------

<span class="legacy-color-text-blue3">**Blender** is a tremendously
useful open source 3D modeling program. Detailed instructions for
Blender are available in several tutorials.  
</span>

<span class="legacy-color-text-blue3"></span>

-   [Blender Command Line
    Rendering](/wiki/spaces/UAHPC/pages/75990901/Blender+Command+Line+Rendering)
-   [Scaling up Blender
    rendering](/wiki/spaces/UAHPC/pages/75989477/Scaling+up+Blender+rendering)

<span class="legacy-color-text-blue3">Visit</span>
--------------------------------------------------

Step by step instructions for using **VisIt** are on [this
page](/wiki/spaces/UAHPC/pages/75991780/VisIt+Workflows+on+UA+HPC), and
it is also available as a module on our system.

  

------------------------------------------------------------------------

GUIs Through Open OnDemand
==========================

You can utilize the GUI version of an application using a Virtual
Desktop or through one of our interactive applications using [Open
OnDemand](/wiki/spaces/UAHPC/pages/75990636/Open+On+Demand).

When you choose an application from the Interactive Apps dropdown at the
top of the page and enter the resources you need (like cores and wall
time hours) you will have access to a session that will let you use a
compute node interactively through a virtual desktop or
software-specific GUI application.    
 

<span
class="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75990536/session.png?version=1&amp;modificationDate=1627602174000&amp;cacheVersion=1&amp;api=v2&amp;effects=drop-shadow&amp;width=1200&amp;height=510" class="confluence-embedded-image image-center" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75990536/session.png?version=1&amp;modificationDate=1627602174000&amp;cacheVersion=1&amp;api=v2&amp;effects=drop-shadow&amp;width=1280&amp;height=544 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75990536/session.png?version=1&amp;modificationDate=1627602174000&amp;cacheVersion=1&amp;api=v2&amp;effects=drop-shadow&amp;width=1200&amp;height=510 1x" width="1200" /></span>

  

------------------------------------------------------------------------

VPN - Virtual Private Network
=============================

A VPN service (Virtual Private Network) is available for HPC, primarily
for applications that cannot navigate the bastion host for
visualization, and because the performance is frequently better than
tunneling through the Bastion host. This is separate from the UA VPN. We
suggest you first try the Desktop application of OnDemand for GUI
applications as shown for Matlab immediately above.

<a href="https://docs.hpc.arizona.edu/display/UAHPC/VPN+-+Virtual+Private+Network" class="external-link">VPN - Virtual Private Network</a>  
  

------------------------------------------------------------------------

X11 Examples
============

The alternative to using the Open OnDemand desktop is to [use X11
tunneling](https://uarizona.atlassian.net/wiki/display/UAHPC/System+Access#SystemAccess-X11Forwarding),
though it should be noted that in most cases the performance is not as
good. The examples below use X11 forwarding to access the graphical
interfaces for the listed software.

Ansys Workbench
---------------

 In this example, we use the GUI for launching Ansys projects. Note:
Ansys is also available as a GUI application through Open OnDemand. You
can expect it to be much faster using OnDemand

    $ ssh -X netid@hpc.arizona.edu
    $ shell -X
    $ interactive -x -a your_group # starts an interactive session for one hour. The -x option will enable image forwarding
    $ module load cuda11           # Provides the GLX functionality needed by some components like CFD Post
    $ module load ansys
    $ runwb2

  

GLX - Useful for VisIt
----------------------

The functionality of GLX requires synchronization between your
workstation and the compute nodes.  Keep in mind that the login nodes do
not have a graphics so you must request a compute using an interactive
session.  

These steps provide a practical example for using the Visualization
software called VisIt

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75990536/GLX_Spheres.png?version=1&amp;modificationDate=1627426813000&amp;cacheVersion=1&amp;api=v2&amp;width=335&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75990536/GLX_Spheres.png?version=1&amp;modificationDate=1627426813000&amp;cacheVersion=1&amp;api=v2&amp;width=670&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75990536/GLX_Spheres.png?version=1&amp;modificationDate=1627426813000&amp;cacheVersion=1&amp;api=v2&amp;width=335&amp;height=250 1x" height="250" /></span>

    $ ssh -X netid@hpc.arizona.edu
    $ shell -X                      
    $ interactive -a your_group -x  # The -x flag provides the graphics tunneling 
    $ module load cuda11            # Provides support for GLX. A GPU node is not required
    $ glxinfo                       # **See notes below if you get an error during this step
    $ glxspheres64                  # This is a good test of rendering back on the workstation
    $ module load visit
    $ visit

\*\* You might get a "Bad Value" error on the Mac command line. This can
by fixed by entering the following on the command line

    $ defaults write org.macosforge.xquartz.X11 enable_iglx -bool true

On a Linux workstation, you might need to create a file
/etc/X11/xorg/conf with the following section:

    Section "ServerFlags"  

        Option "AllowIndirectGLX" "on"  
        Option "IndirectGLX" "on"  
    EndSection

<span id="confluence-server-performance"
style="display:none;">{"serverDuration": 17, "requestCorrelationId":
"0a7963d46a704cf6895bca5ac6e13934"}</span>
