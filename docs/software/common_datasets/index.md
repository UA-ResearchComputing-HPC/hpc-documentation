# Common Datasets

We host several large community datasets.  It is beneficial to you and us.  For you, it saves all that time downloading and filling up your storage allocation.  And for us it reduces the occurrence of the same data in many places. We do not currently update them on any particular cadence. You can request updates if you feel those would be useful to the community.

These datasets and databases are available on the compute nodes under `/contrib/datasets` in read-only mode. 

## AlphaFold 2

AlphaFold is an AI system developed by the Google DeepMind project to predict the 3D structure of a protein from its amino acid sequence. AlphaFold needs multiple datasets to run, the combined size of which is around 2.62 TB. You can find these datasets under ```/contrib/datasets/alphafold```.

We also host containers at ```/contrib/singularity/alphafold``` that you can use with the provided datasets to predict protein structures with AlphaFold. You can access the container by loading the alphafold module from an interactive session or a batch submission script. When you load the alphafold module, it defines the following additional environment variables that you can use to easily access the container and the datasets:

* ```ALPHAFOLD_DIR``` which points to ```/contrib/singularity/alphafold```
* ```ALPHAFOLD_DATADIR``` which points to ```/contrib/datasets/alphafold```

The following batch submission script shows how you can use the container with the provided datasets.

```bash
#!/bin/bash
#SBATCH --job-name=alphafold-run
#SBATCH --time=04:00:00
#SBATCH --gres=gpu:1
#SBATCH --cpus-per-task=8
#SBATCH --ntasks-per-node=1
#SBATCH --partition=standard
#SBATCH --account=<pi-account>
 
# Uncomment the following two lines to make predictions on proteins that would be too long to fit into GPU memory.
# export APPTAINERENV_TF_FORCE_UNIFIED_MEMORY=1 
# export APPTAINERENV_XLA_PYTHON_CLIENT_MEM_FRACTION=4.0
 
module load alphafold
 
alphafold --nv \
          --use_gpu_relax \
          --uniref90_database_path=/data/uniref90/uniref90.fasta  \
          --uniref30_database_path=/data/uniref30/UniRef30_2021_03 \
          --mgnify_database_path=/data/mgnify/mgy_clusters_2022_05.fa  \
          --bfd_database_path=/data/bfd/bfd_metaclust_clu_complete_id30_c90_final_seq.sorted_opt  \
          --pdb70_database_path=/data/pdb70/pdb70  \
          --template_mmcif_dir=/data/pdb_mmcif/mmcif_files  \
          --obsolete_pdbs_path=/data/pdb_mmcif/obsolete.dat \
          --model_preset=monomer \
          --max_template_date=2023-08-02 \
          --db_preset=full_dbs \
          --output_dir=results \
          --fasta_paths=input.fasta
```

## Llama 2
The Meta Large Language Model project has several datasets that we make available under `/contrib/datasets/llama2`.

## NCBI Blast
The Blast databases are provided in support of the Blast module under `/contrib/datasets/blast`.