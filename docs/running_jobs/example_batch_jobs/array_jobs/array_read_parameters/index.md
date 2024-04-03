# Array Jobs With Multiple Input Parameters
[Click here to download example files](files/Array-Read-Parameters.tar.gz){ .md-button .md-button--primary }


## Example

This script demonstrates how to feed parameters to different subjobs in an array by pulling them from an input file, e.g.:

* **Job 1**: ```./executable job1_variable1 job1_variable2 job1_variable3```
* **Job 2**: ```./executable job2_variable1 job2_variable2 job2_variable3```
etc.


### Submission Script

```bash
#!/bin/bash
#SBATCH --job-name=Array-Read-Parameters
#SBATCH --ntasks=1
#SBATCH --nodes=1             
#SBATCH --time=00:01:00   
#SBATCH --partition=standard
#SBATCH --account=YOUR_GROUP
#SBATCH --array=1-10

read first_parameter second_parameter third_parameter <<< $( sed "${SLURM_ARRAY_TASK_ID}q;d" InputParameters )
echo "Job ID: $SLURM_JOB_ID ; Host Node : $HOSTNAME ; Sample Command : ./executable $first_parameter $second_parameter $third_parameter"
```

### Input file
```text
job1_param1 job1_param2 job1_param3
job2_param1 job2_param2 job2_param3
job3_param1 job3_param2 job3_param3
job4_param1 job4_param2 job4_param3
job5_param1 job5_param2 job5_param3
job6_param1 job6_param2 job6_param3
job7_param1 job7_param2 job7_param3
job8_param1 job8_param2 job8_param3
job9_param1 job9_param2 job9_param3
job10_param1 job10_param2 job10_param3
```

## Script Breakdown
The line number that corresponds with the job's ```SLURM_ARRAY_TASK_ID``` is read in and parsed to extract the input parameters. The parameters here should be space-delimited (of course, you can modify your script to change these specifications). There are three parameters per line that are assigned to the variables on the left:

```bash
read first_parameter second_parameter third_parameter <<< $( sed "${SLURM_ARRAY_TASK_ID}q;d" InputParameters )
```

A sample command is printed along with job information for demonstration purposes:

```bash
echo "Job ID: $SLURM_JOB_ID ; Host Node : $HOSTNAME ; Sample Command : ./executable $first_parameter $second_parameter $third_parameter"
```

## Script Submission Command

```bash
(puma) [netid@junonia ~]$ sbatch Array-Read-Parameters.slurm 
Submitted batch job 1694093
```

## Output Files

```bash
(puma) [netid@junonia ~]$ ls *.out
slurm-1694093_10.out  slurm-1694093_1.out  slurm-1694093_2.out
slurm-1694093_3.out   slurm-1694093_4.out  slurm-1694093_5.out
slurm-1694093_6.out   slurm-1694093_7.out  slurm-1694093_8.out
slurm-1694093_9.out
```

## File Contents

```bash
(puma) [netid@junonia ~]$ cat *.out | grep param
Job ID: 1694093 ; Host Node : r1u03n2 ; Sample Command : ./executable job10_param1 job10_param2 job10_param3
Job ID: 1694094 ; Host Node : r1u03n1 ; Sample Command : ./executable job1_param1 job1_param2 job1_param3
Job ID: 1694095 ; Host Node : r1u03n1 ; Sample Command : ./executable job2_param1 job2_param2 job2_param3
Job ID: 1694096 ; Host Node : r1u03n1 ; Sample Command : ./executable job3_param1 job3_param2 job3_param3
Job ID: 1694097 ; Host Node : r1u03n1 ; Sample Command : ./executable job4_param1 job4_param2 job4_param3
Job ID: 1694098 ; Host Node : r1u03n1 ; Sample Command : ./executable job5_param1 job5_param2 job5_param3
Job ID: 1694099 ; Host Node : r1u03n1 ; Sample Command : ./executable job6_param1 job6_param2 job6_param3
Job ID: 1694100 ; Host Node : r1u03n1 ; Sample Command : ./executable job7_param1 job7_param2 job7_param3
Job ID: 1694101 ; Host Node : r1u03n2 ; Sample Command : ./executable job8_param1 job8_param2 job8_param3
Job ID: 1694102 ; Host Node : r1u03n2 ; Sample Command : ./executable job9_param1 job9_param2 job9_param3
```