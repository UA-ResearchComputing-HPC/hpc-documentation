# Basic Parallel Job

[Click here to download example files](Basic-Parallel-Job.tar.gz){ .md-button .md-button--primary }

This example demonstrates how to parallelize multiple tasks within one job using [gnu parallel](https://www.gnu.org/software/parallel/)

## Example

```bash
#!/bin/bash
#SBATCH --ntasks=28
#SBATCH --nodes=1             
#SBATCH --time=00:01:00   
#SBATCH --partition=standard
#SBATCH --account=YOUR_GROUP

module load parallel
seq 1 100 | parallel 'DATE=$( date +"%T" ) && sleep 0.{} && echo "Host: $HOSTNAME ; Date: $DATE; {}"'
```

## Script Breakdown
In this case, we'll make use of a full node with GNU Parallel which is available as a module:

```bash
module load parallel
```

The meat of the command lies here:

```bash
seq 1 100 | parallel 'DATE=$( date +"%T" ) && sleep 0.{} && echo "Host: $HOSTNAME ; Date: $DATE; {}"'
```

 ```seq 1 100``` generates a list between 1 and 100 (inclusive), and we pipe that into a parallel command which will generate one task per element (so 100 tasks).
 
GNU Parallel will find the space on our node as it works through the relevant tasks. 
 
Inside the command:
```DATE=$( date + "%T" )``` sets ```DATE``` so we can visualize tasks and when they're being executed
 
```sleep 0.{}``` forces each task to sleep for ```0.n``` seconds, where ```n``` is the input integer from the ```seq``` command. This means, for example, the 2nd task will wait longer than the 10th task, as can be seen in the output file. This is used to demonstrate that these tasks are being executed in parallel. 
 
```echo "HOST: $HOSTNAME ; Date: $DATE; {}"``` prints out information about the task. ```{}``` is piped input which, in this case, is an integer generated by ```seq``` between 1 and 100. 
 
## Submitting the Script

```bash
 (ocelote) [netid@junonia ~]$ sbatch basic-parallel-job.slurm 
Submitted batch job 74027
```
 
## Output Files

Since this isn't an array job, there will only be one output file:

```bash
(ocelote) [netid@junonia ~]$ ls
slurm-74027.out  basic-parallel-job.slurm
```
 
## File Contents

For the full file contents, download the example above
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