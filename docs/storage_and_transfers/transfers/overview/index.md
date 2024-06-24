# Overview

!!! tip "Log In Before Transferring"
    To make transfers to/from HPC, you will need to have logged into your account at least once. If you have not, you may encounter "directory does not exist" errors. This is because your home directory is not created until you log in for the first time. See our [System Access page](../../../registration_and_access/system_access/) for information on logging in.

## Designated Data Transfer Node for File Transfers
<img src="images/HPCDiagram_FileTransfers.png" title="Data storage diagram" width=400px align="right">


For efficient file transfers to and from the HPC system, utilize the designated data transfer node, hostname: **`filexfer.hpc.arizona.edu`**. This node is optimized for handling large data transfers and is equipped with a high-speed 100 Gb interconnect.

**Why Use the Data Transfer Node?**

- [x] **Optimized Performance.**

    The dedicated data transfer node ensures efficient transfer speeds, particularly for large datasets.

- [x] **Network Stability.**
    
    Utilizing the data transfer node helps prevent network congestion and potential disruptions on other components of the HPC system.

!!! warning "Do not use hpc.arizona.edu"
    Using the hostname `hpc.arizona.edu` for transfers will move your data to the HPC bastion host. The bastion host is not connected to the shared storage array (meaning files stored here will not be accessible on login/compute nodes) and has limited storage capacity. Users are restricted to 10 MB of space on this node and may experience login issues if this is exceeded.


## Data Transfers By Size

1. Transfers $\leq$ 64 MB: For small data transfers, the [web portal](https://ood.hpc.arizona.edu) offers the most intuitive method.
2. Transfers $<$100 GB: we recommend SFTP, SCP or Rsync using ```filexfer.hpc.arizona.edu```.  
3. Transfers $>$100 GB, transfers outside the university, and large transfers within HPC: we recommend using Globus (GridFTP).


## Best Practices

- [x] **Use the file transfer nodes for large data transfers**

	Login and compute nodes are not designed for large file transfers and transfers initiated here may result in network problems. The data transfer nodes (DTNs) are specifically set up for moving large amounts of data and are accessible via the hostname `filexfer.hpc.arizona.edu`.

- [x] **Limit file copy sessions**

	You share bandwidth with others. Two or three SCP sessions are probably ok; $>$10 is not.
    
- [x] **Consolidate files**

	If you are transferring many small files, consider collecting them in a [tarball](https://www.freecodecamp.org/news/how-to-compress-files-in-linux-with-tar-command/) first.



## Transfer Software Summary


<html>
<table>
    <tr>
        <th>Software</th>
        <th>CLI Interface?</th>
        <th>GUI Interface?</th>
        <th colspan="4"><center>Access to Cloud Services?</center></th>
        <th>Notes</th>
    </tr>
    <tr>
        <th></th>
        <th></th>
        <th></th>
        <th>Google Drive</th>
        <th>AWS</th>
        <th>Box</th>
        <th>Dropbox</th>
        <th></th>
    </tr>
    <tr>
        <td>Globus</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td>&#x274C;</td>
        <td>&#x274C;</td>
        <td></td>
    </tr>
    <tr>
        <td>SFTP</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td>&#x274C;</td>
        <td>&#x274C;</td>
        <td>&#x274C;</td>
        <td>&#x274C;</td>
        <td></td>
    </tr>
    <tr>
        <td>SCP</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td>&#x274C;</td>
        <td>&#x274C;</td>
        <td>&#x274C;</td>
        <td>&#x274C;</td>
        <td>On Windows, <a href="https://winscp.net/eng/index.php">WinSCP</a> is available as a GUI interface</td>
    </tr>
    <tr>
        <td>Rsync</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td>&#x274C;</td>
        <td>&#x274C;</td>
        <td>&#x274C;</td>
        <td>&#x274C;</td>
        <td>Grsync is a GUI interface for Rsync for multiple platforms.</td>
    </tr>
    <tr>
        <td>Rclone</td>
        <td>&#x2705;</td>
        <td>&#x2753;</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td>Rclone has recently announced they have an <a href="https://rclone.org/gui/">experimental GUI</a>.</td>
    </tr>
    <tr>
        <td>Cyberduck</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td></td>
    </tr>
    <tr>
        <td>iRODS</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td>&#x274C;</td>
        <td>&#x274C;</td>
        <td>&#x274C;</td>
        <td>&#x274C;</td>
        <td></td>
    </tr>
</table>
</html>


## File Transfers and SSH Keys
Several of the file transfer methods listed below use authentication based on the SSH protocol, including SCP, SFTP, and Rsync. Therefore, adding your SSH Key to the ```filexfer.hpc.arizona.edu``` node can allow one to **avoid entering passwords** when using those methods. See the documentation for [adding SSH Keys](/registration_and_access/system_access/#ssh-keys).