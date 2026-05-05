# Loss of University Affiliation

## Affiliation Loss Policy

When you lose affiliation with the university, such as through graduation or leaving a work position, access to HPC resources will be automatically terminated on the effective date listed in the University of Arizona Records Database. You will receive an automated email notification from our systems with your account's deactivation date.

{==We are unable to extend HPC access for those losing affiliation==}. However, you may retain access by registering as a [Designated Campus Colleague (DCC)](https://it.arizona.edu/service/designated-campus-colleague-accounts) through Human Resources. 

See below for more information on the specific effects of affiliation loss and our data retention policies. 


## Principal Investigator (PI) Loss of Affiliation

### Emeritus

PIs who retire with emeritus status will retain their PI status. This means they will continue to have access to their HPC storage and time allocations and will retain their ability to sponsor users and request xdisk storage. There are no additional steps required to maintain access.


### Other

PIs who leave the university will lose access to all HPC systems and services. Any active university member they have sponsored for access will need to find a new PI sponsor to continue using the system.

PIs who retire **without** emeritus status, or who leave The University of Arizona but obtain DCC status are entitled to maintain access to HPC resources. However, they are not eligible for Principal Investigator (PI) status. This means:

- They will not be able to sponsor new users.
- They may not request additional storage such as xdisk.
- They must be sponsored by an active university PI or faculty member to maintain continued access the system. To request HPC sponsorship, see the **I'm a student, postdoc, staff member, or Designated Campus Colleague** dropdown under **How to Register** on our [account creation page](../../registration_and_access/account_creation/).

Note that they will be able to retain their `/groups` storage space. However, if there is a gap between when their faculty position ends and their DCC status begins, their `/groups` allocation may be removed for the duration of their affiliation loss and all associated data deleted. {==It's important to back up all HPC data to prevent unwanted loss==}. If any files have been removed, retrieval may be possible if you [contact our consulting services](../../support_and_training/consulting_services/) *as soon as possible*. Retrieval of deleted `/groups` data after 90 days have elapsed is not possible. 

## Sponsored Users Loss of Affiliation

Non-PI HPC members who lose university affiliation will lose access to all HPC systems and their resources. An automated email will be sent to them and their PI sponsors notifying them of the date when their account is scheduled for deletion. We are unable to extend HPC access once university affiliation is lost.

If continued access to the systems is needed, users may [apply for DCC status](https://it.arizona.edu/service/designated-campus-colleague-accounts) through Human Resources. This will provide them with active university credentials and allow them to access all HPC resources once obtained.

If DCC status is obtained prior to the account deletion date, no further action is required and their account will not be removed. If there is a gap between the account's deletion date and when DCC status is obtained, there will be a period when HPC is not accessible. As soon as DCC status is obtained, the user may request sponsorship from their PI to regain access.


## Data After Affiliation Loss

### Home Directories

Home directory data are retained for 90 days following loss of affiliation. If university affiliation is reestablished and HPC access is restored within those 90 days, files will be retrievable by our staff and can be restored. If you are looking to have your home directory files retrieved, [contact our consultants](../../support_and_training/consulting_services/) and they can assist you.

### Data in `/groups`

The `/groups` directory associated with an HPC group will persist for as long as the PI sponsor is affiliated with the university and has an active HPC account. If that PI leaves the university without emeritus or DCC status (see [section above on PI policy](#principal-investigator-pi-loss-of-affiliation)), their `/groups` directory will be removed. Contents in a removed `/groups` directory are retained for 90 days before being permanently deleted. If files need to be recovered from deleted storage, [contact our consultants](../../support_and_training/consulting_services/) *as soon as possible*.

Files in `/groups` will persist for as long as that space is available. This means that if a group member loses access to the system, their files will remain in this communal storage location and will not be purged by our systems.

### Data in `/xdisk`

If an `/xdisk` directory exists for an HPC group, it will persist until its expiration date or it is manually deleted. 

If the PI sponsor associated with that xdisk leaves the university without emeritus or DCC status, their xdisk will remain until it expires, then will be deleted along with all associated data. 

PIs who retire without emeritus status or who have DCC status will not be able to request a new xdisk once their previous xdisk has been deleted. 

PIs with emeritus status retain their HPC sponsor status and may request a new xdisk. 

Files in `/xdisk` will persist for as long as that space is available. This means that if a group member loses access to the system, their files will remain in this communal storage location and will not be purged by our systems until the xdisk allocation expires.





