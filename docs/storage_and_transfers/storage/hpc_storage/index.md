# HPC Storage 

## Overview

!!! danger "Data on HPC are not backed up"
    For information on our data policies, see the section [Storage Expectations and Policies](#storage-expectations-and-policies) below.

The University’s Research Data Center provides data storage for active analysis on the high-performance computers (HPCs). Using central computing storage services and resources, researchers are able to:

* Share research data in a collaborative environment with other UArizona affiliates on the HPC system.
* Store large-scale computational research data.
* Request additional storage for further data analysis.

All clusters share access to the same mounted HPC storage, so your files are available regardless of which cluster you’re using.

Every user has access to individual and shared storage on the system where they can host data for active analyses. A summary of these locations is shown below:

|<div style="width:130px">Path</div>|Description|<div style="width:120px">Quota</div>|Duration|
|-|-|-|-|
|```/home/uxx/netid```|An individual storage allocation provided for every HPC user|50 GB|Accessible for the duration of user's account|
|```/groups/pi_netid```|A communal storage allocation provided for every research group|500 GB|Accessible for the duration of a PI's account|
|```/xdisk/pi_netid```|Temporary communal storage available for every group on request. [See xdisk section below](#xdisk) for details.|200 GB to 20  TB|Up to 300 days|
|```/tmp```|Local storage available on individual compute nodes.|$<$ 800 GB to 1.4 TB|Only accessible for the duration of a job's run|

!!! tip "Managing permissions"
    If you're working with other members of your group and need to make your files more accessible, see our [bash cheat sheet](../../../support_and_training/cheat_sheet/#linux-file-permissions). This offers an overview on Linux file permissions, ownership, and some tips for working with collaborators. 

## Storage Expectations and Policies

Our HPC storage array is designed for high performance, not long-term storage. It is built entirely on high-speed flash, which is significantly more expensive and limited in capacity than typical archival storage.

1. **{==Important: Your Data are Not Backed Up==}**

    Data stored on our system are not backed up. While we strive for high reliability, we cannot guarantee data recovery in the event of hardware failure, accidental deletion, or account termination.

    In particular:

    * Users are responsible for making their own backups of important data to alternative storage for archival purposes. Examples include our [rental](../rental_storage/) or [AWS](../tier2_storage/) offerings, local lab storage, external hard drives, university storage services, among others. 

    * Data will be deleted when a user’s affiliation ends (e.g., graduation, job change, retirement), in accordance with our [data retention policy](../../../policies/loss_of_university_affiliation/).

2. **HPC Storage is Not Infinite**

    Because our flash-based storage is optimized for performance, we rely on all users to perform regular housekeeping to manage their storage usage. Assuming infinite space can lead to full filesystems, which can cause system-wide slowdowns or failures.

    Please:

    * Perform periodic housekeeping. 

    * Avoid accumulating redundant or outdated datasets.

    * Use alternative storage for archival purposes.

If you're unsure about how to move or back up your data, or would like recommendations, don’t hesitate to [contact support](../../../support_and_training/consulting_services/).

## Best Practices

The shared file system on HPC is the location for everything in ```/home```, ```/groups```, and ```/xdisk```. The ```/tmp``` directory is also available to users, and refers to the local disk on each node. Your I/O activity can have dramatic activity on other users. Extreme read/write activity can cause bottlenecks and may be cancelled without warning. It is generally best to limit I/O whenever possible to avoid straining the system. The HPC consult team is available to help optimize workflows that may be impacted by I/O. 
    
- [x] **Be aware of I/O load.**
    
	Running multiple instances of jobs performing significant I/O activity may be detrimental to the system, especially if these occur within the same subdirectories. It may be best to read in data at the beginning of a workflow, perform the entire analysis, then write at the very end. Reconfiguring your workflow to limit I/O may cost some time up front, but will most likely be made back through faster job completion. 

    If you are running [array jobs](../../../running_jobs/batch_jobs/array_jobs/), please be cognizant of your I/O activity.

- [x] **Use /tmp for working space**

	If you have multiple jobs that will use the same data, consider copying it to ```/tmp``` and run multiple jobs. This can increase performance and reduce I/O load.

- [x] **Avoid storing many files in a single directory**

	Hundreds of files is probably ok; tens of thousands is not.    

- [x] **Avoid opening and closing files repeatedly in tight loops**

	If possible, open files once at the beginning of your workflow/program, then close them at the end.
     
- [x] **Watch your quotas**

	You are limited in capacity and exceeding your storage quotas may have unintended side effects (e.g., login issues, data loss, or failed jobs). See the section below on checking your storage usage.

- [x] **Avoid frequent snapshot files**
  
	This can stress the storage.

- [x] **Use parallel I/O**

	Some modules enable parallelized file operations, such as ```phdf5```.

## Checking Your Storage Usage

=== "Command Line"
    To check your storage usage, on a compute node, file transfer node, or login node, use the command ```uquota```. This will show you all the spaces you have access to, their quotas, and current usage.
    ```
    (puma) [netid@junonia ~]$ uquota
                                            used  soft limit  hard limit
    /groups/pi_netid                            6.6G      500.0G      500.0G
    /home                                      37.1G       50.0G       50.0G
    /xdisk/pi_netid                            12.9G        9.8T        9.8T
    ```
    
=== "User Portal"
    You can check your storage allocation through our [online user portal](https://portal.hpc.arizona.edu/portal/) by navigating to the **Storage** tab and clicking **Check Disk Quotas**:
    
    <img src="images/check_storage_quota.png" title="User portal storage tab" style="width:800px; box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);">


------

## Home Directory Storage Management

Because home directories are limited to 50 GB, it can be easy for them to fill up leading to issues like the inability to use X11 forwarding, OnDemand access issues, job failures, and more. 

Below are some tips for managing your home directory's quota and tracking down usage.

### What's Using the Space?

Users may not be aware of [hidden files and directories](../../../support_and_training/cheat_sheet/#hidden-files-and-directories) in their home, often created automatically by software or package managers. These can take up a surprising amount of space over time. You can view the sizes of all of the objects in your home, including hidden objects, with the command:

```bash
cd ~
du -sh $(ls -A ~)
```

Common culprits to look out for include `~/.cache`, `~/.conda`, `~/.local`, `~/.singularity`, and `~/.apptainer`. 

#### Graphical Disk Utility

A recently added tool called `gdu` provides an interface within the terminal that allows users to navigate through folders using the arrows to interactively assess disk usage. It is activated with the simple command `gdu` and is available on login nodes and the file transfer node. It will scan the current folder by default, but a path can be specified with `gdu /path/to/location`.

<figure markdown="span">
  ![gdu demo](./images/gdu.gif){ align=right }
  <figcaption>Demonstration of using <code>gdu</code> to identify large files in the home directory</figcaption>
</figure>

### Cache Directories

Cache directories frequently contain cache files used for performance improvements. For example, the directory `~/.cache/pip` stores pip cache files to speed up package installations. These directories may start out small, but they can balloon over time. In particular, RStudio, Apptainer, and HuggingFace, the latter of which stores its large datasets under `~/.cache/huggingface`.

Often, software provides ways to redirect cache files to a new system location using [environment variables](../../../support_and_training/cheat_sheet/#environment-variables). By setting these [in your ~/.bashrc](../../../support_and_training/cheat_sheet/#configuration-files), you can ensure that your cache files will always go to an appropriate location.

#### Common Cache Environment Variables

|<div style="width: 150px;">Environment Variable</div>|<div style="width: 150px;">Default Location</div>|Usage|
|-|-|-|
|<pre><code>APPTAINER_CACHEDIR</code></pre>|`~/.apptainer`|Location for where to store cached apptainer files.|
|<pre><code>PIP_CACHE_DIR</code></pre>|`~/.cache/pip`|Defines the location for [pip's cache directory](https://pip.pypa.io/en/stable/topics/caching/).|
|<pre><code>RSTUDIO_DATA_HOME</code></pre>|`~/.local/share/rstudio`|Storage for RStudio cache files (including saved and active sessions). This directory can get very large, depending on the work you are doing.|
|<pre><code>HF_HOME</code></pre>|`~/.cache/huggingface/datasets`|Relocates HuggingFace cache and dataset files. See [their cache documentation](https://huggingface.co/docs/datasets/en/cache) for more information.|

#### Example of Cache Relocation

The typical method for relocating a cache is to move the existing directory to a new location that has more space (`/groups` or `/xdisk`), then set the corresponding cache variable (if one exists) to that new location.

For example, say you found RStudio's cache files were taking up a lot of space in your home (typically found under `~/.local/share/rstudio`). To change this location, you could move the default directory to a new location:

```bash
mkdir -p /groups/<pi_netid>/<your_netid>/cache_files
mv ~/.local/share/rstudio /groups/<pi_netid>/<your_netid>/cache_files/rstudio
```

Then, set the corresponding environment variable in your `~/.bashrc` to point to that new path. In this case, the line to add would be:

```bash
export RSTUDIO_DATA_HOME=/groups/<pi_netid>/<your_netid>/cache_files/rstudio
```





-----

## xdisk
 
### What is xdisk?

xdisk is a temporary storage allocation available to all faculty members (PIs) and offers up to 20 TB of usable space for their group for up to 300 days. PIs may only have one active xdisk at a time.

A PI can request an allocation either via the command line or through our web portal (no paperwork necessary!). Only PIs may request, alter, or delete an allocation from the command line. However, members of their research group may be [delegated management rights](../../../registration_and_access/group_management/#delegating-group-management-rights) allowing them to manage a group's xdisk on their PI's behalf through our web portal.

Once an xdisk allocation is created, it is immediately available for use. Groups can find their allocations under ```/xdisk/pi_netid```. By default, a subdirectory is created for each group member under ```/xdisk/pi_netid/netid```. If a group member is added after the allocation is created, a directory is not automatically created for them. To add one, [reach out to our consultants](../../../support_and_training/consulting_services/).

{==Because xdisk allocations are temporary, they will be removed as soon as their time limit is reached==}. Warnings will be sent to every group member at their netid@arizona.edu addresses beginning one month before the expiration. It is the group's responsibility to renew xdisk allocations or copy files to an alternate storage location prior to the expiration date. Once an xdisk allocation expires, the contents are deleted. 

PIs may request a new xdisk allocation immediately after their previous one has expired. This ensures groups will always have access to increased storage on HPC on a rolling basis with the requirement that housekeeping be done once per academic year. 

### Requesting, Modifying, and Deleting an Allocation

!!! warning "XDisk management is limited to PIs and delegates"
    Only PIs and trusted delegates can create, delete, and modify xdisk allocations. The CLI interface is restricted to PIs only. Delegates may manage their groups allocation through the user portal. For more information on adding group delegates and how they can use the portal on their PI's behalf, see: [Delegating Group Management Rights](../../../registration_and_access/group_management/#delegating-group-management-rights). 

#### User Portal

[User Portal](https://portal.hpc.arizona.edu/portal){ .md-button }

=== "Requesting an Allocation"
    !!! warning
        If a group has an active xdisk allocation, a new one cannot be created until the active allocation expires or is deleted.
    
    PIs or delegates can request an xdisk allocation at any time through the [**user portal**](https://portal.hpc.arizona.edu/portal). On that page, under the **Storage** tab, select **Create XDisk**
    
    <img src="images/create-xdisk.png" title="Manage xdisk" style="width:800px; box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);">
    
    This will open a web form where you can enter your size and duration requirements in GB and days, respectively. The maximum size that can be requested is 20000 GB and the maximum duration is 300 days. In addition, specify the desired group ownership for the allocation from the **Group** dropdown menu This will determine file permissions and who has access. Once you click :material-plus-circle-outline:, your allocation should immediately be available.
    
    <img src="images/create-xdisk-form.png" title="Request new xdisk" style="width:800px; box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);">

=== "Modifying an Allocation"

    PIs or delegates may manage their xdisk allocation at any time through the [**user portal**](https://portal.hpc.arizona.edu/portal). On that page, under the **Storage** tab, either select **Update XDisk Size** or **Update XDisk Duration**, depending on the property you would like to update.
    
    <img src="images/manage_xdisk.png" title="Manage xdisk" style="width:800px; box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);">
    
    This will open a form which will allow you to modify the size and duration of your xdisk. Xdisk allocations cannot be increased beyond 20000 GB and the maximum duration of 300 days. Note: the **Group** field may only be modified at the time of the allocation's creation.
    

=== "Deleting an Allocation"
    PIs or delegates may delete their xdisk allocation at any time through the [**user portal**](https://portal.hpc.arizona.edu/portal). On that page, under the **Storage** tab, select **Delete XDisk**
    
    <img src="images/delete-xdisk.png" title="Delete xdisk" style="width:800px; box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);">
    
    Clicking this link will open a window with a prompt. Type **confirm** and then select :material-trash-can: to complete the process.
    
    <img src="images/confirm-delete.png" title="Confirm xdisk deletion" style="width:800px; box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);">
    
    If you would like to request a new xdisk, you may do so as soon as the request is processed. Note: sometimes processing the request can take a few minutes, depending on the number of files and the size of the allocation.
    
#### CLI Commands (PIs only)

!!! warning
    The xdisk CLI commands are usable by PIs only. Group delegates can manage allocations via the user portal after switching to their PI's account.
    
`xdisk` is a locally written utility for PI's to create, delete, resize, and extend xdisk allocations. Any PIs who wish to utilize the CLI to manage their allocations can do so using the syntax shown below:



|xdisk Function|Command|Examples|
|-|-|-|
|Display xdisk help|<pre><code>xdisk -c help</code></pre>| <pre><code>$ xdisk -c help</code></pre>|
|View Current Information|<pre><code>xdisk -c query</code></pre>|<pre><code>$ xdisk -c query<br>XDISK on host: ericidle.hpc.arizona.edu<br>Current xdisk allocation for &#60;pi_netid&#62;:<br>Disk location: /xdisk/&#60;pi_netid&#62;<br>Allocated size: 200GB<br>Creation date: 3/10/2020 Expiration date: 6/8/2020<br>Max days: 45    Max size: 1000GB</code></pre>|
|Create an xdisk|<pre><code>xdisk -c create -m [size in gb] -d [days]</code></pre>|<pre><code>$ xdisk -c create -m 300 -d 30<br>Your create request of 300 GB for 30 days was successful.<br>Your space is in /xdisk/&#60;pi_netid&#62;</code></pre>|
|Extend xdisk Expiration Date|<pre><code>xdisk -c expire -d [days]</code></pre>|<pre><code>$ xdisk -c expire -d 15<br>Your extension of 15 days was successfully processed</code></pre>|
|Resize an xdisk Allocation|<pre><code>xdisk -c size -m [size in gb]</code></pre>|<pre><code>$ # Assuming an initial xdisk allocation size of 200 gb<br>$ xdisk -c size -m 200<br>XDISK on host: ericidle.hpc.arizona.edu<br>Your resize to 400GB was successful<br>$ xdisk -c size -m -100<br>XDISK on host: ericidle.hpc.arizona.edu<br>Your resize to 300GB was successful</code></pre>|
|Delete an xdisk Allocation|<pre><code>xdisk -c delete</code></pre>|<pre><code>$ xdisk -c delete`<br>Your delete request has been processed</code></pre>|
