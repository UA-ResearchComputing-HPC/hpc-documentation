# HPC For Instruction

## Overview

Our HPC systems are primarily designed to support research, but some instructors may wish to incorporate HPC use into their courses. We can accommodate this in limited ways, provided instructors understand the constraints and responsibilities involved.

Instructional use differs from research use in several important respects, particularly regarding scheduling, resource limits, and support expectations. Before deciding to use the HPC systems for a class, please review the following policies carefully. They’re meant to help instructors plan realistic assignments and ensure a smooth experience for their students while maintaining fair access for all users.

## Instructor Responsibilities

We strongly suggest that instructors who plan to incorporate HPC use into their curriculum either have significant experience using our HPC system, or they take sufficient time to familiarize themselves with our system, including reading our documentation, running test jobs, and any other tasks that students may be expected to perform. Prior experience on other systems may not directly translate to ours. This will ensure that instructors are prepared to assist their students should any issues arise.

## Cluster Restrictions

For tax reasons, groups using The University of Arizona's HPC systems for instructional purposes are restricted to Ocelote and may not use Puma or El Gato.

## Compute Resources and Allocations

See our [compute resources documentation](../../resources/compute_resources/), [allocations documentation](../../resources/allocations/), and [resource limits documentation](../../running_jobs/job_limits/) for information on Ocelote's available hardware, OS, time allocations, and concurrent resource usage limits to verify they meet your class' needs. 

It should be noted, a separate time allocation is not created for class groups. This means time allocations are shared between a faculty member's research and class groups, so usage should be planned accordingly.

## Wait Times

HPC uses the scheduling software Slurm to allocate resources to jobs. Scheduling is an automated process and the amount of time a job spends in queue is dependent on the resources requested and overall system load. This means jobs are not guaranteed to run instantaneously and wait times may be unpredictable. This is particularly true when attempting to access GPU or high memory nodes, which are more limited in supply than standard CPU-only nodes.

As a result, classes making use of HPC hardware will need to plan their time accordingly with the expectation that immediate access is not guaranteed. Due the fair share nature of our systems, we are unable to prioritize jobs submitted from any particular user and we cannot expedite queued jobs due to assignment or grading deadlines. 

## Storage

Each faculty sponsor receives 500 GB of communal storage on the system under `/groups/<faculty_netid>`. In Addition, faculty members may request an additional xdisk space under `/xdisk/<faculty_netid>` through our user portal which can provide up to 20 TB of storage for up to 300 days. For more information on HPC storage, see our [HPC Storage documentation](../../storage_and_transfers/storage/hpc_storage/). 

We are unable to provide additional dedicated storage specifically for class groups beyond our standard offerings. If you wish to make communal storage available to your class, you may either use your `/groups` or `/xdisk`. By default, the group ownership of these spaces is typically set to allow access to research group members. If you wish to provide space to students for instruction, you may adjust the [group ownership](../../support_and_training/cheat_sheet/#linux-file-permissions) to allow access after you create your class group. 

## Support

Our consultants are happy to assist faculty members with getting their class groups set up and resolving technical issues. However, we are unable to provide individualized support for each student enrolled in a class. Enrolled students who need assistance with technical issues, homework, or other instructional materials should direct their questions to their instructor or fellow classmates. 

## Class Group Creation

If our resources meet your instructional needs, you can get started by creating a dedicated class group through our user portal by following our [class groups documentation](../../registration_and_access/group_management/#class-groups). Once the class group has been created, students may be added to give them system access.

## Alternatives

If our resources don't meet your needs, an excellent resources is [NSF's ACCESS program](../../support_and_training/nsf_access/) which provides time allocations at participating national HPC centers. For example, [Indiana University's Jetstream2](https://jetstream-cloud.org/) (which participates in the ACCESS program) is a great choice for groups needing access to a large number of GPU nodes. 