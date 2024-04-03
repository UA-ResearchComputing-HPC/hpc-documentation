# Array Job with GNU Parallel
[Click here to download example files](files/Array-and-Parallel.tar.gz){ .md-button .md-button--primary }


This script combines the methods of the basic array job and the basic parallel job to execute a large number of jobs.

## What problem does this help fix? 

Sometimes you need to run a *lot* of jobs. More than can be reasonably accomplished using arrays since submitting thousands of jobs can be a problem for the system, and GNU Parallel can be challenging to make work in a multi-node environment. In this case, we can combine the forces of GNU Parallel and array jobs to distribute a chunk of tasks across multiple nodes where GNU Parallel will execute them

## Example

```bash
#!/bin/bash
#SBATCH --job-name=Sample_Array_With_GNU_Parallel
#SBATCH --ntasks=94
#SBATCH --nodes=1                    
#SBATCH --time=00:05:00   
#SBATCH --partition=standard
#SBATCH --account=YOUR_GROUP
#SBATCH --array=1-2

module load parallel
BLOCK_SIZE=200
seq $(($SLURM_ARRAY_TASK_ID*$BLOCK_SIZE-$BLOCK_SIZE+1)) $(($SLURM_ARRAY_TASK_ID*$BLOCK_SIZE)) | parallel echo "JOB ID: $SLURM_JOB_ID HOST NODE: $HOSTNAME EXAMPLE COMMAND: ./executable input_{}"
```

## Script Breakdown
Like with the basic parallel example, GNU Parallel is accessible as a module. The general goal here for illustration purposes is to set up a "block size". This is the number of tasks GNU Parallel will be executing in each subjob

```bash
BLOCK_SIZE=200
```

In this case, we're asking for 200 tasks per subjob and since we're submitting an array job, that totals 400 tasks. The array indices then used to differentiate tasks. ```seq n m``` generates a sequence of integers from ```n``` to ```m``` (inclusive).

```SLURM_ARRAY_TASK_ID``` in this case is either 1 or 2, depending on the subjob, so combined with ```BLOCK_SIZE```:

**Subjob 1**: 

```bash
seq $(($SLURM_ARRAY_TASK_ID*$BLOCK_SIZE-$BLOCK_SIZE+1)) $(($SLURM_ARRAY_TASK_ID*$BLOCK_SIZE))
# Doing the math --> seq 1*200-200+1 1*200 --> seq 1 200
```

**Subjob 2**: 
```bash 
seq $(($SLURM_ARRAY_TASK_ID*$BLOCK_SIZE-$BLOCK_SIZE+1)) $(($SLURM_ARRAY_TASK_ID*$BLOCK_SIZE))
# Doing the math --> seq 2*200-200+1 2*200 --> seq 201 400
```

## Script Submission Command

```bash
(puma) [netid@junonia ~]$ sbatch Array-and-Parallel.slurm 
Submitted batch job 1693973
```

## Output Files

```bash
(puma) [netid@junonia ~]$ ls *.out
slurm-1693973_1.out  slurm-1693973_2.out
```

## File Contents
A total of 400 tasks were executed using an array job with two subjobs on two nodes, r2u07n1 and r2u13n2. To view the full contents of the output file, download the example above. 

```bash
(puma) [netid@junonia ~]$ head *.out
==> slurm-1693973_1.out <==
JOB ID: 1693974 HOST NODE: r2u13n2 EXAMPLE COMMAND: ./executable input_1
JOB ID: 1693974 HOST NODE: r2u13n2 EXAMPLE COMMAND: ./executable input_2
JOB ID: 1693974 HOST NODE: r2u13n2 EXAMPLE COMMAND: ./executable input_3
JOB ID: 1693974 HOST NODE: r2u13n2 EXAMPLE COMMAND: ./executable input_4
JOB ID: 1693974 HOST NODE: r2u13n2 EXAMPLE COMMAND: ./executable input_5
JOB ID: 1693974 HOST NODE: r2u13n2 EXAMPLE COMMAND: ./executable input_6
JOB ID: 1693974 HOST NODE: r2u13n2 EXAMPLE COMMAND: ./executable input_7
JOB ID: 1693974 HOST NODE: r2u13n2 EXAMPLE COMMAND: ./executable input_8
JOB ID: 1693974 HOST NODE: r2u13n2 EXAMPLE COMMAND: ./executable input_9
JOB ID: 1693974 HOST NODE: r2u13n2 EXAMPLE COMMAND: ./executable input_10

==> slurm-1693973_2.out <==
JOB ID: 1693973 HOST NODE: r2u07n1 EXAMPLE COMMAND: ./executable input_201
JOB ID: 1693973 HOST NODE: r2u07n1 EXAMPLE COMMAND: ./executable input_202
JOB ID: 1693973 HOST NODE: r2u07n1 EXAMPLE COMMAND: ./executable input_203
JOB ID: 1693973 HOST NODE: r2u07n1 EXAMPLE COMMAND: ./executable input_204
JOB ID: 1693973 HOST NODE: r2u07n1 EXAMPLE COMMAND: ./executable input_205
JOB ID: 1693973 HOST NODE: r2u07n1 EXAMPLE COMMAND: ./executable input_206
JOB ID: 1693973 HOST NODE: r2u07n1 EXAMPLE COMMAND: ./executable input_207
JOB ID: 1693973 HOST NODE: r2u07n1 EXAMPLE COMMAND: ./executable input_208
JOB ID: 1693973 HOST NODE: r2u07n1 EXAMPLE COMMAND: ./executable input_209
JOB ID: 1693973 HOST NODE: r2u07n1 EXAMPLE COMMAND: ./executable input_210
```

