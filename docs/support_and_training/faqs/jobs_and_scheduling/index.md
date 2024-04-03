# Jobs and Scheduling

<link rel="stylesheet" href="../../../assets/stylesheets/animated_dropdown.css">
<link rel="stylesheet" href="../../../assets/stylesheets/spacing.css">

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

<button class="collapsible">My job has a Reason code when I check it with squeue. What does this mean?</button>
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

<button class="collapsible">Are any modules loaded by default?</button>
<div class="content">
  <p>
      Yes, when you start an interactive session via the terminal or submit a batch job, the modules gnu8, openmpi3, and cmake are loaded by default. If you need to use intel, you'll want to unload openmpi3 and gnu8 first.
      However, if you start a terminal in an interactive desktop session through Open OnDemand, no modules are loaded by default in this environment. To start, at the minimum you'll want to run the command:
      <pre><code class="language-bash">module load ohpc</code></pre>
  </p>
</div>
    
    
<div class="vertical-space"></div>
<script src="../../../assets/javascripts/animated_dropdown.js"></script>
</html>