<link rel="stylesheet" href="../../../assets/stylesheets/animated_dropdown.css">
<link rel="stylesheet" href="../../../assets/stylesheets/spacing.css">


# FAQs

Welcome to our Frequently Asked Questions page. The FAQs are organized by topic for ease of navigation. Use the sidebar on the left to find your topic. If you cannot find an entry related to your question, please [let us know](https://uarizona.service-now.com/sp?id=sc_cat_item&sys_id=8c4aa2761b1df0107947edf1604bcbd0&sysparm_category=84d3d1acdbc8f4109627d90d6896191f) and we will be happy to add it. 


<!-- ----------------------------------------------------------------------------------------------
   _                             _       _                         
  /_\   ___ ___ ___  _   _ _ __ | |_    /_\   ___ ___ ___  ___ ___ 
 //_\\ / __/ __/ _ \| | | | '_ \| __|  //_\\ / __/ __/ _ \/ __/ __|
/  _  \ (_| (_| (_) | |_| | | | | |_  /  _  \ (_| (_|  __/\__ \__ \
\_/ \_/\___\___\___/ \__,_|_| |_|\__| \_/ \_/\___\___\___||___/___/
                                                                   
---------------------------------------------------------------------------------------------- -->

## Account Access

<html>
  
  <button class="collapsible">How do I create an account?</button>
  <div class="content">
    <p>A step by step guide is available in our <a href="../../../registration_and_access/account_creation/">Account Creation</a> page. </p>
  </div>

  <button class="collapsible">Why can't I log in?</button>
  <div class="content">
    <p>There are many reasons you may be having issues logging in. A possible list of reasons may include:
      <ul>
          <li>You haven't <a href="../../../registration_and_access/account_creation/">created an account</a> yet or you have not yet been sponsored.</li>
          <li>You aren't using two-factor authentication (NetID+).</li>
          <li>You need to wait 15 minutes. If you just created your account, it takes time before you can log in.</li>
          <li>You're trying to connect using ssh <code>&#60;netid&#62;@login.hpc.arizona.edu</code>. This will not work. Instead, use: <code>ssh &#60;netid&#62;@hpc.arizona.edu</code>.</li>
          <li>You're using <code>&#60;netid&#62;@hpc.arizona.edu</code> or <code>&#60;netid&#62;@email.arizona.edu</code> as your username in PuTTY. Instead, use only your NetID.</li>
          <li>You've entered your password incorrectly too many times. After multiple failed password entries, the system will place a 60 minute ban on your account for security reasons. Your account will automatically unlock after 60 minutes. Attempting to log in before your account unlocks will reset the timer. </li>
      </ul></p>
  </div>

  <button class="collapsible">Why can't I enter my password in my terminal?</button>
  <div class="content">
    <p>Linux systems do not display character strokes while entering your password which can make it look like the SSH client is frozen. Even though it doesn't appear that anything is happening, the system is still logging your input. To proceed, type your password at the prompt and press enter.</p>
  </div>

  <button class="collapsible">Why am I getting "You do not appear to have registered for an HPC account"?</button>
  <div class="content">
    <p>If you have just registered for an HPC account, you need to wait a little while for the request to propagate through the University systems (this can take up to an hour).  Patience &#128578; </p>
  </div>

  <button class="collapsible">Why am I getting "permission denied" when I try to log in?</button>
  <div class="content">
    <p>You need an HPC account - see our <a href="../../../registration_and_access/account_creation/">Account Creation page</a> for details.  Once you've done that, you'll need to wait a little while to log in. If your PI hasn't already added you to their group, you'll need to wait for that as well.</p>
  </div>

  <button class="collapsible">Why am I unable to log in with the error "Your account is disabled and cannot access this application. Please contact your administrator."?</button>
  <div class="content">
    <p>This error shows up when your NetID has been locked, usually due to multiple failed login attempts when trying to access university services. Contact 24/7 to unlock your account: <a href="https://it.arizona.edu/get-support">https://it.arizona.edu/get-support</a></p>
  </div>

  <button class="collapsible">Why am I getting the message "incorrect password" when I try to log in?</button>
  <div class="content">
    <p>
        <ul>
            <li>Ensure you are using the correct password. Sometimes typing your password into a plain text file and copying/pasting it into the terminal can help.</li>
            <li>You need to wait about 15 minutes after your account is approved for the account to be available</li>
            <li>You must <a href="https://netid-portal.iam.arizona.edu/">enroll in NetID+</a>. Depending on the application you use to log in, you may not get the typical NetID+/Duo menu of options, or an error message indicating this is your problem</li>
        </ul>
    </p>
  </div>

  <button class="collapsible">I've forgotten my password, how can I reset it?</button>
  <div class="content">
    <p>HPC uses the same NetID login credentials as all UArizona services. If you need to reset your NetID password you can do so using <a href="https://netid-portal.iam.arizona.edu/">the NetID portal</a>.</p>
  </div>

  <button class="collapsible">How do I add members to my HPC research group?</button>
  <div class="content">
    <p>Faculty members who manage their own HPC groups can follow the instructions in our <a href="../../../registration_and_access/group_management/">Research and Class Groups</a> page.</p>
  </div>

  <button class="collapsible">I'm leaving the university/retiring/not affiliated with the university, can I maintain/receive access to HPC?</button>
  <div class="content">
    <p>Yes, if you are a former university affiliate or campus collaborator participating in research, you may register as a <a href="https://it.arizona.edu/service/designated-campus-colleague-accounts">Designated Campus Colleague (DCC)</a>. Once your DCC status has been approved, you will receive a NetID+ which you may use to <a href="../../../registration_and_access/account_creation/">create an HPC Account</a>. If you already have an HPC Account, no further action is required.</p>
  </div>

</html>

<hr>


<!-- ----------------------------------------------------------------------------------------------
   __        _                           _   __      _              _       _ _             
   \ \  ___ | |__  ___    __ _ _ __   __| | / _\ ___| |__   ___  __| |_   _| (_)_ __   __ _ 
    \ \/ _ \| '_ \/ __|  / _` | '_ \ / _` | \ \ / __| '_ \ / _ \/ _` | | | | | | '_ \ / _` |
 /\_/ / (_) | |_) \__ \ | (_| | | | | (_| | _\ \ (__| | | |  __/ (_| | |_| | | | | | | (_| |
 \___/ \___/|_.__/|___/  \__,_|_| |_|\__,_| \__/\___|_| |_|\___|\__,_|\__,_|_|_|_| |_|\__, |
                                                                                      |___/ 
---------------------------------------------------------------------------------------------- -->



## Jobs and Scheduling


<html>
    
  <button class="collapsible">Why isn't my job running?</button>
  <div class="content">
    <p>
        <ul>
        <li>There are a few reasons your job may not be running, check below for some ideas on diagnosing the issue:
        Run <code>squeue --job <jobid></code> and see if there is anything listed under <code>(REASON)</code>. This may give an idea why your job is stuck in queue. We have a <a href="../../../running_jobs/monitoring_jobs_and_resources/#slurm-reason-codes">table in our Slurm documentation</a> that describes what each Reason code means. </li>
        <li>Due to the number of HPC users, it may not always be possible to run a submitted job immediately. If there are insufficient resources available, your job will be queued and it may take up to a few hours for it to begin executing.</li>
        <li>Your group may have run out of standard hours. You can check your allocation using the command <code>va</code>.</li>
        <li>Your group/job has reached a resource usage limit (e.g., number of GPUs that may be used concurrently by a group, or a job has requested more than the 10 day max walltime). Try running <code>job-limits &#60;group_name&#62;</code> to see what limits you're subject to and if there are any problem jobs listed.</li>
        <li>You may be requesting a rare resource (e.g., 4 GPUs on a single node on Puma or a high memory node).
        <ul>
            <li>If you are requesting a single GPU on Puma and are frustrated with the wait times, you might consider checking if Ocelote will work for your analyses. There are more GPU nodes available on that cluster, typically with shorter wait times.</li>
            <li>If you are trying to run a job on a standard node and have been waiting for a very long time, try checking its status using <code>job-history &#60;jobid&#62;</code>. If you see <code>Allocated RAM/CPU</code> above 5 GB on Puma or above 6 GB on Ocelote, then you are queued for the high memory node which can have very long wait times. To queue for a standard node, cancel your job and check that your script has <a href="../../../running_jobs/cpus_and_memory/">the correct ratios</a>.</li>
        </ul></li>
        </ul>
    </p>
  </div>

  <button class="collapsible">My job has a Reason code when I check it with <code>squeue</code>. What does this mean?</button>
  <div class="content">
    <p>If your job is in queue, sometimes Slurm will give you information on why it's not running. This may be for a number of reasons, for example there may be an upcoming maintenance cycle, your group's allocation may be exhausted, you may have requested resources that surpass system limits, or the node type you've requested may be very busy running jobs. We have a list of reason codes in our <a href="../../../running_jobs/monitoring_jobs_and_resources/#slurm-reason-codes">Monitoring Jobs and Resources</a> page that will give more comprehensive information on what these messages mean. If you don't see the reason code listed, <a href="../../../support_and_training/consulting_services/">contact our consultants</a>.
    </p>
  </div>
      
  <button class="collapsible">Why do my jobs keep getting interrupted?</button>
  <div class="content">
    <p>If your jobs keep stopping and restarting, it's likely because you are using Windfall. Windfall is considered lower priority and is subject to preemption by higher priority jobs. Before submitting a job to Windfall, consider using your group's allotted monthly hours first. Jobs using Standard hours will queue for a shorter period of time and will not be interrupted. You can check your group's remaining hours using the command <code>va</code>. To see more information on your allotted hours and the different job queues, see <a href="../../../resources/allocations/">our page on compute allocations</a>.<br><br>If your job is not using the Windfall partition and is being interrupted, <a href="../../consulting_services/">contact our consultants</a>. 
    </p>
  </div>
      
  <button class="collapsible">Can I run programs on the login nodes?</button>
  <div class="content">
    <p>No, software to run applications is not available on the login nodes. To run/test your code interactively, start an <a href="../../../running_jobs/interactive_jobs/">interactive session</a> on one of the system's compute nodes. Processes running on the login nodes are subject to termination if we think they are affecting other users. Think of these as 'submit' nodes where you prepare and submit job scripts. 
    </p>
  </div>

  <button class="collapsible">Can I get root access to my compute nodes?</button>
  <div class="content">
    <p> Unfortunately, that is not possible. The compute nodes get their image from the head node and have to remain the same. If you need to install software, for example, you can install the software locally in your account. <a href="../../../software/user_installations/">See this example</a>. Another option is to <a href="../../../software/containers/what_are_containers/">use containers</a> as part of your workflow.
    </p>
  </div>

  <button class="collapsible">Can I ssh to compute nodes?</button>
  <div class="content">
    <p>Slurm will let you <code>ssh</code> to nodes that are assigned to your job, but not to others. 
    </p>
  </div>

  <button class="collapsible">Why am I getting out of memory errors?</button>
  <div class="content">
    <p>
        There are a few reasons you might get out of memory errors:
        <ul>
            <li>You're using <code>-c &#60;N&#62;</code> to request CPUs. Based on the way our scheduler is set up, this will reduce the memory allocation for your job to 4 MB. To solve this, change your CPU request by either setting <code>--ntasks=&#60;N&#62;</code> or <code>--ntasks=1 --cpus-per-task=&#60;N&#62;</code>.</li>
            <li>You may not have specified the number of nodes required for your job. For non-MPI workflows, if Slurm scatters your CPUs across multiple nodes, you will only have access to the resources on the executing node. Explicitly setting <code>--nodes</code> in your script should help, e.g.: 
            <pre><code class="language-bash">#SBATCH --nodes=1</code></pre>
            </li>
            <li>You may not have allocated enough memory to your job. Try running <code>seff &#60;jobid&#62;</code> to see your memory usage. You may consider using memory profiling techniques, allocating more CPUs, or using a high memory node.</li>
        </ul>
    </p>
  </div>

  <button class="collapsible">Why shouldn't I use Windfall with OnDemand?</button>
  <div class="content">
    <p>
        Windfall jobs can be preempted by a higher priority queue. Each session creates an interactive job on a node and it is unsatisfactory to be dumped in the middle of that session. A desktop session would have the same unpleasant result.  Windfall can be used if you do not have enough standard time left. Consider though that a one hour session using one compute core only takes up 1 CPU hour. 
    </p>
  </div>

  <button class="collapsible">My interactive terminal session has been disconnected, can I return to it?</button>
  <div class="content">
    <p>
        No, unfortunately when an interactive job ends it is no longer accessible. This applies to both OnDemand sessions and those accessed via the command line. We recommend using the standard partition rather than windfall when running interactive jobs to prevent preemption. 
    </p>
  </div>

  <button class="collapsible">How can I disable core dumps?</button>
  <div class="content">
    <p>
        To prevent core dump files from being generated in jobs (which can be quite large and may fill up your working directory), add the following to your batch script:
        <pre><code class="language-bash">ulimit -c 0</code></pre>
    </p>
  </div>

  <button class="collapsible">Is there a way to automatically cancel jobs if they encounter errors during execution?</button>
  <div class="content">
    <p>
        Yes, you can use a pipefail. This is a way to automatically kill a job after an error without moving on to any subsequent steps. To use this, add the following to the beginning of your batch script:
        <pre><code class="language-bash">set -oe pipefail</code></pre>
    </p>
  </div>

  <button class="collapsible">Why am I getting the error <code>QOSGrpSubmitJobsLimit</code> when I try submitting my job?</button>
  <div class="content">
    <p>
    If you're trying to submit a job and get:
    <pre><code>sbatch: error: QOSGrpSubmitJobsLimit
sbatch: error: Batch job submission failed: Job violates accounting/QOS policy (job submit limit, user's size and/or time limits)</code></pre>
    check that you're including a <code>--qos</code> directive in your job request. This is necessary to use high priority and qualified hours. Check our <a href="../../running_jobs/batch_jobs/batch_directives/#allocations-and-partitions">Slurm Batch Directives</a> page for specifics on how to do this.
    </p>
  </div>
</html>

<hr> 

<!-- ----------------------------------------------------------------------------------------------
   ___                          _     ___                            _   _             
  / _ \___ _ __   ___ _ __ __ _| |   / __\___  _ __ ___  _ __  _   _| |_(_)_ __   __ _ 
 / /_\/ _ \ '_ \ / _ \ '__/ _` | |  / /  / _ \| '_ ` _ \| '_ \| | | | __| | '_ \ / _` |
/ /_\\  __/ | | |  __/ | | (_| | | / /__| (_) | | | | | | |_) | |_| | |_| | | | | (_| |
\____/\___|_| |_|\___|_|  \__,_|_| \____/\___/|_| |_| |_| .__/ \__,_|\__|_|_| |_|\__, |
                                                        |_|                      |___/ 
---------------------------------------------------------------------------------------------- -->


## General Computing

<html>
  <button class="collapsible">Why aren't common commands working?</button>
  <div class="content">
    <p>There may be a few reasons for this. First, make sure your shell is set to Bash. If your shell is not set to Bash, contact our consultants so that they can reset it for you.
    <br>
    If your shell is set to Bash, double-check that you haven't changed, overwritten, or aliased anything important either your <code>~/.bashrc</code> or <code>~/.bash_profile</code>. E.g., unsetting your <code>PATH</code>, aliasing <code>.</code>, and so on will corrupt your environment and prevent you from interacting with HPC normally. 
    </p>
  </div>

  <button class="collapsible">Why is my terminal glitching (e.g. <kbd>Ctrl</kbd>+<kbd>a</kbd> puts me in the middle of my command prompt)?</button>
  <div class="content">
    <p>When you log into HPC, the variable <code>$COMMAND_PROMPT</code> is set to display your current cluster (e.g. <code>(puma)</code>). Sometimes this can cause formatting problems. If you'd prefer to modify your <code>$PS1</code> (command prompt variable) instead, you can add the following to your <code>~/.bashrc</code>:
    <br>
    <pre><code>if [ -n "${PROMPT_COMMAND}" -a -r /usr/local/bin/slurm-selector.sh ]; then
    SavePS1=${PS1}
    Cur_Cluster=$(eval ${PROMPT_COMMAND} 2>/dev/null)
    PS1="${Cur_Cluster}${SavePS1}"
    unset PROMPT_COMMAND
    for c in puma ocelote elgato; do
      alias ${c}="PS1=\"(${c}) ${SavePS1}\"; . /usr/local/bin/slurm-selector.sh ${c}; unset PROMPT_COMMAND"
    done
    unset Cur_Cluster SavePS1
  fi
    </code></pre>
    </p>
  </div>

  <button class="collapsible">What are dot files and what is a <code>~/.bashrc</code>?</button>
  <div class="content">
    <p>Files that start with a dot, i.e. a <code>.</code>, are hidden when executing <code>ls</code> without additional options. If you use <code>ls -la</code>, that will show you all the files that exist, both standard and hidden. Dot files are generally important configuration files so it's important to be careful with their contents and deleting them. 
    <br>
    Your bashrc is a specific dot file that lives in your home directory (<code>~</code> is just shorthand for your home) and defines your environment every time you log in. Any commands you add to that file will be run whenever you access the system. This means, if you have common aliases you like to use, paths you like exported in your environment, etc., these can be added to your bashrc to avoid the headache of having to define them in every session.
    <br>
    For more information on working with hidden files, see our <a href="../../cheat_sheet/#hidden-files-and-directories">Linux cheat sheet page</a>. 
  </div>
</html>

<hr>
## Maintenance
<html>
<!-- ----------------------------------------------------------------------------------------------
                  _       _                                  
                 (_)     | |                                 
  _ __ ___   __ _ _ _ __ | |_ ___ _ __   __ _ _ __   ___ ___ 
 | '_ ` _ \ / _` | | '_ \| __/ _ \ '_ \ / _` | '_ \ / __/ _ \
 | | | | | | (_| | | | | | ||  __/ | | | (_| | | | | (_|  __/
 |_| |_| |_|\__,_|_|_| |_|\__\___|_| |_|\__,_|_| |_|\___\___|

---------------------------------------------------------------------------------------------- -->


  <button class="collapsible">Why are my jobs sitting in queue for so long after maintenance?</button>
  <div class="content">
  <p>
  If your jobs are sitting in queue for a long time after a system maintenance period, it's likely because it was a rolling maintenance cycle. During rolling maintenance, all nodes are put into a "drain" state. This means they stop accepting any new jobs until all the jobs running on them complete. Once they are empty, they are taken offline, updated, rebooted, and then put back online to accept new jobs. Because job runtimes can be up to 10 days, it may take up to 10 days for job queues to return to normal.

  For more information on maintenance, see <a href="../../policies/maintenance/">our maintenance documentation</a>. 
  </p>
  </div>
</html>

<hr>

<!-- ----------------------------------------------------------------------------------------------
   ___                      ___          ___                               _ 
  /___\_ __   ___ _ __     /___\_ __    /   \___ _ __ ___   __ _ _ __   __| |
 //  // '_ \ / _ \ '_ \   //  // '_ \  / /\ / _ \ '_ ` _ \ / _` | '_ \ / _` |
/ \_//| |_) |  __/ | | | / \_//| | | |/ /_//  __/ | | | | | (_| | | | | (_| |
\___/ | .__/ \___|_| |_| \___/ |_| |_/___,' \___|_| |_| |_|\__,_|_| |_|\__,_|
      |_|                                                                    
---------------------------------------------------------------------------------------------- -->



## Open OnDemand Issues

<html>
    
  <button class="collapsible">Why am I getting a message saying I'm not sponsored when trying to log in?</button>
  <div class="content">
    <p>
        If you are trying to log in to Open Ondemand and are seeing the following:
        <img src="images/not_yet_approved.png" title="You have not registered error" style="width:650px;">
        <ul>
            <li>You have not yet been sponsored by a faculty member. See our <a href="../../../registration_and_access/account_creation/">Account Creation</a> page for instructions on getting registered for HPC.</li>
            <li>If you are already registered for HPC, this may be a browser issue. Try logging in again in an incognito session or different browser to test. If this succeeds, clearing your browser's cookies should help.</li>
        </ul>
    </p>
  </div>

  <button class="collapsible">Why am I getting a "Bad Request" message when trying to connect?</button>
  <div class="content">
    <p>
        If you are trying to log in to Open Ondemand and are seeing the following:
        <br>
        <img src="images/bad_request.png" title="Bad Request error" style="width:500px;">
        <br>
        this may be a browser issue. Try logging in again in an incognito session or different browser to test. If this succeeds, clearing your browser's cache should help.
    </p>
  </div>

  <button class="collapsible">Why am I getting an error saying "We're sorry, but something went wrong" when trying to log in?</button>
  <div class="content">
    <p>
        If you are trying to log in to Open OnDemand and are seeing the following:
        <br>
        <img src="images/somethingwentwrong.png" title="Something Went Wrong error" style="width:500px;">
        <br>
        check your storage usage in your home directory. You can do this by logging into HPC in a terminal session and using the command <code>uquota</code>. If your storage usage is >50 GB, OnDemand cannot create the temporary files necessary to give access to the website. Try clearing out some space in your home and then logging back into OnDemand.
    </p>
  </div>

  <button class="collapsible">Why are my Desktop sessions failing with 'Could not connect to session bus: failed to connect to socket /tmp/dbus-'?</button>
  <div class="content">
    <p>
        If you're seeing:
        <br>
        <img src="images/dbus_error.png" title="Desktop bus error" style="width:500px;">
        <br>
        when trying to connect to an interactive desktop session, the likely culprit is Anaconda. For a permanent solution, you can run the following command from an interactive terminal session:
        <pre><code>
  conda config --set auto_activate_base false
        </code></pre>
        This will prevent conda from auto-activating when you first log in and allow you to have more control over your environment. When you'd like to activate Anaconda, run <code>conda activate</code>. 
    </p>
  </div>

  <button class="collapsible">Why are my Desktop sessions freezing with: 'noVNC encountered an error: Incomplete zlib block'?</button>
  <div class="content">
    <p> 
      If you're seeing the following error pop up when using an OnDemand Desktop session:
      <br>
      <img src="images/desktop_zlib_error.png" title="Desktop zlib error" style="width:500px;">
      <br>
      Check the compression value set for your job. If it has been set to zero, increase the value to something nonzero and retry your session. 
      <br>
      To check and modify your compression, go to your job tile in <a href="https://ood.hpc.arizona.edu/">ood.hpc.arizona.edu</a> under My Interactive Sessions and check the lower left-hand section.
      <br>
      <img src="images/desktop_compression.png" title="Desktop compression" style="width:500px;">

    </p>
  </div>
      
</html>

<hr>

<!-- ----------------------------------------------------------------------------------------------
 __        __ _                                            _                    _       _           
/ _\ ___  / _| |___      ____ _ _ __ ___    __ _ _ __   __| |   /\/\   ___   __| |_   _| | ___  ___ 
\ \ / _ \| |_| __\ \ /\ / / _` | '__/ _ \  / _` | '_ \ / _` |  /    \ / _ \ / _` | | | | |/ _ \/ __|
_\ \ (_) |  _| |_ \ V  V / (_| | | |  __/ | (_| | | | | (_| | / /\/\ \ (_) | (_| | |_| | |  __/\__ \
\__/\___/|_|  \__| \_/\_/ \__,_|_|  \___|  \__,_|_| |_|\__,_| \/    \/\___/ \__,_|\__,_|_|\___||___/
                                                                                                    
---------------------------------------------------------------------------------------------- -->



## Software and Modules

<html>
  <!-- Are any software modules loaded by default? -->   
  <button class="collapsible">Are any software modules loaded by default?</button>
  <div class="content">
    <p>
        Yes, when you start an interactive terminal session or submit a batch script, the modules ohpc, gnu8, openmpi3, and cmake are automatically loaded. If your code uses Intel compilers, you will want to manually unload gnu8 and openmpi3 to prevent conflicts.
        <br>
        The exception: If you are working in a terminal in an Open OnDemand interactive desktop session, nothing is loaded by default and you will need to manually load any necessary modules. To start, always use <code>module load ohpc</code>
    </p>
  </div>

  <!-- What executables are available when I load a module? -->   
  <button class="collapsible">What executables are available when I load a module?</button>
  <div class="content">
    <p>
        Load the module, find the path to the executable by checking the <code>$PATH</code> variable, then list the contents.  For example:
        <pre><code>
  module load lammps
  echo $PATH
  ls /opt/ohpc/pub/apps/lammps/3Mar20/bin
  lmp_mpi
        </code></pre>
        Alternatively, use the command <code>module show &#60;software&#62;</code> to see all the environment variables that are set at load time. 
    </p>
  </div>

  <!-- Why am I getting "command: module not found"? -->   
  <button class="collapsible">Why am I getting "command: module not found"? </button>
  <div class="content">
    <p>
        There are a few different possibilities:
        <ul>
            <li>You are not in an interactive session. Modules are not available on the login nodes. You may request an interactive session by using the command <code>interactive</code>. </li>
            <li>Your shell is not set to bash. If this is the case, contact our consultants so that they can reset it for you.</li>
            <li>You have modified or deleted your <code>~/.bashrc</code>. If this is the case, open (if the file exists) or create and open (if the file is missing) the file .bashrc in your home directory and add the lines:</li>
            <pre><code>
  if [ -f /etc/bashrc ]; then
          . /etc/bashrc
  fi
            </code></pre>
        </ul>
    </p>
  </div>

  <!--How do I access Gaussian or Gaussview? -->   
  <button class="collapsible">How do I access the module for Gaussian or Gaussview?</button>
  <div class="content">
    <p>
      You need to belong to a special group called g03.  You can request to be added by <a href="../../consulting_services/">submitting a help ticket</a>. This is a constraint in Gaussian that other modules do not have.
    </p>
  </div>

  <!-- How can I maximize my software performance on Puma? -->   
  <button class="collapsible">How can I maximize my software performance on Puma?</button>
  <div class="content">
    <p>
        If you are able to compile your software you can take advantage of most of the AMD Zen architecture.
    </p>
    <table>
        <tr>
            <th>Compiler</th>
            <th>Arch-Specific</th>
            <th>Arch-Favorable</th>
        </tr>
        <tr>
            <td>GCC 9</td>
            <td><code>-march=znver2</code></td>
            <td><code>-mtune=znver2</code></td>
        </tr>
        <tr>
            <td>LLVM 9</td>
            <td><code>-march=znver2</code></td>
            <td><code>-mtune=znver2</code></td>
        </tr>
    </table>
  </div>

  <!-- Is the Intel compiler faster than GCC on Puma? -->   
  <button class="collapsible">Is the Intel compiler faster than GCC on Puma?</button>
  <div class="content">
    <p>
      Intel compilers are optimized for Intel processors. There is some debate around the concept of unfair CPU dispatching in Intel compilers. By default, software on the HPC clusters is built with GCC (on Puma it is GCC 8.3).  This is in keeping with our preference for community software.
    </p>
  </div>

  <!-- I've been using an older version of Singularity, why isn't available anymore? -->   
  <button class="collapsible">I've been using an older version of Apptainer (formerly Singularity), why isn't available anymore?</button>
  <div class="content">
    <p>
      Prior versions of Apptainer are routinely removed since only the latest one is considered secure. Notify the consultants if you need help with transition to the current version. Apptainer is installed on the operating systems of all compute nodes so does not need to be loaded with a module. 
    </p>
  </div>

  <!-- Can I use Windows applications on HPC? -->   
  <button class="collapsible">Can I use Windows applications on HPC?</button>
  <div class="content">
    <p>
      Unfortunately, Windows applications can't be run on HPC. However, AWS has been used successfully for Windows software with GPU needs. It’s easy to set up, cost effective, and very scalable. Amazon also has a <a href="https://aws.amazon.com/government-education/research-and-technical-computing/cloud-credit-for-research/">cloud credit for research program available</a>.
      <br>
      You may also consider trying Jetstream2, a national resource where you can create and use Windows virtual machines. More information can be found here: <a href="https://jetstream-cloud.org/">https://jetstream-cloud.org/</a>
    </p>
  </div>


  <!-- How do I install this R package/Why can't I install this R package? -->   
  <button class="collapsible">How do I install this R package/Why can't I install this R package?</button>
  <div class="content">
    <p>
        R installations can sometimes be frustrating. We have instructions for how to set up a usable R environment, how to diagnose and troubleshoot problems, and steps to help with known troublesome packages documented in in our <a href="../../../software/popular_software/R/">Using and Customizing R Packages</a> section. 
    </p>
  </div>

  <!-- How do I install Python packages? -->   
  <button class="collapsible">How do I install Python packages?</button>
  <div class="content">
    <p>
       You can install python packages locally using either a <a href="../../../software/popular_software/python/#installing-python-packages-using-a-virtual-environment">virtual environment</a> or a <a href="../../../software/popular_software/anaconda/#creating-a-conda-environment">local conda environment</a>. 
    </p>
  </div>


  <!-- How do I access custom Python packages from an OOD Jupyter session? -->   
  <button class="collapsible">How do I access custom Python packages from an OOD Jupyter session?</button>
  <div class="content">
    <p>
    You can install packages and make them available by first creating a virtual environment or conda environment, then setting up a custom Jupyter kernel. See instructions in our <a href="../../../software/popular_software/python/">Python</a> or <a href="../../../software/popular_software/anaconda/">Anaconda</a> documentation for details. 
    </p>
  </div>



  <!-- How do I take advantage of the Distributed capability of Ansys? -->   
  <button class="collapsible">How do I take advantage of the Distributed capability of Ansys?</button>
  <div class="content">
    <p>
      Ansys has the Distributed capability built in to increase performance. Ansys uses the Intel compiler and so uses Intel MPI.  By default, we load OpenMPI, so you will need to do this: 
      <pre><code>
  module unload gnu8 openmpi3
  module load intel
  module load ansys
      </code></pre>
    </p>
  </div>

</html>

<hr>

<!-- ----------------------------------------------------------------------------------------------
 __ _                             
/ _\ |_ ___  _ __ __ _  __ _  ___ 
\ \| __/ _ \| '__/ _` |/ _` |/ _ \
_\ \ || (_) | | | (_| | (_| |  __/
\__/\__\___/|_|  \__,_|\__, |\___|
                       |___/      
 ---------------------------------------------------------------------------------------------- -->


## Storage

### General

<html>

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

</html>



<!-- -----------------------------------------------
         _ _     _    
__  ____| (_)___| | __
\ \/ / _` | / __| |/ /
 >  < (_| | \__ \   < 
/_/\_\__,_|_|___/_|\_\
                      
----------------------------------------------- -->


### xdisk
<html>
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



<!-- -----------------------------------------------
   __            _        _ 
  /__\ ___ _ __ | |_ __ _| |
 / \/// _ \ '_ \| __/ _` | |
/ _  \  __/ | | | || (_| | |
\/ \_/\___|_| |_|\__\__,_|_|
                            
----------------------------------------------- -->


### Rental

<html>
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


<!-- -----------------------------------------------
   __         ___  _    __    
  /__\       /   \/_\  / _\   
 / \//_____ / /\ //_\\ \ \    
/ _  \_____/ /_//  _  \_\ \   
\/ \_/    /___,'\_/ \_/\__/   
                              
----------------------------------------------- -->


### R-DAS

<html>
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


<!-- -----------------------------------------------
 _____ _             ____      _  __    __  __    
/__   (_) ___ _ __  |___ \    /_\/ / /\ \ \/ _\   
  / /\/ |/ _ \ '__|   __) |  //_\\ \/  \/ /\ \    
 / /  | |  __/ |     / __/  /  _  \  /\  / _\ \   
 \/   |_|\___|_|    |_____| \_/ \_/\/  \/  \__/   
                                                  
----------------------------------------------- -->


### Tier 2 AWS

<html>
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





  <!-- Can I have multiple S3 buckets associated with my account? -->
  <button class="collapsible">Can I have multiple S3 buckets associated with my account?</button>
  <div class="content">
    <p>
      Yes
    </p>
  </div>



  <!-- What why am I receiving an email: "ALARM: "ua-rt-t2-netid capacity growth alarm" in US West (Oregon)"?  -->
  <button class="collapsible">What why am I receiving an email: "ALARM: "ua-rt-t2-netid capacity growth alarm" in US West (Oregon)"?</button>
  <div class="content">
    <p>
      This alert is sent to notify you whenever your storage usage grows by 10% relative to the previous week. This ensures that you're aware of any unintended spikes and the potential resulting costs. 
    </p>
  </div>




</html>

<!-- ----------------------------------------------------------------------------------------------
  _______                   __              
 |__   __|                 / _|             
    | |_ __ __ _ _ __  ___| |_ ___ _ __ ___ 
    | | '__/ _` | '_ \/ __|  _/ _ \ '__/ __|
    | | | | (_| | | | \__ \ ||  __/ |  \__ \
    |_|_|  \__,_|_| |_|___/_| \___|_|  |___/


---------------------------------------------------------------------------------------------- -->

<hr>

## Transfers

### HPC

<html>
  <!-- Received message too long -->
  <button class="collapsible">Why am I getting the error <code>Received message too long</code> when I try to use scp/sftp?</button>
  <div class="content">
    <p>
        Check your <code>~/.bashrc</code> or <code>~/.bash_profile</code> to see if they are printing any output to the terminal. Transfer software like SCP or SFTP require a "silent" terminal to work successfully. If you find any <code>echo</code> or <code>printf</code> statements, comment them out and retry your transfer. 
    </p>
  </div>
</html>

### Tier 2 AWS

<html>
  <!-- "The operation is not valid for the object's access tier"? -->
  <button class="collapsible">What does this file transfer error mean: "The operation is not valid for the object's access tier"?</button>
  <div class="content">
    <p>
      This error indicates your data have migrated to an archival storage tier (Glacier or Deep Glacier). They will first need to be <a href="../../../storage_and_transfers/storage/tier2_storage/#restoring-archived-data">restored</a> to the Standard access tier to make them downloadable.
    </p>
  </div>

    <!-- Are there any limits on uploads, e.g. may transfer size / day? -->
  <button class="collapsible">Are there any limits on uploads, e.g. may transfer size/day?</button>
  <div class="content">
    <p>
      The max file size is 5 TB based on <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/qfacts.html">Amazon's official documentation</a>.
    </p>
  </div>

  <!-- Are there charges for data movement? -->
  <button class="collapsible">Are there charges for data movement?</button>
  <div class="content">
    <p>
       You will not be charged for data ingress, egress or other operations.
    </p>
  </div>

</html>

<hr>


<!-- ----------------------------------------------------------------------------------------------
 __                            __                 _               
/ _\ ___  ___ _   _ _ __ ___  / _\ ___ _ ____   _(_) ___ ___  ___ 
\ \ / _ \/ __| | | | '__/ _ \ \ \ / _ \ '__\ \ / / |/ __/ _ \/ __|
_\ \  __/ (__| |_| | | |  __/ _\ \  __/ |   \ V /| | (_|  __/\__ \
\__/\___|\___|\__,_|_|  \___| \__/\___|_|    \_/ |_|\___\___||___/
                                                                  
---------------------------------------------------------------------------------------------- -->



## Secure Services

<html>
    
  <button class="collapsible">How do I get access to Soteria?</button>
  <div class="content">
    <p>
      You will first need to request access. Follow the instructions in our <a href="../../../resources/secure_hpc/">Secure HPC page</a> to see all the steps that are required.
    </p>
  </div>

  <button class="collapsible">Why am I getting "Operation timed out" when I try to ssh to Soteria?</button>
  <div class="content">
    <p>
      It's possible you're not <a href="../../../resources/secure_hpc/#prerequisites-and-registration">connected to the VPN</a>. You will need to be connected to access any Soteria resources.
    </p>
  </div>

  <button class="collapsible">How do I transfer my data to Soteria?</button>
  <div class="content">
    <p>
      The easiest way to transfer your data to Soteria is using Globus. We have a high assurance endpoint set up accessible under the endpoint <b>UA HPC HIPAA Filesystems</b>.
    </p>
  </div>

  <button class="collapsible">Does my personal computer's Globus endpoint need to be set to high assurance?</button>
  <div class="content">
    <p>
    It depends.

    You do not need your personal computer's Globus endpoint set to high assurance for the purposes of transferring data to Soteria using our UArizona HPC HIPAA Filesystems endpoint. HIPAA requires data transfer auditing. We log transfers on our DTN that use the HIPAA endpoint, regardless of the client's managed status.
    <br><br>
    If you are working with another institution/endpoint that only allows connections from high assurance endpoints, then you must enable High Assurance during your Globus Personal Connect configuration process. This requires that you are added to our Globus subscription which can be done by <a href="https://uarizona.service-now.com/sp?id=sc_cat_item&sys_id=2983102adbd23c109627d90d689619c6&sysparm_category=84d3d1acdbc8f4109627d90d6896191f">opening a support ticket</a> to request help from our consultants. Your endpoint must be set to public to allow us to add you. Once you have been added, you may set your endpoint to private.

    </p>
  </div>

  <div class="vertical-space"></div>
  <script src="../../../assets/javascripts/animated_dropdown.js"></script>
</html>

