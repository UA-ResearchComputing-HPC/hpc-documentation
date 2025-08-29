---
title: UArizona HPC Events Calendar
---
<link rel="stylesheet" href="../../assets/stylesheets/events.css">
<link rel="stylesheet" href="../../assets/stylesheets/images.css">


<img class="img-right" src="images/az_calendar.png" title="Desert calendar illustration" alt="cactus" width="200">

Every semester, we host training workshops on topics ranging from intro to HPC, to machine learning, to parallel computing, and beyond. In addition, there are many great opportunities for learning hosted by other organizations within the community. Whether you're interested in learning about specific programming languages, exploring data analytics techniques, or cloud computing, there's a wide array of learning opportunities available.

!!! info "Old Workshops"
    
    Looking for materials from or recordings of previous workshops? Check out our [Workshop Materials](../workshop_materials/) page!

---

## Fall 2025 HPC Workshops Schedule

[**Register Here!**](https://docs.google.com/forms/d/e/1FAIpQLSfjRhn1xF7wcd6G_wyVKtdYqosxxPaM_2V-nfTJZa8BXEe5lA/viewform)

### Day 1: Friday 9/12

- **Topic: Introduction to HPC**
- **Location: [Main Library 112 Learning Studio](https://lib.arizona.edu/sites/default/files/main-floor1.pdf)**

| Session Info | Time | Instructor |
| - | - | - |
| <details><summary>Intro to HPC: Overview and Access</summary>An introduction to what HPC is, basics of the U of A’s HPC, how to create an account and login. Motivates the usage of HPC including examples from many research areas; outlines several common misconceptions about HPC; introduces the U of A’s clusters; describes the basics of the UA HPC system architecture, including node types and proper usage. This workshop is aimed at first-time HPC users, or users new to the U of A’s HPC system. No programming experience is assumed or required. Basic computer literacy is recommended.</details> | 10:00am | Ethan Jahn |
| <details><summary>Intro to HPC: Storage and Software</summary>An introduction to the HPC systems related to data storage and software. Outlines the details of the HPC high performance storage system, the rental storage system, Research Desktop Attached Storage (R-DAS), and AWS Tier 2 storage. Covers the basics of Linux file permissions in the context of a shared cluster, including our conventions and best practices. Outlines methods for transferring files to/from the HPC storage system. Describes the module system used to provide software to users, and provides guidelines for personal software installations. Familiarity with basic programming recommended but not required. Participants should be familiar with topics covered in Workshop 1.</details> | 11:00am | Ethan Jahn |
| Lunch Break | 12:00pm | -- |
| <details><summary>Scheduling and Running Jobs on HPC</summary>The ins-and-outs of running jobs on the HPC system. Provides details related to partitions and CPU-time allocations in relation to the scheduling system. Describes HPC hardware information relevant to submitting resource requests. Covers details for each type of job, including Open OnDemand graphical jobs, interactive terminal sessions, batch jobs, and array jobs. Provides best practices and clarification related to the queueing system and Slurm terminology. A basic batch job example is included. Basic programming experience including familiarity with bash recommended but not required. Participants should be familiar with topics covered in Workshops 1 and 2</details> | 1:00pm | Ethan Jahn |
| <details><summary>Managing and Optimizing Jobs</summary>Motivates, defines, and describes tools/techniques for managing jobs, including Open OnDemand and command-line tools (both provided by Slurm – e.g. ```squeue``` – and other tools such as ```seff``` and ```job-history```). Provides detailed examples and use cases for these tools. Additionally provides clarity and motivation for job optimization, including decreasing time to result and improving overall HPC throughput. Outlines best practices and principles of constructing optimal resource requests. Basic programming experience and familiarity with previous workshop topics is recommended.</details> | 2:00pm | Ethan Jahn |

---

### Day 2: Friday 9/19

- **Topic: Software on HPC**
- **Location: [Main Library 112 Learning Studio](https://lib.arizona.edu/sites/default/files/main-floor1.pdf)**

| Session Info | Time | Instructor |
| - | - | - |
| <details><summary>Intro to Bash and Linux on HPC</summary>Introduction to the GNU/Linux operating system and the Bash scripting language, particularly in the context of large-scale multi-user systems. This workshop will cover some of the key features of the system and common issues users run into, such as permissions. Not an exhaustive treatment, but it should be helpful for users with no Linux experience, or only familiar with desktop Linux.</details> | 10:00am | Ethan Jahn |
| <details><summary>Software and Environments</summary>Debugging problems on the HPC is easier if you have reproducible environments. This workshop will provide some general guidelines and examples that you can follow to create and maintain such environments. It will focus on Python and R projects, and potentially an example for compiled languages.</details> | 11:00am | Ethan Jahn |
| Lunch Break | 12:00pm | -- |
| <details><summary>Error Handling and Debugging</summary>Provides an overview of concepts and techniques related to detecting and fixing errors, both in general and in the context of HPC. Includes discussion of best practices when coding and using HPC to avoid errors, a general approach to fixing errors, common types of errors, and how to use various tools to assist in the debugging process. We recommend that participants have some background experience with coding and using the HPC, though the workshop will be aimed at novice and intermediate HPC users.</details> | 1:00pm | Ethan Jahn |
| <details><summary>Intro to Containers</summary>This workshop introduces the concept of containers, and why they are useful in research computing. It focuses on the Apptainer container engine, and provides examples to show how you can build and run containers with Apptainer.</details> | 2:00pm | Ethan Jahn |

---

### Day 3: Friday 9/26

- **Topic: Machine Learning and GPUs**
- **Location: [Main Library B254 CATalyst Learning Studio](https://lib.arizona.edu/sites/default/files/main-floor2.pdf)**

| Session Info | Time | Instructor |
| - | - | - |
| <details><summary>Intro to Machine Learning on HPC</summary>Overview and foundations of Machine Learning with focus on HPC context. High-level introduction to concepts, tools, and techniques across various scientific disciplines. This workshop is designed for researchers unfamiliar with ML or those who wish to understand its applications in disciplines outside their own. This session is not designed to provide advanced training or a highly detailed, hands on experience. </details> | 10:00am | Ethan Jahn |
| <details><summary>Using GPUs on HPC</summary>This workshop provides a basic introduction to GPUs, and how to access GPUs on UA HPC clusters. It provides some simple examples to demonstrate GPU accelerated computation, and discusses some common issues that arise when working with GPUs.</details> | 11:00am | Ethan Jahn |
| Lunch Break | 12:00pm | -- |
| <details><summary>Leveraging Free GPU Resources Through NSF ACCESS</summary>Introduction to the NSF's Advanced Cyberinfrastructure Coordination Ecosystem: Services & Support ([ACCESS](https://access-ci.org/about/)) program, including how to create an account, the types of services offered, and how to create your account. Additional focus placed on GPU resources.</details> | 1:00pm | -- |
| <details><summary>Getting Started with the NAIRR Pilot Program</summary>This webinar presents an overview of the process for requesting no-charge access to technology resources via the National AI Research Resources Pilot program ( [https://nairrpilot.org/](https://nairrpilot.org/) ). In addition to introducing the available, no-charge technology resources, the presentation prepares AI Researchers and Educators for the development of successful resource allocation requests by covering: program eligibility and requirements for Classroom/Educator and Research projects; the proposal review and resource allocation processes; specific proposal instructions from the NAIRR Pilot portal; strategies for addressing specified review criterial; and example resource estimates that quantitatively justify requested NAIRR Pilot resources.</details> | 2:00pm | [Timothy Middelkoop](https://internet2.edu/community/research-engagement/internet2-research-engagement-team/) |


<!-- <object class="pdf" 
    data="images/SupportServicesInfoSlide.pdf"
    width="800"
    height="500"
    border="0">
</object> -->

---

## Our Friends and Partners

<!-- ### Upcoming Events -->

<!-- !!! example "No upcoming workshops scheduled. Check back later" -->

<!-- ### External Event Pages -->

Please check out these workshops and activities from our partners around campus!

- The Data Science Institute's [official calendar](https://datascience.arizona.edu/calendar)
- Data Lab [home page](https://datainsight.arizona.edu/uarizona-data-lab)
- The UArizona Libraries [event calendar](https://libcal.library.arizona.edu/calendar/events)


<!--
!!! example "No upcoming workshops scheduled. Check back later"
-->
<!--

Below is a nice format you can use to create cards for upcoming events. 

<div class="event-card">
    <div class="event-date">
        <div class="date-number">DAY</div>
        <div class="date-month">3 LETTER MONTH</div>
    </div>
        <div class="event-details">
            <h3><a href="PATH TO WORKSHOP PAGE">WORKSHOP NAME</a></h3>
            <p>TIME &#x25cf LOCATION</p>
        </div>
        <div class="event-registration">
            <a href="REGISTRATION LINK"> <button class="register-button">Register</button></a>
        </div>
</div>


As an example:

<div class="event-card">
    <div class="event-date">
        <div class="date-number">3</div>
        <div class="date-month">Apr</div>
    </div>
        <div class="event-details">
            <h3><a href="../intro_to_hpc/">Intro to HPC</a></h3>
            <p>10:00-11:00am &#x25cf Catalyst Studios Room 1</p>
        </div>
        <div class="event-registration">
            <a href="REGISTRATION LINK"> <button class="register-button">Register</button></a>
        </div>
</div>

-->
