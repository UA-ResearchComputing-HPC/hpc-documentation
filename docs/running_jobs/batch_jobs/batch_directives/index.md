# Batch Directives

!!! tip
    For a full list of directives, see [Slurm's official documentation](https://slurm.schedmd.com/sbatch.html).

The first section of a batch script (after the shebang) always contains the Slurm Directives, which specify the resource requests for your job. The scheduler parses these in order to allocate CPUs, memory, walltime, etc. to your job request.


 
## Allocations and Partitions

There are four available partitions, or queues, on the UArizona HPC which determine the priority of your jobs. With the exception of Windfall, these consume your monthly allocation. See our [allocations documentation](../../../resources/allocations/) for more detailed information on each. The syntax to request each of the following is shown below:

|Partition|Request Syntax|Comments|
|-|-|-|
|Standard|<pre><code>#SBATCH --account=&#60;PI GROUP&#62;<br>#SBATCH --partition=standard</code></pre>||
|Windfall|<pre><code>#SBATCH --partition=windfall</code></pre>|Unlimited access. Preemptible. Do not include an `--account` flag when requesting this partition.|
|High Priority|<pre><code>#SBATCH --account=&#60;PI GROUP&#62;<br>#SBATCH --partition=high_priority<br>#SBATCH --qos=user_qos_&#60;PI GROUP&#62;</code></pre>|Only available to <a href="../../../policies/buy_in/">buy-in groups</a>.|
|Qualified|<pre><code>#SBATCH --account=&#60;PI GROUP&#62;<br>#SBATCH --partition=standard<br>#SBATCH --qos=qual_qos_&#60;PI GROUP&#62;</code></pre>|Available to groups with an activate [special project](../../../policies/special_projects/).|




## Nodes

???+ danger "Mutli-Node Programs"
    
    In order for your job to make use of more than one node, it must be able to make use of something like MPI. 

    **If your application is not MPI-enabled, always set** ```--nodes=1```

The term node refers to the number of physical computers allocated to your job. The syntax to allocate ```<N>``` nodes to a job is:

```
#SBATCH --nodes=<N>
```

## CPUs

Each job must specify the requested number of CPUs with the ```--ntasks``` directive.  This can be done in one of two ways:

1. If your application is making use of MPI or is executing simultaneous distinct processes, you can request ```<N>``` CPUs with

    ```bash
    #SBATCH --ntasks=<N>
    ```

2. If you are using a multithreaded application, then you can request ```<N>``` CPUs with:
    ```bash
    #SBATCH --ntasks=1
    #SBATCH --cpus-per-task=<N>
    ```

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

**High Memory Node Requests**

To request a high memory node, you will need the additional flag ```--constraint=high_mem```. It is recommended to use the exact directives below to avoid unexpected behavior.

|Cluster|Command|
|-|-|
|Ocelote|<pre><code>#SBATCH --mem-per-cpu=41gb<br>#SBATCH --constraint=high_mem</code></pre>|
|Puma|<pre><code>#SBATCH --mem-per-cpu=32gb<br>#SBATCH --constraint=high_mem</code></pre>|


## Time

The syntax for requesting time for your job is ```HHH:MM:SS``` or ```DD-HHH:MM:SS```. The maximum amount of time that can be requested is 10 days for a batch job. More details in [Job Limits](../../job_limits/).

```
#SBATCH --time=HHH:MM:SS
```


## GPUs

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
    <td>Request a single GPU. This will either target one Volta GPU (v100) or one <a href="../../../resources/compute_resources/#mig-multi-instance-gpu-resources">A100 MIG slice</a>, depending on availability. Only one GPU should be selected with this method to avoid being allocated multiple MIG slices.</td>
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
    <td>Ocelote</td>
    <td><pre><code>#SBATCH --gres=gpu:1</code></pre></td>
    <td>Request one Pascal GPU (p100)</td>
</table>


## Job Arrays 

Array jobs in Slurm allow users to submit multiple similar tasks as a single job. Each task within the array can have its own unique input parameters, making it ideal for running batch jobs with varied inputs or executing repetitive tasks efficiently. The flag for submitting array jobs is:

```
#SBATCH --array=<N>-<M>
```
where ```<N>``` and ```<M>``` are integers. 

For detailed information on job arrays, see our [job array tutorial](../array_jobs/).

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

The below examples are complete sections of Slurm directives that will produce valid requests. Other directives can be added (like output files), but they are not strictly necessary to submit a valid request. For simplicity, the Puma cluster is assumed when discussing memory and GPU resources. Note that these examples do not include the shebang ```#!bin/bash``` statement, which should be at the top of _every_ slurm script. Also, note that the order of directives does not matter.

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

    ```
    #SBATCH --job-name=hello_world
    #SBATCH --account=your_group
    #SBATCH --partition=standard
    #SBATCH --nodes=1
    #SBATCH --ntasks=10
    #SBATCH --time=01:00:00
    #SBATCH --gres=gpu:1
    ```

    Note the ```gres=gpu:1``` option.

=== "Multi-Node"
    
    When requesting a multi-node job, up to 94 ```--ntasks-per-node``` can be requested on Puma. The numbers below are chosen for illustrative purposes and can be replaced with your choice, up to system limitations. It should be noted that there is no advantage to requesting multiple nodes when the total number of CPUs needed is less than or equal to the number of CPUs on one node.  

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