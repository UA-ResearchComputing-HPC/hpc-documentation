<link rel="stylesheet" href="../../../assets/stylesheets/buttons.css">

# Using Containers

If you've gone through the previous sections, you have an idea of how to pull and create containers, but how do you actually use one? Apptainer can be used to run your analyses and applications in various ways: running a prepackaged workflow embedded in the image with `apptainer run`, executing commands within the container's environment using `apptainer exec`, or starting an interactive instance to work directly within the container using `apptainer shell`.



## Running Prepackaged Apptainer Workflows

!!! note "Note: Not every container may include a predefined workflow"

```apptainer run``` is used without any arguments and executes a predefined workflow embedded in the image. The general syntax is: 

```
apptainer run <img>.sif
```

For example:

```
[netid@cpu38 run_example]$ apptainer run lolcow.sif 
 _______________________________________
/ You get along very well with everyone \
\ except animals and people.            /
 ---------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## Executing Commands within Apptainer Images

`apptainer exec` allows you to execute commands within an Apptainer image without entering it interactively. It simplifies running tasks by providing a command-line interface to interact with containerized applications, ensuring consistency and reproducibility in your workflow. The general syntax is

```
apptainer exec app.sif <commands> 
```

For example:

```
apptainer exec /contrib/singularity/nvidia/nvidia-tensorflow-2.6.0.sif python3 script.py
```

## Using Apptainer Applications Interactively

Apptainer shell starts an interactive session within the container's environment. This is optimal for testing, debugging, or using any sort of graphical interface installed in your image. The general syntax is

```
apptainer shell app.sif
```

 For example:

```
[netid@cpu38 run_example]$ apptainer shell /contrib/singularity/nvidia/nvidia-tensorflow-2.6.0.sif
Singularity> python3
Python 3.8.10 (default, Sep 28 2021, 16:10:42) 
[GCC 9.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import tensorflow as tf
>>> tf.__version__
'2.6.2'
```


## Apptainer and GPUs

If you're using Apptainer to execute workflows that require a GPU, you'll need to add the additional flag ```--nv``` to your Apptainer command. For example:

```
apptainer exec --nv <container> <commands>
```

<html>
<div class="button-container">
    <a href="../building_containers/"><button class="left-button"></button></a>
</div>
</html>
