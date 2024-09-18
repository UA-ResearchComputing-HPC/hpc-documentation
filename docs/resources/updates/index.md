In September 2024,  UA HPC Systems will begin transitioning from the now unsupported CentOS 7 operating system to Rocky Linux 9.

A testing period is beginning, allowing experienced users to volunteer to test the new system. Initially the test system will contain several dozen nodes, allowing for significant computation.  Compute hour allocations on the test system will be independent of allocations on the existing Puma system.  

This update will have a number of impacts, and  HPC staff are taking steps to minimize disruptions to HPC users

!!! success "Things to not worry about"

    * All user files will remain unchanged. 
    * The SLURM scheduler and procedure for submitting jobs will remain unchanged. 
    * HPC systems will continue to be available for use during the OS update. 

!!! note "Things to note"

    * Significant changes to system software have occurred, most importantly: 
        * updating the default compiler from GCC 8 (module `gnu8`) to GCC 13 (module `gnu13`).
        * updating the default MPI distribution from OpenMPI 3 (module `openmpi3`) to OpenMPI 5 (module `openmpi5`).
    * Some previously compiled software will not run on the new system, and will need to be recompiled.
    * HPC staff have recompiled public software modules when necessary.
    * The majority of software modules previously available will remain available, sometimes with version changes.
    * The Open on Demand graphical interface is not yet available for the updated operating system

!!! tip "When to contact HPC support"

    * Previously functioning software modules no longer work in your analysis workflow.
    * You are uncertain whether you need to recompile your own software, or need assistance with recompilation.

  
## Submitting jobs to the updated cluster

* A subset of nodes will be converted to the new OS, effectively creating a new cluster.
* Initially, the updated cluster can be selected by entering `puma-tst`, just as the target cluster is currently specified by entering `puma`, `ocelote` or `elgato`. 
* The resources available on the new Puma cluster will remain functionally identical to those on the existing Puma, including the number of CPUs per node and memory per CPU. Thus, SLURM batch scripts that work properly on Puma should work on the new Puma without modifications.    

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
