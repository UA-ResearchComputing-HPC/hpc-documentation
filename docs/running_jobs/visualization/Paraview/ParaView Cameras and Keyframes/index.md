When working with ParaView, it can be helpful to generate images or
videos to show to others. Fortunately, ParaView has many built-in
features that allow you to do just that.

### Basic Image Capture

The simplest way to capture an image from ParaView is to click the
camera icon to the left just above the 3D view (the one with four
corners around it). Clicking it will open a window asking where you
would like to save the image just as you would any file. Holding Ctrl,
Shift, or Alt will take the photo and copy it to your clipboard to paste
it somewhere rather than saving it to your files. The photo will always
be whatever you currently see in your viewport. To change your view you
can use the left, middle, and right mouse buttons to move around or
click the camera with the pencil on it located above the viewport to
enter numeric values.

### Animation Capture

Rather than repeatedly clicking the save image button, ParaView offers
ways of storing animations of your data.

The simplest way to do this is using extractors. To get a better
understanding of how extractors work, check out
<a href="https://www.notion.so/Essential-Ideas-for-ParaView-927301d28f124d5db7a0260d48ec4f5d" class="external-link">this page</a>
for more information.

From the toolbar, select Extractors → Image then select PNG or JPG
depending on your preference. PNG is generally higher quality with a
bigger file size while JPG is lower quality with a smaller file size.

After this, you're all set to save your images. Position your camera
wherever you'd like then do File → Save Extracts. This will ask you to
select a folder to save them to, then save the files to that folder. By
default, it will save every frame of your scene as an image. You can
control this and other properties in the Properties tab of the
extractor.

### Animation With A Moving Camera

If you would like the camera to move through your animation, this can be
occasionally tedious but nonetheless doable. You’ll first need to open
the animation view from View → Animation View, click the dropdown next
to the blue plus sign in the animation view, select Camera, select the
movement option that works best for you, then press the blue plus. I've
outlined the different movement options below:

**Orbit**

Orbit allows you to define a circle that the camera will follow over the
animation. The three parameters are as follows. Center: A vector
representing the point the circle surrounds (and where the camera looks
at). Normal: A vector that will be perpendicular to the circle (aka the
axis that you want to rotate around). Origin: A vector indicating the
starting point of the camera.

**Follow Path**

Follow Path will create an orbit around the selected object's starting
position. This is a simpler way of creating an orbit but it does not
provide as many options.

**Follow Data**

Follow Data has the camera track the movement of the selected object.
The camera's starting position will be wherever it is when this is added
to the animation view. The tracking is done by following the average
position of all the points and thus isn't affected by uniform scaling or
rotation.

**Interpolate Camera Path (Spline/Linear)**

This option is the most versatile but also most difficult to use option.
It allows you to create a custom path for your camera based on where it
should be at certain times. After adding this to the animation view,
double-click the new Camera animation target. This will bring up a page
where you can add all the points of your path. As a workflow for this, I
recommend moving to the frame and position you want to capture, adding a
keyframe in the editor, changing its time value to the current frame,
double click on the position, and selecting Use Current. This is still
tedious, just slightly less so that individually filling in values. The
difference between spline and linear has to do with where the camera is
between keyframes. If you choose linear, it will transition with
straight lines between the points. If you choose spline, it will give a
more flowing path.

  

### **Capturing Graphs and Other Visualizations**

The process for capturing graphs and other types of visualizations is
very similar to the process for the viewport. For a single frame, a
camera icon is shown in the top left of the graph view. For an
animation, add a PNG/JPG extractor as you would with the viewport but
make sure that the plot is selected rather than the viewport (click on
it, a blue border should appear). To see what image capture is capturing
what, click between your viewport and graph(s). If the blue eye icon
appears to the left of the capture device in the pipeline browser, it is
capturing the selected view. Once everything is set up, go to File →
Save Extracts as before.

If you'd like to give this a try, you can use the can2 example
from [Getting Started With
ParaView](/wiki/spaces/UAHPC/pages/75989684/Getting+Started+With+ParaView)
to try to create this video:

<span class="confluence-embedded-file-wrapper conf-macro output-inline"
data-hasbody="false"
data-macro-id="3a188bb6-4845-4852-b4fd-687515c27af3"
data-macro-name="view-file"><a href="/wiki/download/attachments/75989756/RenderView1_000000.mp4?version=1&amp;modificationDate=1661978383000&amp;cacheVersion=1&amp;api=v2" class="confluence-embedded-file"><embed src="https://uarizona.atlassian.net/wiki/download/thumbnails/75989756/RenderView1_000000.mp4?version=1&amp;modificationDate=1661978383000&amp;cacheVersion=1&amp;api=v2&amp;viewType=fileMacro" height="250" /></a></span>

The data in the histogram is the magnitude of the displacement vectors
(displ)

Note that as ParaView exports individual images per frame, the use of
other image processing software such as Adobe Premiere is needed to make
a video.

<span id="confluence-server-performance"
style="display:none;">{"serverDuration": 18, "requestCorrelationId":
"88acd6ef20f84d1c8ee07134a26132e0"}</span>
