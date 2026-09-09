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

## Fall 2026 HPC Workshops

<html><center><a href="https://docs.google.com/forms/d/e/1FAIpQLSfiWXoj_IhONrkrjD-gLp6JwKTescAPvHkhDCZxjg89J89XNw/viewform?usp=publish-editor" title="Click here to register" class="md-button md-button--primary" target="blank">Register for HPC Workshops Here</a></center></html>

!!! warning "Arizona Email Required"

    Please note that **you will need to use your Univerity of Arizona Google account** to access the registration form. If you do not have access, please double check that you are logged in appropriately. **Please do not click "request access."** If you do not have a University of Arizona Google account and are interested in attending the workshops, please contact us directly by [submitting a support ticket](../../support_and_training/consulting_services/).


<iframe src="images/f26-flyer.pdf" width="100%" height="900" style="border: none;">
</iframe>

[Click here](images/f26-flyer.pdf) to download above flyer.


### Day 1: Friday 9/11 - Introduction to HPC

**Location: [Main Library B252 CATalyst Learning Studio](https://lib.arizona.edu/sites/default/files/main-floor2.pdf)**


??? info "10:00am - Intro to HPC: Overview and Access"

    An introduction to what HPC is, basics of the U of A’s HPC, how to create an account and login. Motivates the usage of HPC including examples from many research areas; outlines several common misconceptions about HPC; introduces the U of A’s clusters; describes the basics of the UA HPC system architecture, including node types and proper usage. This workshop is aimed at first-time HPC users, or users new to the U of A’s HPC system. No programming experience is assumed or required. Basic computer literacy is recommended.

??? info "11:00am - Intro to HPC: Storage and Software"

    An introduction to the HPC systems related to data storage and software. Outlines the details of the HPC high performance storage system, the rental storage system, Research Desktop Attached Storage (R-DAS), and AWS Tier 2 storage. Covers the basics of Linux file permissions in the context of a shared cluster, including our conventions and best practices. Outlines methods for transferring files to/from the HPC storage system. Describes the module system used to provide software to users, and provides guidelines for personal software installations. Familiarity with basic programming recommended but not required. Participants should be familiar with topics covered in Workshop 1.

!!! info "12:00pm - Lunch Break"


??? info "1:00pm - Scheduling and Running Jobs on HPC"

    The ins-and-outs of running jobs on the HPC system. Provides details related to partitions and CPU-time allocations in relation to the scheduling system. Describes HPC hardware information relevant to submitting resource requests. Covers details for each type of job, including Open OnDemand graphical jobs, interactive terminal sessions, batch jobs, and array jobs. Provides best practices and clarification related to the queueing system and Slurm terminology. A basic batch job example is included. Basic programming experience including familiarity with bash recommended but not required. Participants should be familiar with topics covered in Workshops 1 and 2

??? info "2:00pm - Managing and Optimizing Jobs"

    Motivates, defines, and describes tools/techniques for managing jobs, including Open OnDemand and command-line tools (both provided by Slurm – e.g. ```squeue``` – and other tools such as ```seff``` and ```job-history```). Provides detailed examples and use cases for these tools. Additionally provides clarity and motivation for job optimization, including decreasing time to result and improving overall HPC throughput. Outlines best practices and principles of constructing optimal resource requests. Basic programming experience and familiarity with previous workshop topics is recommended.

---

### Day 2: Friday 9/18 - Software on HPC

**Location: [Main Library B252 CATalyst Learning Studio](https://lib.arizona.edu/sites/default/files/main-floor2.pdf)**


??? info "10:00am - Intro to Bash and Linux on HPC"

    Introduction to the GNU/Linux operating system and the Bash scripting language, particularly in the context of large-scale multi-user systems. This workshop will cover some of the key features of the system and common issues users run into, such as permissions. Not an exhaustive treatment, but it should be helpful for users with no Linux experience, or only familiar with desktop Linux.

??? info "11:00am - Software and Environments"

    Debugging problems on the HPC is easier if you have reproducible environments. This workshop will provide some general guidelines and examples that you can follow to create and maintain such environments. It will focus on Python and R projects, and potentially an example for compiled languages.

!!! info "12:00pm - Lunch Break"


??? info "1:00pm - Error Handling and Debugging"

    Provides an overview of concepts and techniques related to detecting and fixing errors, both in general and in the context of HPC. Includes discussion of best practices when coding and using HPC to avoid errors, a general approach to fixing errors, common types of errors, and how to use various tools to assist in the debugging process. We recommend that participants have some background experience with coding and using the HPC, though the workshop will be aimed at novice and intermediate HPC users.

??? info "2:00pm - Intro to Containers"

    This workshop introduces the concept of containers, and why they are useful in research computing. It focuses on the Apptainer container engine, and provides examples to show how you can build and run containers with Apptainer.


---

### Day 3: Friday 9/25 - Machine Learning and GPUs

**Location: [Main Library B254 CATalyst Learning Studio](https://lib.arizona.edu/sites/default/files/main-floor2.pdf)**

??? info "10:00am - Intro to Machine Learning on HPC"

    Overview and foundations of Machine Learning with focus on HPC context. High-level introduction to concepts, tools, and techniques across various scientific disciplines. This workshop is designed for researchers unfamiliar with ML or those who wish to understand its applications in disciplines outside their own. This session is not designed to provide advanced training or a highly detailed, hands on experience.

??? info "11:00am - Using GPUs on HPC"

    Basic introduction to GPUs, and how to access GPUs on UA HPC clusters including simple examples to demonstrate GPU accelerated computation, and discussion of common issues that arise when working with GPUs.

!!! info "12:00pm - Lunch Break" 


??? info "1:00pm - Getting a Compute Allocation through NSF ACCESS"
    
    Introduction to the NSF's Advanced Cyberinfrastructure Coordination Ecosystem: Services & Support ([ACCESS](https://access-ci.org/about/)) program, including how to create an account, the types of services offered, and how to create your account. Additional focus placed on GPU resources.

---

## Special Topic: Quantum Computing

**Thursday, September 17th 12:00pm - 1:30pm**

**Location: [Main Library B254 CATalyst Learning Studio](https://lib.arizona.edu/sites/default/files/main-floor2.pdf)**


??? info "Introduction to Quantum Computing with MATLAB"

    Quantum computing is built on matrix operations, making MATLAB a natural platform for exploring quantum algorithms and applications. In this hands-on workshop, participants will learn the fundamentals of quantum computing, including qubits, superposition, quantum gates, and quantum circuits, using the MATLAB Support Package for Quantum Computing.

    Attendees will build and simulate quantum circuits, visualize qubit states, and explore quantum measurement and computation through interactive examples. The workshop will also demonstrate hybrid classical–quantum workflows, showing how quantum methods integrate with MATLAB's established tools for optimization, AI, machine learning, and finance.

    Participants will also learn to validate quantum algorithms through simulation and how they can run them on cloud-based quantum hardware connected through MATLAB, including IBM Quantum Compute Service and AWS Braket devices. By the end of the workshop, attendees will have a practical foundation for developing and evaluating quantum computing solutions in MATLAB.

<html><center><a href="https://docs.google.com/forms/d/e/1FAIpQLSf3HzIdF5P_woqYv_FIlywZM1uGb8tj8LhgrTagO8M-IjIJdg/viewform?usp=publish-editor" title="Click here to register" class="md-button md-button--primary" target="blank">Register for Quantum Computing Workshop Here</a></center></html>

---

## NVIDIA Deep Learning Institute

<!-- ??? info "10:00am - Intro to Machine Learning on HPC" -->

### Day 1: Fundamentals of Accelerated Data Science with RAPIDS

**Thursday October 1, 2026 9:00AM - 4:20PM**

**Location: Main Library room B201**

??? info "Day 1: Fundamentals of Accelerated Data Science with RAPIDS"
	
    In this Deep Learning Institute (DLI) workshop, participants will learn how to build and execute end-to-end GPU-accelerated data science workflows that enable them to quickly explore, iterate, and make predictions. Using the RAPIDS accelerated data science libraries, participants will apply a wide variety of GPU-accelerated machine learning algorithms, including XGBoost, cuGRAPH’s single-source shortest path, and cuML’s KNN, DBSCAN, and logistic regression to perform data analysis at scale.

    By participating in this workshop, you’ll:

    - Implement GPU-accelerated data preparation and feature extraction using cuDF and Apache Arrow data frames  
    - Apply a broad spectrum of GPU-accelerated machine learning tasks using XGBoost and a variety of cuML algorithms  
    - Execute GPU-accelerated graph analysis with cuGraph, achieving massive-scale analytics in small amounts of time  
    - Rapidly achieve massive-scale graph analytics using cuGraph routines  

    Topics: RAPIDS, cuDF, XGBoost, cuML, cuGraph, Dask, cuPy, pandas, NumPy, Bokeh,data science, data analytics, machine learning

    Prerequisites: Experience with Python, ideally including pandas and NumPy. Assessment Type: Code-based
    Certificate Available  

    [Learn more here](https://www.nvidia.com/en-in/training/instructor-led-workshops/fundamentals-of-accelerated-dat a-science)

    ( ignore mentions of price, workshop is hosted free )

<!-- [Day 1 Registration form](https://forms.gle/VwKwGzhJW8mCzWZo7) -->

<html><center><a href="https://forms.gle/VwKwGzhJW8mCzWZo7" title="Click here to register" class="md-button md-button--primary" target="blank">Register for NVIDIA DLI Day 1</a></center></html>

### Day 2: Fundamentals of Deep Learning

**October 8, 2026 9:00AM - 4:20PM**

**Location: Main Library room B201**

??? info "Day 2: Fundamentals of Deep Learning"

    In this Deep Learning Institute (DLI) workshop, participants will learn the fundamentals of multi-layered artificial neural networks to deliver state-of-the-art accuracy in tasks such as object detection, speech recognition, and language translation. Using deep learning, computers can learn and recognize patterns from data that are considered too complex or subtle for expert-written software. This course will build intuition and experience in python with the PyTorch library and many topics related to Deep Learning.

    By participating in this workshop, you’ll:

    - Learn the fundamental techniques and tools required to train a deep learning model 
    - Gain experience with common deep learning data types and model architectures 
    - Enhance datasets through data augmentation to improve model accuracy 
    - Leverage transfer learning between models to achieve efficient results with less data and computation 
    -  Build confidence to take on your own project with a modern deep learning framework
	
    Topics: PyTorch, Pandas, Convolutional Neural Networks (CNNs), Data Augmentation, Transfer LearNatural Language Processing

    Prerequisites: Experience with Python, functions, loops, dictionaries, and arrays. Pandas Data Processing, Computing Regression lines.

    Assessment Type: Code-based

    Certificate Available

    [Learn more here](https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+C-FX-01+V3)

    ( ignore mentions of price, workshop is hosted free )
      
<!-- [Day 2 Registration form](https://forms.gle/Z5YjoXbENfofXU4f7) -->

<html><center><a href="https://forms.gle/Z5YjoXbENfofXU4f7" title="Click here to register" class="md-button md-button--primary" target="blank">Register for NVIDIA DLI Day 2</a></center></html>

## Pittsburgh Supercomputing Center Remote Learning

### GPU Programming Using OpenACC

**Monday September 28, 2026 9am - 3pm**

**Location: Computer Center Room 130**

OpenACC is the accepted standard using compiler directives to allow quick development of GPU capable codes using standard languages and compilers. It has been used with great success to accelerate real applications within very short development periods. This workshop assumes knowledge of either C or Fortran programming. It will have a hands-on component using the Bridges-2 computing platform at the Pittsburgh Supercomputing Center. 

<html><center><a href="https://www.psc.edu/resources/training/hpc-workshop-september-28-2026-gpu-programming-using-openacc/" title="Click here to register" class="md-button md-button--primary" target="blank">Register for GPU Programming Workshop</a></center></html>

### Machine Learning and Big Data

**Tuesday-Wednesday October 13-14, 2026**

**Location: Computer Center Room 130**

This workshop will focus on topics including big data analytics and machine learning with Spark, as well as deep learning. We will share the registration page when it becomes available. 

Registration link will be posted when it is made available.


## Our Friends and Partners

<!-- ### Upcoming Events -->

<!-- !!! example "No upcoming workshops scheduled. Check back later" -->

<!-- ### External Event Pages -->

Please check out these workshops and activities from our partners around campus!

<!-- - The Data Science Institute's [official calendar](https://datascience.arizona.edu/calendar)
- Data Lab [home page](https://datainsight.arizona.edu/uarizona-data-lab)
- The UArizona Libraries [event calendar](https://libcal.library.arizona.edu/calendar/events) -->


<div class="grid cards" markdown>

-   :material-calendar-month:{ .lg .middle } __AI2S__

    ---

    The Arizona Institute for AI and Society has an [event calendar](https://responsibleai.arizona.edu/news-events/calendar-events), [training and workshops](https://responsibleai.arizona.edu/faculty-staff/training-workshops-1) for students, and resources for [faculty and staff](https://responsibleai.arizona.edu/faculty-staff/overview). 

-   :material-calendar-month:{ .lg .middle } __Data Lab Resources__

    ---

    The UA DataLab has a repository of training materials on their [github website](https://ua-datalab.github.io/). 

-   :material-calendar-month:{ .lg .middle } __UA Libraries__

    ---

    Check out the [event calendar](https://libcal.library.arizona.edu/calendar/events) for the University of Arizona Libraries. 

</div>


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
