<link rel="stylesheet" href="../../../assets/stylesheets/buttons.css">

# Building Containers

!!! warning 
    The Apptainer cache can fill up your home quickly. To set a different location, see our [Cache Directory documentation](../containers_on_hpc/#cache-directory). 

!!! tip
    For detailed information on Apptainer recipes, see [Apptainer's official documentation](https://apptainer.org/docs/user/main/cli/apptainer_build.html).

Apptainer Build is a tool that allows you to create containers. With Apptainer Build, you can package your application and its dependencies into a single unit, making it easier to deploy and share across different computing environments. Two useful options are to build your container by bootstraping off a container hosted locally on HPC or bootstrapping off an existing container hosted on Dockerhub. We'll cover both cases below.

## Bootstrapping off a Local Image

One common case users run into is using a python container hosted on HPC but needing additional packages installed in the image. To do this, it's possible to bootstrap off the local image and pip-install a new package in a section called ```%post``` which is executed during build time. 

For example, say we want to use the HPC container nvidia-tensorflow-2.6.0.sif located in ```/contrib/singularity/nvidia/``` but we need it to have the package astropy installed which is currently missing. We can create a recipe file that takes this image, bootstraps off it, and pip-installs astropy. Our recipe file would look like the following:

```
Bootstrap: localimage
From: /contrib/singularity/nvidia/nvidia-tensorflow-2.6.0.sif

%post
  pip install astropy
```

We'll call this recipe file something descriptive, e.g. tf2.6-astropy.recipe. Then, to build, all we need to do is use the syntax ```apptainer build <local_image_name>.sif <recipe_file>```. In this case:

```
[netid@cpu43 build_example]$ apptainer build tf2.6-astropy.sif tf2.6-astropy.recipe 
INFO:    User not listed in /etc/subuid, trying root-mapped namespace
INFO:    The %post section will be run under fakeroot
INFO:    Starting build...
INFO:    Verifying bootstrap image /contrib/singularity/nvidia/nvidia-tensorflow-2.6.0.sif
. . .
INFO:    Creating SIF file...
INFO:    Build complete: tf2.6-astropy.sif
[sarawillis@cpu43 build_example]$ 
```

## Bootstrapping off a Docker Hub Image

!!! tip
    Not sure how to install your own software? Check our our section on [User Installations](../../user_installations/).

Bootstrapping off Ubuntu images is a great way to create a very customizable container where you can install your own software. Instead of pulling an Ubuntu image (see: [Pulling Containers](../pulling_containers/) for a tip on how to find an Ubuntu image), we can bootstrap directly off the image in our recipe file. 


Let's say as an example, we want to install python 3.11 with a custom library. We can create a recipe file called python3.11_astropy.recipe:

```
Bootstrap: docker
From: ubuntu:22.04

%post 
  apt update -y
  apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libsqlite3-dev wget libbz2-dev -y 
  wget https://www.python.org/ftp/python/3.11.3/Python-3.11.3.tgz
  tar -xf Python-3.11.3.tgz
  cd Python-3.11.3
  ./configure --enable-optimizations
  make 
  make altinstall
  python3.11 -m pip install astropy

```

And building using 
```
[netid@cpu38 pull_example]$ apptainer build python3.11_astropy.sif python3.11_astropy.recipe 
INFO:    User not listed in /etc/subuid, trying root-mapped namespace
INFO:    The %post section will be run under fakeroot
INFO:    Starting build...
. . .
INFO:    Creating SIF file...
INFO:    Build complete: python3.11_astropy.sif
[sarawillis@cpu38 pull_example]$ 
```

<html>
<div class="button-container">
    <a href="../pulling_containers/"><button class="left-button"></button></a>
    <a href="../using_containers/"><button class="right-button"></button></a>
</div>
</html>