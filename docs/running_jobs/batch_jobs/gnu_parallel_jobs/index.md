# Jobs with GNU Parallel

[GNU Parallel](https://www.gnu.org/software/parallel/) is a powerful tool to submit multiple, independent but similar tasks efficiently within one job. In essence, it is similar to Slurm's [array jobs](../array_jobs/index.md) and can be used both as an alternative to array jobs, or together with array jobs. GNU Parallel is available as a module on the HPC, and can be loaded with `module load parallel` in your batch script. The examples below show how you can use GNU Parallel by itself, and with array jobs.

## Basic GNU Parallel Job

The Slurm script for a basic GNU Parallel job will look like the following:
 
```bash title="basic-parallel-job.slurm"
#!/bin/bash
#SBATCH --ntasks=28
#SBATCH --nodes=1
#SBATCH --time=00:01:00
#SBATCH --partition=standard
#SBATCH --account=YOUR_GROUP

module load parallel
seq 1 100 | parallel 'DATE=$( date +"%T" ) && sleep 0.{} && echo "Host: $HOSTNAME ; Date: $DATE; {}"'
```

In this example, we're make use of a full node with GNU Parallel. The meat of the command lies here:

```bash
seq 1 100 | parallel 'DATE=$( date +"%T" ) && sleep 0.{} && echo "Host: $HOSTNAME ; Date: $DATE; {}"'
```

```seq 1 100``` generates a list between 1 and 100 (inclusive), and we pipe that into a parallel command which will generate one task per element (so 100 tasks). GNU Parallel will find the space on our node as it works through the relevant tasks. 
 
Inside the command:

- ```DATE=$( date + "%T" )``` sets ```DATE``` so we can visualize tasks and when they're being executed.
- ```sleep 0.{}``` forces each task to sleep for ```0.n``` seconds, where ```n``` is the input integer from the ```seq``` command. This means, for example, the 2nd task will wait longer than the 10th task, as can be seen in the output file. This is used to demonstrate that these tasks are being executed in parallel. 
- ```echo "HOST: $HOSTNAME ; Date: $DATE; {}"``` prints out information about the task. ```{}``` is piped input which, in this case, is an integer generated by ```seq``` between 1 and 100. 

You can submit the script with `sbatch basic-parallel-job.slurm`. Unlike an array job, this will produce only one output file:
```bash
(ocelote) [netid@junonia ~]$ head slurm-74027.out 
Host: i10n18 ; Date: 16:45:55; 1
Host: i10n18 ; Date: 16:45:55; 10
Host: i10n18 ; Date: 16:45:55; 11
Host: i10n18 ; Date: 16:45:55; 12
Host: i10n18 ; Date: 16:45:55; 13
Host: i10n18 ; Date: 16:45:55; 14
Host: i10n18 ; Date: 16:45:55; 15
Host: i10n18 ; Date: 16:45:55; 16
Host: i10n18 ; Date: 16:45:55; 17
Host: i10n18 ; Date: 16:45:55; 2
```

## Array Jobs and GNU Parallel

Sometimes you need to run a *lot* of jobs. More than can be reasonably accomplished using arrays since submitting thousands of jobs can be a problem for the system, and GNU Parallel can be challenging to make work in a multi-node environment. In this case, we can combine the forces of GNU Parallel and array jobs to distribute a chunk of tasks across multiple nodes where GNU Parallel will execute them.

The Slurm script in this case will look like the following:
```bash title="array-and-parallel.slurm"
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

The main difference with the basic example is setting up a "block size".  This is the number of tasks GNU Parallel will be executing in each subjob

```bash
BLOCK_SIZE=200
```

In this case, we're asking for 200 tasks per subjob and since we're submitting an array job, that totals 400 tasks. The array indices are used to differentiate tasks. ```seq n m``` generates a sequence of integers from ```n``` to ```m``` (inclusive).

```SLURM_ARRAY_TASK_ID``` in this case is either 1 or 2, depending on the subjob, so combined with ```BLOCK_SIZE```:

**Subjob 1**: Generates numbers from 1 to 200

```bash
seq $(($SLURM_ARRAY_TASK_ID*$BLOCK_SIZE-$BLOCK_SIZE+1)) $(($SLURM_ARRAY_TASK_ID*$BLOCK_SIZE))
# Doing the math --> seq 1*200-200+1 1*200 --> seq 1 200
```

**Subjob 2**: Generates numbers from 201 to 400
```bash 
seq $(($SLURM_ARRAY_TASK_ID*$BLOCK_SIZE-$BLOCK_SIZE+1)) $(($SLURM_ARRAY_TASK_ID*$BLOCK_SIZE))
# Doing the math --> seq 2*200-200+1 2*200 --> seq 201 400
```

You can submit the script with `sbatch array-and-parallel.slurm`. It will produce two output files, one for each job:
```bash
(puma) [netid@junonia ~]$ ls *.out
slurm-1693973_1.out  slurm-1693973_2.out
```

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