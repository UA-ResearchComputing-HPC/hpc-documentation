# Secure HPC Overview

!!! warning
    Currently Soteria is in a pilot test mode and is not generally available. 

Research Technologies in partnership with the Data Science Institute is providing a secure research enclave that is HIPAA compliant. It is called Soteria. In Greek mythology, Soteria (Greek: Σωτηρία) was the goddess or spirit (daimon) of safety and salvation, deliverance, and preservation from harm.

## Available Resources

This small cluster has four standard compute nodes. Each has 94 cores and 470 GB memory available. The two GPU nodes have the same resources but there are also four V100 GPU's in each. You can use the regular parts of the documentation to learn how to use Slurm with these nodes.

|Node Type|Node Names|
|-|-|
|Standard Nodes| r1u26n1,r1u27n1,r1u28n1,r1u29n1|
|GPU Nodes| r1u30n1,r1u32n1|

## Allocations and Storage

For the purpose of this early testing, the allocations of time and space will be similar to HPC.
The time allocation will be 100,000 hours.

Your account will come with space in ```/home``` and ```/groups``` where you can put your data.  Currently those directories are not subject to a quota limit.

