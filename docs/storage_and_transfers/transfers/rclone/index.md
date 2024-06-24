# Rclone

!!! tip "Browser Availability"
    If you encounter issues configuring Rclone on HPC due to an internet browser not being available, try using a terminal in an [interactive desktop session in Open OnDemand](../../../running_jobs/open_on_demand/). This will allow you to grant application access graphically. 

!!! example "Reference"
    For information on Rclone commands, see: [https://rclone.org/commands/](https://rclone.org/commands/)


Rclone is a CLI tool installed on ```filexfer.hpc.arizona.edu``` that can be used to transfer files between HPC and Cloud-based storage sites. To use Rclone, you will need to start by configuring it. The walkthrough provided by Rclone is fairly straightforward and has a large number of options to choose from. A configuration example for Google Drive is shown below. 


## Example Google Drive Configuration

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
  12 / Google Drive
    \ "drive"
  ...
  Storage> 12
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

The next prompt will ask if you would like to use auto config, select N here or the configuration will not be successful. You will be given a URL. Copy and paste this into your web browser and follow the prompts to allow Rclone to have access to your UArizona Google Drive account. When you are done, it will give you a verification code. Copy and paste this back into the terminal to proceed.

```
Remote config
Use auto config?
  * Say Y if not sure
  * Say N if you are working on a remote or headless machine
y) Yes
n) No
y/n> N
If your browser doesn't open automatically go to the following link: <long URL>
Log in and authorize rclone for access
Enter verification code> <your verification code here>
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

Your Google Drive connection is now active and you can use rclone to make transfers. 
```
