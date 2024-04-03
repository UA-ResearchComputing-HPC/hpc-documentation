# Array Jobs

## What Are Job Arrays?

In Slurm, job arrays are a powerful feature allowing you to submit and manage multiple similar jobs with a single submission script. Instead of submitting individual jobs, you define an array of jobs with similar characteristics.

Job Arrays are a method to manage and execute multiple similar jobs as a single entity. You define a range of tasks or jobs within the array, each with its own unique identifier. These are submitted the same way as a regular batch job: ```sbatch myscript.slurm```. Slurm then handles the scheduling and execution of these tasks independently, based on available resources.

## Why Use Job Arrays?

1. **Workflow Efficiency** 

    Job arrays streamline the process of managing multiple jobs with similar configurations, reducing manual effort and potential errors in job submission.

2. **Resource Utilization**

    By grouping similar tasks into a single job array, you can optimize resource utilization on the cluster. Slurm can efficiently allocate resources to individual tasks within the array based on availability. When multiple independent jobs are submitted without using an array, it can cause the scheduler to sl

3. **Scheduler Efficiency**

    Submitting multiple individual jobs in loops can significantly slow down the SLURM scheduler for all users. Job arrays help alleviate this issue by reducing the number of job submissions, leading to improved scheduler performance and responsiveness.

3. **Scalability**

    Job arrays are particularly useful for parallel and repetitive tasks, such as parameter sweeps, Monte Carlo simulations, or running the same code with different inputs. They provide a scalable approach to handling large numbers of tasks.

4. **Simplified Management**

    With job arrays, you only need to manage a single submission script for a group of tasks, making it easier to track, monitor, and troubleshoot your jobs.

## How to Use Job Arrays

To utilize job arrays in Slurm, you define an array job with a specific range of task IDs using the ```--array``` [batch directive](../batch_directives/) in your submission script. Each task within the array can have its own unique parameters, input files, or commands. These are controlled by the [Slurm environment variable](../environment_variables/) ```$SLURM_ARRAY_TASK_ID``` which is set to a unique integer value for each subjob in the array.

**Example**

!!! tip
    The resource requirements defined in an array job are applied to each job in the array

Say you wanted to submit three jobs to analyze input files ```1.txt```, ```2.txt```, and ```3.txt```. In this case, we'd set ```--array=1-3``` to tell the scheduler we want to submit three jobs with indices 1, 2, and 3. The directives for this batch script might look like:

```
#!/bin/bash
#SBATCH --account=<GROUP_NAME>
#SBATCH --partition=standard
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --time=01:00:00
#SBATCH --array=1-3
```

Next, we'll need to control what each script does using the environment variable ```$SLURM_ARRAY_TASK_ID```. In this case, we can use the command ```<command>``` to analyze these scripts using:

```
<command> ${SLURM_ARRAY_TASK_ID}.txt
```

In each subjob, ```${SLURM_ARRAY_TASK_ID}.txt``` will be interpreted as ```1.txt```, ```2.txt```, and ```3.txt``` where the index matches the array ID.

**Submitting Your Array Job**

All you'll need to do to [submit your jobs](../submitting_jobs/) is use the standard ```sbatch script.slurm``` syntax once and the scheduler takes care of the rest. No need for loops! 

## Monitoring Array Jobs

When you submit a job array, Slurm will assign a single job ID to the array. When you are [tracking your jobs](../../system_commands/), if run a standard ```squeue ``` you will only see the parent job ID. If you use the command ```squeue -r <jobid>```, that will return a list of all subjobs in the array where each job ID is formatted as ```<parent_job_id>_<job_array_index>```. 

## Output Files

Each subjob in an array produces its own output file. By default, these are formatted as ```slurm-<parent_job_id>_<job_array_index>.out```. {==Be careful if you [set your own custom output filenames](../batch_directives/#output-filenames). ==} If the output filenames are not distinguished from one another using an array task ID, your output files will overwrite one another. 