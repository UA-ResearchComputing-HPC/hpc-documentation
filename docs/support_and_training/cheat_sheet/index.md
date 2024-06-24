# Linux Cheat Sheet

## Why Learn Bash

Bash is a powerful command line shell that allows you to interact with our systems efficiently. It enables scripting and automation, job submission, file and directory management, remote access, resource monitoring, environment customization, parallel computing, data preprocessing, version control, error handling, software dependency management, custom workflows, and offers a valuable skill set applicable beyond HPC tasks. In other words, it allows you to do a lot!

In the cheat sheet below, we offer some basics as a reference. We also highly suggest you explore some more comprehensive guides such as the following: [Introduction to Linux on HPC](../../events/workshop_materials/intro_to_linux/)

## Shell Basics

### Shortcuts
Shortcuts can be used as stand-ins for system locations, avoiding the need for full paths. A few examples:

|Shortcut|Description|
|-|-|
|```~```|Your home directory|
|```.```|Your working directory|
|```..```|One directory above your working directory|

### Commands


|```ls```|List the contents of a directory|
|-|-|
|```ls -la```|List the contents of a directory including hidden files|
|```cd```|Change your working directory|
|```pwd```|Show the path to your working directory|
|```mkdir```|Create a new directory|
|```rm```| Delete a file. **Be careful**, files deleted this way **can't be retrieved**|
|```rm -r```|Delete a directory. **Be careful**, directories deleted this way **can't be retrieved**|

## Hidden Files and Directories
Hidden files and directories start with a dot ```.``` and won't show up when you do a simple ```ls```. Some of these files are used to configure your environment when you first log in. Be careful when removing or modifying these files since doing so can cause unintended consequences.

!!! tip 
    The `~` in the filenames below indicates your home directory. For example, `~/.bashrc` is specifying a file in your home called `.bashrc`.

|<div style="width:120px">File/Directory</div>|What It Does|Warnings|
|-|-|-|
|```~/.bash_profile```|	This file sets your working environment when you first log into HPC. This file sources your ```~/.bashrc``` (see below).|See the list in the danger block below.|
|```~/.bashrc```|This file sets your working environment when you first log into HPC.|See the list in the danger block below.|
|```~/.local```|This is a hidden directory in your home where pip-installed python packages, jupyter kernels, RStudio session information, etc. goes.|If you pip-install python packages when a virtual environment is not active, they will be installed in this directory. These will then be automatically loaded for all future python sessions (version-specific), including in Singularity images. This may cause versioning issues. We recommend always using [virtual environments](../../software/popular_software/python/).|
|```~/.apptainer```|A hidden directory in your home where Apptainer images and cache files are stored by default.|This directory can grow large quickly and fill up your home. You can modify your ```~/.bashrc``` to [set a different cache directory location](../../software/containers/containers_on_hpc/#cache-directory) that has a larger quota.

!!! danger
    When working with hidden configuration files in your account (`.bashrc` and `.bash_profile`), be careful of:

    1. **Aliasing important Linux commands**

        For example, the character `.` is a shortcut for `source`. If you do something like add `alias .=<command>` to your bashrc, you will lose basic functionality in the terminal, e.g., access to modules, virtual environments, etc. 

    2. **Recursively sourcing configuration files**

        If you add `source ~/.bashrc` or `source ~/.bash_profile` to your bashrc, then you will enter an infinite sourcing loop. This means when you try to log in, your terminal will freeze, then your access will be denied. 
    
    3. **Using `echo`**

        If you use CLI tools for data transfer, e.g. `scp` or `sftp`, they may require a "silent" terminal. If you're trying to initiate transfers and are getting the error "Received message too long", check your bashrc to make sure you aren't printing anything to the terminal. 
    
    4. **Removing your files**

        If you delete either your `~/.bashrc` or `~/.bash_profile`, you will lose access to `module` commands. 


## Environment Variables

Bash variables control how your environment is configured. For example: what executables, libraries, header files, etc. are findable by default; information about your Slurm job; MPI settings; GPU configuration; etc. To see all the environment variables that are defined for your session, try running the command ```env```.

An example of an important environment variable is ```PATH```. This is set to a ```:```-delimited list of paths that it uses to search for executables. You can see what it's set to by running ```echo $PATH```. Any time you run a command, for example ```ls```, that list is searched in order. To add new executables to your environment, you can add a path to ```PATH```. For example:

```
export PATH=/path/to/new/directory:$PATH
```

This is what modules do: they update your environment variables to put new software and libraries into your environment for use. Some examples of some important variables are listed below:

| Variable | Function |
|----------|----------|
| `PATH`   | A colon-delimited list of paths used to search for executables. When you run a command, such as `ls`, the directories listed in `PATH` are searched in order. |
| `LD_LIBRARY_PATH` | A colon-delimited list of directories in which the linker should search for shared libraries at runtime. Useful for specifying additional library directories for dynamically linked programs. For example: `export LD_LIBRARY_PATH=/path/to/library:$LD_LIBRARY_PATH` |
| `CFLAGS`, `CXXFLAGS`, `LDFLAGS` | Environment variables used to specify compiler flags for compiling C, C++, and linking respectively. These variables are often used to customize the build process of software. For example: `export CFLAGS="-O2 -march=native $CFLAGS"` |
| `CC`, `CXX`, `FC` | Environment variables specifying the C, C++, and Fortran compilers, respectively. These variables allow users to specify which compiler should be used during the build process of software. For example: `export CC=gcc` |
| `OMP_NUM_THREADS` | Specifies the number of OpenMP threads to use for parallelized programs. This variable controls the number of threads used in parallel regions of OpenMP-enabled programs. For example: `export OMP_NUM_THREADS=4` |

[Slurm also sets its own environment variables](../../running_jobs/batch_jobs/environment_variables/).

## Linux File Permissions

Linux file permissions control who can access files and directories and what they are able to do with them.

HPC users may find it useful or necessary to share files and/or directories with collaborators. To do this effectively, it may become necessary to familiarize yourself with the linux file permission system in order to give collaborators access to your files. 

### Types of Permissions

All files and directories on a Linux system have permissions defined for them. There are three types:

|Permission|Symbol|Directory meaning|File meaning|
|-|-|-|-|
|Read|```r```|Users can view the contents of the directory|Users can read the contents of a file|
|Write|```w```|Users can modify the contents of a directory|Users can write to a file|
|Execute|```x```|Users can ```cd``` into a directory|Users can directly execute a file|

When a permission is missing, you will see a ```-```


### Viewing Permissions
To see a file or directory's file permissions, run the command ```ls -l```. This will show you output that looks like the following:

<center><code style="background-color: #faca89;">-</code><code style="background-color: #fff0bf;">rwx</code><code style="background-color: #deffbf;">r-x</code><code style="background-color: #bffff6;">---</code><code> 1 </code><code style="background-color: #fff0bf;">username</code><code> </code><code style="background-color: #deffbf;">groupname</code><code> 0 Feb 27 09:54 file</code></center>

|String|Access Group|Meaning|
|-|-|-|
|<code style="background-color: #faca89;">-</code>|Tells you whether this item is a regular file (```-```), directory (```d```), or link ```(l)```|In this example, we're looking at a regular file|
|<code style="background-color: #fff0bf;">rwx</code>|This describes the permissions that are set at the user level. In this case, they apply to the user with the username <code style="background-color: #fff0bf;">username</code>. Your username is your NetID| In this example, the file's owner can read, modify, and execute this file.|
|<code style="background-color: #deffbf;">r-x</code>|This describes the permissions that are set at the group level. In this case, they apply to anyone who is a member of the group <code style="background-color: #deffbf;">groupname</code>. To see your groups you're a member of, run the command ```groups```.|In this example, group members are allowed to see and execute the contents of this file, but they cannot modify it. 
|<code style="background-color: #bffff6;">---</code>|This describes the permissions that are set for anyone else on the system.|In this example, the rest of the HPC community can't see or edit the contents of this file and can't execute it|

### Changing Permissions

!!! tip "Permissions changes limitations"
    Only the owner of a file or directory can change its permissions. 

To change the permissions of a file or directory, you can use the command `chmod`. This command accepts two types of input: symbolic and octal.

#### Symbolic

Symbolic notation is the most intuitive to understand. It involves a comma-delimited list of permissions symbols, each representing a specific permission type (read, write, execute) for a particular user or group. Here's a breakdown of the symbols used:

|Symbol|Meaning|
|-|-|
|`u`|"User". Refers to the user who owns the file.|
|`g`|"Group". Refers to the group that the file belongs to.|
|`o`|"Other". Refers to other users who are not the owner or in the group.|
|`a`|"All". Refers to all users (`u`, `g`, and `o`).|

For each of these, you can use `+` to add a permission, `-` to remove a permission, or `=` to set the permissions explicitly. The permission symbols are: `r`,`w`, and `x` and match those described under [Types of Permissions above](#types-of-permissions).

The general syntax is

```
chmod [who][operator][permissions]
```

Here are some examples of how you might use symbolic notation with the `chmod` command:

- To give the owner read and write permissions: `chmod u+rw file.txt`
- To remove execute permissions for the group: `chmod g-x file.txt`
- To give all users read and execute permissions without write permissions: `chmod a=rx file.txt`

#### Octal

Octal notation is a more compact way of representing permissions using numbers. Each permission type (read, write, execute) is assigned a numeric value:

- `4` for read permission.
- `2` for write permission.
- `1` for execute permission.

To set permissions, you add these values together for each permission type. For example:

- Read and write permissions: `4 (read) + 2 (write) = 6`
- Execute permission only: `1 (execute)`

You then represent the permissions for the user, group, and others as a three-digit number. For instance:

- `600` gives read and write permissions to the owner and no permissions to the group and others.
- `755` gives read, write, and execute permissions to the owner, and read and execute permissions to the group and others.

To use octal notation with the `chmod` command, you specify the permissions directly as numbers. For example:

- `chmod 600 file.txt`
- `chmod 755 file.txt`

These commands will set the permissions of `file.txt` accordingly.

### Changing Group Ownership

!!! tip "Ownership changes limitations"
    * Only the owner of a file or directory can change its group ownership
    * Users can't change the **user** ownership of a file. This is because this requires administrator privileges. User ownership changes can be requested from our consulting team. 

To change the group ownership of a file or directory, you can use ```chgrp```. For example:

```
chgrp groupname /path/to/file
```

## Compression and Archiving 

!!! tip
    For very large directories, use the file transfer node. Hostname: ```filexfer.hpc.arizona.edu```

Are you planning on transferring files to or from HPC? Do you have a lot of them? Then archiving is for you! 

Archiving files is the process of consolidating one or more files or directories into a single, compressed package or archive file. This simplifies data management, reduces storage space, and streamlines file transfer and backup operations. Transferring a single archived file to an external backup location my result in transfer speeds that are an order of magnitude faster than transferring the same data as an uncompressed directory with thousands (or sometimes millions) of files.

As an example, we'll use the archiving tool ```tar```. The syntax to create an archive is 
```
tar <options> <output_archive_name> <contents>
``` 

We'll use the options ```czvf``` which stands for:

* ```c```: Create a new archive
* ```z```: Filter the archive through gzip
* ```v```: Verbosely print the output of the archiving process. Optional
* ```f```: User archive file

Archiving a directory ```dir``` and its contents into a single file called ```dir.tar.gz``` then looks like:

```
(puma) [user@wentletrap archiving_example]$ tar czvf dir.tar.gz dir
dir/
dir/subdir1/
dir/subdir1/file.txt
dir/file1.txt
dir/file3.txt
dir/file2.txt
(puma) [user@wentletrap archiving_example]$ ls
dir  dir.tar.gz
```

To unpack this archive, change the ```c``` to an ```x``` which stands for "extract":

```
tar xzvf dir.tar.gz
```