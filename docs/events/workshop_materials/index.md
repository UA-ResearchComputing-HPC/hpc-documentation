<link rel="stylesheet" href="assets/stylesheets/images.css">

# HPC Workshops and Training Materials

This page contains a catalogue of our previous training materials. Feel free to browse, interact, download, and share as you see fit. See our [Calendar](../calendar/) for upcoming virtual or in-person workshop events. 

## Fall 2024

| Date | Topic | Instructor | Recording | Slides | 
| - | - | - | :-: | :-: | 
|Sep 6  | <details><summary>HPC Overview and Access</summary>An introduction to what HPC is, basics of the U of A’s HPC, how to create an account and login. Motivates the usage of HPC including examples from many research areas; outlines several common misconceptions about HPC; introduces the U of A’s clusters; describes the basics of the UA HPC system architecture, including node types and proper usage. This workshop is aimed at first-time HPC users, or users new to the U of A’s HPC system. No programming experience is assumed or required. Basic computer literacy is recommended.</details> | Ethan Jahn | [:fontawesome-brands-youtube:](https://youtu.be/-coYkKonS0o) | [:fontawesome-brands-google-drive:](https://docs.google.com/presentation/d/1DLCz4FHqqOKCyZMl5nkgfYhn7E8RFEqu76_EH0vOLws/edit?usp=sharing)
|Sep 13 | <details><summary>Storage and Software Overview</summary>An introduction to the HPC systems related to data storage and software. Outlines the details of the HPC high performance storage system, the rental storage system, Research Desktop Attached Storage (R-DAS), and AWS Tier 2 storage. Covers the basics of Linux file permissions in the context of a shared cluster, including our conventions and best practices. Outlines methods for transferring files to/from the HPC storage system. Describes the module system used to provide software to users, and provides guidelines for personal software installations. Familiarity with basic programming recommended but not required. Participants should be familiar with topics covered in Workshop 1.</details> | Ethan Jahn | [:fontawesome-brands-youtube:](https://youtu.be/blF9zL5E_2Q) | [:fontawesome-brands-google-drive:](https://docs.google.com/presentation/d/1X19vX_aIYxP87JsA6VIItWgAeyyEjb9eiaGbiv2u6Zc/edit?usp=sharing)
|Sep 20 | <details><summary>Scheduling and Running Jobs</summary>The ins-and-outs of running jobs on the HPC system. Provides details related to partitions and CPU-time allocations in relation to the scheduling system. Describes HPC hardware information relevant to submitting resource requests. Covers details for each type of job, including Open OnDemand graphical jobs, interactive terminal sessions, batch jobs, and array jobs. Provides best practices and clarification related to the queueing system and Slurm terminology. A basic batch job example is included. Basic programming experience including familiarity with bash recommended but not required. Participants should be familiar with topics covered in Workshops 1 and 2.</details> | Ethan Jahn | [:fontawesome-brands-youtube:](https://youtu.be/Swz0tgj4iBs) | [:fontawesome-brands-google-drive:](https://docs.google.com/presentation/d/18IoGcKwaip4-P6xDlXMm46aTlpfquu9XDUVF7lGNs5c/edit?usp=sharing)
|Sep 27 | <details><summary>Managing and Optimizing Jobs</summary>Motivates, defines, and describes tools/techniques for managing jobs, including Open OnDemand and command-line tools (both provided by Slurm – e.g. ```squeue``` – and other tools such as ```seff``` and ```job-history```). Provides detailed examples and use cases for these tools. Additionally provides clarity and motivation for job optimization, including decreasing time to result and improving overall HPC throughput. Outlines best practices and principles of constructing optimal resource requests. Basic programming experience and familiarity with previous workshop topics is recommended.</details> | Ethan Jahn | [:fontawesome-brands-youtube:](https://youtu.be/qrN-6FwWtp4) | [:fontawesome-brands-google-drive:](https://docs.google.com/presentation/d/19c9C_GETjAbZaPp6uKA-hhJwgcGTv69kMsbP62USScA/edit?usp=sharing)
|Oct 4  | <details><summary>Parallel Computing Theory</summary>An introduction to the principles and concepts of computing. Discusses basics of computer architecture and serial computing to provide context for developments in parallel computing. Covers paradigms and models of parallel computing. Other topics include scaling laws, load balancing, task decomposition, asynchronous computation, overhead, meta-parallelism, etc. Basics of writing parallel algorithms will be discussed. Basic programming experience and familiarity with general computing concepts are recommended.</details> | Ethan Jahn | [:fontawesome-brands-youtube:](https://youtu.be/cE9rECTe6Pg) | [:fontawesome-brands-google-drive:](https://docs.google.com/presentation/d/1u7Q8wPxZkGTi2PwacuOwcLBxJhDhh2BM5JEfdDly2pY/edit?usp=sharing)
|Oct 11 | <details><summary>Parallel Computing in Practice</summary>Implementing parallelization often looks very different than describing it in abstract terms. Building on the previous session’s material, this workshop will aim to provide some guidelines and examples of parallelization in practice. Software discussed includes OpenMPI, Python (multiprocessing & mpi4py), R (parallel), Matlab, and potentially others. Some basic programming experience and familiarity with all previous workshop topics are highly recommended.</details> | Ethan Jahn | [:fontawesome-brands-youtube:](https://youtu.be/EaJ6o9aGMMU) | [:fontawesome-brands-google-drive:](https://docs.google.com/presentation/d/1TVUCFptdlNuir8WQwvo6kPzk1wko_2Rdw7NnunSck2Q/edit?usp=sharing)
|Oct 18 | <details><summary>Software and Environments</summary>Debugging problems on the HPC is easier if you have reproducible environments. This workshop will provide some general guidelines and examples that you can follow to create and maintain such environments. It will focus on Python and R projects, and potentially an example for compiled languages.</details> | Soham Pal | [:fontawesome-brands-youtube:](https://youtu.be/Y0Ki07S8jK8) | [:fontawesome-brands-google-drive:](https://drive.google.com/file/d/1KWVOSmDfq3YmMjNJlqXRzIBTjrW1SBce/view?usp=drive_link)
|Oct 25 | <details><summary>Machine Learning on HPC</summary>This workshop will introduce you to using HPC resources for machine learning. It will focus on PyTorch examples, with general guidelines that maybe applicable to other frameworks. This is not an introduction to machine learning in general, and assumes that you have some basic knowledge of machine learning concepts.</details> | Soham Pal | [:fontawesome-brands-youtube:](https://youtu.be/28WtENqOWkI) | [:fontawesome-brands-google-drive:](intro_to_machine_learning/python/index.md)

## Previous Workshops

<div class="grid cards" markdown>


-   :material-book-open-variant:{ .lg .middle } __Introduction to HPC__

    ---

    If you are new to our HPC system, or new to HPC in general, then this training will help guide you through everything from account creation, to transferring data, to running basic jobs.

    <center>
    [Introduction to HPC](intro_to_hpc/index.md){ .md-button }
	</center>

-   :material-penguin:{ .lg .middle } __Introduction to Linux__

    ---

    Covers the basics of Linux operating systems, including the HPC filesystem, bash commands, environment variables, and best practices. 

    <center>
    	[PDF Slides](intro_to_linux/files/IntroToLinux.pdf){ .md-button }
    	[PPT Slides](intro_to_linux/files/IntroToLinux.pptx){ .md-button }
    	[:fontawesome-brands-youtube: Video](https://www.youtube.com/watch?v=9JIRVJjGOxU){ .md-button }
	</center>

-   :material-server:{ .lg .middle } __Parallel Computing__

    ---

    An introduction to the theory and practice of parallel computing.

    <center>
    	[PDF Slides](intro_to_parallel_computing/files/IntrotoParallelSummer2024.pdf){ .md-button }
    	[:fontawesome-brands-youtube: Video](https://www.youtube.com/watch?v=xEAX3tVk-PY){ .md-button }
	</center>

-   :material-function-variant:{ .lg .middle } __Machine Learning__

    ---

    This workshop introduces some of the basic concepts of ML, and techniques that can be used on the UArizona HPC.

    <center>
    [Overview](intro_to_machine_learning/overview/index.md){ .md-button }
	[ML in Python](intro_to_machine_learning/python/index.md){ .md-button }
	[ML in R](intro_to_machine_learning/R/index.md){ .md-button }
	</center>

-   :material-code-greater-than:{ .lg .middle } __Containers__

    ---

   	Containers are self-contained software packages that include all the necessary dependencies to run a particular program. They can be useful for porting your analysis to a shared environment like the HPC. This workshop covers the basics of containers and how to use them on HPC.

    <center>
    [Intro to Containers](intro_to_containers/index.md){ .md-button }
    [:fontawesome-brands-youtube: Video](https://www.youtube.com/watch?v=nPt8C9gX1eY){ .md-button }
    </center>

-   :material-chart-multiple:{ .lg .middle } __Visualization__

    ---

   	This workshop provides an introduction to some concepts of visualization. It is done in the context of HPC so you will be able to follow along with the practical examples section using your HPC Account.

    <center>
	[PDF Slides](intro_to_visualization/files/IntroToViz.pdf){ .md-button }
	[Jupyter notebook](intro_to_visualization/files/intro-viz-workshop.ipynb){ .md-button }
	</center>

-   :material-chart-bar:{ .lg .middle } __Statistics__

    ---

   	An overview of how to use the Matlab Statistics and Machine Learning toolbox on the UArizona HPC.

    <center>
	[PDF Slides](intro_to_statistics/files/IntroToStatistics.pdf){ .md-button }
	[PPT Slides](intro_to_statistics/files/IntroToStatistics.pptx){ .md-button }
	[Examples](intro_to_statistics/files/matlab-workshop.txt){ .md-button }
    [:fontawesome-brands-youtube: Video](https://www.youtube.com/watch?v=o33jDf3vELY){ .md-button }
	</center>

-   :material-folder-open:{ .lg .middle } __Data Management__

    ---

    Learn about managing your data on UA's HPC cluster. Co-sponsored with University Libraries.

    <center>
	[PDF (Part 1)](data_management_workshops/files/2022_Part_1_Data_Management_in_the_HPC.pdf){ .md-button }
	[PDF (Part 2)](data_management_workshops/files/2022_Part_2_Data_Management_in_the_HPC.pdf){ .md-button }
	</center>

-   :material-checkbox-marked-outline:{ .lg .middle } __Managing and Optimizing Jobs__

    ---

    Learn about how to request and schedule different types of jobs on the HPC, how to manage existing and previous jobs, and how to optimize your resource requests.

    <center>
	[PDF Slides](optimization/files/ManagingOptimizing.Spring2024.pdf){ .md-button }
	[:fontawesome-brands-youtube: Video](https://www.youtube.com/watch?v=VoSJ9oJQA-k){ .md-button }
	</center>

</div>
