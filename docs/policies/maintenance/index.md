# Maintenance

## Planned Maintenance
Most maintenance is performed during regular hours with no interruption to service.  System wide maintenance is usually planned ahead of time and is scheduled for Wednesdays from 8:00 AM to 5:00 PM with at least 10 days notice.  These will be planned to occur four times per year.

Maintenance windows represent periods when UITS may choose to drain the queues of running jobs and suspend access to the cluster operation for HPC maintenance purposes.

The notification will describe the nature and extent (partial or full) of the interruptions of HPC services. 

### System-wide Maintenance
Some maintenance cycles require the entire system to be taken offline. In preparation, batch queues will be modified prior to scheduled downtimes to hold jobs which request more wallclock time than remains before the shutdown. Held jobs will be released to run once maintenance concludes.

### Rolling maintenance
Rolling maintenance cycles facilitate updates or maintenance tasks without requiring a complete system shutdown. Nodes are sequentially taken offline, allowing running jobs to complete before they are updated and brought back online. This rolling process ensures minimal disruption to ongoing computational tasks while the maintenance is carried out. During rolling maintenance cycles, the job queues may be slower than average while nodes are pending a reboot.

## Emergency Maintenance
Unavoidable (emergency) downtime may occur as a result of any of the above reasons at almost any time. Such events are rare and great effort is made to avoid these situations. However, when emergency maintenance is needed, the UITS unit responsible for the item affected will provide as much notice to users as possible and work to resolve the fault as quickly as possible.

Any emergency outages will be announced via email through the **hpc-announce@list.arizona.edu** mailing list. 
