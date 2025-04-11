# Standard Practices

Efficient and effective use of high-performance computing (HPC) resources requires adherence to established standard practices that optimize performance, ensure fair resource allocation, and minimize disruptions for all users. Following these guidelines will lead to more reliable job execution, better system performance, and improved collaboration within the HPC community. Whether you are a new user or an experienced researcher, incorporating these standard practices into your workflow will enhance your overall computing experience.

Please refer to our page on [Acceptable Use](../acceptable_use) for guidelines related to controlled data and federal regulations.

While all of the items below are imporant to cultivating a smooth HPC experience, critically important issues are <mark>highlighted</mark>. 

## Basic Skills
We don't expect users to be experts in HPC before they start, so if you're not yet comfortable working on the command line or even don't know what HPC is, know that you are still welcome! We encourage active learning while you use HPC resources.

1. **Computer Literacy:** HPC users should have a basic degree of computer literacy, or be actively learning it. This includes understanding the basics of *files* and *folders*, familiarity with basic hardware terms like *processor* and *drive*, and other common usages.

2. **Linux Literacy:** You don’t need to be a Linux expert to start using HPC, but building this skill set will help you get the most out of our system. This includes tasks like managing files, submitting jobs, and troubleshooting common issues. If you're new to Linux, consider starting with some [introductory resources](https://www.youtube.com/playlist?list=PLhznUsiowt261tbLSHplkZHcvZAv_hEcT) to build confidence as you go.

3. **Programming Skills:** Some HPC workflows require minimal coding, while others can be code-intensive. These skills are often highly specific to a particular domain of research, making across-the-board support difficult. The general expectation is that users will receive support on domain-specific programming knowledge from their departments, collaborators, and mentors. 
<!-- Our consultants are available to assist with diagnosing issues and troubleshooting, but we are unable to provide in-depth programming instruction. -->

Our [support team](../../support_and_training/consulting_services) is available to assist with HPC-related questions, troubleshoot issues, and guide users toward solutions. However, we are unable to provide comprehensive instruction on foundational skills like Linux, general computer literacy, or programming. To make the most of our support, we encourage users to actively seek and utilize training resources (including [workshops we offer](../../events/workshop_materials) and online tutorials/courses) to build skills over time. 

## Proper Usage of Nodes

Our HPC system has a variety of different [node types](../../registration_and_access/system_overview). The link contains more detailed information about the nodes. In summary:

1. **Login Nodes:** The login nodes (named *junonia* and *wentletrap*) are the default landing place on the HPC after the bastion host. These nodes have access to the main HPC filesystem and can be used for accessing and managing files, including creating personal software environments. <mark>Do not run or compile code on the login nodes.</mark> Instead, use the compute nodes for these tasks. See our section on [Running Jobs](../../running_jobs/overview) for extensive details on how to do access compute nodes and run jobs.

2. **Bastion Host:** The bastion host (hostname *gatekeeper*) is a security feature used to verify credentials, and *nothing else.* This node is not to be used for storage, running jobs, or any task other than accessing the login nodes. 

3. **Compute Nodes:** These are the main computational engines of the HPC. You can run computationally intensive tasks on these nodes, including running code via interactive or batch jobs, and compiling code. 

4. **High Memory Nodes:** We have a small number of nodes with increased memory. Please respect that they are a limited resource in high demand. If your job is running out of memory, first [increase the memory](../../running_jobs/cpus_and_memory/) allocated on a standard node. Only after you have performed rigorous testing and ruled out the possibility of using a standard node for your work should you submit jobs to the high memory nodes. 

5. **File Transfer Nodes:** Also known as Data Transfer Nodes, or DTNs, these nodes have advanced networking capabilities to allow for faster transfers to and from the HPC. See our [File Transfers](storage_and_transfers/transfers/overview) documentation for details. Like the login nodes, these are meant for managing files, not running or compiling code.

## Proper Usage of Compute Resources

1. **Limits:** Be aware of and adhere to [resource limits](../../running_jobs/job_limits).

2. **No For-Loops for Job Submission:** <mark>Do not use for-loops to submit multiple jobs.</mark> This can impact the performance of the job scheduler and in extreme cases can cause it to crash, which will temporarily disrupt all HPC users and create additional work for the support team. If you would like to submit a large number of similar jobs, use [job arrays](../../running_jobs/batch_jobs/array_jobs).

3. **Reliquish Unused Resources:** When using Open OnDemand, jobs do not automatically terminate when you close the window. Please terminate sessions when your work is complete by clicking the red *Delete* button from the *My Interactive Sessions* page. Resources assigned to inactive sessions prevent other users from accessing them, and causes the whole system to be slower for everyone.

4. **Make Appropriate Resource Requests:** When writing a batch script or filling out the resource request form in Open OnDemand, please do your best to estimate the [number of CPUs and memory](../../running_jobs/cpus_and_memory) necessary to complete your work. Check on the [efficiency metrics](../../running_jobs/monitoring_jobs_and_resources) of your completed jobs to help inform this estimate. Do not request significantly more resources than necessary to run your jobs, as this leads to inefficiencies and makes the system slower for everyone.

## Proper Usage of Storage Resources

1.  **Disk Usage:** Your `/home` directory has a limit of 50GB. <mark>Filling up your home directory can cause difficulties accessing the HPC.</mark> The `/groups` folder allocates 500GB to PIs and their group members. Additional temporary space is available in `/xdisk` by [request](../../storage_and_transfers/storage/hpc_storage/#requesting-modifying-and-deleting-an-allocation). 

2. **File Limits:** For technical reasons, there are limits on the total number of files in a given parent directory, even if the total storage usage is below the limit. Up to approximately one hundred thousand files is likely to be okay. Millions of files in one parent directory is likely to cause problems. If you have millions of files, split them up across a number of parent folders rather than having them all in one folder. <mark>Having too many items in one folder can slow down the filesystem, including your jobs, and in rare cases cause the storage array to go offline.</mark>

3. **Respect Shared Spaces:** If you are using a shared storage space like `/groups` or `/xdisk`, be mindful of your usage since others are also using this space. If you inadvertently fill up a shared folder to capacity, nobody else will be able to save data until it goes back under. Discuss best practices that fit your workflow with your PI and your group members.

4. **Understand File Permissions:** Sharing files on a shared system like the HPC is different than sharing files on your personal computer or on cloud storage platforms like Google Drive. If you intend to share files with other HPC users, whether they are in your lab or not, please review our guidelines on [Linux File Permissions](../../support_and_training/cheat_sheet/#linux-file-permissions). 

## Proper Usage of Software Environments

1. **Dotfiles:** <mark>Be careful when modifying your dotfiles.</mark> [More details on dotfiles here](../../support_and_training/cheat_sheet/#hidden-files-and-directories). Please ensure that you are aware of the exact changes that will take place when modifying or removing dotfiles or folders. This may take some research if you are unfamiliar with them. 

2. **Conda:** [Anaconda](../../software/popular_software/anaconda) is known to cause issues on HPC systems. We recommend using [mamba](../../software/popular_software/mamba) instead. 

3. **Environment Variables:** These [variables](../../support_and_training/cheat_sheet/#environment-variables) change the behavior of your environment, typically by changing the default paths where the interpreter will look for certain (often critical) items. Only modify your environment variables if you clearly understand the precise effect that will take place. Be extra careful when modifying environment variables in your `~/.bashrc`. 

4. **Default Folders:** Be careful and intentional when installing packages in software environments. Often times, downloading items to the default locations, such as `~/.local`, can cause unintended side effects. It is often better to put custom software in custom folders with clear names and purposes. 

If you have any questions about the standard practices listed above, please reach out to our [support team](../../support_and_training/consulting_services), and we would be happy to provide additional clarification!