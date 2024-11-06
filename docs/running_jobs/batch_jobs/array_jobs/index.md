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

!!! tip "Array job resources"
    The resource requirements defined in an array job script are applied to each job in the array.

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

## Monitoring Array Jobs

When you submit a job array, Slurm will assign a single job ID to the array. When you are [tracking your jobs](../../system_commands/), if you run a standard ```squeue ``` you will only see the parent job ID. If you use the command ```squeue -r --job <jobid>```, that will return a list of all subjobs in the array where each job ID is formatted as ```<parent_job_id>_<job_array_index>```. 

## Output Files

Each subjob in an array produces its own output file. By default, these are formatted as ```slurm-<parent_job_id>_<job_array_index>.out```. {==Be careful if you [set your own custom output filenames](../batch_directives/#output-filenames). ==} If the output filenames are not distinguished from one another using an array task ID, your output files will overwrite one another. 


## Example Jobs

=== "Basic Array Job"

    In this example, we'll use Python to analyze a series of input files called `1.inp`, `2.inp`, and `3.inp`. This general methodology can be adapted to your own analyses using similar techniques. The most important takeaway is the use of the `--array` flag and the environment variable `$SLURM_ARRAY_TASK_ID` which is used to control each job's input.

    Let's say each of our input files has a series of space-delimited integers that we'd like to sum using a Python script. Rather than using a for loop to process each in a single job, or writing multiple submission scripts to explicitly use different input filenames, we can simply use an array job to define a different input file for each subjob. The structure of our working directory is shown below.

    ``` title="Directory structure"
    [netid@junonia ~]$ tree
    .
    ├── input
    │   ├── 1.inp
    │   ├── 2.inp
    │   └── 3.inp
    ├── output
    ├── sum_inputs.py
    └── sum_inputs.slurm

    2 directories, 5 files
    ```

    ??? example "Click to view Python script"
        
        ```python title="sum_inputs.py"
        #!/usr/bin/env python3

        import sys, os


        def sum_file(input_file):
            with open(input_file, "r") as f:
                data = f.read()
                numbers = [int(num) for num in data.split()]
            return sum(numbers)


        if __name__ == "__main__":
            array_index = int(sys.argv[1])
            input_file  = os.path.join("input",f"{array_index}.inp")
            output_file = os.path.join("output",f"{array_index}.out")

            result = sum_file(input_file)
    
            with open(output_file, "w") as f:
                f.write(f"Sum of numbers in {input_file}: {result}\n")
        ```

    Below is the Slurm script we can use to execute this workflow. The specific lines that include the relevant batch directive and environment variable that make this an array job are highlighted below. 
    ```bash title="sum_inputs.slurm" hl_lines="10 13"
    #!/bin/bash

    #SBATCH --job-name=sum_inputs
    #SBATCH --output=slurm_logs/%x_%A_%a.out
    #SBATCH --account=hpcteam
    #SBATCH --partition=standard
    #SBATCH --nodes=1
    #SBATCH --ntasks=1
    #SBATCH --time=00:01:00
    #SBATCH --array=1-3

    module load python/3.11
    python3 sum_inputs.py ${SLURM_ARRAY_TASK_ID}
    ```

    In this case, we're passing `$SLURM_ARRAY_TASK_ID` to the Python script which uses its value to find the relevant input file. 

    Submitting this script with `sbatch` will return a single job ID that we can use to track all three of our jobs. 
    ```bash title="Job submission and tracking"
    [netid@junonia ~]$ sbatch sum_inputs.slurm 
    Submitted batch job 3186754 

    [netid@junonia ~]$ squeue --job=3186754 -r
                 JOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST(REASON)
            3186754_1  standard sum_inpu    netid PD       0:00      1 (Priority)
            3186754_2  standard sum_inpu    netid PD       0:00      1 (Priority)
            3186754_3  standard sum_inpu    netid PD       0:00      1 (Priority)
    ```

    Once our job completes, we can check our output:
    ```
    [netid@junonia ~]$ cat output/*
    Sum of numbers in input/1.inp: 25
    Sum of numbers in input/2.inp: 30
    Sum of numbers in input/3.inp: 15
    ```

=== "Array with Text Filenames"

    Sometimes, using `$SLURM_ARRAY_TASK_ID` to directly define input isn't convenient. For example, in the biosciences often times sequence files (fasta, fastq, etc) might have names that are not conducive to sequential numerical ordering. In these cases, one option might be to store input filenames in a file and use the array ID to pull filenames from line numbers. This can be accomplished with the Bash command `sed`.

    As an example, let's say we have five input files, each with a protein sequence in fasta format whose structural disorder we want to calculate. Our directory structure might look something like the following:

    ```bash title="Directory structure"
    [netid@junonia array_filenames_example]$ tree
    .
    ├── input
    │   ├── AJD81427.fa
    │   ├── AMK26954.fa
    │   ├── AZU90721.fa
    │   ├── QDZ58854.fa
    │   └── QFP98592.fa
    ├── output
    └── predict_disorder.slurm

    2 directories, 6 files
    ```

    We can write these filenames to a list of input files by using the following:
    ```bash
    [netid@junonia array_filenames_example]$ ls -1 input/ > InputFiles 
    [netid@junonia array_filenames_example]$ cat InputFiles 
    AJD81427.fa
    AMK26954.fa
    AZU90721.fa
    QDZ58854.fa
    QFP98592.fa
    ```

    If we use the command `sed`, we can pull lines from this file using their line numbers. For example, to pull line three:

    ```bash
    [netid@junonia array_filenames_example]$ sed "3q;d" InputFiles
    AZU90721.fa 
    ```

    If we replace the 3 in the above with `${SLURM_ARRAY_TASK_ID}` we can submit an array and pull a different line for each subjob. For example:

    ```bash title="predict_disorder.slurm" hl_lines="10 12"
    #!/bin/bash

    #SBATCH --job-name=predict_disorder
    #SBATCH --output=slurm_output/%A_%a.out
    #SBATCH --account=hpcteam
    #SBATCH --partition=standard
    #SBATCH --nodes=1
    #SBATCH --ntasks=1
    #SBATCH --time=0:05:00
    #SBATCH --array=1-5

    input_filename="$( sed "${SLURM_ARRAY_TASK_ID}q;d" InputFiles )"
    output_filename="$( echo $input_filename | awk '{sub(/\.fa$/, ".out"); print}')"

    iupred3 input/${input_filename} long > output/${output_filename}
    ```

    In the script above, the parts specific to array jobs are highlighted. We're setting the Bash variable `input_filenames` to the output of our `sed` command, which is the filename specific to that subjob. The command `awk` is being used to replace the file extension `.fa` with `.out` so we can save our output data. We then run our example analyses using the protein disorder prediction software `iupred3` on the input file and save it to the output file. 

    Submitting with sbatch, we can track our five subjobs:

    ```bash
    [netid@junonia array_filenames_example]$ sbatch predict_disorder.slurm 
    Submitted batch job 3207840

    [netid@junonia array_filenames_example]$ squeue --job=3207840 -r
         JOBID      PARTITION NAME     USER  ST       TIME  NODES NODELIST(REASON)
         3207840_1  standard  predict_ netid PD       0:00      1 (Priority)
         3207840_2  standard  predict_ netid PD       0:00      1 (Priority)
         3207840_3  standard  predict_ netid PD       0:00      1 (Priority)
         3207840_4  standard  predict_ netid PD       0:00      1 (Priority)
         3207840_5  standard  predict_ netid PD       0:00      1 (Priority)
    ```
    
    When our analyses are complete, we should see an output file corresponding to each of our input files:

    ```bash
    (ocelote) [netid@junonia array_filenames_example]$ tree
    .
    ├── input
    │   ├── AJD81427.fa
    │   ├── AMK26954.fa
    │   ├── AZU90721.fa
    │   ├── QDZ58854.fa
    │   └── QFP98592.fa
    ├── InputFiles
    ├── output
    │   ├── AJD81427.out
    │   ├── AMK26954.out
    │   ├── AZU90721.out
    │   ├── QDZ58854.out
    │   └── QFP98592.out
    ├── predict_disorder.slurm
    └── slurm_output
        ├── 3207840_1.out
        ├── 3207840_2.out
        ├── 3207840_3.out
        ├── 3207840_4.out
        └── 3207840_5.out

    3 directories, 17 files
    ```
