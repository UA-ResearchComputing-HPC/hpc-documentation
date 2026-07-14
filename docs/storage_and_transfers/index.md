---
icon: material/transfer
---

# Storage and Transfers Overview

HPC workflows involve the use, generation, and movement of data from one location to another. You may need to upload a script from your local machine, download a dataset from the web, or transfer a workflow from another cluster. This section includes the relevant information to accomplish these tasks and additional relevant ones.

## Storage

Storage refers to the various filesystems and shares available on HPC. This is where you keep your data and run jobs from. All users get a 50 GB `/home` folder and all PI's get a 500 GB `/groups` folder to share among lab members. Additional storage options include the temporary project space `/xdisk`, a paid permanent share `/rental`, a Tier 2 AWS backup service, and remote desktop storage R-DAs. 

<div class="grid cards" markdown>

-   :material-cube-scan:{ .lg .middle } __Storage Overview__

    ---

    Learn the best place to store your data for various use cases and see a detailed side-by-side comparison of the available storage options.

    [:octicons-arrow-right-24: View documentation](./storage/overview)

</div>

<div class="grid cards" markdown>

-   :material-server:{ .lg .middle } __HPC Storage__

    ---

    HPC Storage refers to the primary all-flash storage array that houses the `/home`, `/groups`, and `/xdisk` shares. View this page for more info on storage allocations, policies, and best practices.

    [:octicons-arrow-right-24: View documentation](./storage/hpc_storage)

-   :material-hammer:{ .lg .middle } __xdisk__

    ---

    xdisk is a **temporary** project storage allocation with up to 20 TB available to PIs for free upon request. xdisk is housed in the primary all-flash array, providing extremely fast IO.

    [:octicons-arrow-right-24: View documentation](./storage/xdisk)

-   :material-harddisk:{ .lg .middle } __Rental Storage__

    ---

    Rental storage is a permanent(1) storage allocation located on the secondary spinning-disk array for a competitive fee. It is mounted on compute nodes, meaning jobs can access this share. Like `/xdisk` it is available to PIs upon request via the Portal.
    { .annotate }

    1.  For the duration of the active pay period. Availability is maintained as long as payment is received.

    [:octicons-arrow-right-24: View documentation](./storage/rental_storage)

-   :material-access-point-network:{ .lg .middle } __R-DAS Storage__

    ---

    Research Desktop Attached Storage (R-DAS) is an SMB-mounted remote file storage system that is available for free to PIs with up to 5 TB available. It is not mounted to the HPC filesystem. It is similar in functionality to NAS. 

    [:octicons-arrow-right-24: View documentation](./storage/rdas_storage)

-   :material-web:{ .lg .middle } __Tier-2 AWS Storage__

    ---

    UITS Research Technologies has partnered with AWS to provide a low-cost backup solution implemented using S3 intelligent tiering buckets. It is not mounted to HPC storage but can be managed through the Portal or a CLI tool on HPC. 

    [:octicons-arrow-right-24: View documentation](./storage/tier2_storage)


</div>

## Transfers

HPC users will likely need to move small or large amounts of data on or off of the various storage options listed above, or between HPC and other remote servers. 

<div class="grid cards" markdown>

-   :material-cube-scan:{ .lg .middle } __Transfers Overview__

    ---

    Learn about the data transfer nodes, best practices, and see a chart comparing transfer methods.

    [:octicons-arrow-right-24: View documentation](./transfers/overview)

</div>


<div class="grid cards" markdown>

-   :material-button-pointer:{ .lg .middle } __Open OnDemand__

    ---

    Use the HPC web interface to upload and download files. 

    [:octicons-arrow-right-24: View documentation](./transfers/open_on_demand) 

-   :material-duck:{ .lg .middle } __Cyberduck__

    ---

    Cyberduck is a graphical file transfer application that can connect to remote servers.

    [:octicons-arrow-right-24: View documentation](./transfers/cyberduck) 

-   :material-file-arrow-up-down:{ .lg .middle } __SFTP/FTP/LFTP__

    ---

    Various forms of the File Transfer Protocol enable you to move files between hosts over the network using the command line.

    [:octicons-arrow-right-24: View documentation](./transfers/sftp_ftp_lftp) 

-   :material-globe-model:{ .lg .middle } __Globus__

    ---

    Globus provides a graphical web app with GridFTP to transfer data between pre-configured endpoints. It offers compatibility among a wide range of systems including many University HPCs and enables reliable tranfers of large data volumes.

    [:octicons-arrow-right-24: View documentation](./transfers/globus) 

-   :material-console:{ .lg .middle } __iRODS__

    ---

    The Integrated Rule-Oriented Data System (iRODS) is open-source, policy-based data management software used by research, commercial, and governmental organizations worldwide. It is available as a command-line tool on the Data Transfer Nodes.

    [:octicons-arrow-right-24: View documentation](./transfers/irods) 

-   :material-console:{ .lg .middle } __rsync__

    ---

    Rsync is a fast and extraordinarily versatile command-line file copying tool that is available on the majority of Unix-like systems including MacOS and Linux.

    [:octicons-arrow-right-24: View documentation](./transfers/rsync) 

-   :material-console:{ .lg .middle } __RClone__

    ---

    Rclone is a CLI tool installed on `filexfer.hpc.arizona.edu` that can be used to transfer files between HPC and Cloud-based storage sites.

    [:octicons-arrow-right-24: View documentation](./transfers/rclone) 

-   :material-console:{ .lg .middle } __SCP__

    ---

    Secure Copy, or SCP, is a command-line tool that authenticates and secures network data transfers using the same protocol as SSH. 

    [:octicons-arrow-right-24: View documentation](./transfers/scp) 



</div>