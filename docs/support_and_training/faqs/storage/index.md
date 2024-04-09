# Storage and Transfers

## HPC Storage

<link rel="stylesheet" href="../../../assets/stylesheets/animated_dropdown.css">
<link rel="stylesheet" href="../../../assets/stylesheets/spacing.css">

<html>

<h3>General Storage</h3>

<!-- General format for HTML 
<button class="collapsible">Question goes here</button>
<div class="content">
  <p>
      Answer goes here
  </p>
</div>
-->



<!-- Do you allow users to NFS mount their own storage onto the compute nodes? --> 

<button class="collapsible">Do you allow users to NFS mount their own storage onto the compute nodes?</button>
<div class="content">
  <p>
       No. We NFS mount storage across all compute nodes so that data is available independent of which compute nodes are used. See our page on <a href="../../../storage_and_transfers/transfers/overview/">transferring data</a> for more information.
  </p>
</div>

<!-- I can't transfer my data to HPC with an active account. What's wrong? -->
<button class="collapsible">I can't transfer my data to HPC with an active account. What's wrong?</button>
<div class="content">
  <p>
      After creating your HPC Account, your home directory will not be created until you log in for the first time. Without your home directory, you will not be able to transfer your data to HPC. If you are struggling and receiving errors, sign into your account either <a href="../../../registration_and_access/system_access/#command-line-access">using the CLI through the bastion</a> or logging into <a href="../../../registration_and_access/system_access/#web-access">Open OnDemand</a> and then try again.
  </p>
</div>

<!-- I accidentally deleted files, can I get them back? -->
<button class="collapsible">I accidentally deleted files, can I get them back?</button>
<div class="content">
  <p>
      It's unlikely. Backups are not made and anything deleted is permanently erased. If you have deleted an important file, reach out to our consultants as soon as possible and they may be able to retrieve it, however, this is not guaranteed. 
      <br>
      To ensure your data are safe, we strongly recommend:
      <ul>
          <li>Making frequent backups, ideally in three places and two formats. Helpful information on moving data can be found on our page <a href="../../../storage_and_transfers/transfers/overview/">Transferring Data</a>.</li>
          <li>Use <code>rm</code> and <code>rm -r</code> with caution as these commands cannot be undone! Consider using <code>rm -i</code> when removing files/directories. The <code>-i</code> flag will prompt you to manually confirm file removals to make <i>really</i> sure they can be deleted.</li>
          <li>You can open <a href="../../../support_and_training/consulting_services/">a support ticket</a> to request assistance.  Files that are deleted may not have been removed from the storage array immediately (though this is not guaranteed), don't wait more than a few days.</li>
      </ul>
  </p>
</div>


<!-- My home directory is full, what's using all the space? -->
<button class="collapsible">My home directory is full, what's using all the space?</button>
<div class="content">
  <p>
      If your home directory is full and you can't find what is taking up all the space, it's possible the culprit is a hidden file or directory. Hidden objects are used for storing libraries, cached singularity/apptainer objects, saved R session, Anaconda environments, configuration files, and more. It's important to be careful with hidden, or "dot", files since they often control your environment and modifying them can lead to unintended consequences.<br><br>
      To view the sizes of all the objects (including hidden) in your home, one quick command is <code>du -hs $(ls -A ~)</code>, for example:
      <pre><code>
[netid@junonia ~]$ du -hs $(ls -A ~)
32K     Archives
192M    bin
4.7G    Software
46M     .anaconda
1.9M    .ansys
4.0K    .apptainer
16K     .bash_history
4.0K    .bash_logout
4.0K    .bash_profile
12K     .bashrc
20M     ondemand
      </code></pre>
  </p>
</div>

<!-- I'd like to share data I have stored on HPC with an external collaborator, is this possible? -->
<button class="collapsible">I'd like to share data I have stored on HPC with an external collaborator, is this possible?</button>
<div class="content">
  <p>
      Unfortunately, without active university credentials it is not possible to access HPC compute or storage resources. External collaborates who need ongoing access may apply for <a href="https://hr.arizona.edu/workforce-systems/uaccess-resources/designated-campus-colleagues">Designated Campus Colleague, or DCC, status</a>. This is a process done through HR and will give the applicant active university credentials allowing them to receive HPC sponsorship.
      <br>
      Otherwise, data will need to be moved off HPC and made available on a mutually-accessible platform. This may include (but is not limited to): Google Drive, AWS S3, Box, and <a href="https://cyverse.org/data-store">CyVerse's Data Store</a>.
  </p>
</div>


<!-- Received message too long -->
<button class="collapsible">Why am I getting the error <code>Received message too long</code> when I try to upload data to HPC?</button>
<div class="content">
  <p>
      Check your <code>~/.bashrc</code> or <code>~/.bash_profile</code> to see if they are printing any output to the terminal. Transfer software like SCP or SFTP require a "silent" terminal to work successfully. If you find any <code>echo</code> or <code>printf</code> statements, comment them out and retry your transfer. 
  </p>
</div>


<!-- -->

    

<h3>xdisk</h3>
<!-- Can someone other than a PI manage a group's xdisk? -->
<button class="collapsible">Can someone other than a PI manage a group's xdisk?</button>
<div class="content">
  <p>
    Yes, a PI can add a trusted group member as a delegate by following the instructions in our <a href="../../../registration_and_access/group_management/
#delegating-group-management-rights">Research and Class Groups</a> page. Once a group member is added as a delegate, they can manage the group's xdisk allocation on behalf of their PI in the user portal.
  </p>
</div>

<!-- Who owns our group's /xdisk? -->
<button class="collapsible">Who owns our group's /xdisk?</button>
<div class="content">
  <p>
      A group's PI owns the xdisk allocation. By default, your PI has exclusive read/write/execute privileges for the root folder <code>/xdisk/&#60;pi_netid&#62;</code>.
  </p>
</div>

<!-- Can a PI make their /xdisk accessible to their whole group? -->
<button class="collapsible">Can a PI make their /xdisk writeable for their whole group? </button>
<div class="content">
  <p>
      By default, members of a research group only have write access to their subdirectories under <code>/xdisk/&#60;pi_netid&#62;</code>. If they so choose, a PI may allow their group members to write directly to that location by running the following command:
      <pre><code>
chmod g+w /xdisk/&#60;pi_netid&#62;
      </code></pre>
      For more information on Linux file permissions, see our <a href="../../cheat_sheet/#linux-file-permissions">cheat sheet</a>. 
  </p>
</div>

<!-- Where can group members store their files? -->
<button class="collapsible">Where can group members store their files?</button>
<div class="content">
  <p>
      When an xdisk allocation is created, a subdirectory is automatically generated for and owned by each individual group member. Group members can access their individual spaces by:
      <pre><code>
cd /xdisk/&#60;pi_netid&#62;/&#60;netid&#62;
      </code></pre>
      If a user joins the group after the xdisk was created and <code>/xdisk/&#60;pi_netid&#62;</code> is not writeable for group members, <a href="../../consulting_services/">contact our consultants</a> and they can create one.
  </p>
</div>

<!-- A group member's directory isn't in our /xdisk, how can we add it? -->
<button class="collapsible">A group member's directory isn't in our /xdisk, how can we add it?</button>
<div class="content">
  <p>
      Typically when an xdisk allocation is created, it will automatically generate a directory for each group member. In the unlikely event that it doesn't or, more commonly, a group member is added after the allocation has been created, <a href="../../consulting_services/">contact our consultants</a> and they can create one. 
  </p>
</div>

<!-- Do we need to request an individual allocation within the /xdisk for each user in our group? -->
<button class="collapsible">Do we need to request an individual allocation within the /xdisk for each user in our group?</button>
<div class="content">
  <p>
      No, the full xdisk allocation is available for every member of the group. It's up to group members to communicate with one another on how they want to utilize the space.
  </p>
</div>

<!-- Why am I getting xdisk emails? -->
<button class="collapsible">Why am I getting xdisk emails? </button>
<div class="content">
  <p>
       xdisk is a temporary storage space available to your research group. When it's close to its expiration date, notifications will be sent to all members of your group.</a>.
  </p>
</div>

<!-- Why am I getting "/xdisk allocations can only be authorized by principal investigators"? -->
<button class="collapsible">Why am I getting "/xdisk allocations can only be authorized by principal investigators"? </button>
<div class="content">
  <p>
      xdisks are managed by your group's PI by default. This means if you want to request an xdisk or modify an existing allocation (e.g., extending the time limit or increasing the storage quota), you will need to consult your PI. Your PI may either perform these actions directly or, if they want to delegate xdisk management to a group member, they may do so by following the instructions under <a href="../../../registration_and_access/group_management/
#delegating-group-management-rights">Delegating Group Management Rights</a>.
  </p>
</div>

<!-- How can we modify our xdisk allocation? -->
<button class="collapsible">How can we modify our xdisk allocation?</button>
<div class="content">
  <p>
      To modify your allocation's time limit or storage quota, your PI can either do so through <a href="https://portal.hpc.arizona.edu/portal/">the Web Portal</a> under the Storage tab, or via <a href="../../../storage_and_transfers/storage/hpc_storage/#cli-commands">the command line</a>. If your PI would like to delegate management rights to a group member, they may follow the instructions under <a href="../../../registration_and_access/group_management/
#delegating-group-management-rights">Delegating Group Management Rights</a>. Once a group member has received management rights, they may manage the allocation through our web portal.
  </p>
</div>

<!-- Why am I getting "xdisk: command not found"? -->
<button class="collapsible">Why am I getting "xdisk: command not found"?</button>
<div class="content">
  <p>
      If you're getting errors using <code>xdisk</code> commands in a terminal session, check that you are on a login node. If you are on the bastion host (hostname: <code>gatekeeper</code>), are in an interactive session, or are on the filexfer node, you won't be able to check or modify your xdisk. When you are on a login node, your terminal prompt should show the hostname junonia or wentletrap. You can also check your hostname using the command <code>hostname</code>
  </p>
</div>

<!-- Why am I getting errors when trying to extend my allocation? -->
<button class="collapsible">Why am I getting errors when trying to extend my allocation?</button>
<div class="content">
  <p>
      If you're trying to extend your group's allocation but are seeing something like:
      <pre><code>
(puma) [netid@junonia ~]$ xdisk -c expire -d 1
invalid request_days: 1
      </code></pre>
      for every value you enter, your xdisk has likely reached its maximum time limit. To check, have a delegate or PI go to <a href="https://portal.hpc.arizona.edu">portal.hpc.arizona.edu</a>, click <b>Manage XDISK</b>, and look at the box next to Duration. If you see 300, your allocation cannot be extended further.

    If your allocation is at its limit, you will need to back up your data to external storage (e.g., a local machine, lab server, or cloud service). Once your xdisk has been removed (either by expiring or through manual deletion), you can immediately create a new allocation and restore your data. Detailed xdisk information can be found on our <a href="../../../storage_and_transfers/storage/hpc_storage/">HPC High Performance Storage</a> page. You may also want to look at our page on <a href="../../../storage_and_transfers/transfers/overview/">Transferring Data</a>.
  </p>
</div>

<!-- Can we keep our xdisk allocation for more than 300 days?  -->
<button class="collapsible">Can we keep our xdisk allocation for more than 300 days?</button>
<div class="content">
  <p>
      No, once an xdisk has reached its time limit it will expire. It's a good idea to start preparing for this early by making frequent backups and paying attention to xdisk expiration emails. 
  </p>
</div>

<!-- What happens when our xdisk allocation expires?  -->
<button class="collapsible">What happens when our xdisk allocation expires?</button>
<div class="content">
  <p>
      Once an xdisk expires, all the associated data are deleted. Deleted data are non-retrievable since HPC is not backed up. It's advised to keep frequent backups of your data on different platforms, for example a local hard drive or a cloud-based service, or (even better) both! Check our <a href="../../../storage_and_transfers/storage/hpc_storage/">Storage documentation</a> for more information on alternative storage offerings.
  </p>
</div>

<!-- What's the best way to backup/transfer our data before our xdisk expires?  -->
<button class="collapsible">What's the best way to backup/transfer our data before our xdisk expires?</button>
<div class="content">
  <p>
      Before your group's xdisk expires, you'll want to make an external backup of anything you need to keep. External storage options include personal computers, lab servers, external hard drives, or cloud services such as AWS. 

    If you're moving large quantities of data, Globus is a great option. We have instructions in our <a href="../../../storage_and_transfers/transfers/globus/">Globus documentation</a> for setting up and using this software.

    We strongly recommend making archives (.tar, .zip, files etc.) of large directories prior to transferring them off the system. In general, transfer software struggles with moving many small files and performs much more efficiently moving fewer large files. You will get the better transfer speeds (sometimes by orders of magnitude) if you compress your files prior to transferring them. This can be done on our filexfer node which is designed for large file management operations (hostname: <code>filexfer.hpc.arizona.edu</code>). 
  </p>
</div>

<!-- Once our xdisk expires, can we request a new one?  -->
<button class="collapsible">Once our xdisk expires, can we request a new one?</button>
<div class="content">
  <p>
      Yes, a new xdisk may be requested immediately after the old partition expires. Data, however, may not be transferred directly from the old partition to the new one. 
  </p>
</div>

<!-- Can a PI have more than one xdisk active at a time?  -->
<button class="collapsible">Can a PI have more than one xdisk active at a time?</button>
<div class="content">
  <p>
      No, only one xdisk may be active per PI at a given time. 
  </p>
</div>
</html>

## Rental Storage

<html>

<!-- General format for HTML 
<button class="collapsible">Question goes here</button>
<div class="content">
  <p>
      Answer goes here
  </p>
</div>
-->

<!-- How do I request rental storage? -->
<button class="collapsible">How do I request rental storage?</button>
<div class="content">
  <p>
       Rental storage can be requested by PIs through the <a href="https://portal.hpc.arizona.edu/portal/">user portal</a>. A guide with screenshots can found in our <a href="../../../storage_and_transfers/storage/rental_storage/">rental storage documentation</a>. 
  </p>
</div>

<!-- Why can't I see my rental allocation when I log into HPC? --> 
<button class="collapsible">Why can't I see my rental allocation when I log into HPC?</button>
<div class="content">
  <p>
      Rental allocations are not mounted on the login or compute nodes. You can access your allocation by logging in to our data transfer nodes: <code>filexfer.hpc.arizona.edu</code>
  </p>
</div>

<!-- Can I analyze data stored in /rental directly in my jobs? -->
<button class="collapsible">Can I analyze data stored in /rental directly in my jobs?</button>
<div class="content">
  <p>
      No, rental storage is not mounted on the HPC login or compute nodes which means jobs cannot access <code>/rental</code> directly. Data stored in <code>/rental</code> need to be moved to <code>/home</code>, <code>/groups</code>, or <code>/xdisk</code> to be available. 
  </p>
</div>




</html>



## R-DAS Storage

<html>
<!-- General format for HTML 
<button class="collapsible">Question goes here</button>
<div class="content">
  <p>
      Answer goes here
  </p>
</div>
-->

<!-- If my VPN connection is dropped, does my connection still survive? -->
<button class="collapsible">If my VPN connection is dropped, will my connection survive? </button>
<div class="content">
  <p>
      Yes, if you reconnect to the VPN, your connection will still be available. 
  </p>
</div>

<!-- Why am I getting "There was a problem connecting to the server"?-->
<button class="collapsible">Why am I getting "There was a problem connecting to the server"?</button>
<div class="content">
  <p>
    This error is seen if you are not connected to the University VPN.
  </p>
</div>

<!-- Can I access R-DAS for HPC usage? -->
<button class="collapsible">Can I access R-DAS for HPC usage?</button>
<div class="content">
  <p>
      R-DAS is not mounted on the HPC compute nodes or login nodes, and is not meant for running computations. But you can follow the steps <a href="../../../storage_and_transfers/storage/rdas_storage/#__tabbed_3_1">in our R-DAS documentation</a> to share data between your R-DAS allocation and your HPC storage (<code>/home</code>, <code>/groups</code>, <code>/xdisk</code>): 
  </p>
</div>

</html>


## Tier 2 AWS Storage

<html>


<!-- General format for HTML 
<button class="collapsible">Question goes here</button>
<div class="content">
  <p>
      Answer goes here
  </p>
</div>
-->

<!-- Who can submit a Tier 2 storage request? -->
<button class="collapsible">Who can submit a Tier 2 storage request?</button>
<div class="content">
  <p>
    A PI must submit their group's storage request. The exception to this is if a group member has been <a href="../../../registration_and_access/group_management/#delegating-group-management-rights">designated xdisk/storage delegate</a>. Delegates may submit a request on behalf of their PI by switching users in the <a href="https://portal.hpc.arizona.edu/portal/">user portal</a>.
  </p>
</div>

<!-- How long is the turnaround time to between submitting the storage request and obtaining an S3 account? -->
<button class="collapsible">How long is the turnaround time to between submitting the storage request and obtaining an S3 account?</button>
<div class="content">
  <p>
     In most cases it will be in one business day.
  </p>
</div>

<!-- What is the pricing for S3? -->
<button class="collapsible">What is the pricing for S3?</button>
<div class="content">
  <p>
    You should check <a href="https://aws.amazon.com/s3/pricing/?nc=sn&loc=4">the Amazon site</a>. As of March 2022:
    <ul>
        <li>Frequent Access Tier, First 50 TB / Month $0.023 per GB</li>
        <li>Frequent Access Tier, Next 450 TB / Month $0.022 per GB</li>
        <li>Frequent Access Tier, Over 500 TB / Month $0.021 per GB</li>
    </ul>
  </p>
</div>

<!-- Can I move my data directly to Glacier if I know it is archival. That way I can skip the S3 expenses? -->
<button class="collapsible">Can I move my data directly to Glacier if I know it is archival. That way I can skip the S3 expenses?</button>
<div class="content">
  <p>
    Not in the first release, but potentially as a future offering.
  </p>
</div>

<!-- Is the monthly billing based on average usage? -->
<button class="collapsible">Is the monthly billing based on average usage?</button>
<div class="content">
  <p>
     Yes. The capacity used is recorded daily and the billing is a monthly average.
  </p>
</div>

<!-- What is a KFS number? -->
<button class="collapsible">What is a KFS number?</button>
<div class="content">
  <p>
     It is used for accounting purposes and used by your Department's finance specialist. If you are unsure what your KFS number is, contact your department's financial services office.
  </p>
</div>

<!-- Can I view my storage in each of S3, Glacier and Deep Glacier? -->
<button class="collapsible">Can I view my storage in each of S3, Glacier and Deep Glacier?</button>
<div class="content">
  <p>
     Yes, you can use the CLI (command line interface) for information about your usage
  </p>
</div>

<!-- Can I limit the amount of data that goes into S3 so I can control the expense? -->
<button class="collapsible">Can I limit the amount of data that goes into S3 so I can control the expense?</button>
<div class="content">
  <p>
     No, but you can track the usage and remove any data that should not be there.
  </p>
</div>

<!-- What is the difference between Glacier and Deep Glacier? -->
<button class="collapsible">What is the difference between Glacier and Deep Glacier?</button>
<div class="content">
  <p>
     Glacier is effectively large, slow disks and Deep Glacier is tape storage.
  </p>
</div>

<!-- I use workflows to move data using Google Drive, and to share with others. Will AWS support something similar? -->
<button class="collapsible">I use workflows to move data using Google Drive, and to share with others. Will AWS support something similar?</button>
<div class="content">
  <p>
     Amazon S3 will likely support what you do. Perhaps our consultants can help to rework your workflows.
  </p>
</div>

<!-- Are there charges for data movement? -->
<button class="collapsible">Are there charges for data movement?</button>
<div class="content">
  <p>
     You will not be charged for data ingress, egress or other operations.
  </p>
</div>

<!-- Can I have multiple S3 buckets associated with my account? -->
<button class="collapsible">Can I have multiple S3 buckets associated with my account?</button>
<div class="content">
  <p>
    Yes
  </p>
</div>

<!-- Are there any limits on uploads, e.g. may transfer size / day? -->
<button class="collapsible">Are there any limits on uploads, e.g. may transfer size/day?</button>
<div class="content">
  <p>
    The max file size is 5 TB based on <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/qfacts.html">Amazon's official documentation</a>.
  </p>
</div>

<!-- What why am I receiving an email: "ALARM: "ua-rt-t2-netid capacity growth alarm" in US West (Oregon)"?  -->
<button class="collapsible">What why am I receiving an email: "ALARM: "ua-rt-t2-netid capacity growth alarm" in US West (Oregon)"?</button>
<div class="content">
  <p>
    This alert is sent to notify you whenever your storage usage grows by 10% relative to the previous week. This ensures that you're aware of any unintended spikes and the potential resulting costs. 
  </p>
</div>

<!-- "The operation is not valid for the object's access tier"? -->
<button class="collapsible">What does this file transfer error mean: "The operation is not valid for the object's access tier"?</button>
<div class="content">
  <p>
    This error indicates your data have migrated to an archival storage tier (Glacier or Deep Glacier). They will first need to be <a href="../../../storage_and_transfers/storage/tier2_storage/#restoring-archived-data">restored</a> to the Standard access tier to make them downloadable.
  </p>
</div>




<div class="vertical-space"></div>
<script src="../../../assets/javascripts/animated_dropdown.js"></script>
</html>