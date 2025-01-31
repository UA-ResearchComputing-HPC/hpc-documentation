You can do advanced mesh processing with ParaView using the VESPA plugin. VESPA adds state-of-the-art mesh processing algorithms from the CGAL (Computational Geometry Algorithms Library) C++ library to ParaView. For more information on what you can do with these algorithms, see [VESPA: Advanced Mesh Processing Based on CGAL for VTK and ParaView](https://www.kitware.com/vespa-advanced-mesh-processing-based-on-cgal-for-vtk-and-paraview/). 

You will have to build the VESPA plugin to use it with ParaView. If you plan to run your ParaView workflows on the HPC, then we have pre-built ParaView containers with the VESPA plugin installed. To run ParaView with VESPA on the HPC:

1. Start an OOD Interactive Desktop session.
2. Open a terminal in the Interactive Desktop session.
3. Run `apptainer run /contrib/singularity/ua-hpc/paraview/paraview-5.13.0-git-vespa.sif`
4. Once the ParaView GUI starts, close all popups to get to the default layout. 
5. From the top toolbar select **Tools → Manage Plugins..**.
6. Once the **Plugin Manager** window opens, scroll down to find the VESPA plugin. Select it and click **Load Selected**. Then click **Close**.

Once the VESPA plugin is loaded, you can use the following filters to estimate volumes contained within areas of interest in imaging data

-   Threshold
-   Extract Surface
-   Tetrahedralize
-   Alpha Wrap (from VESPA)
-   Connectivity
-   Compute Connected Surface Properties

You can refer to the screen recording below, as well as to the [demo_state.pvsm](files/demo_state.pvsm) file (which you can load in ParaView), to get started.

<iframe width="800" height="450" src="videos/vespa.mp4" allowfullscreen></iframe>
