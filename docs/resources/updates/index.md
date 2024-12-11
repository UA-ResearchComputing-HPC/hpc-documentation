# Updates 

The Puma cluster is currently being updated from the outdated Centos 7 operating system to Rocky linux 9. This will involve updating both the operating system and much of the installed software.

* A small number of nodes were previously made available in a testing environment.
* **At the October 30th maintanance, an initial subset of compute nodes will be available for full production runs.**
* During November and December 2024 more nodes will be updated.
* In January all nodes will be updated, by which point all users must transition to continue using Puma resources.

See the below for information on using the new system.

This update will have a number of impacts, and we are taking steps to minimize disruptions to HPC users.

!!! success "Things to not worry about"

    * All user files will remain unchanged. 
    * The Slurm scheduler and procedure for submitting jobs will remain unchanged. 
    * HPC systems will continue to be available for use during the OS update. 

!!! note "Things to note"

    * Compute hour allocations on the test system will be independent of allocations on the existing Puma system. 
    * Significant changes to system software have occurred, most importantly: 
        * updating the default compiler from GCC 8 (module `gnu8`) to GCC 13 (module `gnu13`).
        * updating the default MPI distribution from OpenMPI 3 (module `openmpi3`) to OpenMPI 5 (module `openmpi5`).
    * Some previously compiled software will not run on the new system, and will need to be recompiled.
    * HPC staff have recompiled public software modules when necessary.
    * The majority of software modules previously available will remain available, sometimes with version changes.

  
## Submitting jobs to the updated cluster

* Subsets of nodes will be converted to the new OS, effectively creating a new cluster.
* The updated cluster can be selected by entering `puma9`, just as the target cluster is currently specified by entering `puma`, `ocelote` or `elgato`. 
* The resources available on the Puma9 cluster will remain functionally identical to those on the existing Puma, including the number of CPUs per node and memory per CPU. Thus, Slurm batch scripts that work properly on Puma should work on the new Puma without modifications.

## Adapting existing analyses. 

!!! Tip "Support"
    Please open a [support ticket](https://uarizona.service-now.com/sp?id=sc_cat_item&sys_id=2983102adbd23c109627d90d689619c6&sysparm_category=84d3d1acdbc8f4109627d90d6896191f) if you have difficulty using the new updated Puma9 system.

Researchers may currently use cluster resources in a number of ways. {==Here are general guidelines for adapting to the new environment:==}

**Users of Open OnDemand**
: Open OnDemand users should generally be able to continue usage unchanged. However, users of RStudio should see the R section below. 

**Users of software modules**
: Users who load analysis software with the `module load` command will generally be able to continue their analyses unchanged.  All commonly used software modules have been transferred to Puma9, sometimes with version updates or changes.

**Users of Conda environments**
: We recommend switching to [Mamba](../../software/popular_software/mamba/index.md) going forward. However, many Conda users should be able to continue using their existing environments, although in some cases may need to recreate them.

**Users of Python**
: Users who run pure Python code, with or without the use of virtual environments will likely be able to continue their analyses unchanged. The same versions of Python are available on Puma9.

**Users of R**

 * The primary challenge for R users will be to maintage separate R package libraries for the old and new operating systems.  R packages installed under the old Centos 7 operating system may not function under the new Rocky 9 systems, and vice versa. 
 * R users should maintain separate R libraries and switch between them as necessary. See the "Creating a Custom Library" and "Switching Between Custom Libraries" sections on our [R documentation](../../software/popular_software/R/index.md) page for details.  We suggest that your Puma9 R library be named something like library_4.4-puma9.  

**Users who compile code themselves**
: In many cases user-compiled software will need to be recompiled to run on Puma9.

## Important software changes 

* The procedure for using the Conda package manager is expected to change, and existing environments will likely need to be rebuilt. More news on this will be forthcoming.
* In addition to the currently available Cuda 11.8, Cuda 12.4 and 12.5 will also be available. 

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

### Anaconda / Conda / Mamba

!!! Info "Mamba Guide"
    See [Mamba](../../software/popular_software/mamba/index.md) for our guide on using Mamba in place of Anaconda.

While not part of the OS updates itself, we want to take this opportunity to bring to your attention upcoming changes to our use of Anaconda. Anaconda.org has started enforcing license restrictions which has necessitated these changes. You can read more about the license restrictions [here](https://www.anaconda.com/blog/update-on-anacondas-terms-of-service-for-academia-and-research).

In short:

1. The license restrictions only come into effect when a user installs packages from [The Anaconda Repository](https://repo.anaconda.com/).
2. The license restrictions **do not** apply if a user uses the `conda` tool to install packages from community repositories like `conda-forge`.

The existing Anaconda modules on the HPC automatically load The Anaconda Repository, and thus come under the purview of the license restrictions. If you use a local installation of `conda `(**not** the Anaconda modules), and you **only** install packages from community repositories, you need not read any further. However, you might still find the following useful.

We are considering the following changes to help users transition to a new setup that will not be affected by the license restrictions:

1. {==Deprecating the existing Anaconda modules.==} We will not install any new version of Anaconda. The existing modules will stay for a while, likely not beyond the end of the year, to give users time to transition to the new setup.
2. {==Creating a new module based on the [Miniforge](https://github.com/conda-forge/miniforge) distribution.==} Miniforge provides access to two tools — `conda` and [`mamba`](https://mamba.readthedocs.io/en/latest/) — and the `conda-forge` repository.

With the Miniforge module you will be able to do the following:

1. Install software from [`conda-forge`](https://conda-forge.org/), which is an extensive community repository. Whatever software you want, you will likely find it there. Of course, if required you will be able to use other repositories, except The Anaconda Repository.
2. You can use `mambda` instead of `conda`. While access to `conda` will not go away, `mamba` is a **much, much faster** drop-in replacement for `conda`. Almost anything `conda` can do, `mamba` can do faster. Sometimes even succeeding where `conda` fails. We think you will have a much pleasant experience with `mamba` than with `conda`.

If you are on the fence about this change, we highly recommend that you use the transition period to recreate and test your workflows and scripts with the `mamba` + `conda-forge` setup. Please do not wait till the last moment to make the necessary changes. While `mamba` is a drop-in replacement for `conda`, it is not a guarantee that your existing scripts will not break. Going forward, `mamba` + `conda-forge` will be the main setup that we support. We will share more details about how to use `mamba` shortly.
