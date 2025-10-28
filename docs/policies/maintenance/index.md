<link rel="stylesheet" href="../../assets/stylesheets/animated_dropdown.css">
<link rel="stylesheet" href="../../assets/stylesheets/spacing.css">

# Maintenance

## Planned Maintenance
Most maintenance is performed during regular hours with no interruption to service.  System wide maintenance is usually planned ahead of time and is scheduled for Wednesdays from 8:00 AM to 5:00 PM with at least 10 days notice.  These will be planned to occur four times per year.

Maintenance windows represent periods when UITS may choose to drain the queues of running jobs and suspend access to the cluster operation for HPC maintenance purposes.

The notification will describe the nature and extent (partial or full) of the interruptions of HPC services. 

### System-wide Maintenance

!!! abstract "Impacts to job queues"
    During system-wide maintenance cycles, {==jobs queues are impacted **before and during** maintenance==}. Jobs submitted whose runtimes would overlap with maintenance are held until maintenance is concluded.

Some maintenance cycles require the entire system to be taken offline. In preparation, batch queues will be modified prior to scheduled downtimes to hold jobs which request more wallclock time than remains before the shutdown. Held jobs will be released to run once maintenance concludes.

### Rolling maintenance

!!! abstract "Impacts to job queues"
    During rolling maintenance cycles, {==job queues are impacted **during and after** maintenance==}. All nodes are drained, meaning they cannot accept new jobs and must allow running jobs to complete before they can be updated, rebooted, and put back online. The system may be slower to accept new jobs for 10 days following these maintenance cycles.

Rolling maintenance cycles are implemented to facilitate updates or maintenance tasks without necessitating a complete system shutdown. Throughout rolling maintenance, nodes will stop accepting new jobs, allowing currently running tasks to finish uninterrupted. As nodes gradually become vacant, they are taken offline, updated, rebooted, and then restored to service. This iterative process ensures minimal disruption to ongoing computational tasks while maintenance is underway. It's important to note that during rolling maintenance cycles, job queues may experience a temporary slowdown as nodes await reboot.

## Emergency Maintenance
Unavoidable (emergency) downtime may occur as a result of any of the above reasons at almost any time. Such events are rare and great effort is made to avoid these situations. However, when emergency maintenance is needed, the UITS unit responsible for the item affected will provide as much notice to users as possible and work to resolve the fault as quickly as possible.

Any emergency outages will be announced via email through the **hpc-announce@list.arizona.edu** mailing list. 

## Maintenance History 

<html>

  <button class="collapsible">October 29, 2025</button>
  <div class="content">
  <p>
  <b>Type</b>: Rolling Maintenance
  <ul>
  <li>Routine software and firmware updates for the compute nodes and storage.</li>
  <li>Login nodes OS update to Rocky Linux 9.</li>
  <li>Minor Open OnDemand update to improve usability</li>
  </ul>
  </p>
  </div>

  <button class="collapsible">July 30, 2025</button>
  <div class="content">
  <p>
  <b>Type</b>: Rolling Maintenance
  <ul>
  <li>Network and device software updates.</li>
  <li>Quarterly OS patching and associated reboots.</li>
  <li>cuDNN module fix: The existing cudnn/9.3 module was incorrectly pointing to cuDNN 9.2. During maintenance, it will be updated to correctly point to cuDNN 9.3. If this change disrupts your workflow, you can load cudnn/9.2 instead.</li>
  <li>Ticketing system change: all emails sent to hpc-consult will now automatically open a ServiceNow ticket for assignment and tracking purposes.</li>
  </ul>
  </p>
  </div>

  <button class="collapsible">April 30, 2025</button>
  <div class="content">
  <p>
  <b>Type</b>: Rolling Maintenance
  <ul>
  <li>Routine patching of all nodes.</li>
  <li>Upgrade of Open OnDemand (OOD) to 4.0 with relatively minor changes. <a href="https://osc.github.io/ood-documentation/latest/release-notes.html">Link to Release Note</a>.</li>
  </ul>
  </p>
  </div>

  <button class="collapsible">January 29, 2025</button>
  <div class="content">
  <p>
  <b>Type</b>: Rolling Maintenance
  <ul>
  <li>Routine patching of all nodes.</li>
  <li>Completion of OS migration. All remaining CentOS 7 Puma nodes migrated to Rocky Linux 9. Puma9 made default cluster.</li>
  </ul>
  </p>
  </div>

  <button class="collapsible">October 30, 2024</button>
  <div class="content">
    <p>
    <b>Type</b>: Rolling Maintenance
    <ul>
    <li>Routine patching of all nodes and storage array.</li>
    <li>OS upgrades continue. A block of nodes were migrated from CentOS 7 to Rocky 9, accessible from the login nodes using <code>puma9</code>. More details can be found on our <a href="../../resources/updates/">OS Updates page</a>.</li>
    </ul>
    </p>
  </div>

  <button class="collapsible">July 31, 2024</button>
  <div class="content">
    <p>
    <b>Type</b>: Rolling Maintenance
    <ul>
    <li><a href="../../running_jobs/open_on_demand/">OnDemand graphical jobs</a> limited to four days to support general resource availability.</li>
    <li><a href="https://portal.hpc.arizona.edu/">User portal</a> upgraded to support mobile clients. </li>
    <li><a href="../../running_jobs/batch_jobs/batch_directives/#allocations-and-partitions">New GPU partitions</a> introduced to improve GPU resource availability.</li>
    </ul>
    </p>
  </div>

  <button class="collapsible">April 24, 2024</button>
  <div class="content">
    <p>
    <b>Type</b>: Rolling Maintenance
    <ul>
    <li>OnDemand Upgrade.</li>
    <li>Gatekeeper moved to EL8 operating system.</li>
    <li>Enabled job script storage in slurm accounting.</li>
    </ul>
    </p>
  </div>


    <button class="collapsible">January 31, 2024</button>
  <div class="content">
    <p>
    <b>Type</b>: Rolling Maintenance
    <ul>
    <li>General operating system patches.</li>
    <li>Qumulo storage array update.</li>
    <li>Slurm configuration improvements.</li>
    <li>Metrics (XDMOD) OS upgrade.</li>
    <li>RStudio Server support for R version 4.3.2.</li>
    <li>OnDemand OS upgrades.</li>
    </ul>
    </p>
  </div>
  <script src="../../../assets/javascripts/animated_dropdown.js"></script>
</html>