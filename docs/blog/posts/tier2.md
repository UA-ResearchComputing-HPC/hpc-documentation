---
draft: false
date: 2024-11-05
categories:
    - Storage
authors: 
    - chris
hide:
    - feedback
---

# Tier 2 Storage

The University of Arizona’s Tier 2 Storage, designed to utilize Amazon Web Service storage solutions, offers scalable storage for research data that does not require immediate access. Unlike Tier 1 storage, which is integrated into high-performance computing (HPC), Tier 2 is intended for archiving inactive data or making copies. It employs AWS’s intelligent tiering, which progressively moves data to more cost-effective, long-term storage options like Glacier and Deep Glacier after periods of inactivity.

Tier 2 AWS buckets use intelligent tiering to determine the archival status of files. When data are first uploaded to a group's bucket, they are in the standard access class. After three months of inactivity, data are automatically migrated to Glacier storage. This is less performant, and data are no longer instantly downloadable. After three months of inactivity in the Glacier access tier, data are automatically migrated to Deep Glacier, which is even less performant. Users will need to request a restore before downloading their files from Glacier and Deep Glacier. Restore requests can be submitted either in the user portal or using a command line tool available on our compute nodes.

Did I mention that the service is highly subsidized?  You will set up an account to cover the costs of the data that is temporarily in S3, but there are no charges for data migrated to Glacier and Deep Glacier. And there are no ingress or egress charges.

For detailed usage and pricing information, visit the official [Tier 2 Storage page](/storage_and_transfers/storage/tier2_storage/).