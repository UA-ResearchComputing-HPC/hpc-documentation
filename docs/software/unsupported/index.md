# Unsupported Software

Unfortunately, our HPC system is not configured to support all software use cases. We have summarized the main scenarios which cause software to be unsupported by our system below. Prior to submitting an installation request, double-check that your software requirements don't fall into one of these categories. While the HPC may not be able to support these cases, it may be possible that other campus resources are able to. We encourage you to contact services listed in our [Community Resources](../../support_and_training/external_resources/) page.

The below list is not exhaustive and may be expanded as new scenarios are encountered. If you are unsure whether your desired software is supported, feel free to [contact our consultants](../../support_and_training/consulting_services/).

### External Connections

Software requiring external communications that utilize protocols other than SSH are not supported. 

### Job Management/Scheduling

The UArizona HPC uses Slurm as its task scheduler and resource manager. Software requiring different a scheduler is therefore unsupported. 

**Examples**

- Apache Spark
- Sun Grid Engine

### Persistent Databases/Servers

The UArizona HPC is not configured to support databases, server instances, or other persistent software-specific daemons. 

**Examples**

- Persistent SQL databases
- Application deployments
- SAS server

### Windows Applications

While there are plenty of excellent Windows software suites available for scientific computing, they unfortunately cannot be run on HPC. There are, however, national resources available that may support your application. One example is JetStream2 available through an ACCESS Allocation. See our Community Resources page linked at the top of this page for more details.

**Examples**

- ArcGIS
