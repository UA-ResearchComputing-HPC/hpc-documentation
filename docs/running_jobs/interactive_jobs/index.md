# Interactive Jobs

## Overview

Interactive sessions are a way to gain access to a compute node from the command line. This is useful for [checking and using available software modules](../../software/modules/), testing [submission scripts](../batch_jobs/intro/), debugging code, compiling software, and running programs in real time. 

The term "interactive session" in this context refers to jobs run from within the command line on a terminal client. Opening a terminal in an [interactive graphical desktop](../open_on_demand/) is also equivalent, but these sessions are fixed to the resources allocated to that OOD session. As you'll see below, one has more control over their resources when requesting an interactive session via SSH in a terminal client.

## Clusters 

An interactive session can be requested on any of our three clusters: El Gato, Ocelote, and Puma. Since the request to start an interactive session is processed by Slurm, these jobs will be subject to the same wait times as batch jobs. Since Puma is typically busy with high traffic throughput, it is not recommended to request an interactive session on this cluster unless specific resources are needed and longer wait times are acceptable to the user. 


## How to Request an Interactive Session



### The ```interactive``` Command

We have a built-in shortcut command that will allow you to quickly and easily request a session by simply entering: ```interactive```

The ```interactive``` command is essentially a convenient wrapper for a Slurm command called ```salloc```. This can be thought of as similar to the `sbatch` command, but for interactive jobs rather than [batch jobs](../batch_jobs/intro/). When you request a session using interactive, the full `salloc` command being executed will be displayed for reference.

```bash
(ocelote) [netid@junonia ~]$ interactive
Run "interactive -h for help customizing interactive use"
Submitting with /usr/local/bin/salloc --job-name=interactive --mem-per-cpu=4GB --nodes=1    --ntasks=1 --time=01:00:00 --account=windfall --partition=windfall
salloc: Pending job allocation 531843
salloc: job 531843 queued and waiting for resources
salloc: job 531843 has been allocated resources
salloc: Granted job allocation 531843
salloc: Waiting for resource configuration
salloc: Nodes i16n1 are ready for job
[netid@i16n1 ~]$
```

Notice in the example above how the command prompt changes once your session starts. When you're on a login node, your prompt will show `junonia` or `wentletrap`. Once you're in an interactive session, you'll see the name of the compute node you're connected to. 

**Customizing Your Resources**

The command ```interactive``` when run without any arguments will allocate a windfall session using one CPU for one hour which isn't ideal for most use cases. You can modify this by including additional flags. To see the available options, you can use the help flag ```-h```

```bash
(ocelote) [netid@junonia ~]$ interactive -h
Usage: /usr/local/bin/interactive [-x] [-g] [-N nodes] [-m memory per core] [-n total number of tasks] [-Q optional qos] [-t hh::mm:ss] [-a account to charge]
```
The values shown in the output can be combined and each mean the following:

|Flag|Explanation|<div style="width:250px">Example</div>|
|-|-|-|
|```-a```|This is followed by your group's name will switch you to using the standard partition. This is highly recommended to keep your sessions from being interrupted and to help them start faster|```-a my_group```|
|```-t```|The amount of time to reserve for your job in the format ```hhh:mm:ss```|```-t 05:00:00```|
|```-n```|Total number of tasks (CPUs) to allocate to your job. By default, this will be on a single node|```-n 16```|
|```-N```|Total number of nodes (physical computers) to allocate to your job|```-N 2```|
|```-m```|Total amount of memory {==per CPU==}. See [CPUs and Memory](../cpus_and_memory/) for more information and potential complications|```-m 5gb```|
|```-Q```|Used to access {==high priority or qualified hours==}. Only for groups with [buy-in/special project hours](../../resources/allocations/)|High Priority: ```-Q user_qos_<PI NETID>```<br>Qualified: ```-Q qual_qos_<PI NETID>```|
|```-g```|Request one GPU. This flag takes no arguments. On Puma, you may be allocated **either** a v100 **or** [a MIG slice](../../resources/compute_resources/#mig-multi-instance-gpu-resources). If you want more control over your resources, you can use `salloc` directly using [GPU batch directives](../batch_jobs/batch_directives/#gpus)|```-q```|
|```-x```|Enable [X11 forwarding](/registration_and_access/system_access/#x11-forwarding). This flag takes no arguments.|```-x```|

You may also create your own [salloc](https://slurm.schedmd.com/salloc.html) commands using any desired Slurm directives for maximum customization.

### The ```salloc``` Command

If ```interactive``` is insufficient to meet you resource requirements (e.g., if you need to request more than one GPU or a GPU MIG slice), you can use the Slurm command ```salloc``` to further customize your job. 

The command ```salloc``` expects [Slurm directives](../batch_jobs/batch_directives/) as input arguments that it uses to customize your interactive session. For comprehensive documentation on using ```salloc```, see [Slurm's official documentation](https://slurm.schedmd.com/salloc.html).

**Single CPU Example**

```
salloc --account=<YOUR_GROUP> --partition=standard --nodes=1 --ntasks=1 --time=1:00:00 --job-name=interactive
```
**Single Node, Multi-CPU Example**

```
salloc --account=<YOUR_GROUP> --partition=standard --nodes=1 --ntasks=16 --time=1:00:00 --job-name=interactive
```

**Multi-GPU Example (Puma)**
```
salloc --account=<YOUR_GROUP> --partition=standard --nodes=1 --ntasks=1 --time=1:00:00 --job-name=multi-gpu --gres=gpu:volta:2
```

**GPU MIG Slice Example**
```
salloc --account=<YOUR_GROUP> --partition=standard --nodes=1 --ntasks=1 --time=1:00:00 --job-name=mig-gpu --gres=gpu:nvidia_a100_80gb_pcie_2g.20gb
```
