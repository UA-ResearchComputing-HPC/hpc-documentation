# Operating System Updates 

## Overview

!!! tip "No migration needed for Lynx"
    "The new HPC cluster, Lynx, will share the same OS (Rocky Linux 9) as Puma. No migration will be necessary for current Puma users when the cluster goes live. This documentation is only relevant for current Ocelote users."

In early 2025, the Puma cluster was updated to a newer operating system called Rocky Linux 9. Ocelote has remained on the older OS called CentOS 7. Ocelote will be decommissioned on August 17th, 2026 so it is now necessary for users to migrate their workflows to Puma to continue using HPC. Below is a summary of the main points of relevance to users:

**System Software**

The versions and locations of system software on Puma are different than Ocelote. Any software compiled on CentOS 7 will most likely need to be recompiled on Rocky 9 for use on Puma. 

**Module Availability**

The module system on Puma is now distinct from Ocelote. While many modules available on the older OS are still available on Puma, some are not available at all, and some have changed version. Check available modules/versions on your cluster of choice. Significant changes include:

- The default compiler updated from GCC 8 (module `gnu8`) to GCC 13 (module `gnu13`).
- The default MPI distribution updated from OpenMPI 3 (module `openmpi3`) to OpenMPI 5 (module `openmpi5`).

**Environment Compatibility**

Software environments/libraries for programs like Python and R that were built on CentOS 7 may not function properly on Rocky 9. Users may need to rebuild custom environments on Puma to ensure compatibility.

**Contrib Space Noninteroperable**

Users who utilize the `/contrib` space should note that this space on Puma is now distinct from the space on Ocelote.

## Adapting existing analyses. 

!!! Tip "Support"
    Please open a [support ticket](https://uarizona.service-now.com/sp?id=sc_cat_item&sys_id=12eaba153bf9ba5017be8a8a25e45a7d) if you have problems migrating to Rocky Linux 9.

Researchers may currently use cluster resources in a number of ways. {==Here are general guidelines for adapting to the new environment:==}

**Users of Open OnDemand**
: Open OnDemand users should generally be able to continue usage unchanged. However, users of RStudio should see the R section below. 

**Users of software modules**
: Users who load analysis software with the `module load` command will generally be able to continue their analyses unchanged.  All commonly used software modules are available on Puma, sometimes with version updates or changes.

**Users of Conda environments**
: We recommend switching to [Mamba](../../software/popular_software/mamba/index.md) going forward. However, many Conda users should be able to continue using their existing environments, although in some cases may need to recreate them.

**Users of Python**
: Users who run pure Python code, with or without the use of virtual environments will likely be able to continue their analyses unchanged. The same versions of Python are available on Puma9.

**Users of R**

 * The primary challenge for R users will be to create new libraries for the more recent operating system. R packages installed under the old CentOS 7 operating system may not function under the new Rocky 9 systems, and vice versa. 
 * R users should create new R libraries for Puma. See the [Creating a Custom Library](../../software/popular_software/R/index.md#create-your-first-library) and [Switching Between Custom Libraries](../../software/popular_software/R/index.md#how-to-switch-libraries) sections on our [R documentation](../../software/popular_software/R/index.md) page for details.  

**Users who compile code themselves**
: In many cases user-compiled software will need to be recompiled to run on Puma.


### Intel compiled software

* On the previous system, a number of software modules were provided for use in compiling software using the Intel compiler, e.g., modules `hdf5-intel`, `netcdf-intel`, etc. 
* On the new system, you should first load the Intel software module with `module swap gnu13 intel`. After loading the Intel module, you can load the Intel specific modules without the `-intel` specifier, i.e., as `hdf5`, `netcdf`, etc.


| old module name | use now |
| :---- | :---- |
| hdf5-intel | hdf5 |
| netcdf-intel | netcdf |
| netcdf-cxx-intel | netcdf-cxx |
| netcdf-fortran-intel | netcdf-fortran |
| petsc-complex/intel | petsc |
| petsc-real/intel | petsc |
| gsl-intel | gsl |
| phdf5-intel | phdf5 |

