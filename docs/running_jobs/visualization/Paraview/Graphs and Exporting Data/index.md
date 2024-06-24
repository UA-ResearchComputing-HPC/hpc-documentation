While visualizations in the terminal are ParaView's strength, it also
includes tools to plot data for different types of visualizations.

### Creating Graphs In Paraview

For this, I’m going to use the same example as the
<a href="https://public.confluence.arizona.edu/display/UAHPC/Getting+Started+With+ParaView" class="external-link">introductory tutorial</a>.
The first thing you want to do is select the
<a href="https://www.notion.so/Essential-Ideas-for-ParaView-927301d28f124d5db7a0260d48ec4f5d" class="external-link">source</a>
you want to work with. Next, from the toolbar select Filters → Data
Analysis then select whichever plot works best for you. For this
example, I’m going to select Plot Data Over Time. For some options, a
warning will pop up stating that it could take a long time to plot the
data. This is certainly the case for large data sets but if you're using
the example, it should take only a second. Click apply in the properties
tab and an indicator in the bottom right should appear as your data gets
processed.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75989398/image2022-9-8_9-52-13.png?version=1&amp;modificationDate=1662655934000&amp;cacheVersion=1&amp;api=v2&amp;width=455&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75989398/image2022-9-8_9-52-13.png?version=1&amp;modificationDate=1662655934000&amp;cacheVersion=1&amp;api=v2&amp;width=910&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75989398/image2022-9-8_9-52-13.png?version=1&amp;modificationDate=1662655934000&amp;cacheVersion=1&amp;api=v2&amp;width=455&amp;height=250 1x" height="250" /></span>

Once your data is fully processed, a graph should appear, splitting the
viewport in two. Keep in mind that what is visible is view specific so
selecting the 3D viewport will cause an eye to appear next to the base
source in the pipeline (indicating that it is what's being shown in this
view), and likewise selecting the graph view will remove the eye on the
source and put it on the new graph filter.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75989398/image2022-9-8_9-53-31.png?version=1&amp;modificationDate=1662656033000&amp;cacheVersion=1&amp;api=v2&amp;width=455&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75989398/image2022-9-8_9-53-31.png?version=1&amp;modificationDate=1662656033000&amp;cacheVersion=1&amp;api=v2&amp;width=910&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75989398/image2022-9-8_9-53-31.png?version=1&amp;modificationDate=1662656033000&amp;cacheVersion=1&amp;api=v2&amp;width=455&amp;height=250 1x" height="250" /></span><span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75989398/image2022-9-8_9-53-58.png?version=1&amp;modificationDate=1662656039000&amp;cacheVersion=1&amp;api=v2&amp;width=455&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75989398/image2022-9-8_9-53-58.png?version=1&amp;modificationDate=1662656039000&amp;cacheVersion=1&amp;api=v2&amp;width=910&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75989398/image2022-9-8_9-53-58.png?version=1&amp;modificationDate=1662656039000&amp;cacheVersion=1&amp;api=v2&amp;width=455&amp;height=250 1x" height="250" /></span>

To demonstrate, compare the two images above. In the first, I clicked on
the viewport giving it a blue border to indicate it's selected and also
placing the eye icon on can.ex2 in the pipeline (because it's what's
being shown in the viewport). Then in the second image, once I click on
the graph, the blue border changes and the eye icon moves to
PlotDataOverTime1.

From this point, you can use the properties menu to modify the values of
the graph as you see fit, making sure to have the graph selected in the
Pipeline Browser. After changes are made, many will require you to press
Apply at the top of the properties menu for them to take effect.

### Exporting Data To A Spreadsheet

While ParaView does have many data management tools and graphs, it's
certainly not as many as other data analysis software. To use the data
in other programs, you'll need to export it to a format of your choice,
probably the most simple of which is a CSV (a standard format for
spreadsheets).

Select your source whose data you'd like to export, then, from the
toolbar, go to Extractors → Data → CSV. Make the desired changes in the
properties tab, press Apply, then go to File → Save Extracts. At this
point select where you would like to save the data and it should
generate CSVs in the specified folder.

  

### Common Issues

If your data has outliers or null values, many plotting functions have
difficulties correctly reading the data. If this is the case, apply a
Threshold filter (Filters → Common → Threshold), scale the data to
whatever range you want, then apply the graph to the new threshold
filter. Note that you'll have to remove the old graph, add the
threshold, then re-add the graph to the threshold.

For example (before and after adding Threshold):

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75989398/image2022-9-8_10-1-24.png?version=1&amp;modificationDate=1662656485000&amp;cacheVersion=1&amp;api=v2&amp;width=455&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75989398/image2022-9-8_10-1-24.png?version=1&amp;modificationDate=1662656485000&amp;cacheVersion=1&amp;api=v2&amp;width=910&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75989398/image2022-9-8_10-1-24.png?version=1&amp;modificationDate=1662656485000&amp;cacheVersion=1&amp;api=v2&amp;width=455&amp;height=250 1x" height="250" /></span><span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75989398/image2022-9-8_10-2-21.png?version=1&amp;modificationDate=1662656542000&amp;cacheVersion=1&amp;api=v2&amp;width=455&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75989398/image2022-9-8_10-2-21.png?version=1&amp;modificationDate=1662656542000&amp;cacheVersion=1&amp;api=v2&amp;width=910&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75989398/image2022-9-8_10-2-21.png?version=1&amp;modificationDate=1662656542000&amp;cacheVersion=1&amp;api=v2&amp;width=455&amp;height=250 1x" height="250" /></span>

<span id="confluence-server-performance"
style="display:none;">{"serverDuration": 17, "requestCorrelationId":
"67ff7a936cfe4a31b5acaa7c171a21e5"}</span>
