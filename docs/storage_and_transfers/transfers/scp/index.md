# SCP

Secure Copy, or SCP, uses Secure Shell (SSH) for data transfer and utilizes the same mechanisms for authentication, thereby ensuring the authenticity and confidentiality of the data in transit.

## Mac/Linux

You will need to use an SSH v2 compliant terminal to move files to/from HPC. For more information on using SCP, use `man scp`.

**Copying to HPC**

In a local terminal, you can move a file or directory to a designated subdirectory in your account on HPC using the following syntax:

```bash
scp -rp /path/to/file/or/directory netid@filexfer.hpc.arizona.edu:/path/to/remote/destination
```

**Copying from HPC**

In a local terminal, you can copy a remote file from HPC to your current directory using the syntax:
```bash
scp -rp netid@filexfer.hpc.arizona.edu:/path/to/file/or/directory .
```

!!! Tip "Shorthand"
    Note that the trailing period above refers to the current directory. See our [Linux Cheat Sheet](/support_and_training/cheat_sheet/) for more tips like this. 

Wildcards can be used for multiple file transfers (e.g. all files with .dat extension). Note the backslash ```\``` preceding ```*```

```bash
scp netid@filexfer.hpc.arizona.edu:subdirectory/\*.dat .
```

## Windows

Windows users can use software like WinSCP to make SCP transfers. To use WinSCP, first download/install the software from: [https://winscp.net/eng/download.php](https://winscp.net/eng/download.php)

To connect, enter ```filexfer.hpc.arizona.edu``` in the **Host Name** field, enter your **NetID** under **User name**, and enter your password. Accept by clicking **Login**. You'll be prompted to Duo Authenticate:

<img src="images/WinSCP_login.png" title="WinSCP interface" style="width:100%;">