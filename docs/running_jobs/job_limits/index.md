# Job Limits

## Job Limits

To ensure equitable access and efficient use of our clusters, we impose restrictions on the total compute resources available to individual users, jobs, and HPC groups. These limits vary based on the specific cluster and partition in use. 

The table below outlines the maximum resources that can be concurrently used at both the user and group levels.

!!! warning "Open OnDemand jobs have different limits"
    Note that the below limits apply to [interactive terminal jobs](../interactive_jobs/) and [batch jobs](../batch_jobs/intro/). [Open OnDemand jobs](../open_on_demand/) have further restrictions that are detailed in the [Open OnDemand Job Limit](#open-ondemand-jobs-limits) section below. 

!!! tip "High priority job limits"
    Buy-in groups are limited to using the resources they purchased. If you are a member of a buy-in group, you can check your specific limits by following the instructions in the [Checking Limits and Usage](#checking-limits-and-usage) below.

!!! note "Available hardware"
    If you're looking for more information on the physical resources available for jobs, see our [Compute Resources](../../resources/compute_resources/) page for more information. 

<table style="font-size: .8rem;">
    <thead>
        <tr style="background-color: #0C234B; color: white;">
            <th></th>
            <th>Puma</th>
            <th>Ocelote</th>
            <th>El Gato</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th colspan="4" style="background-color: #E2E9EB;">Global Limits</th>
        </tr>
        <tr>
            <td>Maximum Simultaneous User Jobs</td>
            <td>1000</td>
            <td>1000</td>
            <td>1000</td>
        </tr>
        <tr>
            <td>Maximum Job Walltime</td>
            <td>10 days</td>
            <td>10 days</td>
            <td>10 days</td>
        </tr>
        <tr>
            <th colspan="4" style="background-color: #E2E9EB;">Standard Job Resources</th>
        <tr>
            <td>Maximum Memory Per Group</td>
            <td>16996 GB</td>
            <td>10000 GB</td>
            <td>10000 GB</td>
        </tr>
        <tr>
            <td>Maximum CPUs per Group</td>
            <td>3290</td>
            <td>1024</td>
            <td>1024</td>
        </tr>
        <tr>
            <td>Maximum GPUs per Group</td>
            <td>4</td>
            <td>10</td>
            <td>N/A</td>
        </tr>
        <tr>
            <th colspan="4" style="background-color: #E2E9EB;">Windfall Job Resources</th>
        </tr>
        <tr>
            <td>Maximum Memory per User</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
        </tr>
        <tr>
            <td>Maximum CPUs per User</td>
            <td>6000</td>
            <td>6000</td>
            <td>6000</td>
        </tr>
        <tr>
            <td>Maximum GPUs per Job</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
            <td>N/A</td>
        </tr>
        <tr>
            <th colspan="4" style="background-color: #E2E9EB;">High Priority Job Resources</th>
        <tr>
            <td>Maximum CPUs per Group</td>
            <td>Number Purchased</td>
            <td>N/A</td>
            <td>N/A</td>
        </tr>
        <tr>
            <td>Maximum GPUs per Group</td>
            <td>Number Purchased</td>
            <td>N/A</td>
            <td>N/A</td>
        </tr>
    </tbody>
</table>




## Open OnDemand Jobs Limits

[Open OnDemand graphical jobs](../open_on_demand/) are more limited in size and duration than batch or interactive terminal jobs. Jobs that need more resources or longer runtimes can be submitted as [batch jobs](../batch_jobs/intro/).

!!! tip "Single node resources"
    Note that the maximum CPUs and GPUs listed in the table below are based on the resources available by node. For information, see [Compute Resources](../../resources/compute_resources/).


<table style="font-size: .8rem;">
    <thead>
        <tr style="background-color: #0C234B; color: white;">
            <th></th>
            <th>Puma</th>
            <th>Ocelote</th>
            <th>El Gato</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Maximum Nodes per Job</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Maximum CPUs per Job</td>
            <td>94</td>
            <td>28 (Standard/GPU nodes)<br>48 (High memory node)</td>
            <td>16</td>
        </tr>
        <tr>
            <td>Maximum GPUs per Job</td>
            <td>4</td>
            <td>2</td>
            <td>N/A</td>
        </tr>
        <tr>
            <td>Maximum Walltime per Job</td>
            <td>4 days</td>
            <td>4 days</td>
            <td>4 days</td>
    </tbody>
</table>




## Checking Limits and Usage

You can view job limits for a specific group by using the `job-limits <group_name>` command in a terminal session. The output will display the current usage of your group and personal jobs, so the results may vary.

Below is an example output from this command for a sample user who is a member of a buy-in group. The buy-in resources available to them are indicated in the High Priority field. If you are not a member of a buy-in group, this field will not appear.

Please note that the output of `job-limits` is specific to the queried group, meaning the User Limits displayed apply only to jobs submitted by that user using the group's account.

=== "Puma"
    ```bash
    (puma) [<your_netid>@wentletrap ~]$ job-limits <group>

                            Group Limits: <group>                            
    --------------------------------------------------------------------------------
    Job Type      |    Memory    |     CPU      |        GPU         |  Job Number   
                  |Running/Limit |Running/Limit |   Running/Limit    |Submitted/Limit 
    --------------------------------------------------------------------------------
    Standard      |   -/16998G   |    -/3290    |    -/gres/gpu=4    |     -/-       
    High Priority |   -/16998G   |     -/94     |    -/gres/gpu=0    |     -/-       
    --------------------------------------------------------------------------------


                                User Limits: <your_netid>                          
    --------------------------------------------------------------------------------
    Job Type      |    Memory    |     CPU      |        GPU         | Job Number*   
                  |Running/Limit |Running/Limit |   Running/Limit    |Submitted/Limit 
    --------------------------------------------------------------------------------
    Windfall      |     -/-      |    -/6000    |        -/-         |    -/1000     
    Standard      |   -/16998G   |    -/3290    |    -/gres/gpu=4    |               
    High Priority |   -/16998G   |     -/94     |    -/gres/gpu=0    |               
    --------------------------------------------------------------------------------
    *Max jobs across all groups and partitions.


                                Individual Job Limits                             
    --------------------------------------------------------------------------------
    Job Type      |    Memory    |     CPU      |        GPU         |     Time      
    --------------------------------------------------------------------------------
    Windfall      |    16998G    |     6000     |                    | 10-00:00:00   
    Standard      |    16998G    |     3290     |     gres/gpu=4     | 10-00:00:00   
    High Priority |    16998G    |      94      |     gres/gpu=0     | 10-00:00:00   
    --------------------------------------------------------------------------------
    ```

=== "Ocelote"
    ```bash
    (ocelote) [<your_netid>@wentletrap ~]$ job-limits <group>

                            Group Limits: <group>                            
    --------------------------------------------------------------------------------
    Job Type |     Memory     |      CPU       |        GPU         |   Job Number    
            | Running/Limit  | Running/Limit  |   Running/Limit    |Submitted/Limit  
    --------------------------------------------------------------------------------
    Standard |     -/10T      |     -/1024     |   -/gres/gpu=10    |      -/-        
    --------------------------------------------------------------------------------


                                User Limits: <your_netid>                            
    --------------------------------------------------------------------------------
    Job Type |     Memory     |      CPU       |        GPU         |  Job Number*    
            | Running/Limit  | Running/Limit  |   Running/Limit    |Submitted/Limit  
    --------------------------------------------------------------------------------
    Windfall |      -/-       |     -/6000     |        -/-         |     -/1000      
    Standard |     -/10T      |     -/1024     |   -/gres/gpu=10    |                 
    --------------------------------------------------------------------------------
    *Max jobs across all groups and partitions.


                                Individual Job Limits                             
    --------------------------------------------------------------------------------
    Job Type |     Memory     |      CPU       |        GPU         |      Time       
    --------------------------------------------------------------------------------
    Windfall |     8064G      |      6000      |                    |  10-00:00:00    
    Standard |     8064G      |      1024      |    gres/gpu=10     |  10-00:00:00    
    --------------------------------------------------------------------------------
    ```

=== "El Gato"
    ```bash
    (elgato) [<your_netid>@wentletrap ~]$ job-limits <group>

                            Group Limits: <group>                            
    --------------------------------------------------------------------------------
    Job Type |     Memory     |      CPU       |        GPU         |   Job Number    
            | Running/Limit  | Running/Limit  |   Running/Limit    |Submitted/Limit  
    --------------------------------------------------------------------------------
    Standard |     -/10T      |     -/1024     |        -/-         |      -/-        
    --------------------------------------------------------------------------------


                                User Limits: <your_netid>                            
    --------------------------------------------------------------------------------
    Job Type |     Memory     |      CPU       |        GPU         |  Job Number*    
            | Running/Limit  | Running/Limit  |   Running/Limit    |Submitted/Limit  
    --------------------------------------------------------------------------------
    Windfall |      -/-       |     -/6000     |        -/-         |     -/1000      
    Standard |     -/10T      |     -/1024     |        -/-         |                 
    --------------------------------------------------------------------------------
    *Max jobs across all groups and partitions.


                                Individual Job Limits                             
    --------------------------------------------------------------------------------
    Job Type |     Memory     |      CPU       |        GPU         |      Time       
    --------------------------------------------------------------------------------
    Windfall |     8064G      |      6000      |                    |  10-00:00:00    
    Standard |     8064G      |      1024      |                    |  10-00:00:00    
    --------------------------------------------------------------------------------
    ```
