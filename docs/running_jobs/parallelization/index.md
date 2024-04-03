# Parallelization

## Overview

You might be surprised to learn that if you move code from a local computer to a supercomputer, it will not automatically run faster and may even run slower. This is because the power of a supercomputer comes from the volume of resources available (compute nodes, CPUs, GPUs, etc.) and not the clockspeed of the processors themselves. Performance boosts come from optimizing your code to make use of the additional processors available on HPC, a practice known as parallelization.

Parallelization enables jobs to 'divide-and-conquer' independent tasks within a process when multiple threads are available. In practice, this typically means running a job with multiple CPUs on the HPC. On your local machine, running apps like your web browser is natively parallelized, meaning you don't have to worry about having so many tabs open. However, on the HPC, ***parallelization must almost always be explicitly configured and called from your job.*** This process is highly software-dependent, so please research the proper method for running your program of choice in parallel.

## Scaling

A classic example of the advantages of parallel computing is multiplying an $N \times N$ matrix by a scalar, which takes $N^2$ floating-point operations (flops). On one CPU, this will take an amount of time $t = N^2 / f$ where $f$ is the clock frequency of the CPU. On an integer $M$ number of CPUs, this computation will instead take $t' = \frac{t}{M}$. Most analyses involve computations which are not always as independent as matrix multiplication, leading to less than perfect speedup times. 

**Amdahl's Law (strong scaling)**

The behavior of predicted speedup time for an analysis of fixed size is known as [Strong Scaling](https://hpc-wiki.info/hpc/Scaling). It depends on the fraction of code in a particular program which is parallelizable. 

**Gustafson's Law (weak scaling)**

When scaling up an analysis by a factor of N, and running it on N times as many processors, the theoretical limit is an equivalent runtime. In practice, the runtime is typically longer.

Most advancements in research are made from increasing the individual problem size, rather than decreasing time to execution, and therefore benefits more from so-called "weak" scaling. 

## Single versus Multi-Node Parallelism

**Single Node**

Each node on HPC has multiple CPUs. These can be utilized simultaneously in shared-memory parallelism. 

**Multi-Node**

Multiple nodes can be accessed simultaneously on HPC, but memory is distributed rather than shared. In this case, additional software is needed in order to facilitate communication between processes, such as OpenMPI or Intel MPI. 

Please be aware of the type of parallelism used in your program. Some software is configured only for shared-memory paralleism and will not be able to use processors on multiple nodes. 

## Implementation

Some software is configured to be parallel out of the box, and other software needs explicit configuration. Check with your provider to determine whether parallelism is available, and which kind. For example, Python is natively serial, but libraries are available to enable either shared-memory or distributed-memory parallelism.

Providing a detailed guide on how to code parallel processing for all software available on the HPC is beyond the scope of this documentation. Instead, please refer to the following online guides:

**Python**

```multiprocessing``` - enables shared-memory parallelism. [Reference](https://docs.python.org/3/library/multiprocessing.html). 

```import mpi4py``` - enables distributed-memory parallelism. [Reference](https://mpi4py.readthedocs.io/en/stable/).

**R**

R provides the ```parallel``` library for multiprocessing. [Reference](https://dept.stat.lsa.umich.edu/~jerrick/courses/stat701/notes/parallel.html).

**MATLAB**

MATLAB provides the Parallel Computing Toolbox. [Reference](https://www.mathworks.com/products/parallel-computing.html).




