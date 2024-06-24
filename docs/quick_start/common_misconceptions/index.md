<link rel="stylesheet" href="../../assets/stylesheets/buttons.css">
# Common Misconceptions

!!! tip "Both experienced and novice users may benefit from reading through these common misconceptions."

??? danger "Do not run computations on the login nodes." 
    See [Running Jobs](../../running_jobs/overview/) for detailed instructions on the proper way to run computationally intensive tasks. 

**If I move my code to HPC, it will automatically run faster**

You might be surprised to learn that if you move code from a local computer to a supercomputer, it will not automatically run faster and may even run *slower*. This is because the power of a supercomputer comes from the volume of resources available (compute nodes, CPUs, GPUs, etc.) and not the clockspeed of the processors themselves. Performance boosts come from optimizing your code to make use of the additional processors available on HPC, a practice known as parallelization.

Parallelization enables jobs to "divide-and-conquer" independent tasks within a process when multiple threads are available. In practice, this typically means running a job with multiple CPUs on the HPC. On your local machine, running apps like your web browser is natively parallelized, meaning you don't have to worry about having so many tabs open. However, on the HPC, {==parallelization must almost always be explicitly configured and called from your job.==} This process is highly software-dependent, so you'll want to research the proper method for running your program of choice in parallel. 


**If I allocate more CPUs to my job, my software will use them**

Running a job with a large number of CPUs when the software has not been configured to use them is a waste of your allocation, your time, and community resources. Software needs to be designed to use multiple CPUs as part of its execution. You will need to ensure your software has the capability to make use of multiple CPUs for it to be able to take advantage of additional hardware. The job scheduler only provides the resources, the code itself is what needs to know how to make use of them.

**All nodes on a supercomputer are the same**

Navigating the HPC means being aware of the different types of nodes you can land on. For example, the login node is available to all users by default upon login, and is designed for managing and editing files. However, it is not designed to run production computations. Running jobs that are too computationally intensive on the login node can severely impact performance for other users. Such jobs will be noticed and stopped by the HPC systems team.

Types of nodes on the UArizona HPC system include the Bastion Host, the Login Node, the Compute Nodes, and the Data Transfer Node. See [Compute Resources](../../resources/compute_resources/) for information on the compute hardware available.


**As a user I (am)(am not) allowed to install my own software**

Well, it depends. Users can create custom environments and install packages for languages like Python and R by using their built-in package managers. Users are even encouraged to download software from GitHub or other repositories and compile it themselves (provided it is done on a compute node). However, system-wide modules are generally taken care of by the HPC team. If you would like something to be installed as software available to all HPC users, you can make a request through [ServiceNow](https://uarizona.service-now.com/sp?id=sc_cat_item&sys_id=2983102adbd23c109627d90d689619c6&sysparm_category=84d3d1acdbc8f4109627d90d6896191f). But, if you would like something to be installed for personal use, or use between members of your group, you are encouraged to install it in one of your shares on the HPC filesystem. 

<html>
<div class="button-container">
    <a href="/quick_start/what_is_hpc/"><button class="left-button"></button></a>
    <a href="/quick_start/logging_in/"><button class="right-button"></button></a>
</div>
</html>
