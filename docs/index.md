# Welcome to the UArizona HPC Documentation Site



<img src="images/uofa_cactus_computing2.png" alt="cactus" align="right" width="300">

## Introduction

The University of Arizona offers High Performance Computing (HPC) resources in the Research Data Center (RDC), a state-of-the-art facility that hosts our large computer clusters. The HPC Center is managed by the UITS [Research and Discovery Technologies](https://it.arizona.edu/research-and-discovery-technologies) department and funded in part by the [Office of Research, Innovation, and Impact](https://research.arizona.edu/) (RII).

HPC services are available at no cost to researchers. Each faculty member is eligible for a free standard allocation of CPU time and storage space. 

This documentation site provides technical details relevant to using our HPC system. Whether you are just starting your journey into computational sciences or are a seasoned programmer, we hope you will find something useful in these pages.

## First Steps

We think these sections are a good place to start learning about your HPC center and what it has to offer:

<p style="display:inline-block;">
  <img src="images/uofa_cactus_computing2.png" style="width: 30px; vertical-align: middle;">
  <span style="font-size: 20px; vertical-align: middle; margin-left: 0.5em;"><a href="./quick_start/overview"> Quick Start</a></span>
</p>

<p style="margin-top: 0;">If you are new to the UA HPC, or to HPC in general, our self-guided quick start tutorial will provide a solid foundation for using our system.</p>


<p style="display:inline-block;">
  <img src="images/uofa_cactus_computing2.png" style="width: 30px; vertical-align: middle;">
  <span style="font-size: 20px; vertical-align: middle; margin-left: 0.5em;"><a href="./registration_and_access/account_creation/"> Account Creation</a></span>
</p>

<p style="margin-top: 0;">If you are an active UA affiliate (e.g. student, post-doc, faculty), you can register an account. If you are not with the UA but are working with collaborators here, you can register as a <a href="https://it.arizona.edu/service/designated-campus-colleague-accounts">Designated Campus Colleague</a> (DCC). </p>

<p style="display:inline-block;">
  <img src="images/uofa_cactus_computing2.png" style="width: 30px; vertical-align: middle;">
  <span style="font-size: 20px; vertical-align: middle; margin-left: 0.5em;"><a href="./support_and_training/consulting_services/"> Getting Help</a></span>
</p>

<p style="margin-top: 0;"> Find out how to contact the HPC Consult team, or view our FAQs, workshops, glossary, cheat sheets, and more! </p>




## Our Mission

UArizona High Performance Computing is an interdisciplinary research center focused on facilitating research and discoveries that advance science and technology. We deploy and operate advanced computing and data resources for the research activities of students, faculty, and staff at the University of Arizona. We also provide consulting, technical documentation, and training to support our users.

This site is divided into sections that describe the HPC resources that are available, how to use them, and the rules for use. The documentation you see here is managed by the HPC Consult team. Please [contact us](./support_and_training/consulting_services/) if you have questions or comments about the content of this site.

## Available Resources

<h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg> Compute</h3>

UArizona HPC systems are available to all university faculty, staff, undergraduate and graduate students, postdocs, and designated campus colleagues (DCCs) at no cost. Researchers have access to [compute resources on our three clusters](./resources/compute_resources/) Puma, Ocelote, and ElGato located in our data center. Presently each research group is provided with a [free standard monthly allocation](./resources/allocations/) on each: 100,000 CPU-hours on Puma, 70,000 CPU-hours on Ocelote, and 7,000 CPU-hours on ElGato.

??? example "Our Clusters"

    === "Puma"
        <img src="images/puma.png" alt="puma" align="right" width="250">
        Implemented in the middle of 2020, Puma is the biggest cat yet. Similar to Ocelote, it has standard CPU nodes (with 94 cores and 512 GB of memory per node), GPU nodes (with Nvidia V100) and two high-memory nodes (3 TB). Local scratch storage increased to ~1.4 TB. Puma runs on CentOS 7.

        As is the case for our other supercomputers, we use the RFP process to get the best value for our financial resources, that meet our technical requirements. This time Penguin Computing one with AMD processors. This is tremendously valuable as each node comes with:

        - Two AMD Zen2 48 core processors
        - 512GB RAM
        - 25Gb path to storage
        - 25Gb path to other nodes for MPI
        - 2TB internal NVME disk (largely available as /tmp)
        - Qumulo all flash storage array for shared filesystems
        - Two large memory nodes with 3TB memory and the same processors and memory as the other nodes
        - Six nodes with four Nvidia V100S GPU's each

    === "Ocelote"
        <img src="images/ocelote.png" alt="ocelote" align="left" width="250">
        Ocelote arrived in 2016. Lenovo's Nextscale M5 technology was the winner of the RFP mainly on price, performance and meeting our specific requirements. Ocelote has one large memory node with 2TB of memory and 46 nodes with Nvidia P100 GPUs for GPU-accelerated workflows. This cluster is actually the next generation of the IBM cluster we call ElGato. Lenovo purchased IBM's Intel server line in 2015.

        In 2021, Ocelote's operating system was upgraded from CentOS6 to CentOS7 and was configured to use SLURM, like Puma. It will continue until it is either too expensive to maintain or it is replaced by something else.
            - Intel Haswell V3 28 core processors
            - 192GB RAM per node
            - FDR infiniband for fast MPI interconnect
            - Qumulo all flash storage array (all HPC storage is integrated into one array)
            - One large memory node with 2TB RAM, Intel Ivy Bridge V2 48 cores
            - 46 nodes with Nvidia P100 GPU's

    === "El Gato"
        <img src="images/elgato.png" alt="elgato" align="left" width="100">
        Implemented at the start of 2014, ElGato has been reprovisioned with CentOS 7 and new compilers and libraries. From July 2021 it has been using Slurm for job submission. ElGato is our smallest cluster with 130 standard nodes each with 16 CPUs. Purchased by an NSF MRI grant by researchers in Astronomy and SISTA.

<h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18" height="18"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64H64V352zm64-208c0 35.3-28.7 64-64 64V144h64zM512 304v64H448c0-35.3 28.7-64 64-64zM448 96h64v64c-35.3 0-64-28.7-64-64z"/></svg> Funding Sources</h3>
UArizona HPC systems are funded through the [UArizona Research Office (RII)](http://research.arizona.edu/) and CIO/UITS (Chief Information Officer, and University Information Technology Services). Staff is funded to administer the systems and provide [consulting services](./support_and_training/consulting_services/) (no charge) for all researchers.

<h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"/></svg> Regulated Research</h3>

These resources specifically do not support Regulated Research, which might be ITAR, HIPAA or CUI (Controlled Unclassified Information). For more information on services that can support regulated research, see: [HIPAA support services](https://uarizona.service-now.com/sp?id=sc_cat_item&sys_id=32755b2d1bcb28107947edf1604bcbd1) and [CUI support services](https://uarizona.service-now.com/sp?id=sc_cat_item&sys_id=da15df6d1bcb28107947edf1604bcbeb).

## Upcoming Events

Every semester we host training workshops on topics ranging from into to HPC, to machine learning, to parallel computing, and beyond. For a schedule of workshops, see our [workshops calendar](./support_and_training/workshops/events_calendar/).

## News

<div class="grid cards" markdown>

-   :material-clock-fast:{ .lg .middle } __Faster Interactive Sessions__

    ---

    Are you frustrated waiting for slow interactive sessions to start? Try using the standard queue on ElGato. We have provisioned 44 nodes to only accept the standard queue to facilitate faster connections. To access a session

-   :material-expansion-card:{ .lg .middle } __New MIG Resources__

    ---

    MIG resources entered the queues on Feb 26, 2024. The 12 MIG GPUs will increase overall GPU availability on Puma by freeing the 32 GB V100 GPUs for users requiring larger amounts of GPU memory. Note: some batch scripts will need updates to work properly. [More information here](./resources/compute_resources/).

-   :material-clock-plus-outline:{ .lg .middle } __Increased Allocations__

    ---

    Beginning on March 1st, 2024 the standard allocation of CPU hours on Puma has increased from 100,000 to 150,000, and on Ocelote from 70,000 to 100,000. 

-   :material-lectern:{ .lg .middle } __UArizona at Supercomputing__

    ---

    Our Research Technologies team represented the University of Arizona’s top tier research brand along with that of ASU and NAU at the Supercomputing Conference (SC23), this year held in Denver. [Read the full story here](https://it.arizona.edu/news/university-research-shines-supercomputing-conference).

</div>



## Highlighted Research

<img src="./assets/images/home/HypersonicTravel.jpg" align="right" width="300px">

**Faster Speeds Need Faster Computation**

Professors Christoph Hader, Hermann Fasel, and their team are exploring the use of our GPUs to optimize Navier-Stokes codes for simulating the flow field around hypersonic vehicles traveling at size times the speed of sound (Mach 6) or more.

In the image to the right, instantaneous flow structures obtained from a DNS for a flared cone at Mach 6 are visualized using the Q-isocontours colored with instantaneous temperature disturbance values. The small scales towards the end of the computational domain indicate the regions where the boundary layer is turbulent. 

## Acknowledgements

Published research that utilized UA HPC resources should follow our [guidelines](./policies/acknowledgements/) on how to acknowledge us. 

If you wish for your research to be featured in our [Results](./results) page, please [contact HPC consult](./support_and_training/consulting_services/) with news of the publication!

----
***Land Recognition***

*We respectfully acknowledge the University of Arizona is on the land and territories of Indigenous peoples. Today, Arizona is home to 22 federally recognized tribes, with Tucson being home to the O’odham and the Yaqui. Committed to diversity and inclusion, the University strives to build sustainable relationships with sovereign Native Nations and Indigenous communities through education offerings, partnerships, and community service.*
