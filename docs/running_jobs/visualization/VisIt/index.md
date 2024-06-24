Goal
====

By the end of this document you will know how to start up VisIt client
server work sessions with [Open On
Demand](/wiki/spaces/UAHPC/pages/75990636/Open+On+Demand) or between
your local machine and the compute nodes of the HPC in client server
configuration.

Using OOD
=========

This method makes use of a remote desktop that the user can start up on
the HPC. This benefits from putting the user in a familiar graphical
environment so things like starting visit are the same here as on their
local workstation.  Open a browser and go to ood.hpc.arizona.edu

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-4_11-12-51.png?version=1&amp;modificationDate=1646417572000&amp;cacheVersion=1&amp;api=v2&amp;width=406&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-4_11-12-51.png?version=1&amp;modificationDate=1646417572000&amp;cacheVersion=1&amp;api=v2&amp;width=812&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-4_11-12-51.png?version=1&amp;modificationDate=1646417572000&amp;cacheVersion=1&amp;api=v2&amp;width=406&amp;height=250 1x" height="250" /></span>

When prompted fill out the authentication

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-4_11-13-15.png?version=1&amp;modificationDate=1646417596000&amp;cacheVersion=1&amp;api=v2&amp;width=406&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-4_11-13-15.png?version=1&amp;modificationDate=1646417596000&amp;cacheVersion=1&amp;api=v2&amp;width=812&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-4_11-13-15.png?version=1&amp;modificationDate=1646417596000&amp;cacheVersion=1&amp;api=v2&amp;width=406&amp;height=250 1x" height="250" /></span>

Now select `Interactive Desktop`  from the `Interactive Apps` 

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-4_11-13-56.png?version=1&amp;modificationDate=1646417637000&amp;cacheVersion=1&amp;api=v2&amp;width=525&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-4_11-13-56.png?version=1&amp;modificationDate=1646417637000&amp;cacheVersion=1&amp;api=v2&amp;width=912&amp;height=434 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-4_11-13-56.png?version=1&amp;modificationDate=1646417637000&amp;cacheVersion=1&amp;api=v2&amp;width=525&amp;height=250 1x" height="250" /></span>

Here you can see the values that were set to run a 1 hour visit session
on Ocelote with a gpu. It should be noted that this workflow can also be
performed with cpu only allocations too. You will need to fill out your
PI where the highlighter is over `visteam` .

  

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-4_11-19-2.png?version=1&amp;modificationDate=1646417945000&amp;cacheVersion=1&amp;api=v2&amp;width=324&amp;height=400" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-4_11-19-2.png?version=1&amp;modificationDate=1646417945000&amp;cacheVersion=1&amp;api=v2&amp;width=648&amp;height=800 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-4_11-19-2.png?version=1&amp;modificationDate=1646417945000&amp;cacheVersion=1&amp;api=v2&amp;width=324&amp;height=400 1x" height="400" /></span>

Once you have hit `Launch`  and your allocation is granted you will see
this on the page. Now you will click on the `Launch Interactive Desktop`
button.

  

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-4_11-31-12.png?version=1&amp;modificationDate=1646418673000&amp;cacheVersion=1&amp;api=v2&amp;width=572&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-4_11-31-12.png?version=1&amp;modificationDate=1646418673000&amp;cacheVersion=1&amp;api=v2&amp;width=1007&amp;height=440 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-4_11-31-12.png?version=1&amp;modificationDate=1646418673000&amp;cacheVersion=1&amp;api=v2&amp;width=572&amp;height=250 1x" height="250" /></span>

A new tab will be created that shows a remote desktop in the window.
Here you will right click on the background and
select `Open In Terminal` .

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-46-59.png?version=1&amp;modificationDate=1646675221000&amp;cacheVersion=1&amp;api=v2&amp;width=311&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-46-59.png?version=1&amp;modificationDate=1646675221000&amp;cacheVersion=1&amp;api=v2&amp;width=622&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-46-59.png?version=1&amp;modificationDate=1646675221000&amp;cacheVersion=1&amp;api=v2&amp;width=311&amp;height=250 1x" height="250" /></span>

Then you will need to change directory to wherever Visit 3.2.1 was
installed. If you haven't done this then follow this script to install
it in the directory you are in

Download the redhat EL7 w/ Mesa option by running these commands
replacing the `<PIname>`  with your PI's name

    mkdir visit_setup
    cd visit_setup
    wget "https://github.com/visit-dav/visit/releases/download/v3.2.1/visit3_2_1.linux-x86_64-rhel7-wmesa.tar.gz"
    tar xf visit3_2_1.linux-x86_64-rhel7-wmesa.tar.gz
    cd visit3_2_1.linux-x86_64

Once you are located in the `visit3_2_1.linux-x86_64`  folder navigate
to the `bin`  folder and run `./visit -debug 5` 

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-47-41.png?version=1&amp;modificationDate=1646675263000&amp;cacheVersion=1&amp;api=v2&amp;width=553&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-47-41.png?version=1&amp;modificationDate=1646675263000&amp;cacheVersion=1&amp;api=v2&amp;width=1106&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-47-41.png?version=1&amp;modificationDate=1646675263000&amp;cacheVersion=1&amp;api=v2&amp;width=553&amp;height=250 1x" height="250" /></span>

You will now see Visit starting in the remote desktop. Use the Open
button to bring up a data set you want to visualize and export a movie
from. Here the aneurysm dataset is selected, if you'd like to use it you
may download it here
<a href="https://visit-dav.github.io/largedata/datarchives/aneurysm" class="external-link">https://visit-dav.github.io/largedata/datarchives/aneurysm</a>.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-48-32.png?version=1&amp;modificationDate=1646675315000&amp;cacheVersion=1&amp;api=v2&amp;width=561&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-48-32.png?version=1&amp;modificationDate=1646675315000&amp;cacheVersion=1&amp;api=v2&amp;width=1122&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-48-32.png?version=1&amp;modificationDate=1646675315000&amp;cacheVersion=1&amp;api=v2&amp;width=561&amp;height=250 1x" height="250" /></span>

Then choose to add a simple plot.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-49-55.png?version=1&amp;modificationDate=1646675396000&amp;cacheVersion=1&amp;api=v2&amp;width=218&amp;height=250" class="confluence-embedded-image confluence-thumbnail" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-49-55.png?version=1&amp;modificationDate=1646675396000&amp;cacheVersion=1&amp;api=v2&amp;width=436&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-49-55.png?version=1&amp;modificationDate=1646675396000&amp;cacheVersion=1&amp;api=v2&amp;width=218&amp;height=250 1x" height="250" /></span>

For this data one of the interesting parts is the velocity field and how
it changes over time.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-50-17.png?version=1&amp;modificationDate=1646675419000&amp;cacheVersion=1&amp;api=v2&amp;width=425&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-50-17.png?version=1&amp;modificationDate=1646675419000&amp;cacheVersion=1&amp;api=v2&amp;width=504&amp;height=296 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-50-17.png?version=1&amp;modificationDate=1646675419000&amp;cacheVersion=1&amp;api=v2&amp;width=425&amp;height=250 1x" height="250" /></span>

Once you have selected the velocity field make sure to draw it to the
adjacent Visit window.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-50-34.png?version=1&amp;modificationDate=1646675435000&amp;cacheVersion=1&amp;api=v2&amp;width=386&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-50-34.png?version=1&amp;modificationDate=1646675435000&amp;cacheVersion=1&amp;api=v2&amp;width=549&amp;height=355 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-50-34.png?version=1&amp;modificationDate=1646675435000&amp;cacheVersion=1&amp;api=v2&amp;width=386&amp;height=250 1x" height="250" /></span>

Now that we have the first frame drawn in the viewing window, let's
render all the frames of the simulation out as a movie. Select `File` 
to show the drop down menu of options.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-51-2.png?version=1&amp;modificationDate=1646675465000&amp;cacheVersion=1&amp;api=v2&amp;width=264&amp;height=250" class="confluence-embedded-image confluence-thumbnail" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-51-2.png?version=1&amp;modificationDate=1646675465000&amp;cacheVersion=1&amp;api=v2&amp;width=528&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-51-2.png?version=1&amp;modificationDate=1646675465000&amp;cacheVersion=1&amp;api=v2&amp;width=264&amp;height=250 1x" height="250" /></span>

From the options select `Save Movie` which will open a wizard window to
step you through the export configuration.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-51-14.png?version=1&amp;modificationDate=1646675476000&amp;cacheVersion=1&amp;api=v2&amp;width=252&amp;height=250" class="confluence-embedded-image confluence-thumbnail" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-51-14.png?version=1&amp;modificationDate=1646675476000&amp;cacheVersion=1&amp;api=v2&amp;width=504&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-51-14.png?version=1&amp;modificationDate=1646675476000&amp;cacheVersion=1&amp;api=v2&amp;width=252&amp;height=250 1x" height="250" /></span>

Select next with the default option to create a `New simple movie` 

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-51-25.png?version=1&amp;modificationDate=1646675486000&amp;cacheVersion=1&amp;api=v2&amp;width=335&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-51-25.png?version=1&amp;modificationDate=1646675486000&amp;cacheVersion=1&amp;api=v2&amp;width=661&amp;height=492 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-51-25.png?version=1&amp;modificationDate=1646675486000&amp;cacheVersion=1&amp;api=v2&amp;width=335&amp;height=250 1x" height="250" /></span>

In the next window select the format drop down and select one of the
options. A benefit to exporting individual frames as still images is it
provides greater flexibility over quality options for the conversion to
video which is outlined later. Here `PNG`  will be used

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-51-49.png?version=1&amp;modificationDate=1646675511000&amp;cacheVersion=1&amp;api=v2&amp;width=291&amp;height=250" class="confluence-embedded-image confluence-thumbnail" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-51-49.png?version=1&amp;modificationDate=1646675511000&amp;cacheVersion=1&amp;api=v2&amp;width=582&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-51-49.png?version=1&amp;modificationDate=1646675511000&amp;cacheVersion=1&amp;api=v2&amp;width=291&amp;height=250 1x" height="250" /></span>

Click the `->` arrow to queue this format to the export options. It is
possible to make several outputs from a single export pass by clicking
the `->` arrow multiple times for a range of formats/options.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-52-10.png?version=1&amp;modificationDate=1646675532000&amp;cacheVersion=1&amp;api=v2&amp;width=288&amp;height=250" class="confluence-embedded-image confluence-thumbnail" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-52-10.png?version=1&amp;modificationDate=1646675532000&amp;cacheVersion=1&amp;api=v2&amp;width=576&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-52-10.png?version=1&amp;modificationDate=1646675532000&amp;cacheVersion=1&amp;api=v2&amp;width=288&amp;height=250 1x" height="250" /></span>

Clicking next shows a window with parameters about the video to be made.
These options are default set to create a frame for each time step in
the video, but if a particular range is of interest you may set the
`First Frame`  and `Last Frame`  to customize.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-52-32.png?version=1&amp;modificationDate=1646675553000&amp;cacheVersion=1&amp;api=v2&amp;width=287&amp;height=250" class="confluence-embedded-image confluence-thumbnail" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-52-32.png?version=1&amp;modificationDate=1646675553000&amp;cacheVersion=1&amp;api=v2&amp;width=574&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-52-32.png?version=1&amp;modificationDate=1646675553000&amp;cacheVersion=1&amp;api=v2&amp;width=287&amp;height=250 1x" height="250" /></span>

Finally we will specify where the outputs are supposed to go. Use the
drop down button at the far right to open a file browser window to aid
you in finding the optimal destination if it isn't the default one
shown. You may change the `Base Name`  to specify an alternate prefix
for each rendered frame which is followed by a frame number padded with
4 0's.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-52-56.png?version=1&amp;modificationDate=1646675578000&amp;cacheVersion=1&amp;api=v2&amp;width=293&amp;height=250" class="confluence-embedded-image confluence-thumbnail" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-52-56.png?version=1&amp;modificationDate=1646675578000&amp;cacheVersion=1&amp;api=v2&amp;width=586&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-52-56.png?version=1&amp;modificationDate=1646675578000&amp;cacheVersion=1&amp;api=v2&amp;width=293&amp;height=250 1x" height="250" /></span>

Since we have already configured a visit instance with out data and plot
we will `use the currently allocated processors` . More advanced
workflows may require the other options but they are not documented here
as of yet.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-53-42.png?version=1&amp;modificationDate=1646675623000&amp;cacheVersion=1&amp;api=v2&amp;width=285&amp;height=250" class="confluence-embedded-image confluence-thumbnail" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-53-42.png?version=1&amp;modificationDate=1646675623000&amp;cacheVersion=1&amp;api=v2&amp;width=570&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-53-42.png?version=1&amp;modificationDate=1646675623000&amp;cacheVersion=1&amp;api=v2&amp;width=285&amp;height=250 1x" height="250" /></span>

Once you select finish a new window opens which shows the terminal
output of the process, as well as a progress bar window that helps you
see how the export is unfolding.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-54-2.png?version=1&amp;modificationDate=1646675647000&amp;cacheVersion=1&amp;api=v2&amp;width=413&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-54-2.png?version=1&amp;modificationDate=1646675647000&amp;cacheVersion=1&amp;api=v2&amp;width=826&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-54-2.png?version=1&amp;modificationDate=1646675647000&amp;cacheVersion=1&amp;api=v2&amp;width=413&amp;height=250 1x" height="250" /></span>

Once this finishes you may return to the terminal, and navigate to the
folder where the individual frames were output. Use the `ls`  command to
make sure you are in the correct location.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-55-33.png?version=1&amp;modificationDate=1646675734000&amp;cacheVersion=1&amp;api=v2&amp;width=422&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-55-33.png?version=1&amp;modificationDate=1646675734000&amp;cacheVersion=1&amp;api=v2&amp;width=844&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-55-33.png?version=1&amp;modificationDate=1646675734000&amp;cacheVersion=1&amp;api=v2&amp;width=422&amp;height=250 1x" height="250" /></span>

You must also load in a few modules in order to process the images into
a video from the command line.

    module load gnu8
    module load ffmpeg

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-56-43.png?version=1&amp;modificationDate=1646675807000&amp;cacheVersion=1&amp;api=v2&amp;width=432&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-56-43.png?version=1&amp;modificationDate=1646675807000&amp;cacheVersion=1&amp;api=v2&amp;width=864&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-56-43.png?version=1&amp;modificationDate=1646675807000&amp;cacheVersion=1&amp;api=v2&amp;width=432&amp;height=250 1x" height="250" /></span>

This is the final step. You will run ffmpeg to concatenate all the
images together into a video whose format you may specify. To let ffmpeg
know we are using all the images that match a pattern that starts with
the word movie, then has 4 digits, then file type mp4 we use this string
`movie%04d.png` . The `-r` specifies the rate in fps. The `-f`  notifies
ffmpeg that we are using the `image2`  filter to convert an
image-&gt;something else.

    ffmpeg -f image2 -i movie%04d.png -r 10 output.mp4

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-57-25.png?version=1&amp;modificationDate=1646675846000&amp;cacheVersion=1&amp;api=v2&amp;width=1199&amp;height=191" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-57-25.png?version=1&amp;modificationDate=1646675846000&amp;cacheVersion=1&amp;api=v2&amp;width=1199&amp;height=191 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-7_10-57-25.png?version=1&amp;modificationDate=1646675846000&amp;cacheVersion=1&amp;api=v2&amp;width=1199&amp;height=191 1x" height="191" /></span>

All done!

  

Client/Server Configuration
===========================

This setup differs from OOD in that there is no remote rendering of the
visit window contents, and allows for rapid response from interaction
with the menus because the client runs natively on the local machine.
The trade off is that certain capabilities are c\`c

Pre-requisite Installations
---------------------------

VPN system like Cisco Anyconnect

Steps on the HPC
----------------

### Setting up ssh keys for passwordless authentication to the HPC.

The documentation for this step exists on confluence at this link
[System
Access\#SSHKeys](/wiki/spaces/UAHPC/pages/75990560/System+Access#SystemAccess-SSHKeys)
but you must complete these steps for `shell.hpc.arizona.edu`  not the
bastion `hpc.arizona.edu`  host. Note that performing a
`ssh <netid>@shell.hpc.arizona.edu`  and replacing the `<netid>`  with
your netid is only possible when we are on the hpc vpn.

### Installing the VisIt server

Download the redhat EL7 w/ Mesa option by running these commands
replacing the `<PIname>`  with your PI's name

    cd /groups/<PIname>
    mkdir visit_setup
    cd visit_setup
    wget "https://github.com/visit-dav/visit/releases/download/v3.1.4/visit3_1_4.linux-x86_64-rhel7-wmesa.tar.gz"
    tar xf visit3_1_4.linux-x86_64-rhel7-wmesa.tar.gz
    cd visit3_1_4.linux-x86_64

  

### Copying the launcher script into server folder

The contents of the visit installation are laid out as follows.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_17-0-23.png?version=1&amp;modificationDate=1646179224000&amp;cacheVersion=1&amp;api=v2&amp;width=381&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_17-0-23.png?version=1&amp;modificationDate=1646179224000&amp;cacheVersion=1&amp;api=v2&amp;width=739&amp;height=484 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_17-0-23.png?version=1&amp;modificationDate=1646179224000&amp;cacheVersion=1&amp;api=v2&amp;width=381&amp;height=250 1x" height="250" /></span>

Navigate to the bin folder within 3.1.4  and copy in the customlauncher
code

  

    cd 3.1.4/bin
    wget "https://gist.githubusercontent.com/DevinBayly/310c8689c6221fd379aad34243441dda/raw/a8f5071bb8b1e96127e1ea01b2e8667940849f1a/customlauncher" -O customlauncher

If you'd like to inspect the code a copy is available here as well.

<span class="confluence-embedded-file-wrapper conf-macro output-inline"
data-hasbody="false"
data-macro-id="50e07129-b0fb-431c-8164-b800aaea6659"
data-macro-name="view-file"><a href="/wiki/download/attachments/75991780/customlauncher?version=1&amp;modificationDate=1646180779000&amp;cacheVersion=1&amp;api=v2" class="confluence-embedded-file"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/customlauncher?version=1&amp;modificationDate=1646180779000&amp;cacheVersion=1&amp;api=v2&amp;viewType=fileMacro" height="250" /></a></span>

  

Steps for Linux
---------------

### Connecting to the HPC VPN.

For more information about this step please consult the respective
confluence page [VPN - Virtual Private
Network](/wiki/spaces/UAHPC/pages/75989402/VPN+-+Virtual+Private+Network).
Here's an example of the process shown in screenshots:

<table>
<thead>
<tr class="header">
<th><div class="content-wrapper">
<p><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_16-31-35.png?version=1&amp;modificationDate=1646177495000&amp;cacheVersion=1&amp;api=v2&amp;width=356&amp;height=400" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_16-31-35.png?version=1&amp;modificationDate=1646177495000&amp;cacheVersion=1&amp;api=v2&amp;width=488&amp;height=548 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_16-31-35.png?version=1&amp;modificationDate=1646177495000&amp;cacheVersion=1&amp;api=v2&amp;width=356&amp;height=400 1x" height="400" /></span></p>
</div></th>
<th><div class="content-wrapper">
<p><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_16-32-0.png?version=1&amp;modificationDate=1646177521000&amp;cacheVersion=1&amp;api=v2&amp;width=358&amp;height=400" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_16-32-0.png?version=1&amp;modificationDate=1646177521000&amp;cacheVersion=1&amp;api=v2&amp;width=485&amp;height=541 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_16-32-0.png?version=1&amp;modificationDate=1646177521000&amp;cacheVersion=1&amp;api=v2&amp;width=358&amp;height=400 1x" height="400" /></span></p>
</div></th>
<th><div class="content-wrapper">
<p><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_16-32-32.png?version=1&amp;modificationDate=1646177553000&amp;cacheVersion=1&amp;api=v2&amp;width=355&amp;height=400" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_16-32-32.png?version=1&amp;modificationDate=1646177553000&amp;cacheVersion=1&amp;api=v2&amp;width=486&amp;height=547 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_16-32-32.png?version=1&amp;modificationDate=1646177553000&amp;cacheVersion=1&amp;api=v2&amp;width=355&amp;height=400 1x" height="400" /></span></p>
</div></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

At this point you need to use either \`push\` for duo factor auth on the
smart device, or \`phone\` for a call or \`sms\` for a collection of one
time passcodes. It's also worth noting that on linux **openconnect**
<a href="http://www.infradead.org/openconnect/" class="external-link">http://www.infradead.org/openconnect/</a>
is a great tool for the job.

  

### Installing visit

#### local machine

<a href="https://visit-dav.github.io/visit-website/" class="external-link">https://visit-dav.github.io/visit-website/</a>

<a href="https://visit-dav.github.io/visit-website/releases-as-tables/#series-31" class="external-link">https://visit-dav.github.io/visit-website/releases-as-tables/#series-31</a>

  

#### Installing the HPC host profiles

download the `host_uahpc2.xml`  file and save it to the visit directory
in your home folder. Here's what that looks like in my case:

  

<span class="confluence-embedded-file-wrapper conf-macro output-inline"
data-hasbody="false"
data-macro-id="fdd96abf-febc-4e84-91d4-0c86929fd174"
data-macro-name="view-file"><a href="/wiki/download/attachments/75991780/host_uahpc2.xml?version=1&amp;modificationDate=1646180778000&amp;cacheVersion=1&amp;api=v2" class="confluence-embedded-file"><embed src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/host_uahpc2.xml?version=1&amp;modificationDate=1646180778000&amp;cacheVersion=1&amp;api=v2&amp;viewType=fileMacro" height="250" /></a></span>

Once downloaded, transfer it to \`~/.visit/hosts\`

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_17-42-22.png?version=1&amp;modificationDate=1646181743000&amp;cacheVersion=1&amp;api=v2&amp;width=379&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_17-42-22.png?version=1&amp;modificationDate=1646181743000&amp;cacheVersion=1&amp;api=v2&amp;width=743&amp;height=489 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_17-42-22.png?version=1&amp;modificationDate=1646181743000&amp;cacheVersion=1&amp;api=v2&amp;width=379&amp;height=250 1x" height="250" /></span>

  

#### running visit

Navigate to the visit3.1.4 folder who's contents should appear like this

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_16-40-21.png?version=1&amp;modificationDate=1646178022000&amp;cacheVersion=1&amp;api=v2&amp;width=418&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_16-40-21.png?version=1&amp;modificationDate=1646178022000&amp;cacheVersion=1&amp;api=v2&amp;width=725&amp;height=433 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_16-40-21.png?version=1&amp;modificationDate=1646178022000&amp;cacheVersion=1&amp;api=v2&amp;width=418&amp;height=250 1x" height="250" /></span>

Enter the \`bin\` folder and start visit in debug mode

    cd bin

    ./visit -debug 5

This mode will be helpful for tracking down any errors that come up when
configuring the client server session.

#### Filling in host profile

There are the values that need to be changed in the host profile to
support your user on the HPC. Open the host profiles from the options
tab and then select UAHPC2

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-6-47.png?version=1&amp;modificationDate=1646183208000&amp;cacheVersion=1&amp;api=v2&amp;width=194&amp;height=250" class="confluence-embedded-image confluence-thumbnail" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-6-47.png?version=1&amp;modificationDate=1646183208000&amp;cacheVersion=1&amp;api=v2&amp;width=388&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-6-47.png?version=1&amp;modificationDate=1646183208000&amp;cacheVersion=1&amp;api=v2&amp;width=194&amp;height=250 1x" height="250" /></span>

On the `Host Settings`  page we will update the following entries that
are highlighted. The first one is the path to the visit installation on
the HPC. Here you must get the absolute path to the VisIt installation
on the HPC which should be
`/groups/<PIname>/visit_setup/visit3_1_4.linux-x86_64`
replacing `<PIname>`  with your PI's name. If you installed VisIt
somewhere else you will use a different absolute path to that location.

Second you must replace `baylyd`  with your own netid

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_17-59-47.png?version=1&amp;modificationDate=1646182787000&amp;cacheVersion=1&amp;api=v2&amp;width=522&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_17-59-47.png?version=1&amp;modificationDate=1646182787000&amp;cacheVersion=1&amp;api=v2&amp;width=1044&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_17-59-47.png?version=1&amp;modificationDate=1646182787000&amp;cacheVersion=1&amp;api=v2&amp;width=522&amp;height=250 1x" height="250" /></span>

Then we will change the options in the `Launch Profiles` by selecting
that tab in the `Host Profiles`  window.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-16-23.png?version=1&amp;modificationDate=1646183784000&amp;cacheVersion=1&amp;api=v2&amp;width=295&amp;height=250" class="confluence-embedded-image confluence-thumbnail" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-16-23.png?version=1&amp;modificationDate=1646183784000&amp;cacheVersion=1&amp;api=v2&amp;width=590&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-16-23.png?version=1&amp;modificationDate=1646183784000&amp;cacheVersion=1&amp;api=v2&amp;width=295&amp;height=250 1x" height="250" /></span>

Then select the `parallel`  settings tab ensuring to replace `visteam` 
with your own PI

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-18-47.png?version=1&amp;modificationDate=1646183928000&amp;cacheVersion=1&amp;api=v2&amp;width=302&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-18-47.png?version=1&amp;modificationDate=1646183928000&amp;cacheVersion=1&amp;api=v2&amp;width=604&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-18-47.png?version=1&amp;modificationDate=1646183928000&amp;cacheVersion=1&amp;api=v2&amp;width=302&amp;height=250 1x" height="250" /></span>

Once that's complete you may attempt to open a session

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-30-14.png?version=1&amp;modificationDate=1646184614000&amp;cacheVersion=1&amp;api=v2&amp;width=245&amp;height=250" class="confluence-embedded-image confluence-thumbnail" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-30-14.png?version=1&amp;modificationDate=1646184614000&amp;cacheVersion=1&amp;api=v2&amp;width=490&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-30-14.png?version=1&amp;modificationDate=1646184614000&amp;cacheVersion=1&amp;api=v2&amp;width=245&amp;height=250 1x" height="250" /></span>

Select the `UAHPC2`  host

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-30-42.png?version=2&amp;modificationDate=1654731233000&amp;cacheVersion=1&amp;api=v2&amp;width=438&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-30-42.png?version=2&amp;modificationDate=1654731233000&amp;cacheVersion=1&amp;api=v2&amp;width=876&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-30-42.png?version=2&amp;modificationDate=1654731233000&amp;cacheVersion=1&amp;api=v2&amp;width=438&amp;height=250 1x" height="250" /></span>

Then navigate to a data set you wish to visualize in the client server
session

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-31-39.png?version=1&amp;modificationDate=1646184699000&amp;cacheVersion=1&amp;api=v2&amp;width=311&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-31-39.png?version=1&amp;modificationDate=1646184699000&amp;cacheVersion=1&amp;api=v2&amp;width=583&amp;height=468 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-31-39.png?version=1&amp;modificationDate=1646184699000&amp;cacheVersion=1&amp;api=v2&amp;width=311&amp;height=250 1x" height="250" /></span>

In my case I'll be using the sample aneurysm data which can be
downloaded here
<a href="https://visit-dav.github.io/largedata/datarchives/aneurysm" class="external-link">https://visit-dav.github.io/largedata/datarchives/aneurysm</a>

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-32-34.png?version=1&amp;modificationDate=1646184754000&amp;cacheVersion=1&amp;api=v2&amp;width=308&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-32-34.png?version=1&amp;modificationDate=1646184754000&amp;cacheVersion=1&amp;api=v2&amp;width=576&amp;height=467 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-32-34.png?version=1&amp;modificationDate=1646184754000&amp;cacheVersion=1&amp;api=v2&amp;width=308&amp;height=250 1x" height="250" /></span>

You will then have the option to select a compute launcher
configuration. I'm going with `elgato`. Again check to make sure that
the `Bank` field has your PI's netid in it.

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-33-57.png?version=1&amp;modificationDate=1646184838000&amp;cacheVersion=1&amp;api=v2&amp;width=279&amp;height=250" class="confluence-embedded-image confluence-thumbnail" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-33-57.png?version=1&amp;modificationDate=1646184838000&amp;cacheVersion=1&amp;api=v2&amp;width=410&amp;height=367 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-33-57.png?version=1&amp;modificationDate=1646184838000&amp;cacheVersion=1&amp;api=v2&amp;width=279&amp;height=250 1x" height="250" /></span>

After selecting `OK` you will see a progress bar:

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-35-11.png?version=1&amp;modificationDate=1646184911000&amp;cacheVersion=1&amp;api=v2&amp;width=457&amp;height=171" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-35-11.png?version=1&amp;modificationDate=1646184911000&amp;cacheVersion=1&amp;api=v2&amp;width=457&amp;height=171 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-35-11.png?version=1&amp;modificationDate=1646184911000&amp;cacheVersion=1&amp;api=v2&amp;width=457&amp;height=171 1x" height="171" /></span>

This is displayed while the slurm batch allocation that was
automatically generated for you waits in a queue. When it is approved
and launched the progress window goes away. You can double check that
the VisIt session is running successfully on the HPC by logging
into `hpc.arizona.edu`  and running `squeue -u <netid>`. You will see an
entry like this who's name is `visit.<netid>` 

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-38-17.png?version=1&amp;modificationDate=1646185098000&amp;cacheVersion=1&amp;api=v2&amp;width=792&amp;height=55" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-38-17.png?version=1&amp;modificationDate=1646185098000&amp;cacheVersion=1&amp;api=v2&amp;width=792&amp;height=55 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-38-17.png?version=1&amp;modificationDate=1646185098000&amp;cacheVersion=1&amp;api=v2&amp;width=792&amp;height=55 1x" height="55" /></span>

At this point you can request for VisIt to perform operations and graph
different aspects of your data.

  

<span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-39-40.png?version=1&amp;modificationDate=1646185181000&amp;cacheVersion=1&amp;api=v2&amp;width=329&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-39-40.png?version=1&amp;modificationDate=1646185181000&amp;cacheVersion=1&amp;api=v2&amp;width=658&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-39-40.png?version=1&amp;modificationDate=1646185181000&amp;cacheVersion=1&amp;api=v2&amp;width=329&amp;height=250 1x" height="250" /></span><span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-39-56.png?version=1&amp;modificationDate=1646185197000&amp;cacheVersion=1&amp;api=v2&amp;width=261&amp;height=250" class="confluence-embedded-image confluence-thumbnail" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-39-56.png?version=1&amp;modificationDate=1646185197000&amp;cacheVersion=1&amp;api=v2&amp;width=522&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-39-56.png?version=1&amp;modificationDate=1646185197000&amp;cacheVersion=1&amp;api=v2&amp;width=261&amp;height=250 1x" height="250" /></span><span
class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-41-59.png?version=1&amp;modificationDate=1646185320000&amp;cacheVersion=1&amp;api=v2&amp;width=342&amp;height=250" class="confluence-embedded-image" srcset="https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-41-59.png?version=1&amp;modificationDate=1646185320000&amp;cacheVersion=1&amp;api=v2&amp;width=684&amp;height=500 2x, https://uarizona.atlassian.net/wiki/download/thumbnails/75991780/image2022-3-1_18-41-59.png?version=1&amp;modificationDate=1646185320000&amp;cacheVersion=1&amp;api=v2&amp;width=342&amp;height=250 1x" height="250" /></span>

If your data is timeseries you may also hit the play button and it will
step through your data visualizing each step.

  

  

  

  

  

Support related to this document
--------------------------------

If you are interested in this workflow but need support you can send an
email to <span
class="s1"><a href="mailto:vislab-consult@list.arizona.edu" class="external-link">vislab-consult@list.arizona.edu</a>
for technical support a Data & Visualization consultant.</span>

<span id="confluence-server-performance"
style="display:none;">{"serverDuration": 18, "requestCorrelationId":
"79d8fd98c6fa410395673f3939c1f8ca"}</span>
