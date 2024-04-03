# Overview

In addition to compute resources, the HPC system also provides access to various storage options, and data transfer methods. Data management is a crucial part of every workflow, so we provided tools and recommended practices to help you with this process.

## Storage Summary

The main storage array that is accessible to the HPC is the [Primary HPC Storage](../storage/hpc_storage/), which provides 3 shares, all accessible from both login and compute nodes. 

* ```/home/u<NM>/<netid>/``` provides 50 GB of storage for the user in their home directory. Note that '```u<NM>```' refers to the various user parent directories such as ```u16```. To find this directory, simply SSH into a login node, and type ```pwd```, since it is the default directory.

* ```/groups/<pi-netid>/``` provides 500 GB of storage to each PI group, to be shared among members.

* ```/xdisk/<pi-netid/``` provides up to 20 TB of storage to each PI group, to be shared among members. Xdisk shares are not provided by default and must be requested by the PI through the [HPC user portal](https://portal.hpc.arizona.edu). Xdisk shares are also subject to a 300 day expiration cycle. 

!!! Tip "Check your disk usage"

	To check the usage of each of these shares, run the command ```uquota``` from a login node. 

Additional storage options, such as rental, Tier 2 AWS Glacier, Google Drive, and more are detailed in the **Storage** tab to the left. 

## Transfer Summary

There are many different utilities available to transfer files to and from the HPC filesystem. Details are given under the **Transfers** tab to the left, and the most popular options are summarized below. 

* **Open OnDemand**

	Use the browser to navigate, upload, and download. File size limit of 64 MB applied to uploads. 

* **Globus** 

	A powerful browser tool to automate transfers. 

* **Command Line Utilities**

	The familiar options of ```scp```, ```rsync``` and more are available to initiate transfers through the command line.

## Best Practices

The shared file system on HPC is the location for everything in ```/home```, ```/groups```, and ```/xdisk```. The ```/tmp``` directory is also available to users, and refers to the local disk on each node. Your I/O activity can have dramatic activity on other users. Extreme read/write activity can cause bottlenecks and may be cancelled without warning. It is generally best to limit I/O whenever possible to avoid straining the system. The HPC consult team is available to help optimize workflows that may be impacted by I/O. 
    
* **Be aware of I/O load.**
    
	Running multiple instances of jobs performing significant I/O activity may be detrimental to the system, especially if these occur within the same subdirectories. It may be best to read in data at the beginning of a workflow, perform the entire analysis, then write at the very end. Reconfiguring your workflow to limit I/O may cost some time up front, but will most likely be made back through faster job completion. 

    If you are running *array jobs*, please be cognizant of your I/O activity.

* **Use the file transfer nodes for large data transfers**

	Login and compute nodes are not designed for large file transfers and transfers intiated here may result in network problems. The data transfer nodes (DTNs) are specifically set up for moving large amounts of data and are accessible via the hostname `filexfer.hpc.arizona.edu`.

* **Use /tmp for working space**

	If you have multiple jobs that will use the same data, consider copying it to ```/tmp``` and run multiple jobs. This can increase performance and reduce I/O load.

* **Avoid storing many files in a single directory**

	Hundreds of files is probably ok; tens of thousands is not.    

* **Avoid opening and closing files repeatedly in tight loops**

	If possible, open files once at the beginning of your workflow/program, then close them at the end.
     
* **Watch your quotas**

	You are limited in capacity and file count. Use ```uquota```. In ```/home``` the scheduler writes files in a hidden directory assigned to you.

* **Avoid frequent snapshot files**
  
	This can stress the storage.

* **Limit file copy sessions**

	You share bandwidth with others. Two or three scp sessions are probably ok; > 10 is not.
    
* **Consolidate files**

	If you are transferring many small files, consider collecting them in a [tarball](https://www.freecodecamp.org/news/how-to-compress-files-in-linux-with-tar-command/) first.

* **Use parallel I/O**

	Some modules enable parallelized file operations, such as ```phdf5```
