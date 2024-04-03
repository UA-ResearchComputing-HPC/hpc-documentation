# Overview

!!! warning "Log In Before Transferring"
    To make transfers to/from HPC, you will need to have logged into your account at least once. If you have not, you may encounter "directory does not exist" errors. This is because your home directory is not created until you log in for the first time. See here about System Access


Files are transferred to shared data storage and not to the bastion node, login nodes, or compute nodes. Because the storage is shared, your files are accessible on all clusters; Puma, Ocelote and Elgato. When you look at the diagram above, you can intuitively see the efficiency of transferring data without additional hops.  Keeping mind that the data pipes are wider also, allowing for faster data transmission.

<img src="images/HPCDiagram_FileTransfers.png"  width=500px>


## Data Transfers By Size

1. Small Transfers: For small data transfers the [web portal](https://ood.hpc.arizona.edu) offers the most intuitive method.
2. Transfers <100GB: we recommend sftp, scp or rsync using ```filexfer.hpc.arizona.edu```.  
3. Transfers (>100GB), transfers outside the university, and large transfers within HPC: we recommend using Globus (GridFTP).

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
        <td>rsync</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td>&#x274C;</td>
        <td>&#x274C;</td>
        <td>&#x274C;</td>
        <td>&#x274C;</td>
        <td>Grsync is a GUI interface for rsync for multiple platforms.</td>
    </tr>
    <tr>
        <td>rclone</td>
        <td>&#x2705;</td>
        <td>&#x2753;</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td>&#x2705;</td>
        <td>rclone has recently announced they have an <a href="https://rclone.org/gui/">experimental GUI</a>.</td>
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
Several of the file transfer methods listed below use authentication based on the SSH protocol, including scp, sftp and rsync. Therefore, adding your SSH Key to the ```filexfer.hpc.arizona.edu``` node can allow one to **avoid entering passwords** when using those methods. See the documentation for [adding SSH Keys](/registration_and_access/system_access/#ssh-keys).