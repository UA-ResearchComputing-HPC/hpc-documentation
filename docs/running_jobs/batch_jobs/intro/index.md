<link rel="stylesheet" href="../../../assets/stylesheets/tables.css">
<link rel="stylesheet" href="../../../assets/stylesheets/code.css">

<link rel="stylesheet" href="../../../assets/stylesheets/images.css">
# Introduction to Batch Jobs

???+ link "You may also be interested in:"
    
    - [Standard Practices](../../policies/standard_practices/index.md) - important policies, recommendations, and helpful tips 
    - [Compute Resources](../../resources/compute_resources/) - details on the number and type of compute nodes
    - [Resource Optimization](../../running_jobs/resource_optimization) - improve the efficiency of your jobs on HPC
    - [Frequently Asked Questions](../../support_and_training/faqs/) - solutions to common issues

## What are Batch Jobs?

Batch jobs differ from [interactive jobs](../../interactive_jobs/) and [graphical jobs](../../open_on_demand/#interactive-graphical-applications) because they do not require user input while running. Instead, the user writes a script containing the instructions (code) that is sent to a compute node via the scheduler (Slurm). This allows your workflow to run automatically without you needing to be physically present. Here are a few benefits of using batch jobs:

1. **No Need to Stay Logged In**: You don’t have to remain logged into the HPC system for your work to continue. This avoids potential issues like your terminal timing out, local internet disruptions, or your computer going to sleep—all of which could prematurely end your analysis, especially for long-running jobs.

2. **Submit Many Jobs at Once**: Some workflows require running hundreds or thousands of analyses. For example, you might want to run the same script with different input values multiple times. Doing this interactively could be cumbersome or even impossible. Batch jobs can [easily handle this use case](../array_jobs/).


## Batch Job Workflow and Analogy

<img class="img-right" src="images/post-and-factory.jpg" title="Post office and factory" alt="post office and factory" width="250px" style="margin: 10px;">

Think of a batch job like a researcher who wants something custom-made at a factory. There are a few steps they need to take:

1. **Get the Address**: First, they need to know where the factory is so they can contact the right person to make their request.
2. **Provide Instructions**: Next, they need to write instructions, or schematics, for the person who will do the manufacturing.
3. **Send the Instructions**: Finally, they need to send these instructions to the factory so the builder can receive them and start working.

We'll continue with this analogy, breaking down each step in more detail below.


## Batch Scripts

When you want to run analyses in batch mode, you need to inform the system of two things:

1. **What Resources You Need**: This includes specifying the number of CPUs, the amount of memory, GPUs, and other resources necessary to run your work. These instructions guide the system in selecting the appropriate compute resources and target compute nodes for your workflow. Continuing with our factory analogy, these resources can be thought of as the postal address on the outside of the envelope.

2. **The Instructions to Execute**: This is a list of commands that the compute node will follow once your workflow starts. These commands are written in Bash and include everything you would normally type on the command line if you were running your work interactively. For example, you would `cd` to the relevant working directory, `module load` any required software, `source` virtual environments, and so forth. In our analogy, these commands are like the schematics inside the envelope that you're sending to the factory.

### Batch Script Structure

A batch script is a text file that is written with three sections:

<html>
<div class="table-container">
<table cellspacing="0" cellpadding="0" align="right" >
    <tr>
        <td style="background-color: #d7fbff;"><pre>#!/bin/bash</pre></td>
    </tr>
    <tr>
        <td style="background-color: #e6fff2;"><pre>#SBATCH --option=value</pre></td>
    </tr>
    <tr>
        <td style="background-color: #feffe6;"><pre>[code here]</pre></td>
    </tr>
</table>
</div>
</html>

1. <mark style="background-color: #d7fbff;">The "**shebang**"</mark> will always be the line ```#!/bin/bash```. This tells the system to interpret your file as a Bash script. Our HPC systems use Bash for all our environments, so it should be used in your scripts to get the most consistent, predictable results.
2. <mark style="background-color: #e6fff2;">The **directives** section</mark> will have multiple lines, all of which start with ```#SBATCH```. These lines are interpreted as directives by the scheduler and are how you request resources on the compute nodes, set your output filenames, set your job name, request emails, etc. A list of directives is shown in [Batch Directives](../batch_directives/).
3. <mark style="background-color: #feffe6;">The **code** section</mark> in your script is a set of bash commands that tells the system how to run your analyses. This includes any [module load](../../../software/modules/) commands you'd need to run to access your software, software commands to execute your analyses, directory changes, etc. 

An example batch script might look like the following:

<!-- Sorry for the mess below, it's the only way I could get the code block to have multiple background colors and be able to be copied to the clipboard-->


<html>
<div class="code-container">
  <pre style="background-color: transparent;"><code  style="background-color: transparent;"><div style="background-color: #d7fbff; padding: 10px;">#!/bin/bash</div><div style="background-color: #e6fff2; padding: 10px;"><span># --------------------
### Directives Section
# --------------------
#SBATCH --job-name=hello_world
#SBATCH --account=&#60;your_group&#62;
#SBATCH --partition=standard
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --time=00:01:00</span></div><div style="background-color: #feffe6; padding: 10px;"># --------------------
### Code Section
# --------------------
module load python/3.9
cd ~/hello_world
python3 hello_world.py</div></code></pre>
</div>
</html>

!!! abstract "hello_world.py"
    In the example above, we'll assume the hello_world.py script that's being executed is located in the user's home directory with the contents
    ```
    #!/usr/bin/env python3
    print("Hello world!")
    ```

!!! question "Finding your group name"
    Not sure what your group name is? Check out [our allocations documentation](../../../resources/allocations/).

## Submit Your Job

<img class="img-right" src="images/postman.jpg" title="Postman getting a letter" alt="postman" width="250px" style="margin: 10px;">


After writing your batch script, the next step is to submit it to the scheduler. The scheduler is software designed to coordinate jobs efficiently across the system. It reads the batch directives from the second section of your batch script (described above) and uses those resource requests to determine where to send your workflow. Continuing with our factory analogy, the scheduler acts like the postman, serving as the intermediary between you and the compute nodes (the factory) and handling all communication and resource scheduling.

To submit your batch job to the scheduler, use the `sbatch` command. This will return a Job ID, which works like a tracking number when you send a package via the post office. You can use your Job ID to monitor your analysis as it runs and retrieve resource usage data once it’s completed.

An example of using `sbatch` is shown below:

```bash
(puma) [netid@wentletrap ~]$ sbatch hello_world.slurm 
Submitted batch job 10233657
```

We can then check on its status using the command `squeue`. 
```
(puma) [netid@wentletrap ~]$ squeue --job 10233657
        JOBID PARTITION   NAME        PRIORITY   USER    ACCOUNT ST CPUS MIN_M NOD  NODELIST(REASON) TIME_LEFT
     10233657 standard    hello_worl      5001   netid   hpcteam PD    1    5G   1        (Priority) 1:00
```
The `ST` shown above stands for "State" and indicates that the job is currently pending (`PD`). Once the job starts running, the state will change to `R`. When the job is complete, `squeue` will come back blank. 

The amount of time your job spends waiting before it starts running often is determined by various factors which include:

1. **Job Size**. This includes the number of CPUs, nodes, GPUs, etc. The more resources you request, the longer it may take before your job starts running.

2. **Job Duration**. Jobs with shorter runtimes will often start faster than long-running jobs. 

3. **Node Type**. Our clusters have many standard nodes, fewer GPU nodes, and very few high memory nodes. The high memory nodes in particular may have very long wait times. If you do not need a lot of memory for your job (e.g., on Puma, less than 470 GB), it may be more efficient to run your work on a standard node. If your job has been stuck in the queue for a very long time, ensure that you have not [accidentally targeted a high memory node](../../cpus_and_memory/). 

4. **Cluster Usage**. The more jobs running on the cluster, the longer the wait times may be. To check how busy the cluster is, try running the command `nodes-busy`.

5. **Maintenance**. Quarterly maintenance cycles impact queue times. We will send announcements typically a week in advance of any planned maintenance cycles and will include announcement banners in our documentation. [See our maintenance section](../../../policies/maintenance/) for more information. 



## Retrieve Your Results
<img class="img-right" src="images/package-delivery.jpg" title="Retrieving results" alt="package delivery" width="250px" style="margin: 10px;">


Once your job starts running, a file will be generated {==in the directory where you submitted your batch script==}. This file logs the job's standard output (stdout) as it runs—essentially, what would have been printed to the terminal if you had run the job interactively. The file is updated in real-time, so you can log into the cluster at any time to check your job's progress. By default, this file is named `slurm-<jobid>.out`, but you can [customize the filename using batch directives](../batch_directives/#output-filenames) if desired. 

Let’s look at the output for our example job:

```
(puma) [netid@wentletrap ~]$ cat slurm-10233657.out 
Hello world!
```
As we can see, the script ran successfully, and Hello world! was printed to the terminal.

## Conclusion

Batch jobs are a powerful way to automate your workflows on the HPC system, allowing you to efficiently use resources and manage long-running tasks without needing to stay logged in. By understanding how to write and submit batch scripts, you can run complex analyses, monitor their progress, and retrieve their results.

If you're just getting started, here are a few additional tips:

1. **Start Small**: Test your scripts with smaller jobs to ensure everything is working as expected before scaling up to larger, more resource-intensive tasks.
2. **Explore More**: Take some time to explore additional batch directives and experiment with different resource requests to optimize your jobs.
3. **Ask for Help**: Don’t hesitate to reach out to our [HPC support team](../../../support_and_training/consulting_services/) if you have any questions or run into issues. We're here to help you get the most out of the system.