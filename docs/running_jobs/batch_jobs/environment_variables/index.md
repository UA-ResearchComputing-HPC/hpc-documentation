# Slurm Environment Variables

Every Slurm job has [environment variables](../../../support_and_training/cheat_sheet/#environment-variables) that are set by default. These can be used in a job to control job behavior, for example setting the names of output files or directories, setting CPU count for multithreaded processes, controlling input parameters, etc. 

|<div style="width:270px">Variable</div>|Purpose|<div style="width:130px">Example Value</div>|
|-|-|-|
|```$SLURM_ARRAY_JOB_ID```|Job array's parent ID|```399124```|
|```$SLURM_ARRAY_TASK_COUNT```|Total number of [subjobs in an array](../array_jobs/)|```4```|
|```$SLURM_ARRAY_TASK_ID```|Job index number (unique for each job in an array)|```1```|
|```$SLURM_ARRAY_TASK_MAX```|Maximum index for the job array|```7```|
|```$SLURM_ARRAY_TASK_MIN```|Minimum index for the job array|```1```|
|```$SLURM_ARRAY_TASK_STEP```|Job array's index step size|```2```|
|```$SLURM_CLUSTER_NAME```|Which cluster your job is running on|```elgato```|
|```$SLURM_CONF```|Points to the [Slurm configuration file](https://slurm.schedmd.com/slurm.conf.html)|```/var/spool/slurm/d/conf-cache/slurm.conf```|
|```$SLURM_CPUS_ON_NODE```|Number of CPUs allocated to target node|```3```|
|```$SLURM_GPUS_ON_NODE```|Number of GPUs allocated to the target node|```1```|
|```$SLURM_GPUS_PER_NODE```|Number of GPUs per node. Only set if ```--gpus-per-node``` is specified|```1```|
|```$SLURM_JOB_ACCOUNT```|Account being charged|```groupname```|
|```$SLURM_JOB_GPUS```|The global GPU IDs of the GPUs allocated to the job. Only set in batch and interactive jobs.|```0```|
|```$SLURM_JOB_ID```|Your Slurm Job ID|```399072```|
|```$SLURM_JOB_CPUS_PER_NODE```|Number of CPUs per node. This can be a list if there is more than one node allocated to the job. The list has the same order as ```SLURM_JOB_NODELIST```|```3,1```|
|```$SLURM_JOB_NAME```|The job's name|```interactive```|
|```$SLURM_JOB_NODELIST```|The nodes that have been assigned to your job|```gpu[73-74]```|
|```$SLURM_JOB_NUM_NODES```|The number of nodes allocated to the job|```2```|
|```$SLURM_JOB_PARTITION```|The job's partition|```standard```|
|```$SLURM_JOB_QOS```|The job's QOS/Partition|```qos_standard_part```|
|```$SLURM_JOB_USER```|The username of the person who submitted the job|```netid```|
|```$SLURM_JOBID```|Same as ```SLURM_JOB_ID```, your Slurm Job ID|```399072```|
|```$SLURM_MEM_PER_CPU```|The memory/CPU ratio allocated to the job|```4096```|
|```$SLURM_NNODES```|Same as ```SLURM_JOB_NUM_NODES``` – the number of nodes allocated to the job|```2```|
|```$SLURM_NODELIST```|Same as ```SLURM_JOB_NODELIST```, The nodes that have been assigned to your job|```gpu[73-74]```|
|```$SLURM_NPROCS```|The number of tasks allocated to your job|```4```|
|```$SLURM_NTASKS```|Same as ```SLURM_NPROCS```, the number of tasks allocated to your job|```4```|
|```$SLURM_SUBMIT_DIR```|The directory where ```sbatch``` was used to submit the job|```/home/u00/netid```|
|```$SLURM_SUBMIT_HOST```|The hostname where ```sbatch``` was used to submit the job|```wentletrap.hpc.arizona.edu```|
|```$SLURM_TASKS_PER_NODE```|The number of tasks to be initiated on each node. This can be a list if there is more than one node allocated to the job. The list has the same order as ```SLURM_JOB_NODELIST```|```3,1```|
|```$SLURM_WORKING_CLUSTER```|Valid for interactive jobs, will be set with remote sibling cluster's IP address, port and RPC version so that any sruns will know which cluster to communicate with.|```elgato:foo:0000:0000:000```|
