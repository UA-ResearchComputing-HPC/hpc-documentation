# Batch Tutorial

<link rel="stylesheet" href="../../../assets/stylesheets/tables.css">
<link rel="stylesheet" href="../../../assets/stylesheets/code.css">

<link rel="stylesheet" href="../../../assets/stylesheets/images.css">

Welcome to the Batch Job Tutorial. If you have never run a batch job before, or if you are looking for a review of the basics, this page should help you get up an running. 


## Batch Scripts

When you want to run analyses in batch mode, you need to inform the system of two things:

1. **What Resources You Need**: This includes specifying the number of CPUs, the amount of memory, GPUs, and other resources necessary to run your work. These instructions guide the system in selecting the appropriate compute resources and target compute nodes for your workflow. Continuing with our factory analogy, these resources can be thought of as the postal address on the outside of the envelope.

2. **The Instructions to Execute**: This is a list of commands that the compute node will follow once your workflow starts. These commands are written in Bash and include everything you would normally type on the command line if you were running your work interactively. For example, you would `cd` to the relevant working directory, `module load` any required software, `source` virtual environments, and so forth. In our analogy, these commands are like the schematics inside the envelope that you're sending to the factory.

### Batch Script Structure

A batch script is a text file that is written with three sections:

1. <div class="code-line-header">The "**shebang**"</div> will always be the line ```#!/bin/bash```. This tells the system to interpret your file as a bash script. Our HPC systems use bash for all our environments, so it should be used in your scripts to get the most consistent, predictable results.
2. <div class="code-line-batch">The **directives** section</div> will have multiple lines, all of which start with ```#SBATCH```. These lines are interpreted as [Slurm directives](../../running_jobs/batch_jobs/batch_directives/) by the scheduler and are how you request resources on the compute nodes, set your output filenames, set your job name, request emails, etc. 
3. <div class="code-line-bash">The **code** section</div> in your script is a set of bash commands that tells the system how to run your analyses.

An example batch script might look like the following:

<!-- <html>
<div class="code-container">
  <pre style="background-color: transparent;"><code  style="background-color: transparent;"><div class="code-line-header">#!/bin/bash</div><div class="code-line-batch"><span># --------------------
script</div></code></pre>
</div>
</html> -->

<html>
<div class="code-container">
  <pre style="background-color: transparent;"><code  style="background-color: transparent;"><div class="code-line-header">#!/bin/bash</div><div class="code-line-batch"><span># --------------------
### Directives Section
# --------------------
#SBATCH --job-name=hello_world
#SBATCH --account=&#60;your_group&#62;
#SBATCH --partition=standard
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --time=00:01:00</span></div><div class="code-line-bash"># --------------------
### Code Section
# --------------------
echo "Hello world, I am running on compute node $HOSTNAME"
# sleep only used for demonstration purposes
sleep 30</div></code></pre>
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

<img class="img-right" src="images/post.png" title="Postman getting a letter" alt="postman" width="350px" style="margin: 10px;">


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

<!-- ### Submitting a Job

To submit a batch job to the scheduler, use the command ```sbatch```. This will place your job in line for execution and will return a job ID that you can use to [track and monitor your job](../../system_commands/). 

As an example:

```
[netid@gpu66 hello_world]$ sbatch hello_world.slurm
Submitted batch job 807387
[netid@gpu66 hello_world]$ squeue --job 807387
             JOBID PARTITION     NAME     USER ST       TIME  NODES
            807387  standard hello_wo    netid PD       0:06      1 
```

The command ```squeue``` gives us detailed information about our batch jobs while they're in queue or running. Under the heading ```ST``` you can check the state of your job. In this case, it's pending (```PD```) which means it's waiting in line with other jobs. Once the job starts running, it's state will change to ```R```, and when the job has completed running, ```squeue``` will return a blank line.  -->




### Submitting Multiple Jobs

Frequently, users need to submit multiple, related jobs. It may be tempting to do this using a bash loop, but there are several drawbacks to this method, primarily that it can affect the performance of the job scheduling software.  

!!! warning "Use Arrays instead of Loops for large numbers of jobs"

    Users submitting large numbers (> 100s) of jobs using loops will be contacted and asked to adjust their workflows. Requests that persistently affect the performance of the job scheduler will be cancelled by HPC infrastructure.

The best way to submit related jobs is to use job arrays. Jobs arrays allow users to submit multiple related jobs using a single script and single ```sbatch``` command. Each task within the array can have its own unique input parameters, making it ideal for running batch jobs with varied inputs or executing repetitive tasks efficiently. See [Array Jobs](../array_jobs/) for specifics on how to submit these sorts of workflows.



<!-- ### Output Files

Once your job completes, you should see an output file ==in the directory where you submitted the batch script==. This output file captures anything that would have been printed to the terminal if you had run it interactively. By default, output filenames will be ```slurm-<jobid>.out```(1). In the example above, this translates to filename ```slurm-807387.out```. 
{ .annotate }

1.  Custom output filenames can be set with [batch directives](../batch_directives/). -->

## Retrieve Your Results
<img class="img-right" src="images/crab_results.png" title="Retrieving results" alt="package delivery" width="250px" style="margin: 10px;">


Once your job starts running, a file will be generated ==in the directory where you submitted your batch script==. This file logs the job's standard output (stdout) as it runs—essentially, what would have been printed to the terminal if you had run the job interactively. The file is updated in real-time, so you can log into the cluster at any time to check your job's progress. By default, this file is named `slurm-<jobid>.out`, but you can [customize the filename using batch directives](../batch_directives/#output-filenames) if desired. 

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