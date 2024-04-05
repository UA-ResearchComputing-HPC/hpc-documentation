# Research Desktop Attached Storage (R-DAS)

## Overview

!!! danger "R-DAS not an HPC filesystem"
    R-DAS storage is not mounted on HPC compute or login nodes. Data stored in R-DAS will need to be copied over to the HPC filesystem in order to be accessible to jobs. Instructions on how to access R-DAS from HPC are included below.
    
!!! tip "Group Sharing"
    Faculty members/PIs can share their allocations with group members. To do so, in step 6 in the [Accessing Your R-DAS Allocation](#accessing-your-r-das-allocation) section below, group members will choose the allocation with their faculty member's/PI's NetID.

!!! warning "No Controlled Data"
    This service is not intended for HIPAA or otherwise controlled data. Please see [Secure HPC](/resources/secure_hpc/overview/) for more information. 

On October 16, 2023, we went live with the Research Desktop Attached Storage Array (R-DAS). R-DAS provides up to 5 TB of no-cost storage capacity for each PI group. Our requirement was to enable our users to easily share data with other research group members. You can treat the allocation as a drive mounted on your local computer. R-DAS is intended for storing open research data, but not controlled or regulated data.


## Technical Requirements

R-DAS is a storage service backed by a Qumulo branded storage array. It supports the mounting of SMB shares for SMB 3.1. The supported operating systems are MacOS (Monterey or higher), Linux (kernel 3.7 or higher), and Windows (Windows 10 or 11).

## Performance

The storage array is located in the Research Data Center to benefit from the network infrastructure in the Computer Center. The performance you experience will depend on your network connectivity. The best case is likely wired ethernet in a newer building. Off campus usage requires connection to the VPN, and so performance can be variable. Our testing off campus regularly reached 3 MB/s.

## Requesting an Allocation

PIs can request an allocation on R-DAS from [https://portal.hpc.arizona.edu/portal](https://portal.hpc.arizona.edu/portal)

1. Go to the **Storage** tab
2. Select **Create Shared Desktop Storage** under **Research Desktop Storage**

    <img src="images/create-rdas-storage.png" style="width:400px;">
    
3. Select **Create** from the window that opens. 
      
    <img src="images/select-create.png" style="width:400px;">
    
4. A window will open with the MOU agreement. Review it and, if it is acceptable to you, select **Agree**.

    <img src="images/accept-mou.png" style="width:600px;">
    
5. You can now select the **View Shared Desktop Storage** option from the main **Storage** page in the user portal

    <img src="images/view-rdas-storage.jpg" style="width:400px;">
    
## Accessing Your R-DAS Allocation
!!! tip
    UArizona IP Address Required: To access your R-DAS allocation you need to be connected to either the UArizona campus network, or the UArizona SSL VPN. For information about connecting to a VPN, see [VPN - Virtual Private Network](../../../registration_and_access/vpn/). If you are accessing your R-DAS allocation from an HPC cluster, then you are already on the UArizona campus network and do not need to connect to the UArizona SSL VPN. 
    
R-DAS can be accessed from Linux, MacOS, or Windows. The screenshots are intended to be visual aids, but they include information from the consulting team. When you proceed, please enter your own information.


!!! example "Choose your operating system"

    === "Linux/HPC"
        !!! warning "No ```sudo``` on HPC"
            To connect to R-DAS from HPC, do not attempt to run ```sudo``` commands, these are only meant for your personal Linux machines. All required packages are already installed on the HPC clusters.
            
        First, install the necessary software packages to access your allocation
        
        !!! example "Choose your distribution"
            === "Debian/Ubuntu"
                ```bash
                sudo apt install samba gvfs-backends smbclient
                ```
            === "Fedora/CentOS"
                ```bash
                sudo yum install samba gvfs-samba samba-client 
                ```
            === "Other Linux Distributions"
                Please check the documentation of your distribution.
        
        Next, access your allocation
        !!! example "Choose your connection method"
            === "GUI"
                On a desktop environment, such as MATE, GNOME, KDE, you can mount your R-DAS allocation as a local drive with the corresponding file manager (Caja on MATE, GNOME Files, Dolphin on KDE). On HPC, you can use a [virtual desktop](../../../running_jobs/open_on_demand/).
            
                1. Open the file manager (Caja, GNOME Files, Dolphin)(1).
                    {.annotate}

                    1.  On the HPC Interactive Desktop's MATE desktop environment, you can launch Caja by clicking the file drawer like icon in the top bar, or by selecting Applications > System Tools > Caja.

                2. Press ++ctrl+l++. This makes the location bar editable.

                3. Enter ```smb://rdas.hpc.arizona.edu``` in the location bar, and press ++Enter++.

                    <img src="images/rdas_smb_linux_gui.png" width=500px>

                4. A few moments later a window opens, prompting for your **Username** (```BLUECAT\``` followed by your UA NetID) and **Password** (UA NetID password). After entering the details, select **Connect** (on other file managers this may be **OK**). Some file managers, such as Caja and GNOME Files, also have a **Domain** field, whereas others, like Dolphin, do not. Either way, you do not need to modify its default value.

                    <img src="images/rdas_password_linux_gui.png" width=300px>

                5. Select the allocation named after your group from the list of allocations displayed.

                    <img src="images/windows_shares_linux_gui.png" width=400px>

                6. On some file managers, such as Dolphin, you can right away access your allocation by double clicking on it. On others, such as Caja and GNOME Files, double clicking on it will open another window prompting for your **Username** (```BLUECAT\``` followed by your UA NetID) and **Password** (UA NetID password). Select **Connect as user**, enter the details, and select **Connect**. Your allocation will be mounted as a local drive.

                    <img src="images/connect_as_user_linux_gui.png" width=400px>

            === "CLI"

                You can interactively browse your R-DAS allocation with ```smbclient```:
                ```
                smbclient \\\\rdas.hpc.arizona.edu\\<share> -U BLUECAT\\<username>
                ```

                The ```<share>``` is the PI group that you belong to, and ```<username>``` is your UA NetID. The command will prompt for a password where you will enter your UA NetID password. This will start an ```smb``` shell. For example:

                ```
                ~ $ smbclient \\\\rdas.hpc.arizona.edu\\sohampal -U BLUECAT\\sohampal
                Password for [BLUECAT\sohampal]:
                Try "help" to get a list of possible commands.
                smb: \>
                ```

                Try ```help``` to get a list of possible commands:

                ```
                smb: \> help
                ?              allinfo        altname        archive        backup        
                blocksize      cancel         case_sensitive cd             chmod         
                chown          close          del            deltree        dir           
                du             echo           exit           get            getfacl  
                . . .
                ```

                Use the ```-L``` flag to get the list of shares on the Array. For example:

                ```
                smbclient -L \\\\rdas.hpc.arizona.edu -U BLUECAT\\sohampal
                Password for [BLUECAT\sohampal]:
 
                Sharename       Type      Comment
                ---------       ----      -------
                Q$              Disk      Default root share for SRVSVC.
                ipc$            IPC       Named Pipes
                upgrade         Disk      for qumulo upgrades
                tmerritt        Disk      Desktop share for tmerritt created on 09/12/2023 12:24 PM
                . . .
                ```

                Any command that you can run interactively from the smb shell, you can also run non-interactively with the ```-c``` flag. For example, to list the files and directories in your share, run:
                ```
                smbclient \\\\rdas.hpc.arizona.edu\\<share> -U BLUECAT\\<username> -c 'ls'
                ```
                You can also combine multiple commands with ```;```. For example to list the contents in a directory in your share, run:
                ```
                smbclient \\\\rdas.hpc.arizona.edu\\<share> -U BLUECAT\\<username> -c 'cd <directory>;ls'
                ```
                To copy a file from your local system to your R-DAS share use ```put```, and from your R-DAS share to your local system use ```get```:
                ```
                smbclient \\\\rdas.hpc.arizona.edu\\<share> -U BLUECAT\\<username> -c 'put <file>'
                ```
                To learn more about smbclient, run [```man smbclient```](https://www.samba.org/samba/docs/current/man-html/smbclient.1.html).

    === "Mac OS"
        If you are on a Mac, then you can mount your R-DAS allocation as a local drive with the following steps:
    
        1. Go to Finder
        2. Select **Go** from the top menu bar.
        3. From the drop-down menu, select **Connect to Server**.
        4. In the window that opens, enter ```smb://rdas.hpc.arizona.edu``` in the address bar, and select **Connect**.
    
            <img src="images/smb-link-connect-mac.png" style="width:400px;">
        
        5. After a few moments a window opens prompting for your **Name** (UA NetID) and **Password** (UA NetID password). After entering the details, select Connect.
    
            <img src="images/enter_username_mac.png" style="width:400px;">
    
        6. A window will open with the list of allocations on the array. Select the allocation named after your group, and then select **OK**.

            <img src="images/list_of_allocations_mac.png" style="width:400px;">
        
        
    === "Windows"
        If you are on Windows, you can mount your R-DAS allocation as a local drive with the following steps:

        1. Open Windows Explorer.
        2. Enter ```\\rdas.hpc.arizona.edu``` in the location bar, and press ++enter++.

            <img src="images/rdas-screenshot-windows.png" width=800px>

        3. A few moments later a window will open, prompting for your **Username** (```BLUECAT\``` followed by your UA NetID) and **Password** (UA NetID password). After entering the details, select **OK**.

            <img src="images/network_credentials_windows.png" width=300px>

        4. Select the allocation named after your group from the list of allocations displayed. You can directly open the allocation by double-clicking on it, or mount it by right clicking on it and selecting **Map network drive**.

            <img src="images/rdas-screenshot-windows2.png" width=800px>
