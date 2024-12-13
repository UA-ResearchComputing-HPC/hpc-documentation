# Rclone

Rclone is a CLI tool installed on ```filexfer.hpc.arizona.edu``` that can be used to transfer files between HPC and Cloud-based storage sites. To use Rclone, you will need to start by configuring it. Rclone's configuration process is fairly straightforward and has a large number of options to choose from. Some configuration examples are shown below. 

??? info "Newer Version Available"

    As of December 12, 2024 a newer version of `rclone` is available on the file transfer nodes. In the default environment:

    ```console
    [user@sdmz-dtn-3 ~]$ rclone --version
    rclone v1.58.1
    ```

    The command to activate the new environment is `optrclone`:

    ```console
    [user@sdmz-dtn-3 ~]$ optrclone
    Selecting version 1.68.2
    [user@sdmz-dtn-3 ~]$ rclone --version
    rclone v1.68.2
    ```

    Exiting the new environment:

    ```console
    [user@sdmz-dtn-3 ~]$ exit
    [user@sdmz-dtn-3 ~]$ rclone --version
    rclone v1.58.1
    ```

## Configuring Rclone

To configure Rclone, you'll first want to be in an [OnDemand Desktop session](../../../running_jobs/open_on_demand/). This will give you access to both a terminal session and browser that can be used for granting Rclone access to your target cloud service. To configure Rclone, open a MATE terminal and type `rclone config`

<img src="./images/rclone_config_ood_desktop.png" title="Globus homescreen" style="width:700px; box-shadow: 5px 5px 5px #999;">

some examples for configuring rclone for common cloud services are shown below. Some text has been removed for brevity. If there is nothing included after the `>` rclone prompt, then the option was left empty before hitting ++enter++. When entries are left blank, Rclone's default options will be used. 

!!! warning "Verify your input"
    The instructions below were written on 9/6/2024. It's possible some Rclone configuration options have been updated, so verify the any options you enter match the correct cloud provider and desired configuration options. 

=== "Google Drive"
    ```
    [netid@sdmz-dtn-4 ~]$ rclone config
    Name                 Type
    ====                 ====
  
      e) Edit existing remote
      n) New remote
      d) Delete remote
      r) Rename remote
      c) Copy remote
      s) Set configuration password
      q) Quit config
      e/n/d/r/c/s/q> n
      name> GoogleDrive
      Type of storage to configure.
      Enter a string value. Press Enter for the default ("").
      Choose a number from below, or type in your own value
      ...
      17 / Google Drive
        \ "drive"
      ...
      Storage> 17
      Google Application Client Id
      client_id>
      client_secret>
      scope> 1
      root_folder_id>
      service_account_file>
      Edit advanced config? (y/n)
      y) Yes
      n) No
      y/n> n
    ```

    The next prompt will ask if you would like to use auto config, select `y`. This will open a Firefox browser prompting you to log into your Google Drive account. Once you've successfully logged in, authorize rclone for access. You will then return to your terminal:

    ```
    Remote config
    Use auto config?
      * Say Y if not sure
      * Say N if you are working on a remote or headless machine
    y) Yes
    n) No
    y/n> y
    If your browser doesn't open automatically go to the following link: <long URL>
    Log in and authorize rclone for access
    ...
    Configure this as a team drive?
    y) Yes
    n) No
    y/n> n
    --------------------
    [GoogleDrive]
    type = drive
    scope = drive
    token = {"access_token": <lots of token data>}
    --------------------
    y) Yes this is OK
    e) Edit this remote
    d) Delete this remote
    y/e/d> y
    Current remotes:
 
    Name                 Type
    ====                 ====
    GoogleDrive          drive
    ```

=== "Box"
    ```
    [netid@sdmz-dtn-4 ~]$ rclone config
     Name                 Type
     ====                 ====
  
      e) Edit existing remote
      n) New remote
      d) Delete remote
      r) Rename remote
      c) Copy remote
      s) Set configuration password
      q) Quit config
      e/n/d/r/c/s/q> n
      name> Box
      Storage> 8
      client_id> 
      client_secret> 
      box_config_file> 
      access_token> 
      box_sub_type> 1
      Edit advanced config?
      y/n> n
      Use auto config?
        * Say Y if not sure
        * Say N if you are working on a remote or headless machine

      y) Yes (default)
      n) No
      y/n> y
    ```
    This will open a Firefox browser. To sign in, click the SSO option and sign in with your university credentials (or log into your personal account), then authorize rclone so it can access Box. Once you're done, back in the terminal:

    ```
    y) Yes this is OK (default)
    e) Edit this remote
    d) Delete this remote
    y/e/d> y

    /n/d/r/c/s/q> q
    ```

## Rclone Transfers

The syntax to initiate file transfers will typically look something like

```
rclone copyto <source> <destination>
```

When `<source>` and/or `<destination>` are a cloud service, the format will be:

```
<Name>:/path/to/file/or/directory
```

Where `<Name>` is the name you gave for the service during the configuration process. For example, if I were to access my University Box endpoint (configured in the example in the previous section), I could check its contents using `rclone lsf`(1) with:
{ .annotate }

1.  Tip: `rclone ls` will list **all** files in a root directory and its subdirectories making it much harder to parse. You may want to start with using `lsf` which provides more user-friendly output.

```console
[netid@sdmz-dtn-4 ~]$ rclone lsf Box:
HPC Documentation Site/
IntroToViz.pptx
Photos/
RcloneExample/
[netid@sdmz-dtn-4 ~]$ rclone lsf Box:RcloneExample
example.txt
```
If I wanted to transfer the file `example.txt` to my working directory on HPC:

```console
[netid@sdmz-dtn-4 ~]$ rclone copyto Box:RcloneExample/example.txt ./example.txt
[netid@sdmz-dtn-4 ~]$ ls -l example.txt 
-rw-r-----. 1 netid staff 4 Sep  5 14:14 example.txt
```

More detailed information on using Rclone can be found in their documentation [https://rclone.org/commands/](https://rclone.org/commands/). 