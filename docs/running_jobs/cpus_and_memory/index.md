# CPUs and Memory

## CPU and Memory Correlation

Before submitting your job to the scheduler, it's important to know that the number of CPUs you allocate to your job determines the amount of memory you receive. 

{==Each cluster has a fixed amount of memory per CPU based on the node type==}. Accepted values by cluster and node type are listed below:

|Cluster|Standard Node|High-Memory Node|GPU Node|
|-|-|-|-|
|Puma| 5 GB | 32 GB | 5 GB|
|Ocelote| 6 GB | 41 GB | 8 GB|
|El Gato| 4 GB | - | -|


For example, using the table above we can see on Puma standard nodes you get 5 GB for each CPU you request. This means a standard job using 4 CPUs gets 5 GB/CPU × 4 CPUs = 20 GB of total memory.

The video below shows the relationship between memory and CPUs, specifically looking at one of our Puma nodes. 

<center>
<iframe width="420" height="280" title="HPC core to memory relationship video" src="https://www.youtube.com/embed/_dpbUqZ7rRk" allowfullscreen></iframe>
</center>

## Determining Job Resources

The following flowchart describes the process of determining the amount of memory and number of CPUs to allocate to a job. For simplicity, this shorthand will be used:

- **N**: number of CPUs desired
- **M**: total memory desired
- **MpC**: the default value of memory per CPU for fixed cluster and node type as listed in the table above

_If a decimal value is encountered, round **up** in all cases._ 

``` mermaid
graph LR
   A[Is my job CPU<br>or Memory limited?] 
   B["`set CPUs=**N**`"]
   C["`do not specify
   memory or mem/cpu`"]
   D["`Set CPUs=**M**/**MpC**`"]
   E["`Set mem/CPU=**MpC**`"]
   Z[Done]
   A -->|CPU| B --> C --> Z
   A -->|mem| D -.-> E --> Z
   D --> Z
```

The dotted line above indicates that setting mem/CPU in your job is not generally necessary. If you are requesting a standard node, this value is set for you by the scheduler. The only times you will need to set this value is:

1. If you're requsting a non-standard node (e.g. a high memory or Ocelote GPU node)
2. If you're requesting an OnDemand application session. There is a field where you will fill in your mem/CPU requirement. 

Note that there is no deterministic method of finding the exact amount of memory needed by a job _in advance_. A general rule of thumb is to overestimate it slightly and then scale down based on previous runs. Significant overestimation, however, can lead to inefficiency of system resources and unnecessary expenditure of CPU time allocations. 

## Things to Watch out for

Be careful when requesting memory and memory per CPU. Note that {==if you request invalid mem/cpu values, unpredictable results may occur==}:

- **Memory and CPU Mismatches**

    In batch scripts, if you request `--memory` instead of `--mem-per-cpu`, the scheduler will automatically increase your CPU allocation to align with your memory requirements in case of a mismatch. For instance, if you request one CPU and 50 GB of total memory, the scheduler will adjust your resource requirements by allocating 10 CPUs to match your memory request.

- **Invalid Mem/CPU Options**

    If you request a mem/CPU value that isn't valid, the scheduler won't outright reject your job. Instead, it will attempt to accommodate your request. This could involve your job being moved to a high memory node if you ask for more than the standard ratio. However, high memory nodes usually have considerably longer wait times compared to standard nodes, potentially resulting in a longer queue time than anticipated.
    
    Alternatively, you might end up with less memory allocated than you expected. For instance, there aren't any machines with a memory ratio exceeding 41 GB/CPU. Therefore, if you request 100 GB/CPU, your job will still be constrained by the physical limits of available memory.
