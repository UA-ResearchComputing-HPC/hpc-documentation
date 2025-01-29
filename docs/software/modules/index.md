# Software Modules

!!! tip "Availability"
    Software modules are not available on the login nodes. You will need to be on a compute node to access them.

!!! warning "Cluster Differences"
    Ocelote and El Gato both run CentOS 7 as their operating system and share the same system libraries and modules. These two clusters can generally be used interchangably. Puma uses Rocky Linux 9 as its operating system and has different system libraries and modules than Ocelote and El Gato. This means workflows may not be transferrable between Puma and the other two clusters. Take note of which cluster you're using to prevent software failures.

Software packages are available as modules and are accessible from the compute nodes of any of our three clusters. A software module is a tool used to manage software environments and dependencies. It allows you to easily load and unload different software packages, libraries, and compilers needed for computational tasks without conflicts. This ensures access to many specific tools, and even different versions of the same tools, without affecting the overall system configuration.

## Module Commands

!!! warning "Default Versions"
    If multiple versions of software are available on the system, the newest is made the default. This means loading a module without specifying the version will select the most recent. We strongly recommend including version information in your module statements. This ensures that you maintain a consistent environment for your analyses in the event of a software upgrade.

|Command | Description|
|-|-|
|<pre><code>module avail</code></pre>| Display all the software and versions installed on the system|
|<pre><code>module avail &#60;search_term&#62;</code></pre>|Display all installed modules matching ```<search_term>```|
|<pre><code>module list</code></pre>|Display the software you have loaded in your environment|
|<pre><code>module whatis &#60;module_name&#62;</code></pre>|Displays some descriptive information about a specific module|
|<pre><code>module show &#60;module_name&#62;</code></pre>|Displays system variables that are set/modified when loading module ```<module_name>```|
|<pre><code>module load &#60;module_name&#62;</code></pre>|Load a software module in your environment|
|<pre><code>module unload &#60;module_name&#62;</code></pre>|Unload a specific software package from your environment|
|<pre><code>module swap &#60;module_name&#62;/&#60;version1&#62; &#60;module_name&#62;/&#60;version2&#62;</code></pre>| Switch versions of a software module|
|<pre><code>module purge</code></pre>| Unload all the software modules from your environment|
|<pre><code>module help</code></pre>| Display a help menu for the module command|

## Examples

### Loading Modules
```
[netid@cpu39 ~]$ module avail python

------------------- /opt/ohpc/pub/modulefiles --------------------
   python/3.6/3.6.5     python/3.9/3.9.10
   python/3.8/3.8.2     python/3.11/3.11.4 (D)
   python/3.8/3.8.12
[netid@cpu39 ~]$ module load python/3.9
[netid@cpu39 ~]$ python3 --version
Python 3.9.10
[netid@cpu39 ~]$ module swap python/3.9 python/3.11

The following have been reloaded with a version change:
  1) python/3.9/3.9.10 => python/3.11/3.11.4

[netid@cpu39 ~]$ python3 --version
Python 3.11.4
```

### Finding Executables and Libraries

If you're looking for the specific paths added to your environment when loading a module, you can use the command `module show`. For example:

```
[netid@cpu38 ~]$ module show gromacs
---------------------------------------------------------
   /opt/ohpc/pub/moduledeps/gnu8-openmpi3/gromacs/2021.5:
---------------------------------------------------------
whatis("Name: gromacs ")
whatis("Version: 2021.5 ")
whatis("Molecular dynamics for biophysical chemistry ")
setenv("GROMACS_BASE","/opt/ohpc/pub/apps/gromacs/2021.5")
prepend_path("PATH","/opt/ohpc/pub/apps/gromacs/2021.5/bin")
prepend_path{"CPPFLAGS","-I/opt/ohpc/pub/apps/gromacs/2021.5/include",delim=" "}
prepend_path("MANPATH","/opt/ohpc/pub/apps/gromacs/2021.5/share/man")
prepend_path("PKG_CONFIG_PATH","/opt/ohpc/pub/apps/gromacs/2021.5/lib64/pkgconfig")
prepend_path{"LDFLAGS","-L/opt/ohpc/pub/apps/gromacs/2021.5/lib64",delim=" "}
prepend_path("LD_LIBRARY_PATH","/opt/ohpc/pub/apps/gromacs/2021.5/lib64")
unload("gnu8")
load("gnu8")
help([[ Adds gromacs to your environment
]])
```
These paths will allow you to determine the locations of the executables, libraries, header files, etc. available to you after loading the software.



## Compilers

### Puma

|Compiler|Version|Module Command|
|-|-|-|
|gcc|12.2.0|<pre><code>module load gnu12/12.2.0</code></pre>|
|gcc|13.2.0|<pre><code>module load gnu13/13.2.0 # Recommended. Loaded by default.</code></pre>|
|intel|2023.2.1|<pre><code>module load intel/2023.2.1</code></pre>|
|intel|2024.0.0|<pre><code>module load intel/2024.0.0 # Default</code></pre>|
|intel|2024.1.2|<pre><code>module load intel/2024.1.2</code></pre>|


### Ocelote and El Gato

|Compiler|Version|Module Command|
|-|-|-|
|gcc|5.4.0|<pre><code>module load gnu/5.4.0</code></pre>|
|gcc|7.3.0|<pre><code>module load gnu7/7.3.0</code></pre>|
|gcc|8.3.0|<pre><code>module load gnu8/8.3.0 # Recommended. Loaded by default</code></pre>|
|Intel|2020.1|<pre><code>module load intel/2020.1</code></pre>|
|Intel|2020.4|<pre><code>module load intel/2020.4</code></pre>|


## Software Install Requests

If you need to use a software package and it is not installed on the system, we can install it for you, provided it meets the criteria outlined in our [software policies](../overview/#policies). Software can be requested by using our [HPC software install request Form](https://uarizona.service-now.com/sp?id=sc_cat_item&sys_id=102d93a71ba720107947edf1604bcb55&sysparm_category=84d3d1acdbc8f4109627d90d6896191f). There is no expected time frame for how long it takes to install software, as there are many variables that determine this. If you haven't heard back within a week, it may be appropriate to follow up.

For software that doesn't meet the criteria outlined in our policies and doesn't fall into the unsupported software category, it may be possible for you to install it locally. We have instructions documented in our [user installations](../user_installations/) section.



