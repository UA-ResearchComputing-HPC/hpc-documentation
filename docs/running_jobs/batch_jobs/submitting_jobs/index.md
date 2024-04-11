# Submitting Batch Jobs

## Submitting a Job

To submit a batch job to the scheduler, use the command ```sbatch```. This will place your job in line for execution and will return a job ID that you can use to [track and monitor your job](../../system_commands/). 

As an example:

```
[netid@gpu66 hello_world]$ sbatch hello_world.slurm
Submitted batch job 807387
[netid@gpu66 hello_world]$ squeue --job 807387
             JOBID PARTITION     NAME     USER ST       TIME  NODES
            807387  standard hello_wo    netid PD       0:06      1 
```

The command ```squeue``` gives us detailed information about our batch jobs while they're in queue or running. Under the heading ```ST``` you can check the state of your job. In this case, it's pending (```PD```) which means it's waiting in line with other jobs. Once the job starts running, it's state will change to ```R```, and when the job has completed running, ```squeue``` will return a blank line. 




## Submitting Multiple Jobs

Frequently, users need to submit multiple, related jobs. It may be tempting to do this using a bash loop, but there are several drawbacks to this method, primarily that it can affect the performance of the job scheduling software.  

!!! warning "Use Arrays instead of Loops for large numbers of jobs"

    Users submitting large numbers (> 100s) of jobs using loops will be contacted and asked to adjust their workflows. Requests that persistently affect the performance of the job scheduler will be cancelled by HPC infrastructure.

The best way to submit related jobs is to use job arrays. Jobs arrays allow users to submit multiple related jobs using a single script and single ```sbatch``` command. Each task within the array can have its own unique input parameters, making it ideal for running batch jobs with varied inputs or executing repetitive tasks efficiently. See [Array Jobs](../array_jobs/) for specifics on how to submit these sorts of workflows.



## Output Files

Once your job completes, you should see an output file {==in the directory where you submitted the batch script==}. This output file captures anything that would have been printed to the terminal if you had run it interactively. By default, output filenames will be ```slurm-<jobid>.out```(1). In the example above, this translates to filename ```slurm-807387.out```. 
{ .annotate }

1.  Custom output filenames can be set with [batch directives](../batch_directives/).
