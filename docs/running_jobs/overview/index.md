# Overview

HPC operates as a shared system with resources in high demand. Computational tasks must be executed as jobs on dedicated compute resources. These resources are granted to each user for a limited time per session, and sessions are organized by [Slurm](https://slurm.schedmd.com/), an open source, fault-tolerant, and highly scalable cluster manager and task scheduler. Users can interact with Slurm via an internet browser through [Open OnDemand](https://ood.hpc.arizona.edu), or via an [SSH connection](../../registration_and_access/system_access/#command-line-access) to one of the login nodes to start an [interactive job](../interactive_jobs/) or [submit a batch job](../batch_jobs/intro/). 

## New to HPC?

If you are new to the UArizona HPC system, or to HPC systems in general, we recommend reviewing our [quick start guide](../quick_start/) before getting into the details of running jobs. You may also want to take a look at our workshops which cover topics including [introduction to HPC](../../events/workshop_materials/intro_to_hpc/), [parallel computing](../../events/workshop_materials/intro_to_parallel_computing/), and [containers](../../events/workshop_materials/intro_to_containers/), among other topics. 


## Best Practices

!!! danger "Do not run jobs on Login Nodes"

    A login node serves as a staging area where you can perform housekeeping work, edit scripts, and submit job requests for execution on one/some of the cluster’s compute nodes. It is important to know that **the login nodes are not the location where scripts are run**. Heavy computation on the login nodes slows the system down for all users and will not give you the resources or performance you need. Additionally, modules are not available on the login nodes. 

    Tasks run on the login nodes that impact usability will be identified and cancelled by HPC infrastructure without warning. 

When creating a job request, please keep the following in mind:

- [x] **Don't ask for more resources than you really need.**

    The scheduler will have an easier time finding a slot for the two hours you need rather than the 48 hours you request.  When you run a job it will report back on the time used which you can use as a reference for future jobs. However don't cut the time too tight.  If something like shared I/O activity slows it down and you run out of time, the job will fail.

    Additionally, please do not request more CPUs than you plan to use. Increasing the number of CPUs without a clear plan of how your software is going to use them will not result in faster computation. Unused CPUs in a job represent wasted system resources, and will cost more CPU-hours to your allocation than you actually needed to spend. 

- [x] **Test your submission scripts.**

    Start small. You can use an [interactive session](../interactive_jobs/) to help build your script and run tests in real time.

- [x] **Respect memory limits.** 

    If your application needs more memory than is available, your job could fail and leave the node in a state that requires manual intervention. The failure messages might reference '''OOM''' which means '''Out Of Memory'''

- [x] **Do not run loops automating a large number of job submissions.** 

    Executing large numbers of job submissions in rapid succession (e.g. in a scripted loop) can overload the system's scheduler and cause problems with overall system performance. Small numbers of automated jobs may be acceptable (e.g. less than 100), but a better alternative in almost all cases is to [use job arrays](../batch_jobs/array_jobs/) instead.

- [x] **Hyperthreading is turned off.**  

    Running multiple threads per core is generally not productive.  MKL is an exception to that if it is relevant to your workflow. Instead, running one thread per core and using multiple cores (i.e. "multiprocessing" rather than "multithreading") is a suggested alternative.

- [x] **Open OnDemand Usage**

    Please be mindful of other users' needs and avoid monopolizing resources for extended periods when they are not actively being utilized. In practice, this means actively terminating sessions when you are finished rather than leaving the session open. Closing the browser tab does **not** terminate the session. This ensures fair access for all members of our community and promotes a collaborative environment, and ensures you are only charged for the time you actually used.

## Frequently Asked Questions 

Below is a FAQ that includes answers to common questions and misconceptions about running jobs on HPC. Some are general information about HPC systems, but some contain information specific to the UA HPC. We recommend reviewing this FAQ whether you are a new user getting started on our system, or an experienced user returning to our documentation.

<html>
<link rel="stylesheet" href="../../assets/stylesheets/animated_dropdown.css">

<button class="collapsible">What is a Job?</button>
<div class="content">
    <p>A single instance of allocated computing resources is known as a Job. Jobs can be in the format of a graphical <a href="../open_on_demand/">Open OnDemand application</a> instance, <a href="../interactive_jobs/">interactive</a> terminal session, or <a href="../batch_jobs/intro/">batch submission</a> (a script scheduled for  execution at a later time), and require an active allocation of CPU-time under an associated PI account. See <a href="../../resources/allocations/">Time Allocations</a> for more information.
    <br>
    </p>
</div>

<button class="collapsible">How much am I charged for a job?</button>
<div class="content">
    <p>Each PI group is given a free monthly allocation of CPU hours on each cluster (see <a href="../../resources/allocations/">Time Allocations</a> for more information). The amount charged to this allocation is equal to the number of CPUs used for a job multiplied by its total run time in hours. 
    <br>
    </p>
</div>

<button class="collapsible">How many jobs can I run?</button>
<div class="content">
    <p>Each user can submit a maximum of 1000 jobs per cluster, and there are further limits on memory, CPUs, and GPUs concurrently used per group. More information is available at <a href="../job_limits/">Job Limits</a>. If you intend to submit a large number of jobs, especially if they are similar, they should be submitted as <a href="../batch_jobs/array_jobs/">array jobs</a>.
    <br>
    </p>
</div>

<button class="collapsible">How much memory can I request?</button>
<div class="content">
    <p>The total amount of memory assigned to a job <a href="../cpus_and_memory/">depends on the number of CPUs</a> assigned to a job. Memory is physically mounted to the CPUs, so there is a fixed amount available to the job equal to the memory of a single CPU multiplied by the number of CPUs. For example, if there is 64GB of memory and 16 cores the ratio is always 4GB per core. You can ask for less, but never more.
    <br>
    </p>
</div>

<button class="collapsible">What compute resources are available on each cluster?</button>
<div class="content">
    <p>We have three clusters available for use: Puma, Ocelote, and El Gato. See <a href="../../resources/compute_resources/">Compute Resources</a> for details on each.
    <br>
    </p>
</div>

<button class="collapsible">I submitted a job request, but it isn't running yet. Why?</button>
<div class="content">
    <p>Job requests go to our task scheduler, Slurm, which manages all incoming job requests and determines the optimal order to run them in order to maximize the efficiency of the system. The amount of wait time for your job depends on the number and size of jobs before your job in the queue; the amount of compute resources requested by your job; and the requested wall time for your job. Variation in wait times is a natural consequence of this system. Typically, our most advanced cluster, Puma, experiences longer wait times due to increased usage. Smaller or interactive jobs are recommended to run on Ocelote or El Gato. 
    <br>
    </p>
</div>

<button class="collapsible">Why is my job running slower on the HPC than on my laptop?</button>
<div class="content">
    <p> The strongest use cases for HPC are either running more jobs or larger jobs than your laptop. The advantages come from running jobs in parallel or parallelizing your code. A job that runs well on your laptop could be slower on HPC because you are waiting for other jobs to end or you havent taken advantage of the parallel features of HPC. See <a href="../parallelization/">Parallelization</a> for more info. 
    <br>
    </p>
</div>

<button class="collapsible">I need some software to run my analysis, can you install it for me?</button>
<div class="content">
    <p>First, check our list of installed software by accessing an <a href="../interactive_jobs/">interactive terminal session</a>, then <a href="../../software/modules/">using module commands</a> to check for your software. If you do not see your desired software package there, then there are two options. 
    <ol>
      <li> You can attempt to <a href="../../software/user_installations/">install the software for yourself</a> in one of your own directories.</li>
      <li> Or you can request HPC Consult to install the software as a system module.</li>
    </ol>
    </p>
    <p> Many programs can be installed with option 1 by users without root privileges, especially packages that are available via package managers like Pip, Conda, and CRAN. Most software like this does not make sense to install as a system module since it is generally easy to install on a per-user basis. Other software that is not available through package managers might be able to be installed by downloading and compiling the source code in one of your folders. The complexity of this process varies greatly from software to software, so if you run into any trouble while doing this, feel free to <a href="../../support_and_training/consulting_services/">contact HPC Consulting</a> for support. 
    <br>
    </p>
    <p> For information on what's appropriate to install as a system module, see our <a href="../../software/overview/#policies">software policies guide</a>. 
    <br>
    </p>
</div>

<script src="../../assets/javascripts/animated_dropdown.js"></script>
</html>








