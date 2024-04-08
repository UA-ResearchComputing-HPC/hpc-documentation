# Anaconda

!!! Warning "Known Issues with Anaconda"

    Anaconda is known to cause potential issues on HPC Clusters. If it is possible to design your workflow around the native Python package manager Pip, we highly encourage you to do so. 

    If you decide to use Anaconda on our HPC system, please read this page carefully and make yourself aware of the common problems and how to best avoid them.


## Overview

We have several versions of Anaconda installed as system modules for use. You can initialize these in your home directory for access and package management. 

|Version|Accessibility|
|-|-|
|2020.02|```module load anaconda/2020.02```|
|2020.11|```module load anaconda/2020.11```|
|2022.05|```module load anaconda/2022.05```|

## Initializing Anaconda

Initializing Anaconda in your account only needs to be performed once and is what makes Anaconda available and ready for customization (e.g., installing custom packages) in your account. 

!!! tip "Faster Reloading"
    Conda will direct you to close and reopen your shell to complete the initialization process. You can skip this by running the command ```source ~/.bashrc``` listed in the instructions below. 
    
!!! danger "Turn Off Auto-Activate"
    To ensure proper functioning of built-in system functions, turning off auto-activation is {==**highly recommended**==}. Do this by running ```conda config --set auto_activate_base false``` in a terminal following initialization.
    
In an interactive session, replacing `<version>` with your desired Anaconda module version:

```bash
module load anaconda/<version>
conda init bash                  
source ~/.bashrc  
conda config --set auto_activate_base false
```

## Creating a Conda Environment
Once conda has been configured following the steps above, you can create a local environment. This allows you to control the version of Python you want to use, install your own software, and even create custom Juypyter kernels (making your environment accessible in an OnDemand notebook). To do this, you can use the command ```conda create```. For example, in an interactive session:

```bash
conda activate
conda create --name py37 python=3.7 # Build a local environment with a specific version of python
conda activate py37
```

To view the environments available to you, use the command

```bash
conda env list
```

## Installing Conda Packages and Other Software

Once you have created a conda environment, you can install the packages you need. To do this, follow the software-specific installation instructions. This may be as simple as running ```conda install <my_package>```, or it may involve installing a handful of dependencies. If the installation instructions ask you to create a new environment, you do not have to repeat this step. 

Once you have performed the install, you should then be able to access your software within this environment. If you are unable to load your software, check your active environment with

```bash
conda info
```

and the installed packages with 

```bash
conda list
```

## Custom Jupyter Kernel

If you want to make one of your conda environments available for use in one of our Open OnDemand Jupyter Notebooks, you can do so by creating a custom kernel. To do this, start an interactive terminal session and activate your environment:

```bash
conda activate
conda activate <your_environment>
```

Next, pip-install Jupyter and use it to create a custom kernel using the command ```ipython``` and replacing ```<your_environment>``` with your own environment's name:

```bash
pip install jupyter
ipython kernel install --name <your_environment> --user
```

Once you've configured your kernel, go to [Open OnDemand](https://ood.hpc.arizona.edu/) and start a Jupyter notebook. Once the session starts, open it and click the "new" dropdown menu in the upper right. If everything is working correctly, you should see your custom name. For example, if you created a conda environment with the kernel name py38, you should see the following:

<img width="300" src="images/conda-custom-kernel.png">

Once you've selected your environment, try checking the Python version in your notebook using the ```sys``` module. Additionally, for demonstration purposes, we'll check that a custom package installed in py38 (emoji) can be imported and is working. 

<img width="800" src="images/conda-kernel-testing.png">
