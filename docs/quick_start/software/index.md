<link rel="stylesheet" href="../../assets/stylesheets/buttons.css">
# Software on HPC

## Accessing Software
It's hard to perform analyses without software. We learned that software packages are not available on the login nodes, but now that we're connected to a compute node, we can see and use what's available. 

Software on HPC comes [installed as modules](../../software/modules/). Modules make it easy to load and unload software from your environment. This allows hundreds of packages to be available on the same system without dependency or versioning conflicts. It's always good practice to specify which version of the software you need when loading to ensure a stable environment.

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


<html>
<div class="button-container">
    <a href="../accessing_compute/"><button class="left-button"></button></a>
    <a href="../summary/"><button class="right-button"></button></a>
</div>
</html>