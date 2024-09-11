This tutorial will help you visualize your NetCDF Files in ParaView. If you are unfamiliar with ParaView, check out [Getting Started With ParaView GUI](../getting_started_with_paraview_gui/).

### Opening The Data

Once you have ParaView running. Click the open button and find your data. For this tutorial, I will be using the ParaView example data in **Examples → netCDF**. A window should appear showing you different options for opening your file. For most purposes, the NetCDF Reader will work.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989800/Untitled_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989800/Untitled_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989800/Untitled_0.png 1x" height="400" /></span>

In the properties window, check “Replace Fill Value With Nan” and press apply. You should see something like the image below

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989800/Untitled%201_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989800/Untitled%201_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989800/Untitled%201_0.png 1x" height="400" /></span>

Finally, to visualize the data, select the color drop down from the toolbar (it should say “Solid Color”) and change it to `tos`.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989800/Untitled%202_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989800/Untitled%202_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989800/Untitled%202_0.png 1x" height="250" /></span>

Now, the data should appear on the sphere, allowing you to rotate around it and press play at the top for further visualization.

If instead of the sphere you would prefer a flat view of the data, you can uncheck Spherical Coordinates from the properties menu, press apply, then reselect the new tos from the color drop down.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989800/Untitled%203_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989800/Untitled%203_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989800/Untitled%203_0.png 1x" height="400" /></span>

Finally, for a perfectly flat visualization, click the button above the view that says 3D. This will shift it to a 2D view. Then press the button to the right of the 2D button that says Adjust Camera and click the button with the -Z on it. This should give you a perfectly flat view of your map.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989800/Untitled%204_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989800/Untitled%204_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989800/Untitled%204_0.png 1x" height="400" /></span>

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989800/Untitled%205_0.png " class="confluence-embedded-image" srcset="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989800/Untitled%205_0.png 2x, ../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989800/Untitled%205_0.png 1x" height="400" /></span>

And there you have a visualization of simple netCDF data. Below I will show some useful tips for visualizing more specific types of data.

### Three Dimensional Data

For data that you would like to view in three dimensions rather than the 2D plane or sphere surface, under the properties window, change Dimensions to a property that has three separate values (often latitude, longitude, and another).

Viewing 3D data can be a problem oftentimes on 2D screens. Likely the best ways to view this data is with ParaView's cropping tools (Green boxes on the left of the toolbar) or using the Nvidia IndeX plugin for volumetric rendering.

### Plotting Data

For plotting data from NetCDF files, you can reference [Graphs and Exporting Data](../graphs_and_exporting_data/index.md). Be sure to check the Common Issues section at the bottom of the page as NetCDF files will often have holes or null values in the data.
