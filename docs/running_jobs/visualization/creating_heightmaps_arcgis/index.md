This documentation is provided courtesy of Glenn Ingram, Graduate
Assistant of
<a href="https://new.library.arizona.edu/people/kiri-carini" class="external-link">Kiri Carini</a>
in the
<a href="https://data.library.arizona.edu/" class="external-link">Main Library Data Cooperative</a>.
His personal information can be found at  

-   <a href="https://data.library.arizona.edu/geo/about-geospatial-team" class="external-link">https://data.library.arizona.edu/geo/about-geospatial-team</a>
-   <a href="https://glenningram.github.io/" class="external-link">https://glenningram.github.io/</a>

**LiDAR Raster for Blender 3D**

This tutorial illustrates how to use ArcGIS Pro to prepare a raster
suitable for Blender 3D out of .laz Lidar Data. This is also an
illustration of the first step for a workflow that will utilize [Blender
Command Line
Rendering](/wiki/spaces/UAHPC/pages/75990901/Blender+Command+Line+Rendering).  

ArcGIS Pro is utilized because all the steps can be completed in a
single software - if you do not have access to ArcGIS Pro, a similar
process can be achieved using LASTools and QGIS.

**Step One: Finding Data:**

The University of Arizona provides a .laz Lidar Dataset for Arizona. To
start:

1.  Find the corresponding tiles to your area of interest on the
    <a href="https://uagis.maps.arcgis.com/apps/instant/minimalist/index.html?appid=309f5e58136b4116887f29e3475b64b6" class="external-link"><span>Index Map</span></a>.
2.  Select as many tiles as needed, but make sure to use a square or
    rectangular grid of tiles.
3.  Record the tile labels.

<span
class="confluence-embedded-file-wrapper"><img src="https://uarizona.atlassian.net/wiki/download/attachments/75990163/image2022-4-26_8-51-7.png?version=1&amp;modificationDate=1650988268000&amp;cacheVersion=1&amp;api=v2" class="confluence-embedded-image" /></span>

  
  
  

Using the tiles labels, find the LAZ Files in
<a href="https://data.cyverse.org/dav-anon/iplant/projects/azgs/GIS_Data_NP112_NP212/" class="external-link"><span>CyVerse here</span></a>
(Make sure you download the .laz file format)

**Step Two: Convert LAZ**

Unlike LAS (.las) files, LAZ (.laz) files cannot be opened or added
directly to ArcGIS Pro to display point cloud data on a map. However, it
is possible to convert the LAZ files to LAS datasets to show on the
map. 

Open ArcGIS Pro. Under geoprocessing, use the *Convert LAS* tool to
convert each .laz file to a .las. Fill in the tool parameters as
required and complete this step for each .laz file.

For additional information or help, refer
to<a href="http://pro.arcgis.com/en/pro-app/tool-reference/conversion/convert-las.htm" class="external-link"><span> Convert LAS</span></a>.

  
<span
class="confluence-embedded-file-wrapper"><img src="https://uarizona.atlassian.net/wiki/download/attachments/75990163/image2022-4-26_8-51-21.png?version=1&amp;modificationDate=1650988282000&amp;cacheVersion=1&amp;api=v2" class="confluence-embedded-image" /></span>  
  

**Step Three: Create LAS Dataset**

Once files are converted to .las, we can build a dataset. Use the
*Create LAS Dataset* tool found in geoprocessing. Refer to
<a href="https://pro.arcgis.com/en/pro-app/2.8/help/data/las-dataset/create-a-las-datasets.htm" class="external-link"><span>Create LAS Dataset</span></a>
for more information.

  
<span
class="confluence-embedded-file-wrapper"><img src="https://uarizona.atlassian.net/wiki/download/attachments/75990163/image2022-4-26_8-51-47.png?version=1&amp;modificationDate=1650988307000&amp;cacheVersion=1&amp;api=v2" class="confluence-embedded-image" /></span>  
  

**Step Four: Dataset to Raster**

The dataset can be converted to a raster once all .las files are
collected in the dataset. Use the *LAS Dataset to Raster *tool. More
information
<a href="https://pro.arcgis.com/en/pro-app/2.7/help/analysis/raster-functions/las-dataset-to-raster-function.htm" class="external-link"><span>here</span></a>.

<span
class="confluence-embedded-file-wrapper"><img src="https://uarizona.atlassian.net/wiki/download/attachments/75990163/image2022-4-26_8-51-58.png?version=1&amp;modificationDate=1650988319000&amp;cacheVersion=1&amp;api=v2" class="confluence-embedded-image" /></span>

**Step Five: Project Raster**

Once the raster goes into Blender, it will lose any coordinate data and
any projection occurring in ArcGIS. Reprojecting the raster will ensure
that the relief produced in Blender aligns with any other vectors or
imagery being used in the project.

Determine which projection is best for your project and reproject the
new raster. The rest of the project will have to remain in this
projection to stay aligned.

  

  

<span
class="confluence-embedded-file-wrapper"><img src="https://uarizona.atlassian.net/wiki/download/attachments/75990163/image2022-4-26_8-52-27.png?version=1&amp;modificationDate=1650988347000&amp;cacheVersion=1&amp;api=v2" class="confluence-embedded-image" /></span>

**Step Six: Raster Calculator**

Your raster likely included decimal values, which Blender will not
process well. Use the *Raster Calculator* and the “Int” function to
change raster values to whole numbers.

While using the *Raster Calculator*, we need to rescale the raster for
use in Blender. A raster pixel can hold a value between 0 and 65,535; we
will have to use the maximum value to create the highest quality render
in Blender. The *Raster Calculator* can be used to rescale the raster.

The equation we will be using is 

*(Pixel Value – Lowest Value) ÷ (Highest Value – Lowest Value) \*
65,535*

In the *Raster Calculator*, this will look like

(“raster” – Lowest Value) / (Highest Value – Lowest Value) \* 65535

<span
class="confluence-embedded-file-wrapper"><img src="https://uarizona.atlassian.net/wiki/download/attachments/75990163/image2022-4-26_8-54-33.png?version=1&amp;modificationDate=1650988474000&amp;cacheVersion=1&amp;api=v2" class="confluence-embedded-image" /></span>

**Step Six: Copy Raster**

With our raster rescaled, it is time to export. We will use the *Copy
Raster* tool. Set the Pixel Type to “16 bit unsigned” and Format to
“Tiff.” and output to a location on your computer.

<span
class="confluence-embedded-file-wrapper"><img src="https://uarizona.atlassian.net/wiki/download/attachments/75990163/image2022-4-26_8-54-8.png?version=1&amp;modificationDate=1650988448000&amp;cacheVersion=1&amp;api=v2" class="confluence-embedded-image" /></span>

<span
class="confluence-embedded-file-wrapper"><img src="https://uarizona.atlassian.net/wiki/download/attachments/75990163/image2022-4-26_8-53-51.png?version=1&amp;modificationDate=1650988432000&amp;cacheVersion=1&amp;api=v2" class="confluence-embedded-image" /></span>

**Bonus Step: Open in Photoshop**

Opening the raster and resaving as a tiff is an easy step that “cleans”
the file and reduces the file size without losing quality if you have
access to Photoshop. You can also use photoshop to view your rasters
pixel size - a needed input for Blender.

<span
class="confluence-embedded-file-wrapper"><img src="https://uarizona.atlassian.net/wiki/download/attachments/75990163/image2022-4-26_8-54-53.png?version=1&amp;modificationDate=1650988494000&amp;cacheVersion=1&amp;api=v2" class="confluence-embedded-image" /></span>

**Final Step: Blender**

Cartographer Daniel Huffman has an extensive and
<a href="https://somethingaboutmaps.wordpress.com/2017/11/16/creating-shaded-relief-in-blender/" class="external-link"><span>detailed tutorial walk-through</span></a>
for setting up Blender for creating shaded reliefs. Use these steps for
creating your Blender file. When the Blender settings are complete, save
the file as a package, and you are ready to use the HPC!

Remember, your raster has already been prepared for Blender in ArcGIS
Pro, so some early steps in the tutorial will be redundant. 

Good luck!

  
  

<span id="confluence-server-performance"
style="display:none;">{"serverDuration": 20, "requestCorrelationId":
"531c1ee744e546d58d1dc765a3d589c4"}</span>
