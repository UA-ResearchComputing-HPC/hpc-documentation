# Resource Optimization

## Overview 

Optimizing HPC resource requests — i.e. matching these to your job’s actual needs for CPUs, [memory](../cpus_and_memory/), and/or GPUs — benefits both your workflow and the broader research community. Over-requesting resources may feel safer, but it can cause:

- Longer queue times for you and others

- Waste of your group’s CPU-time [allocation](../../resources/allocations/)

- Reduced overall efficiency of the HPC system

The aim is to minimize idle CPUs and unused memory. Inefficient jobs not only waste your group’s allocation but also limit availability for other users.

Not all jobs can be perfectly optimized — small inefficiencies are a natural part of computational research. However, large inefficiencies or small ones repeated across many jobs should be addressed.

This page outlines how to identify and correct major inefficiencies to improve individual and system-wide performance.

### Identifying Inefficiencies

[Monitoring your jobs](../monitoriing_jobs_and_resources) should be a key activity in your HPC workflow. In addition to keeping track of progress, this should always include reviewing your jobs' performance. The main tool for this is `seff`. Here is example output: 

```
(puma) [user@wentletrap:~]$ seff 12345678
Job ID: 12345678
Cluster: puma
User/Group: user/pi-group
State: COMPLETED (exit code 0)
Nodes: 1
Cores per node: 32
CPU Utilized: 00:23:01
CPU Efficiency: 18.1% of 05:28:32 core-walltime
Job Wall-clock time: 00:10:16
Memory Utilized: 61.52 GB
Memory Efficiency: 38.45% of 160.00 GB
```

The primary items to notice are the CPU Efficiency and the Memory Efficiency. If these numbers are low (below, say, 80%), then the resource requests for similar jobs run in the future should be reduced accordingly. Since this job only used ~61 GB, its request could be updated to 13 CPUs to provide a total memory of 65 GB. If there is uncertainty in the expected memory use for a job, a small amount of additional "headroom" could be added by increasing the number of requested CPUs by 1 or 2 above the minimum viable amount.

Note that jobs will either be **CPU-limited** or **memory-limited** (or in rare occasions both). Optimal resource requests are ones which bring the efficiency of limiting element to nearly 100%. 

!!! question "Check Frequently!"
	
	It is important to check your jobs' efficiency frequently! The details of this depend on your workflow. If you run a small number of large jobs, this might mean checking every completed job. If you run a large number of small jobs, this may mean checking every time a new batch is complete. 

!!! info "Trial and Error"

	Constructing optimal resources requests may take some trial-and-error, but it is worth putting in a little bit of extra time up front to make up for in reduced queue times later on!

### Correcting Inefficiencies

Once an ineffiency has been identified, correcting it is a simple process. 

1. Reduce the number of requested CPUs (and hence [memory](../cpus_and_memory/)) by an amount proportional to the inefficiency. A large inefficiency should correspond to a large reduction in the size of the request. 

2. Submit the job again (or submit a similar job).

3. Review the `seff` report to confirm that the job has reached an acceptable level of efficiency. 

4. If inefficiencies are identified, repeat the above steps until the efficiency metrics reach your established threshold.



## Limited HPC Resources

There are some types of nodes that are significantly limited when compared to standard HPC nodes. These are the **High Memory Nodes** and the **GPU Nodes**. The process of addressing inefficiencies in jobs run on these nodes is (1) specific to the type of node, and (2) potentially more important than doing so on standard nodes, due to the limited nature of these resources.

If you run jobs on either type of these limited nodes, please review the guidelines below to identify and correct any possible inefficiencies. 

### High Memory Nodes

Our system currently has 6 total high memory nodes. There are five on Puma and one on Ocelote. Compare this to the 300 standard nodes on Puma and the 360 standard nodes on Ocelote. **High memory nodes are significantly limited in capacity when compared to standard nodes.**

As such, <mark>we request that our users only submit jobs to the high memory nodes when their workflow has been tested extensively and has demonstrated sufficient and specific need for these nodes</mark>. When jobs that do not need the additional memory are submitted to the high memory nodes, this increases wait times for all users, including the submitter (since queue times on standard nodes are significantly shorter). 

There is no single rule that can determine whether a job should be moved from standard to high memory nodes. However, if it is possible to complete the job on a standard node with a small increase in the number of CPUs (and hence [memory](../cpus_and_memory/)) requested, this should **always** be favored over a migration to high memory. 

#### Use Cases and Job Categories

In reviewing historical data of jobs run on the high memory nodes, three categories of jobs were identified:

??? failure "Category 1: Jobs which could be run on a standard node with *no change* to the resources requested. "

	In quantitative terms, these are jobs whose actual used memory was less than the memory-per-cpu on standard nodes (5 GB)  times the number of CPUs they requested. 

	These jobs represent an inefficient use of high memory nodes, and were also the most commonly identified type of job. If you plan to use the high memory nodes, please ensure your jobs don't fall into this category!

??? warning "Category 2: Jobs which could be run on a standard node with an increase in the number of CPUs requested."

	In quantitative terms, these are jobs whose actual used memory was more than $5 \text{GB}\times N_{CPU}$ but less than 470 GB (the total memory per standard node).

	While these jobs are somewhat better than Category 1, they are good candidates for reviewing if they can be moved to a standard node. 

??? success "Category 3: Jobs which represent a good use case for high memory nodes."
	
	In quantitative terms, these jobs used more memory than available on a full standard node, or 470 GB. 

	While these jobs can remain on the high memory nodes, it may still be possible to optimize them further. Please review the report for such jobs by using `seff <jobid>` to determine if the resource request can be downsized to increase their efficiency.

If you run your jobs on the high memory nodes, please use the `seff` report to determine which category your jobs fall into. Our consultants monitor these nodes since they are in such high demand, so you may receive an email with additional information.  

- **Any jobs falling into Category 1** should be immediately moved to standard nodes. This will decrease the wait time of these jobs, thus speeding up your analysis, and free up space the high memory queue. 

- **Any jobs falling into Category 2** should be reviewed. If moving these jobs to a standard node will not cause your group's CPU-time allocation to deplete, then they should be moved to standard. However, if the number of CPUs required to get these jobs working on standard nodes is too high given the current usage of your group's allocation, then it is acceptable to run them on the high memory nodes. Please take the time to review these items explicitly. 

- **If your jobs fall into Category 3**, then congratulations! You are using the high memory nodes appropriately! However, there still may be room for improvement. Please review their `seff` reports to identify any possible inefficiencies, and correct them according to the procedure above if necessary.

### GPU Nodes

While GPU nodes are not nearly as limited as the high memory nodes, they are limited and in very high demand. There are 9 public and 6 buy-in GPU nodes on Puma, most with four V100 GPUs and one with A100s that are sub-divided into [MIG slices](../../resources/compute_resources/#gpu-nodes). On Ocelote, there are 25 nodes with a single P100 GPU, and 35 nodes with two P100 GPUs. Compared to the hundreds of standard nodes on each cluster, GPU nodes are significantly limited in capacity.

Unfortunately, there are no tools like `seff` available to produce quantitative metrics for GPU efficiency, but `nvidia-smi` can be used to provide some limited information.

!!! tip "GPUs available through Jetstream2"

	If waiting for GPU resources is incompatible with your workflow, or if you simply would like to explore additional compute resources at your disposal, we highly recommend looking into [Jetstream2](https://jetstream-cloud.org/get-started/index.html), which is a cloud HPC-provider managed by [ACCESS](https://access-ci.org/) with a large number of A100 GPUs [available](https://docs.jetstream-cloud.org/overview/config/#gpu-nodes-90-nodes). 

Please review the following cases to see if they apply to your workflow. 

#### Unreliquished Resources 

In reviewing historical job activity on GPU nodes, a primary cause of inefficiencies is users requesting [Open OnDemand](../open_on_demand/) sessions with GPUs and letting these sessions go idle for extended periods of time. Our [standard practices policy](../../policies/standard_practices/#proper-usage-of-compute-resources) explicitly prohibits this type of activity (known as *"squatting"*) as it makes the idle GPUs unavailable to other users. 

We suspect that users engage in squatting on resources because of long wait times for GPUs, but ironically, it is this type of practice that causes wait times to be longer than necessary. We understand that quick access to resources can be crucial to some workflows, but the HPC is designed for *scheduled* computations rather than *immediate access.* 

!!! warning "Please do not engage in squatting!"
	
	Reliquishing unused GPU resources represents a best practice as it improves the availability of resources for all HPC users, and will generally reduce wait times for GPUs. 


#### Appropriate Requests

Another common cause of inefficiencies is users requesting jobs through the `gpu_standard` partition but requesting zero GPUs, or requesting GPUs but running codes that do not require GPUs. 

A probable cause for this is that resource requests are being reused from valid GPU jobs on jobs which do not require GPUs. <mark>Please review your resource requests to ensure that GPU resources are not being requested for non-GPU jobs!</mark>

When adapting batch scripts from GPU jobs to apply to non-GPU jobs, please ensure the following changes are made:

- Change the partition from `gpu_standard` to `standard`

- Remove or comment out the `--gres=gpu` line


## Thank You

We appreciate that you took the time to read this page. Engaging in best practices around the optimal use of resources is beneficial both to you as an individual researcher, and to the Unviersity of Arizona's HPC community as a whole. 

