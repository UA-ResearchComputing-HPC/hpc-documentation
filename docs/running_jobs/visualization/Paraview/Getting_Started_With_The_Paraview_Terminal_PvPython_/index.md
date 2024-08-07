Getting Started With The Paraview Terminal (PvPython)
=====================================================

Welcome to this tutorial on getting started with PvPython, Paraview’s
terminal that holds all the same functionality as Paraview’s GUI
interface, but allows for an interface more familiar to terminal users.
If you haven’t already, check out the Getting Started With Paraview
tutorial
<a href="https://www.notion.so/Getting-Started-With-ParaView-8e1a9bf5f87f454097e28ad0614d8abf" class="external-link">here</a>
for the installation and basic functionality of the software. This
tutorial will follow the same procedure as the GUI tutorial, of course,
except that it uses the terminal. A note on using the terminal: PvPython
is not particularly intuitive and not particularly well documented. If
you're interested in creating scripts I would recommend reading this
entire article (especially **How To Find Python Commands**) before
getting started.

### ParaView Terminal

To get started with PvPython, find the PvPython executable on your
computer. This can be found in the Windows start menu by searching
PvPython.

The first thing you should do after opening the terminal is run

    from paraview.simple import *

This will give you all the base functionality. To access methods outside
the simple package, those need to be imported separately.

### Basic Example

Let's start off by creating a sphere and rendering it from the terminal.

First, you'll want to create a sphere object with the following:

`sphere = Sphere()`

This creates the sphere but we also need to “show” it to make it visible
in the render. Do this by calling

    Show()

Finally, to view the sphere call the command

    Render()

This will bring up a window in which you can see your sphere. Notice
that if you hover over this window it may say “Not Responding.” That is
expected, the window will close when you close PvPython and will update
whenever Render is called in the terminal. If you want, you can call

    Interact()

to be able to interact with the view, including moving the camera,
moving the window, and closing the window.

You may notice the sphere has a pretty low resolution. Let's try making
it rounder by updating its parameters. Spheres have two parameters that
contribute to their resolution: ThetaResolution and PhiResolution.
ThetaResolution is the number of points you have for each horizontal
plane (lines of latitude) and PhiResolution is the number of points in
each vertical slice (lines of longitude). Let's try increasing both of
these to get a better sphere.

    sphere.ThetaResolution = 20
    sphere.PhiResolution = 20
    Render()  # Changes wont update untill Render() is called

There you go! The sphere should get a bit smoother. Feel free to mess
around with different parameters and Render() them to see the result. A
list of parameters can be seen by calling dir(sphere).

### How To Find Python Commands

While some PvPython commands are intuitive or well documented, there are
many commands that are difficult if not impossible to find information
about. If this is the case and you're trying to find a way to do
something you know you can do in the GUI version, you can use the
following steps.

In GUI ParaView, click Tools → Start Trace from the toolbar. Click OK on
the popup. Next, do whatever action you would like the PvPython command
for. Once you're done, click Tools → End Trace and a window should pop
up giving you the python commands for all the actions you did while the
trace was running. This is also a useful way to build scripts without
the need for a lot of coding. It is important to note however that the
trace generates a lot of redundant or unnecessary code. If you want your
program running as fast as possible, it's best to go through and only
keep what you need.

### Running PvPython or a PvPython script within ParaView GUI

To do this, all you need to do is click View → Python Shell from the
toolbar. This will open a PvPython shell the same as the one in the
terminal. At the bottom of this window, there is a button labeled Run
Script. Clicking this will allow you to select a PvPython script to run
within ParaView.

<span id="confluence-server-performance"
style="display:none;">{"serverDuration": 24, "requestCorrelationId":
"36d429f08bf44275b9a29ac82f4eb0fe"}</span>
