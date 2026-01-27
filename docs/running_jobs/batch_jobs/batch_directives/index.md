# Batch Directives

!!! tip
    For a full list of directives, see [Slurm's official documentation](https://slurm.schedmd.com/sbatch.html).

The first section of a batch script (after the shebang) always contains the Slurm Directives, which specify the resource requests for your job. The scheduler parses these in order to allocate CPUs, memory, walltime, etc. to your job request.

We would appreciate if you took a moment to review our [Standard Practices](../../../policies/standard_practices/) to ensure fair access and use of compute resources for all users.

## Minimum Viable Batch Directives

There is a certain set of directives that must be present in all batch scripts in order for the scheduler to have enough information to run your job. There is no one-size-fits-all solution, and there are some options that are either redundant or should not be used simultaneously. You should always review and adjust your batch directives for your particular scenario.

At a minimum, batch scripts should have:

<!-- <div class="annotate" markdown>
<ul>
<li><b>Job Name</b> <br> <pre><code>#SBATCH --job-name=hello_world</code></pre></li>
<li><b>Partition</b> <br> <pre><code>#SBATCH --partition=standard</code></pre></li> 
<li><b>Account</b> (1) <br> <pre><code>#SBATCH --account=your_group</code></pre></li>
<li><b>Number of Nodes</b> <br> <pre><code>#SBATCH --nodes=1</code></pre></li>
<li><b>Core count or total memory(2)</b> <pre><code>#SBATCH --ntasks=1<br>#SBATCH --cpus-per-task=10</code></pre><br>or<br><pre><code>#SBATCH --mem=50gb</code></pre> </li>
<li><b>Time limit</b> <br> <pre><code>#SBATCH --time=01:00:00</code></pre> </li>
</ul>
</div> -->

**Job Name**

```
#SBATCH --job-name=hello_world
```

**Partition**

```
#SBATCH --partition=standard
```

**Account** (1)
{ .annotate }

1. Account does not need to be specified when using windfall

```
#SBATCH --account=your_group
```

**Number of Nodes** 

```
#SBATCH --nodes=1
```

**Core Count or Total Memory** (1)
{ .annotate }

1. Only one of these should be specified. See [CPUs and Memory](#cpus-and-memory) for details.

```
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=10
```

or

```
#SBATCH --mem=50gb
```

**Time Limit**

```
#SBATCH --time=01:00:00
```


<!-- | Item | Directive Example | Comment |
| Nodes | `` | | 
| CPUs or Memory |  | Either a number of CPUs or an amount of memory should be specified, not both. The scheduler automatically determines memory from a specified number of CPUs, and a number of CPUs from a specified total memory. |
-->
   
The above options are examples for a single node job in the standard partition. Your needs may vary. Use the sections below to determine which options are appropriate for your job.    

See the [Examples and Explanations](#examples-and-explanations) section at the end of the page for detailed examples with descriptions. 


## Allocations and Partitions

The partitions, or queues, on the UArizona HPC which determine the priority of your jobs and resources available to them are shown in the table below. With the exception of Windfall, these consume your monthly allocation. See our [allocations documentation](../../../resources/allocations/) for more detailed information on each. The syntax to request each of the following is shown below:

!!! warning "Buy-in users must use the `--qos` directive"
    If you're a member of a buy-in group and are trying to use your high priority hours, ensure you are including a `--qos` directive. When this directive is missing, you will recieve the error:
    ```
    sbatch: error: QOSGrpSubmitJobsLimit
    sbatch: error: Batch job submission failed: Job violates accounting/QOS policy (job submit limit, user's size and/or time limits)
    ```

|<div style="width:110px">Partition</div>|Request Syntax|Comments|
|-|-|-|
|Standard|<pre><code>#SBATCH --account=&#60;PI GROUP&#62;<br>#SBATCH --partition=standard</code></pre>|Request a CPU-only node using standard hours.|
|Standard GPU|<pre><code>#SBATCH --account=&#60;PI GROUP&#62;<br>#SBATCH --partition=gpu_standard<br>#SBATCH --gres=gpu:&#60;options&#62;</code></pre>|Request GPU resources using standard hours. See [the GPUs section below](#gpus) for details on the `gres` directive.|
|Windfall|<pre><code>#SBATCH --partition=windfall</code></pre>|Unlimited access. Preemptible. Do not include an `--account` flag when requesting this partition.|
|Windfall GPU|<pre><code>#SBATCH --partition=gpu_windfall<br>#SBATCH --gres=gpu:&#60;options&#62;</code></pre>|Request GPU resources using windfall. See [the GPUs section below](#gpus) for details on the `gres` directive. Do not include an `--account` flag when requesting this partition.|
|High Priority|<pre><code>#SBATCH --account=&#60;PI GROUP&#62;<br>#SBATCH --partition=high_priority<br>#SBATCH --qos=user_qos_&#60;PI GROUP&#62;</code></pre>|Request a CPU-only node with high priority resources. Only available to <a href="../../../policies/buy_in/">buy-in groups</a>.|
|High Priority GPU|<pre><code>#SBATCH --account=&#60;PI GROUP&#62;<br>#SBATCH --partition=gpu_high_priority<br>#SBATCH --qos=user_qos_&#60;PI GROUP&#62;<br>#SBATCH --gres=gpu:&#60;options&#62;</code></pre>|Request GPU resources with high priority hours. Only available to <a href="../../../policies/buy_in/">buy-in groups</a>. See [the GPUs section below](#gpus) for details on the `gres` directive.|
|Qualified|<pre><code>#SBATCH --account=&#60;PI GROUP&#62;<br>#SBATCH --partition=standard<br>#SBATCH --qos=qual_qos_&#60;PI GROUP&#62;</code></pre>|Available to groups with an activate [special project](../../../policies/special_projects/).|
|Qualified GPU|<pre><code>#SBATCH --account=&#60;PI GROUP&#62;<br>#SBATCH --partition=gpu_standard<br>#SBATCH --qos=qual_qos_&#60;PI GROUP&#62;<br>#SBATCH --gres=gpu:&#60;options&#62;|Request GPU resources with qualified hours. Available to groups with an activate [special project](../../../policies/special_projects/). See [the GPUs section below](#gpus) for details on the `gres` directive.|

## Time Limits

The syntax for requesting time for your job is ```HHH:MM:SS``` or ```DD-HHH:MM:SS```. The maximum amount of time that can be requested is 10 days for a batch job. More details in [Job Limits](../../job_limits/).

```
#SBATCH --time=HHH:MM:SS
```

or 

```
#SBATCH --time=DD-HH:MM:SS
```

## CPUs and Memory 

The number of CPUs (1) for a job can either be specified by the user, or it can be left to the Scheduler to determine. Generally, the user should specify the number of CPUs per node **or** the total memory per node, but **not both**. Exactly one of these should always be specified. Both over-specification and under-specification can result in error or unexpected behavior.
{ .annotate }

1. Note that the terms "CPU" and "core" are used interchangably in the context of scheduling jobs, even though they do not have the same meaning in a hardware context.

When the number of CPUs (per node) is specified, the total amount of memory will be determined by the Scheduler using the product of the number of CPUs and the fixed quantity of memory per CPU for the hardware in use. To find the amount of memory per CPU by cluster and node type, see our [Compute Resources page](../../../resources/compute_resources/#compute-resources-available-by-cluster). 

When the total memory (per node) is specified, the number of CPUs will be determined by the Scheduler using the ratio of the total memory requested to the value of memory per CPU for the given hardware.

**Example: Single-Node, CPU-specified, Puma Standard Node**

```bash
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=30
```

Total memory is determinded to be 150 GB based on 30 CPUs and 5 GB of memory per CPU on node type. User should not specify total memory.

**Example: Single-Node, Memory-specified, Puma Standard Node**

```bash
#SBATCH --nodes=1
#SBATCH --mem=200gb
```

The number of CPUs allocated to this job is determined to be 40 based on 200 GB of total memory and 5 GB of memory per CPU. User should not specify number of CPUs.

**Memory Per CPU**

The value of `mem-per-cpu` is determined automatically by the Scheduler based on the cluster and node type and generally does not need to be specified by the user. See our [Compute Resources page](../../../resources/compute_resources/#compute-resources-available-by-cluster) for a lookup table. Since this value varies across clusters and node types, specifying it manually may lead to unexpected behaviors, such as standard jobs being placed on high memory nodes, which both increases wait time for the user and reduces availability of limited resources.

## Multi-Node Jobs

The same considerations described above apply to multi-node jobs, but the `--mem` flag determines the total memory *per node*.

The batch directives to specify CPUs are different for multi-node jobs than for single-node jobs. 

To specify the total number of CPUs across nodes, use

```bash
#SBATCH --nodes=<n_nodes>
#SBATCH --ntasks=<n_tasks>
```

To specify the number of CPUs per node, use

```bash
#SBATCH --nodes=<n_nodes>
#SBATCH --ntasks-per-node=<n_tasks>
```


???+ warning "Single vs. Multi-Node Programs"
    
    In order for your job to make use of more than one node, it must be able to make use of something like MPI. 

    If your application is not MPI-enabled, always set ```--nodes=1```

<!-- 
## Memory and High Memory Nodes

!!! tip "Memory and CPUs are connected"
    More detailed information on memory and CPU requests can be found on our [CPUs and Memory page](../../cpus_and_memory/).
    
!!! warning "Include Units"
    If you exclude ```gb``` from your memory request, Slurm will default to `mb`.

Memory is an optional flag. By default, the scheduler will allocate you the [standard CPU/memory ratio](../../cpus_and_memory/) available on the cluster. 

Memory can either be requested with the ```--mem``` or ```--mem-per-cpu``` flags. The ```--mem``` flag indicates the amount of {==Memory per **node**==} to allocate to your job. If you are running multi-node MPI jobs with this flag, the total amount of memory you will receive will be ```mem```$\times$```nodes```

The general syntax for requesting ```<N>``` GB of memory per node is
```
#SBATCH --mem=<N>gb
```
or, to request ```<N>``` GB of memory per CPU:
```
#SBATCH --mem-per-cpu=<N>gb
``` 
-->

## High Memory Nodes

Please note that there are only three public and two buy-in high memory nodes on Puma, and only one high memory node on Ocelote, compared to hundreds of standard nodes on each cluster. Wait times are typically much longer on these nodes as compared to standard nodes. 
<!-- As such, ***high memory nodes are limited resources and should be only be used if need is clearly demonstrated.*** -->

Before requesting a high memory node, please take the time to test your job on standard nodes, increasing the requested memory as necessary. Additional memory can be allocated to standard nodes by increasing the value of the `--mem` flag or the number of CPUs (see previous sections). 

<mark>There generally is no benefit to running a job on a high memory node unless it requires more than 470 GB of memory</mark>, which is the total amount of memory available on a Puma standard node. 

<mark>If your job requires less than 470 GB of memory to run, please adjust your batch directives to run on a standard node with an appropriate amount of memory.</mark> See [CPUs and Memory](#cpus-and-memory) for details. It may take some testing to find an optimal value.

If your work is MPI-enabled, using multiple standard nodes may be a viable option to increase the total memory. Careful testing is needed to ensure that this will be beneficial to your workflow.

To request a high memory node, you will need the additional flag ```--constraint=hi_mem```. It is recommended to include the exact directives below to avoid unexpected behavior.

|Cluster|Directives|
|-|-|
|Ocelote|<pre><code>#SBATCH --mem-per-cpu=41gb<br>#SBATCH --constraint=hi_mem</code></pre>|
|Puma|<pre><code>#SBATCH --mem-per-cpu=32gb<br>#SBATCH --constraint=hi_mem</code></pre>|

???+ question "Automatic assignment to high memory nodes"

    If a value of `mem-per-cpu` is requested that is higher than the value available on a given cluster, the Scheduler will automatically migrate the job to a high memory node, even if you did not explicitly request this. 

    The most common case of this would be migrating a job from Ocelote, which has 6 GB per CPU, to Puma, which has 5 GB per CPU. 

    Since the Scheduler is able to detect and assign this value automatically, it is recommended to remove requests for `mem-per-cpu` and specify either the total memory or number of CPUs. See the [CPUs and Memory](#cpus-and-memory) section for details.

## GPUs

!!! info "GPU partitions must be used"
    GPU jobs will need to use GPU-specific partitions. See the [partitions section](#allocations-and-partitions) at the top of this page for details. 

!!! warning "GPU options are per node"
    When using `--gres=gpu:N`, keep in mind that the total number of GPUs the job is allocated is `N` per node. 

<mark>GPUs are limited resources.</mark> Before requesting a GPU, please ensure that the program you intend to run is GPU-enabled and properly configured to utilize the GPU. 

GPUs are an optional resource that may be requested with the ```--gres``` directive. For an overview of the specific GPU resources available on each cluster, see our [resources page](../../../resources/compute_resources/#gpu-nodes). 

<table>
  <colgroup>
    <col style="width: 10%;">
    <col style="width: 50%;">
    <col style="width: 40%;">
  </colgroup>
  <tr>
    <th>Cluster</th>
    <th>Directive</th>
    <th>Target</th>
  </tr>
  <tr>
    <td rowspan=3  style="vertical-align: middle;">Puma</td>
    <td><pre><code>#SBATCH --gres=gpu:1</code></pre></td>
    <td>Request a single GPU. This will either target one Volta GPU (v100) or one <a href="../../../resources/compute_resources/#__tabbed_2_1">A100 MIG slice</a>, depending on availability. Only one GPU should be selected with this method to avoid being allocated multiple MIG slices.</td>
  </tr>
  <tr>
    <td><pre><code>#SBATCH --gres=gpu:nvidia_a100_80gb_pcie_2g.20gb</code></pre></td>
    <td>Target one A100 MIG slice.</td>
  </tr>
  <tr>
    <td><pre><code>#SBATCH --gres=gpu:volta:N</code></code></td>
    <td>Request <code>N</code> V100 GPUs where 1&le;<code>N</code>&le;4</td>
  </tr>
  <tr>
    <td rowspan=1  style="vertical-align: middle;">Ocelote</td>
    <td><pre><code>#SBATCH --gres=gpu:N<br>#SBATCH --mem-per-cpu=8gb</code></pre></td>
    <td>Request <code>N</code> GPUs, where 1&le;<code>N</code>&le;2. This will target either one or two Pascals (p100s)</td>
  </tr>
</table>


## Job Arrays 

Array jobs in Slurm allow users to submit multiple similar tasks as a single job. Each task within the array can have its own unique input parameters, making it ideal for running batch jobs with varied inputs or executing repetitive tasks efficiently. The flag for submitting array jobs is:

```
#SBATCH --array=<N>-<M>
```
where ```<N>``` and ```<M>``` are integers. 

For detailed information on job arrays, see our [job array tutorial](../array_jobs/).

## Job Dependencies

Slurm job dependencies allow users to submit to a series of jobs that depend on each other using the flag and options:
```
--dependency=<type:jobid[:jobid][,type:jobid[:jobid]]>
```

For example, say job `B` depends on the successful completion of job `A`. Job `B` can be submitted as a dependency of job `A` using the following method:

```
[netid@junonia ~]$  sbatch A.slurm
Submitted batch job 1939000
[netid@junonia ~]$ sbatch --afterok:1939000 B.slurm
```
This tells the scheduler to hold job `B` until job `A` completes. The `afterok` is the dependency `<type>`, in this case it ensures that job `B` runs only if job `A` completes successfully. The different options for `<type>` are show below:

|Dependency Type|Meaning|
|-|-|
|`after`|Job can begin after the specified job(s) have started|
|`afterany`|Job can begin after the specified job(s) have terminated. Job(s) will start regardless of whether the specified jobs failed or ran successfully|
|`afterok`|Job can begin after the specified job(s) have completed successfully. If the specified job(s) fail, the dependency will never run.|
|`afternotok`|Job can begin after the specified job(s) have failed. If the specified job(s) complete successfully, the dependency will never run.|

## Output Filenames

The default output filename for a slurm job is ```slurm-<jobid>.out```. If desired, this can be customized using the directives
```
#SBATCH -o output_filename.out
#SBATCH -e output_filename.err
```

Filenames take patterns that allow for job information substitution. A list of filename patterns is shown below. 

|Variable|Meaning|Example Slurm Directive(s)|Sample Output|
|-|-|-|-|
|```%A```|A job array's main job ID|<pre><code>#SBATCH --array=1-2<br>#SBATCH -o %A.out<br>#SBATCH --open-mode=append</code></pre>|```12345.out```|
|```%a```|A job array's index number|<pre><code>#SBATCH --array=1-2<br>#SBATCH -o %A_%a.out</code></pre>|```12345_1.out```<br>```12345_2.out```|
|```%J```|Job ID plus [stepid](https://slurm.schedmd.com/sattach.html)|<pre><code>#SBATCH -o %J.out</code></pre>|```12345.out```|
|```%j```|Job ID|<pre><code>#SBATCH -o %j.out</code></pre>|```12345.out```|
|```%N```|Hostname of the first compute node allocated to the job|<pre><code>#SBATCH -o %N.out</code></pre>|```r1u11n1.out```|
|```%u```|Username|<pre><code>#SBATCH -o %u.out</code></pre>|```netid.out```|
|```%x```|Job name|<pre><code>#SBATCH --job-name=JobName<br>#SBATCH -o %x.out</code></pre>|```JobName.out```|

[^1]: Groups and users are subject to limitations on resource usage. For more information, see [job limits](/running_jobs/job_limits/).


## Additional Directives
|<div style="width:270px">Command</div>|Purpose|
|-|-|
|<pre><code>#SBATCH --job-name=JobName</code></pre>|Optional: Specify a name for your job. This will not automatically affect the output filename.|
|<pre><code>#SBATCH -e output_filename.err<br>#SBATCH -o output_filename.out</code></pre>|Optional: Specify output filename(s). If ```-e``` is missing, stdout and stderr will be combined.|
|<pre><code>#SBATCH --open-mode=append</code></pre>|Optional: Append your job's output to the specified output filename(s).|
|<pre><code>#SBATCH --mail-type=BEGIN&#124;END&#124;FAIL&#124;ALL</code></pre>|Optional: Request email notifications. **Beware of mail bombing yourself.**|
|<pre><code>#SBATCH --mail-user=email@address.xyz</code></pre>|Optional: Specify email address. If this is missing, notifications will go to your UArizona email address by default.|
|<pre><code>#SBATCH --export=VAR</pre></code>|Optional: Export a comma-delimited list of environment variables to a job.|
|<pre><code>#SBATCH --export=all</pre></code>|Optional: Export your working environment to your job. This is the default.|
|<pre><code>#SBATCH --export=none</pre></code>|Optional: Do not export working environment to your job.|



## Examples and Explanations

The below examples are complete sections of Slurm directives that will produce valid requests. Other directives can be added (like output files), but they are not strictly necessary to submit a valid request. For simplicity, the Puma cluster is assumed when discussing memory and GPU resources. Note that these examples do not include the shebang ```#!bin/bash``` statement, which should be at the top of _every_ Slurm script. Also, note that the order of directives does not matter.

=== "Single CPU"
    ```
    #SBATCH --job-name=hello_world
    #SBATCH --account=your_group
    #SBATCH --partition=standard
    #SBATCH --nodes=1
    #SBATCH --ntasks=1
    #SBATCH --time=01:00:00
    ```

    This example requests one CPU on one node for one hour. Easy!

=== "Single Node"
    ```
    #SBATCH --job-name=hello_world
    #SBATCH --account=your_group
    #SBATCH --partition=standard
    #SBATCH --nodes=1
    #SBATCH --ntasks=10
    #SBATCH --time=01:00:00
    ```

    10 CPUs are now requested. The default value of ```mem-per-cpu``` is assumed, therefore giving this job 50 GB of total memory. Specifying this value by including ```#SBATCH --mem-per-cpu=5gb``` will not change the behavior of the above request.

    The example below will produce an equivalent request as above:

    ```
    #SBATCH --job-name=hello_world
    #SBATCH --account=your_group
    #SBATCH --partition=standard
    #SBATCH --nodes=1
    #SBATCH --ntasks=1
    #SBATCH --mem=50gb
    #SBATCH --time=01:00:00
    ```
    On Puma, up to 94 CPUs or 470 GB of memory can be requested. 

=== "Single GPU Node"
    !!! info "{==:material-alert-decagram:NEW!==} July 31, 2024 Partitions update"
        Beginning July 31, GPU jobs must use a GPU partition. See the [partitions](#allocations-and-partitions) section at the top of this page for details.

    ```
    #SBATCH --job-name=hello_world
    #SBATCH --account=your_group
    #SBATCH --partition=gpu_standard
    #SBATCH --nodes=1
    #SBATCH --ntasks=10
    #SBATCH --time=01:00:00
    #SBATCH --gres=gpu:1
    ```

    Note the ```gres=gpu:1``` option and `gpu_standard` partition.

=== "Multi-Node"
    
    When requesting a multi-node job, up to 94 ```--ntasks-per-node``` can be requested on Puma. The numbers below are chosen for illustrative purposes and can be replaced with your choice, up to system limitations. It should be noted that there is no advantage to requesting multiple nodes when the total number of CPUs needed is less than or equal to the number of CPUs on one node. The numbers below are just for demonstration purposes. 

    ```
    #SBATCH --job-name=Multi-Node-MPI-Job
    #SBATCH --account=your_group
    #SBATCH --partition=standard
    #SBATCH --ntasks=30
    #SBATCH --nodes=3
    #SBATCH --ntasks-per-node=10
    #SBATCH --time=01:00:00   
    ```

=== "High-Memory Node"
    
    When requesting a high memory node, include **both** the ```--mem-per-cpu``` and ```--constraint``` directives.

    ```
    #SBATCH --job-name=High-Mem-Job
    #SBATCH --account=your_group
    #SBATCH --partition=standard
    #SBATCH --nodes=1
    #SBATCH --ntasks=94
    #SBATCH --mem-per-cpu=32gb
    #SBATCH --constraint=hi_mem
    #SBATCH --time=01:00:00   
    ```