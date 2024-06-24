<link rel="stylesheet" href="../../../assets/stylesheets/buttons.css">
<link rel="stylesheet" href="../../../assets/stylesheets/images.css">

# What are Containers?

!!! tip
    Want to learn more about containers? Check out our [Intro to Containers workshop](../../../events/workshop_materials/intro_to_containers/). 


<img class="img-right" src="images/Shipping.png" title="Shipping containers illustration" style="width: 300px;">

A container is a packaged unit of software that contains code and all its dependencies including, but not limited to: system tools, libraries, settings, and data. This makes applications and pipelines portable and reproducible, allowing for a consistent environment that can run on multiple platforms.

Shipping containers have frequently been used as an analogy because the container is standard, does not care what is put inside, and will be carried on any ship; or in the case of computing containers, it can run on many different systems.

Docker is widely used by researchers, however, Docker images require root privileges which means they cannot be run in an HPC environment.

Apptainer (formerly Singularity) addresses this by completely containing the authority so that all privileges needed at runtime stay inside the container. This makes it ideal for the shared environment of a supercomputer. Even better, a Docker image can be encapsulated inside an Apptainer image. Some ideal use cases that can be supported by Apptainer on HPC include:

* You already use Docker and want to run your jobs on HPC.
* You want to preserve your environment so a system change will not affect your work.
* You need newer or different libraries than are offered on the system.
* Someone else developed a workflow using a different version of Linux.
* You prefer to use a Linux distribution other than CentOS (e.g. Ubuntu).
* You want a container with a database server like MariaDB.

The documentation in this section provides instructions on how to either take a Docker image and run it from Apptainer, or create and run an image using Apptainer only.

<html>
<a href="../containers_on_hpc/"><button class="right-button" style="float: right;"></button></a>
</html>

<br>