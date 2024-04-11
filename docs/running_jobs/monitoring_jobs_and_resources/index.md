# Monitoring Jobs and Resources

## Monitoring Jobs

!!! tip 
    Some of these functions are specific to the UA HPC, and may not work if invoked on other systems. 


Every job has a unique ID associated with it that can be used to track its status, view resource allocations, and resource usage. Below is a list of some helpful commands you can use for job monitoring.

|<div style="width:220px">Command</div>|Purpose|<div style="width:220px">Example</div>|
|-|-|-|
|```squeue --job=<jobid>```|Retrieves a running or pending job's status.|```squeue --job=12345```|
|```squeue --me```|Retrieves all your running and pending jobs||
|```scontrol show jobs <jobid>```|Retrieve detailed information on a running or pending job|```scontrol show job 12345```|
|```scancel <jobid>```|Cancel a running or pending job|```scancel 12345```|
|```job-history <jobid>```|Retrieves a running or completed job's history in a user-friendly format|```job-history 12345```|
|```seff <jobid>```|Retrieves a completed job's memory and CPU efficiency|```seff 12345```|
|```past-jobs```|Retrieves past jobs run by user. Can be used with option ```-d <n>``` to search for jobs run in the past ```<n>``` days|```past-jobs -d 5```|
|```job-limits <group_name>```|View your group's job [resource limits](../job_limits/) and current usage.|```job-limits mygroup```|

## Slurm Reason Codes

Sometimes, if you check a pending job there is a message under the field ```Reason``` indicating why your job may not be running. Some of these codes are non-intuitive so a human-readable translation is provided below:

|Reason|Explanation|
|-|-|
|```AssocGrpCpuLimit```|Your job is not running because your group CPU limit has been reached[^1]|
|```AssocGrpMemLimit```|Your job is not running because your group memory limit has been reached[^1]|
|```AssocGrpCPUMinutesLimit```|Either your group is out of CPU hours or your job will exhaust your group's CPU hours.|
|```AssocGrpGRES```|Your job is not running because your group GPU limit has been reached[^1]|
|```Dependency```|Your job depends on the completion of another job. It will wait in queue until the target job completes.|
|```QOSGrpCPUMinutesLimit```|This message indicates that your high priority or qualified hours allocation has been exhausted for the month.|
|```QOSMaxWallDurationPerJobLimit```|Your job's time limit exceeds the max allowable and will never run[^1]|
|```Nodes_required_for_job_are_DOWN,_DRAINED_or_reserved_or_jobs_in_higher_priority_partitions```|This very long message simply means your job is waiting in queue until there is enough space for it to run|
|```Priority```|Your job is waiting in queue until there are enough resources for it to run.|
|```QOSMaxCpuPerUserLimit```|Your job is not running because your per-user CPU limit has been reached[^1]|
|```ReqNodeNotAvail, Reserved for maintenance```|Your job's time limit overlaps with an upcoming maintenance window. Run "uptime_remaining" to see when the system will go offline. If you remove and resubmit your job with a shorter walltime that does not overlap with maintenance, it will likely run. Otherwise, it will remain pending until after the maintenance window.|
|```Resources```|Your job is waiting in queue until the required resources are available.|


## Monitoring System Resources

We have a number of system commands that can be used to view the availability of resources on each cluster. This may be helpful in determining which cluster to use for your analyses



|Command|Purpose|
|-|-|
|```nodes-busy```|Display a visualization of each node on a cluster and overall usage. Use ```nodes-busy --help``` for more detailed options.|
|```cluster-busy```|Display a visual overview of each cluster's usage|
|```system-busy```|Display a text-based summary of a cluster's usage|

[^1]: For more information on resource limitations, see: [Job Limits](../job_limits/).
