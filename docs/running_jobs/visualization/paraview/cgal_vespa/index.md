If you need advanced Computational Geometry support for your
visualization and analysis, then we have you covered!

  

Follow these steps to get up and running with an OOD remote desktop and
a custom compiled paraview container providing cgal vespa.

  

    # pull the container
    apptainer pull docker://ghcr.io/devinbayly/cgal_vespa:latest

When this is complete you must run the container and start paraview

    apptainer exec cgal_vespa_latest.sif /opt/paraview_build/bin/paraview

When paraview starts you need to import the Vespa paraview plugin which
will be at this system path

    /usr/local/lib/paraview-5.11/plugins/VESPAPlugin/VESPAPlugin.so

  

Then the following filters can help for estimating volumes contained
within areas of interest in imaging data

-   threshold
-   extract surface
-   tetrahedralize
-   Alpha Wrap (CGAL Vespa)
-   Connectivity
-   Compute Connected Surface Properties

Refer to the screen recording shared here for other details, as well as
the demo\_state.pvsm which you can just load in the custom paraview
container to get started.

<span class="confluence-embedded-file-wrapper conf-macro output-inline"
data-hasbody="false"
data-macro-id="d471f096-cf31-47f0-b6b4-9431ed0c6065"
data-macro-name="view-file"><a href="/wiki/download/attachments/75989475/demo_state.pvsm?version=1" class="confluence-embedded-file"><embed src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989475/demo_state.pvsm?version=1" height="250" /></a></span>

  

  

<span class="confluence-embedded-file-wrapper conf-macro output-inline"
data-hasbody="false"
data-macro-id="8ba4d727-39c1-4e14-9536-2d26f083d5b9"
data-macro-name="view-file"><a href="/wiki/download/attachments/75989475/vespa.mp4?version=1" class="confluence-embedded-file"><embed src="../../all_images/uarizona.atlassian.net/wiki/download/thumbnails/75989475/vespa.mp4?version=1" height="400" /></a></span>

  

  

  

  

  

  

<span id="confluence-server-performance"
style="display:none;">{"serverDuration": 17, "requestCorrelationId":
"6bc9cdeba83c4a7bb82f184a96d6b19b"}</span>


[demo file](scripts/demo_state.pvsm)

<iframe width="1000" height="750" title="Paraview on HPC walkthrough" src="videos/vespa.mp4" allowfullscreen></iframe>