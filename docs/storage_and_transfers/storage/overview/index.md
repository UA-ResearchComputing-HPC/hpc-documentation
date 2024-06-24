<link rel="stylesheet" href="/assets/stylesheets/tables.css">

# Storage Overview

## Where Should I Store My Data?

1. Data undergoing active analyses should be stored in HPC's local [High Performance Storage](../hpc_storage/).
2. Large amounts of data not requiring immediate access from our HPC compute nodes can be stored at reasonable rates on our [Rental Storage](../rental_storage/). 
3. RDAS is a [research data service](../rdas_storage/) which supports the mounting of SMB shares. The supported operating systems are MacOS, Linux, and Windows. It provides 5 TB of free storage. 
4. Research data not requiring immediate access should be stored in [General Research Data Storage (Tier 2)](../tier2_storage/). For example:
    1. Large datasets where only subsets are actively being analyzed.
    2. Results no longer requiring immediate access.
    3. Backups (highly encouraged!).
5. Data that require HIPAA-compliance can be stored on [Soteria](../../../resources/secure_hpc/) (currently in the pilot phase).


<center>
``` mermaid
graph LR
  A[My data are...] --> B{Controlled?}
  B-->|Yes| C{HIPAA?};
  C-->|Yes| D[<a href="../../../resources/secure_hpc/">Soteria</a>];
  C-->|No| E[Unsupported];
  B-->|No| F{Archival?}
  F-->|Yes| G[<a href="../../storage/tier2_storage/">AWS Tier 2<br>Storage</a>]
  F-->|No| H{Need<br>HPC<br>compute?}
  H-->|Yes| I{Under<br>20 TB?}
  I-->|Yes| J[<a href="../../storage/hpc_storage/">HPC Storage</a>]
  I-->|No| K[<a href="../../storage/rental_storage/">Rental Storage</a>]
  H-->|No| L{Under<br>5 TB?}
  L-->|No| K
  L-->|Yes| M[<a href="../../storage/rdas_storage/">R-DAS Storage</a>]
```
</center>


## Storage Option Summary

<html>
<div class="storage-summary-table-container">
<table class="storage-summary-table">
<thead>
  <tr>
  <th></th>
  <th>Purpose</th>
  <th>Capacity</th>
  <th>Cost</th>
  <th>Restricted Data</th>
  <th>Access</th>
  <th>Duration</th>
  <th>Backup</th>
</tr>
</thead>
<tr>
  <th>Primary HPC Storage</th>
  <td>Research data. Supports compute. Directly attached to HPC</td>
  <td><code>/home</code>: 50 GB<br><code>/groups</code>: 500 GB<br><code>/xdisk</code>: 20 TB</td>
  <td>Free</td>
  <td>&#10060;</td>
  <td>Directly mounted on HPC. Also uses Globus and DTNs.</td>
  <td>Long term. Aligns with HPC purchase cycle.</td>
  <td>No</td>
</tr>
<tr>
  <th>R-DAS</th>
  <td>Research Desktop Attached Storage - SMB shares</td>
  <td>5 TB</td>
  <td>Free</td>
  <td>&#10060;</td>
  <td>Mounted to workstations as shares</td>
  <td>Long term</td>
  <td>No</td>
</tr>
<tr>
  <th>Rental Storage</th>
  <td>Research data. Large datasets. Typically for staging to HPC</td>
  <td>Rented per TB per year</td>
  <td>$47.35 per TB per year</td>
  <td>&#10060;</td>
  <td>Uses Globus and DTNs. Copy data to Primary</td>
  <td>Long term. Aligns with HPC purchase cycle</td>
  <td>No</td>
</tr>
<tr>
  <th>Tier 2</th>
  <td>Typically research data. Unused data is archived</td>
  <td>15 GB to TBs</td>
  <td>Tier-based system. First 1 TB of active data and archival data are free. Active data > 1 TB is paid.</td>
  <td>&#10060;</td>
  <td>Uses Globus and AWS command line interface</td>
  <td>Typically long term since use of Glacier is free and slow</td>
  <td>Archival</td>
</tr>
<tr>
  <th>ReData</th>
  <td><a href="https://data.library.arizona.edu/data-management/services/research-data-repository-redata">Research data</a>. Managed by UArizona Libraries</td>
  <td>Quota system</td>
  <td>Free</td>
  <td>&#10060;</td>
  <td>Log in and fill out fields, then upload</td>
  <td>Longer than 10 years</td>
  <td>No</td>
<tr>
  <th>Soteria HIPAA</th>
  <td>Secure data enclave</td>
  <td>Individual requests</td>
  <td>Free upon qualification</td>
  <td>Restricted data; HIPAA, ePHI</td>
  <td>HIPAA training required, followed by request process</td>
  <td>Long term</td>
  <td>No</td>
</tr>
<tr>
  <th>Box</th>
  <td>General Data</td>
  <td>50 GB</td>
  <td>Free</td>
  <td>&#10060;</td>
  <td>Browser</td>
  <td>Long term</td>
  <td>Cloud</td>
</tr>
<tr>
  <th>Google Drive</th>
  <td>General data</td>
  <td>15 GB</td>
  <td>Free. Google rates for amounts > 15 GB</td>
  <td>&#10060;</td>
  <td>Browser</td>
  <td>Unlimited usage expires March 1, 2023</td>
  <td>Cloud</td>
</tr>
</table>
</div>
</html>



## NIH Data Management and Sharing Policy

The NIH has issued a new [data management and sharing policy](https://sharing.nih.gov/data-management-and-sharing-policy), effective January 25, 2023. The University Libraries now [offers a comprehensive guide](https://data.library.arizona.edu/data-management/nih-data-management-sharing-policy-2023) for how to navigate these policies and what they mean for you.

> **What's new about the 2023 NIH Data Management and Sharing Policy?**<br><br>
  Previously, the NIH only required grants with $500,000 per year or more in direct costs to provide a brief explanation of how and when data resulting from the grant would be shared.<br><br>
  The 2023 policy is entirely new. Beginning in 2023, ALL grant applications or renewals that generate Scientific Data must now include a robust and detailed plan for how you will manage and share data during the entire funded period. This includes information on data storage, access policies/procedures, preservation, metadata standards, distribution approaches, and more. You must provide this information in a data management and sharing plan (DMSP). The DMSP is similar to what other funders call a data management plan (DMP).<br><br>
  The DMSP will be assessed by NIH Program Staff (though peer reviewers will be able to comment on the proposed data management budget). The Institute, Center, or Office (ICO)-approved plan becomes a Term and Condition of the Notice of Award.
  
