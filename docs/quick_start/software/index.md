<link rel="stylesheet" href="../../assets/stylesheets/buttons.css">
# Software on HPC

## Accessing Software

It's hard to perform analyses without software. We seen that software packages are not available on the login nodes, but now that we're connected to a compute node, we can see and use what's available. 

Since the HPC is a shared system, we need to organize our installed packages in a way that's helpful for everyone. There are three main categories of software on HPC:

### System Software

System software represents executables pre-installed on the system, and available everywhere. This includes basic bash commands, as well as tools developed by our team, like ```va``` and ```nodes-busy```. 

These are made available by the ```PATH``` environment variable. To see your ```PATH```, run ```echo $PATH```. While using HPC, you may end up adding new directories to you ```PATH``` to make new software available. To see all the items in your ```PATH```, run ```ls PATH``` (*warning! this may produce a very long output.*)

### Modules 

Modules are software only available on compute nodes. Modules make it easy to load and unload software from your environment. This allows hundreds of packages to be available on the same system without dependency or versioning conflicts. It's always good practice to specify which version of the software you need when loading to ensure a stable environment.

You can view and load software modules using the commands ```module avail``` and ```module load```, respectively. For example:

```
[netid@gpu66 ~]$ module avail python
 
------------------------------------------------- /opt/ohpc/pub/modulefiles --------------------------------------------------
   python/3.6/3.6.5    python/3.8/3.8.2 (D)    python/3.8/3.8.12    python/3.9/3.9.10
 
[netid@gpu66 ~]$ module load python/3.9
[netid@gpu66 ~]$ python3 --version
Python 3.9.10
```

Try running ```module avail``` without specifying any arguments. You'll notice we have *a lot* available.

If you have software that you would like installed as a module, please refer to our section on [Modules](../../software/modules/). 

### Personal Software

User-installed items are permissible on HPC, so long as they don't interfere with system directories. This means you can download and install software from the internet (e.g. Pip, CRAN, GitHub) without waiting for someone else to install it on HPC for you. We recommend compiling software on a compute node so that the load doesn't strain the login nodes. 

If you would like to install your own software, please refer to our guidelines on [User Installations](../../software/user_installations/)


<html>
<div class="button-container">
    <a href="/quick_start/accessing_compute/"><button class="left-button"></button></a>
    <a href="/quick_start/summary/"><button class="right-button"></button></a>
</div>
</html>