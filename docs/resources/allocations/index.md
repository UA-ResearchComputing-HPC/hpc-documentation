# Time Allocations

??? danger "Do not run computations on the login nodes." 
    CPU time allocations do not apply to login nodes. See [Running Jobs](../../running_jobs/overview/) for detailed instructions on the proper way to run computationally intensive tasks. 

!!! info "{==:material-alert-decagram:NEW!==} Updated Partitions"
    We have introduced new GPU partitions to improve the availability of GPU resources on the cluster. To submit GPU jobs, these new partitions must be used. For more information, see [Batch Job Directives](../../running_jobs/batch_jobs/batch_directives/).

## Group Allocations

All University of Arizona Principal Investigators (PIs; typically faculty) that register for access to UArizona High Performance Computing (HPC) services receive free standard allocations on the HPC clusters which are shared among all members of their team and refreshed on a monthly basis. All PIs receive a standard allocation in addition to the windfall partition. A breakdown of the allocations available on the system and their usage is shown below. 

!!! Warning "High Priority"

    Please note that the High Priority partition is only available to PI groups who participated in the [buy-in process](/policies/buy_in) for Puma. PIs will be notified when another buy-in session is available

!!! Example "Qualified Hours"

    Qualified Hours are only available to groups which have been awarded a special project. See [Policies](/policies/special_projects/ "special projects") for information on how to apply. 

=== "Standard"
    Every group receives a free allocation of standard hours that refreshes on the first day of each month. 

    ||Puma|Ocelote|El Gato|
    |-|-|-|-|
    |Standard CPU Hours|150,000|100,000|7,000|

    In batch jobs, standard hours can be used to request resources on CPU-only nodes with the directives

    ```bash
    #SBATCH --account=<PI GROUP>
    #SBATCH --partition=standard
    ```

    {==:material-alert-decagram:NEW!==} To request GPU resources using standard hours:
    ```bash
    #SBATCH --account=<PI GROUP>
    #SBATCH --partition=gpu_standard
    #SBATCH --gres=gpu:<options>
    ```



=== "Windfall"
    {==Windfall is a partition available to jobs that enables them to run **without consuming your allocation**, but it also **reduces their priority**==}. This means windfall jobs are slower to start than other partitions. In addition to lower priority, windfall jobs are preemptible, meaning standard and high-priority jobs can interrupt a running windfall job, effectively placing it back in the queue. The purpose of windfall is to ensure that the clusters are busy at all times, and to allow researchers additional compute while increasing the efficiency of the system.

    !!! note "The `--account` flag should be omitted when using the Windfall partition."

    In batch jobs, the windfall partition can be used to request resources on CPU-only nodes with the directive:

    ```bash
    #SBATCH --partition=windfall
    ```

    {==:material-alert-decagram:NEW!==} To request GPU resources:
    ```bash
    #SBATCH --partition=gpu_windfall 
    #SBATCH --gres=gpu:<options>
    ```



=== "High Priority"
    
    High priority allocations provide access to an additional pool of purchased compute nodes and increase the priority of jobs such that they start faster than standard jobs. Please check with your PI to ensure that your group has access before including these directives in your jobs.
    
    In batch jobs, high priority hours can be used to request resources on CPU-only nodes with the directives:

    ```bash
    #SBATCH --account=<PI GROUP>
    #SBATCH --partition=high_priority
    #SBATCH --qos=user_qos_<PI GROUP>
    ```

    {==:material-alert-decagram:NEW!==} To request GPU resources with high priority hours:

    ```bash
    #SBATCH --account=<PI GROUP>
    #SBATCH --partition=gpu_high_priority
    #SBATCH --qos=user_qos_<PI GROUP>
    #SBATCH --gres=gpu:<options>
    ```


=== "Qualified"
    Groups with an upcoming deadline (e.g., conference, paper submission, graduation) are eligible to apply for a [Special Project](/policies/special_projects/) allocation once per year. Special projects provide an additional pool of standard hours, known as "qualified hours" to the group for a limited amount of time. 

    In batch jobs, qualified hours can be used to request resources on CPU-only nodes with the directive:
    ```bash
    #SBATCH --account=<PI GROUP>
    #SBATCH --partition=standard
    #SBATCH --qos=qual_qos_<PI GROUP>
    ```
    {==:material-alert-decagram:NEW!==} To request GPU resources with qualified hours:
    ```bash
    #SBATCH --account=<PI GROUP>
    #SBATCH --partition=gpu_standard
    #SBATCH --qos=qual_qos_<PI GROUP>
    #SBATCH --gres=gpu:<options>
    ```

For more information on batch directives and `--gres` options, see our [batch directives](../../running_jobs/batch_jobs/batch_directives/) documentation.

See: [**interactive jobs**](../../running_jobs/interactive_jobs/#customizing-your-resources), [**batch jobs**](../../running_jobs/batch_jobs/batch_directives/#allocations-and-partitions), or [**Open OnDemand**](../../running_jobs/open_on_demand/#web-form) for more information on the specific syntax for using hours in different jobs.

## How Allocations are Charged

The number of CPU hours a job consumes is determined by **the number of CPUs it is allocated multiplied by its requested walltime**. When a job is submitted, the CPU hours it requires are automatically deducted from the account. If the job ends early, the unused hours are automatically refunded.

For example, a job requesting 50 CPUs for 10 hours will be charged 500 CPU hours. When the job is submitted, all 500 CPU hours are deducted from the user's account. However, if the job only runs for 8 hours before completing, the unused 100 CPU hours would be refunded.

``` mermaid
graph LR
  A[Request 50 CPUs<br>for 10 hours] --> B[500 CPU hours<br>charged];
  B --> C[Job starts];
  C --> D[Job completes<br>after 8 hours];
  D --> E[100 CPU hours<br>refunded];
```

This accounting is the same regardless of which type of node you request. Standard, GPU, and high memory nodes are all charged using the same model and use the same allocation pool. 

!!! tip "Charging discrepancies"
    If you find you are being charged for more CPUs that you are specifying in your submission script, it may be an [issue with your job's memory request](../../running_jobs/cpus_and_memory/).

Allocations are refreshed on the first day of each month. Unused hours from the previous month do not roll over.
    

## How to Find Your Remaining Allocation

To view your allocation's used, unused, and [encumbered hours](/support_and_training/glossary/ "For information on terminology, see our glossary"), use the command ```va``` (short for "view allocation") in a terminal. For example:
```bash
(elgato) [user@gpu5 ~]$ va
Windfall: Unlimited
 
PI: parent_974 Total time: 7000:00:00
    Total used*: 1306:39:00
    Total encumbered: 92:49:00
    Total remaining: 5600:32:00
    Group: group1 Time used: 862:08:00 Time encumbered: 92:49:00
    Group: group2 Time used: 0:00:00 Time encumbered: 0:00:00
 
*Usage includes all subgroups, some of which may not be displayed here
```

Note that if your PI has created [multiple groups](../../registration_and_access/group_management/), each of these groups consumes CPU hours from the *same allocation*. You can see the total allocation pool and the usage for each group you are a member of in the output of `va`. 
