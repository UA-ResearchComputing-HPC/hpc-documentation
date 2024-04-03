There are two main types of limits imposed on all jobs: (1) those due to hardware, and (2) those due to policy.

## Hardware Limits

See our page on [Compute Resources](../../resources/compute_resources/) for more information. Note that each cluster has:

* a fixed number of nodes
* a fixed number of CPUs per node
* a limited number of GPU nodes
* a limited number of high-memory nodes
* a fixed amount of memory (RAM) available per CPU

## Policy Limits

To ensure fair use of the system for all researchers, limits have been placed on the maximum simultaneous usage of resources on a per-group, per-user, and per-job basis. These limits can be listed by using the ```job-limits``` command in a terminal session. For convenience, the output of this command for each cluster is listed below. Note that you will see the current usage of your group and personal jobs, so the output may vary.

=== "Puma"
    ```bash
                                  Group Limits: <your-group>
    --------------------------------------------------------------------------------
    Job Type |     Memory     |      CPU       |        GPU         |   Job Number
             | Running/Limit  | Running/Limit  |   Running/Limit    |Submitted/Limit
    --------------------------------------------------------------------------------
    Standard |    -/16998G    |     -/3290     |    -/gres/gpu=4    |      -/-
    --------------------------------------------------------------------------------
    
    
                                  User Limits: <your-net-id>
    --------------------------------------------------------------------------------
    Job Type |     Memory     |      CPU       |        GPU         |  Job Number*
             | Running/Limit  | Running/Limit  |   Running/Limit    |Submitted/Limit
    --------------------------------------------------------------------------------
    Windfall |      -/-       |     -/6000     |        -/-         |     -/1000
    Standard |    -/16998G    |     -/3290     |    -/gres/gpu=4    |
    --------------------------------------------------------------------------------
    *Max jobs across all groups and partitions.
    
    
                                 Individual Job Limits
    --------------------------------------------------------------------------------
    Job Type |     Memory     |      CPU       |        GPU         |      Time
    --------------------------------------------------------------------------------
    Windfall |     16998G     |      6000      |                    |  10-00:00:00
    Standard |     16998G     |      3290      |     gres/gpu=4     |  10-00:00:00
    --------------------------------------------------------------------------------
    ```

=== "Ocelote"
    ```bash
                                  Group Limits: <your-group>
    --------------------------------------------------------------------------------
    Job Type |     Memory     |      CPU       |        GPU         |   Job Number
             | Running/Limit  | Running/Limit  |   Running/Limit    |Submitted/Limit
    --------------------------------------------------------------------------------
    Standard |     -/10T      |     -/1024     |   -/gres/gpu=10    |      -/-
    --------------------------------------------------------------------------------
    

                                  User Limits: <your-net-id>
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
                                  Group Limits: <your-group>
    --------------------------------------------------------------------------------
    Job Type |     Memory     |      CPU       |        GPU         |   Job Number
             | Running/Limit  | Running/Limit  |   Running/Limit    |Submitted/Limit
    --------------------------------------------------------------------------------
    Standard |     -/10T      |     -/1024     |        -/-         |      -/-
    --------------------------------------------------------------------------------
    
    
                                  User Limits: <your-net-id>
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

