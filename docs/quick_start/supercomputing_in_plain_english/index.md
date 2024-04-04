---
title: Supercomputing in Plain English
show:

---

<link rel="stylesheet" href="../../assets/stylesheets/buttons.css">

# Supercomputing in Plain English

### What is HPC/What is a Supercomputer?

If you've never used an HPC system before, you may be wondering what one is and why you'd want to use it. HPC stands for High Perfomance Computing and is synonymous with **Supercomputer**. A supercomputer is a collection, or cluster, of a large number of regular computers (referred to as **compute nodes**) connected over a network. Each of the computers is like a local workstation though typically much more capable. For example, a standard laptop might have 4 CPUs and 8 GB of RAM. Compare this with a standard compute node on Puma which has 94 CPUs and 470 GB of RAM. 

Another main difference between a supercomputer and a personal workstation is that the supercomputer is a **shared resource**. This means there may be hundreds or even thousands of simultaneous users. Without some sort of coordination, managing which users get which resources turns into a major logistical challenge. That's why supercomputers use **job schedulers**, like [Slurm](https://slurm.schedmd.com/documentation.html). 

A job scheduler is software used to coordinate user jobs. You can use it by writing a 'batch' script that requests compute resources (e.g., CPUs, RAM, GPUs) and includes instructions for running your code. You submit this script to the job scheduler using the ```sbatch``` command, which finds available resources on the supercomputer for your job. When the resources become available, it initiates the commands included in your batch script, and outputs the results to a text file. More information on running batch jobs can be found in the [Running Jobs](../../running_jobs/batch_jobs/intro/) section.

### Why Should I Use a Supercomputer?

Supercomputers provide opportunities for data storage and parallel processing that far surpass what is capable in a standard workstation. These systems provide researchers with the ability to **scale up** or **scale out** their work.

Increasing the data throughput of a single job is known as **scaling up**. This may mean moving from a 500 GB database on a workstation to a 5 TB database on the HPC, or raising the resolution of your simulation by a factor of 10 or 100. 

Other types of analysis may benefit from an increased number of jobs, such performing parameter sweeps, running Monte Carlo simulations, or performing molecular dynamics simulations to study the behavior of complex biological systems, such as protein folding or drug interactions. Local machines are limited by the number of cores accessible to them, decreasing the number of simultaneous computations as compared to an HPC. An increase in the number of CPUs used during analysis is known as **scaling out** your work.

**Automation** is another feature of HPC systems that allows users to schedule jobs ahead of time, and for those jobs to be run without supervision. Managing a workstation or keeping an SSH terminal active while scripts are running can lead to major complications when running extended analyses. Batch scripts allow a prewritten set of instructions to be executed when the scheduler determines that sufficient resources will be available. This allows for jobs with extended completion times to be run for up to 10 days (a limit imposed by the scheduler). Real-time output is saved to a text file, allowing you to check the progress of the job. **Checkpointing** is recommended for jobs that require longer than 10 days.


<html>
<div class="button-container">
    <a href="/quick_start/overview/"><button class="left-button"></button></a>
    <a href="/quick_start/common_misconceptions/"><button class="right-button"></button></a>
</div>
</html>