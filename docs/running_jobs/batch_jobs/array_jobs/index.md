# Array Jobs


## What Are Job Arrays?

<img src="images/array.png" title="Array job visualization" width="500px" align="right">

Slurm job arrays are a powerful feature for submitting and managing multiple similar jobs efficiently using a single script. Instead of submitting individual jobs, users define an array with shared characteristics, treating them as a unified entity. Each subjob within the array is assigned a unique environment variable, enabling easy differentiation. Array jobs are submitted in the same manner as regular batch jobs: `sbatch myscript.slurm`. Slurm then schedules and executes these tasks based on resource availability, streamlining the process.

## Why Use Job Arrays?

1. **Workflow Efficiency** 

    Job arrays streamline the process of managing multiple jobs with similar configurations, reducing manual effort and potential errors in job submission.

2. **Resource Utilization**

    By grouping similar tasks into a single job array, you can optimize resource utilization on the cluster. Slurm can efficiently allocate resources to individual tasks within the array based on availability. 

3. **Scheduler Efficiency**

    Submitting multiple individual jobs in loops can significantly slow down the scheduler for all users. Job arrays help alleviate this issue by reducing the number of job submissions, leading to improved scheduler performance and responsiveness.

3. **Scalability**

    Job arrays are particularly useful for parallel and repetitive tasks, such as parameter sweeps, Monte Carlo simulations, or running the same code with different inputs. They provide a scalable approach to handling large numbers of tasks without the need to write and manage hundreds or thousands of related submission scripts.

4. **Simplified Management**

    With job arrays, you only need to manage a single submission script for a group of tasks, making it easier to track, monitor, and troubleshoot your jobs.

## How to Use Job Arrays

To utilize job arrays, a specific range of task IDs needs to be specified using the ```--array``` [batch directive](../batch_directives/) in your submission script. This directive is set to a range of integer values and determines the number of individual jobs submitted. It also controls the index associated with each subjob in the array.

Since each task within an array can have its own parameters, input files, or commands, a unique identifier is needed to differentiate jobs. These are controlled by the [Slurm environment variable](../environment_variables/) ```$SLURM_ARRAY_TASK_ID``` which is set to a unique integer value for each subjob. The integers associated with each job match the values specified with your `--array` directive.

For example, the following directive would tell the scheduler to submit three jobs, each with index 1, 2, and 3, respectively.

```
#SBATCH --array=1-3
```
Arrays can begin at any value, so the following option would also submit three jobs, each with index 8, 9, and 10, respectively.

```
#SBATCH --array=8-10
```

Non-sequential array indices can also be used. For example:

```
#SBATCH --array=1-3,10,15-20
```


## Example Job

!!! tip "Array job resources"
    The resource requirements defined in an array job script are applied to each job in the array.

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

Next, we'll need to set up our Bash commands to analyze our three input files, one input file per subjob. Let's say we're running our analyses using the command ```<command>```. For the input filenames, we can make use of the environment variable ```$SLURM_ARRAY_TASK_ID``` by using it as a stand-in for the relevant integer:

```
<command> ${SLURM_ARRAY_TASK_ID}.txt
```

In each subjob, ```${SLURM_ARRAY_TASK_ID}.txt``` will be interpreted as ```1.txt```, ```2.txt```, or ```3.txt``` where the index matches the array ID.

**Submitting Your Array Job**

All you'll need to do to [submit your jobs](../submitting_jobs/) is use the standard ```sbatch script.slurm``` syntax once and the scheduler takes care of the rest. No need for loops! 

## Monitoring Array Jobs

When you submit a job array, Slurm will assign a single job ID to the array. When you are [tracking your jobs](../../system_commands/), if you run a standard ```squeue ``` you will only see the parent job ID. If you use the command ```squeue -r --job <jobid>```, that will return a list of all subjobs in the array where each job ID is formatted as ```<parent_job_id>_<job_array_index>```. 

## Output Files

Each subjob in an array produces its own output file. By default, these are formatted as ```slurm-<parent_job_id>_<job_array_index>.out```. {==Be careful if you [set your own custom output filenames](../batch_directives/#output-filenames). ==} If the output filenames are not distinguished from one another using an array task ID, your output files will overwrite one another. 