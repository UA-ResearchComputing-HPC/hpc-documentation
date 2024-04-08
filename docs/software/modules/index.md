# Software Modules

!!! tip "Availability"
    Software modules are not available on the login nodes. You will need to be on a compute node to access them.

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

### Example
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


## Compilers

Puma, Ocelote, and El Gato all run CentOS7 and have the following compilers available:

|Compiler|Version|Module Command|
|-|-|-|
|Intel|2020.1|<pre><code>module load intel/2020.1</code></pre>|
|Intel|2020.4|<pre><code>module load intel/2020.4</code></pre>|
|gcc|5.4.0|<pre><code>module load gnu/5.4.0</code></pre>|
|gcc|7.3.0|<pre><code>module load gnu7/7.3.0</code></pre>|
|gcc|8.3.0|<pre><code>module load gnu8/8.3.0 # Loaded by default</code></pre>|

## Installing additional software

You are allowed and encouraged to install software you may need on the HPC system. However, you cannot install software that requires root permission or use a method like 'yum install' that attempts to modify system paths. For information on installing software on the HPC, see our [User Installations](../user_installations/) page.

Sometimes it is beyond the abilities or permissions of a user to install your desired software. In this case, please submit a request for our Consult team to install it for you via the [HPC Software Install Request form](https://uarizona.service-now.com/sp?id=sc_cat_item&sys_id=102d93a71ba720107947edf1604bcb55&sysparm_category=84d3d1acdbc8f4109627d90d6896191f). There is no expected time frame for how long it takes to install software, as there are many variables that determine this. If you haven't heard back within a week, it may be appropriate to follow up.



