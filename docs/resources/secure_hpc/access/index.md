# Access

!!! warning
    You must be connected to the [Soteria VPN](../prerequisites/) to access the system.

## Command Line Access

Soteria command line access is available with SSH using the hostname ```shell.cougar.hpc.arizona.edu```

```
$ ssh your_netid@shell.cougar.hpc.arizona.edu
 
Authorized uses only. All activity may be monitored and reported.
Last login: Tue Nov 29 06:18:33 2022 from ans-02.hpc.arizona.edu
Authorized uses only. All activity may be monitored and reported.
netid@taub:~ $
```

Taub is a login node and will provide the same functionality and have the same policies as the other HPC clusters. Modules are available on Soteria's compute nodes but not on the login node. The command ```interactive``` is available to request a session on a compute node and jobs may be submitted using the standard `sbatch`. More details on Slurm commands can be found in [Running Jobs](../../../running_jobs/batch_jobs/intro/)

## Graphical Interface

Similar to the other HPC clusters, we offer the service [Open OnDemand](../../../running_jobs/open_on_demand/) to provide web browser access to Soteria. This can be used to navigate, view, and edit files as well as gain access to graphical applications.

In your favorite browser, go to: [https://ondemand-hipaa.hpc.arizona.edu](https://ondemand-hipaa.hpc.arizona.edu)

The applications currently available are  RStudio, Matlab and Python 3.9 (Jupyter). 