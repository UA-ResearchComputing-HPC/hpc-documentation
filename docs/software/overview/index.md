# Software Overview

## Overview

Our HPC systems support over 100 software applications.  The first thing to know is that the compute nodes on each cluster are where you use and manage software.  The operating system image on each node is the same for all three clusters. And the filesystems are mounted to them all, so the available software looks the same and your data is equally accessible.

The software is available in three different ways:

- **Libraries** in the operating system (like ```fftw``` or ```screen```);
- **Personal software** that you build or download and place in your own directory space;
- and [**Modules**](../module/), which are external packages built and maintained by HPC team for system-wide usage.

???+ warning "Module availability"
    Software modules are not available on the login nodes. To access them, you will need to connect to a compute node either via an interactive session or batch job.

## Policies
### Academic/Free Software
There is a plethora of software generally available for scientific and research usage.  We will install that software as a module if it meets the following requirements:


|Requirements||
|-|-|
|**Compatible with our module environment**|Some software is not written with clusters in mind and tries to install into system directories, or needs a custom environment on every compute node.|
|**Generally useful**|Some software has to be configured to the specific compute environment of the user. You are encouraged to use our "contrib" environment to install your own.|
|**Public license**|We do not install software if that would be a violation of its licensing.|
|**Reasonably well written**|Some software takes days of effort and still does not work right.  We have limited resources and reserve the right to "give up". Sometimes software is written for workstations and does not function correctly in a shared environment.|
|**Downloadable**|Some software requires additional steps to download installation files, such as registering on a website or accepting a license agreement. In these cases we ask researchers to download files and put them in a directory on the HPC storage. When you submit a software installation request let us know that you have already downloaded the files and provide path to the directory where they are located.|


### Commercial/Fee-based Software
The University of Arizona Research Computing facility has many commercial and freeware packages installed on our supercomputers. Our approach to acquisition of additional software depends upon its cost, licensing restrictions, and user interest.   

|Audience||
|-|-|
|**Single user interest**|The license for the software is purchased by the user and his/her department or sponsor.  This software is best installed by the user.  There are two main options; the first and easiest, is to install the software locally in the relevant user's account using the example procedure. The second is to use the "contrib" environment.  The advantage is that you can share the software built here with other users. This is created through a support ticket where a consultant will create a "contrib" group in which you can build software and add users.|
|**Group interest**|If a package is of interest to a group of several users, the best approach at first is for one user to act as a primary sponsor and arrange to split the procurement/licensing costs among the group. We can install the software and manage the user access according to requests from the group.|
|**Broad interest**|The High Performance Computing team will consider acquiring and supporting software packages that have broad interest among our users. Full facility support will depend on the cost of the package and our ability to comply with any restrictive licensing conditions.|




### Unsupported Software

Unfortunately, our HPC system is not configured to support all software use cases. We have summarized the main scenarios which cause software to be unsupported by our system below. Prior to submitting an installation request, double-check that your software requirements don't fall into one of these categories. While the HPC may not be able to support these cases, it may be possible that other campus resources are able to. We encourage you to contact services listed in our [Community Resources](../../support_and_training/external_resources/) page.

The below list is not exhaustive and may be expanded as new scenarios are encountered. If you are unsure whether your desired software is supported, feel free to [contact our consultants](../../support_and_training/consulting_services/).

|Software Requirements||<div style="width: 150px;">Examples</div>|
|-|-|-|
|**Non-SSH External Connections**|Software requiring external communications that utilize protocols other than SSH are not supported.|
|**Job Management/Scheduling**|The UArizona HPC uses Slurm as its task scheduler and resource manager. Software requiring different a scheduler is therefore unsupported.|Apache Spark<br>Sun Grid Engine|
|**Workstation Software**|Software that is designed to be run on a local Linux workstation often requires root privileges and display management that may not be compatible with a shared, remote system like HPC|
|**Persistent Databases/Servers**|The UArizona HPC is not configured to support databases, server instances, or other persistent software-specific daemons.|SQL databases<br>Application deployments<br>SAS server|
|**Windows Applications**|While there are plenty of excellent Windows software suites available for scientific computing, they unfortunately cannot be run on HPC. There are, however, national resources available that may support your application. One example is JetStream2 available through an ACCESS Allocation. See our [Community Resources](../../support_and_training/external_resources/) page linked at the top of this page for more details.|ArcGIS|


### Federal Regulations
By policy, it is prohibited to use any of the facility's resources in any manner that violates the US Export Administration Regulations (EAR) or the International Trafficking in Arms Regulations (ITAR). It is relevant in this regard to be aware that the facility employs analysts who are foreign, nonresident, nationals and who have root-access privileges to all files and data. Specifically, you must agree not to use any software or data on facility systems that are restricted under EAR and/or ITAR.
