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






