# AlphaFold

AlphaFold is an AI system developed by the Google DeepMind project to predict the 3D structure of a protein from its amino acid sequence. AlphaFold needs multiple datasets for inference, the combined size of which is around several TBs. We currently host the datasets for AlphaFold 2 & 3, and the corresponding modules. The datasets are available under `/contrib/datasets/alphafold`.

Each AlphaFold module loads an Apptainer container containing the corresponding AlphaFold. You can use the containers directly, if you want. They are available under `/contrib/singularity/alphafold`. The modules however provide some useful shortcuts, and you can use them without knowing anything about Apptainer containers.

## AlphaFold 2

We currently host AlphaFold version 2.3.0. For versions 2.3.1 or 2.3.2, you will have to build your own Apptainer containers. You can use corresponding Docker [images](https://hub.docker.com/r/catgumag/alphafold/tags) for that purpose. For more information on building your own Apptainer containers from Docker images, see [Containers](../../containers/what_are_containers/index.md). These use the same datasets as version 2.3.0.

When you load the `alphafold/2.3.0` module it adds the following variables to your environment:

* `ALPHAFOLD_DIR` which points to `/contrib/singularity/alphafold`
* `ALPHAFOLD_DATADIR` which points to `/contrib/datasets/alphafold/2.3.0`

You can use these variables to easily access the container and the datasets. You can use the the module from either a batch script or an interactive session, the invocations are the same. For optimum performance, you should use no more than 8 CPU cores. While you can run this without a GPU, we do not recommend that. The following batch script demonstrates how you can use this module:

```bash
#!/bin/bash
#SBATCH --job-name=alphafold2-run
#SBATCH --time=04:00:00
#SBATCH --gres=gpu:volta:1
#SBATCH --cpus-per-task=8
#SBATCH --ntasks-per-node=1
#SBATCH --partition=gpu_standard
#SBATCH --account=<pi-account>
 
# Uncomment the following two lines to make predictions on proteins that would be too long to fit into GPU memory.
# export APPTAINERENV_TF_FORCE_UNIFIED_MEMORY=1 
# export APPTAINERENV_XLA_PYTHON_CLIENT_MEM_FRACTION=4.0
 
module load alphafold/2.3.0
 
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
          --output_dir=<output_dir> \
          --fasta_paths=<input.fasta>
```

You can find out the full list of options that you can specify by loading the module in an interactive session and running `alphafold --helpfull`. 

## AlphaFold 3

We host AlphaFold version 3.0.0. Unlike AlphaFold 2, AlphaFold 3 is not completely free. We host the datasets it needs for inference. However, you need to obtain the model parameters from Google directly. {==Fill and submit [this form](https://docs.google.com/forms/d/e/1FAIpQLSfWZAgo1aYk0O4MuAXZj8xRQ8DafeFJnldNOnh_13qAx2ceZw/viewform) to request access to the model parameters from Google.==} Please ensure that you have read the terms and conditions mentioned in the form and that you can comply with them.

After Google approves your request, they will send you an email with a link to download a file containing the model parameters. You will likely download the file on your local computer, it is little less than 1 GB in size. Use one of our file [transfer](../../../storage_and_transfers/transfers/overview/index.md) options to transfer this file to your HPC storage. The model parameters file is in a compressed format. You will need to decompress it to use it. From an interactive session, run:

```bash
module load zstd
unzstd af3.bin.zstd
```

We recommend that you put the decompressed `af3.bin` file in a directory named `models`. 

When you load the `alphafold/3.0.0` module it adds the following variables to your environment:

* `ALPHAFOLD_DIR` which points to `/contrib/singularity/alphafold`
* `ALPHAFOLD_DATADIR` which points to `/contrib/datasets/alphafold/3.0.0`


AlphaFold 3 requires 1 GPU for inference. Officially only NVIDIA A100 and H100 GPUs, with 80 GB of GPU RAM, are supported. However, you can use older GPUs, such as V100 and P100, or GPUs with less memory, such as one of our A100 slices with 20 GB of GPU RAM. The input size will be limited in these cases. The AlphaFold [documentation](https://github.com/google-deepmind/alphafold3/blob/main/docs/performance.md) provides strategies that you can adopt to make runs with larger inputs. To run it on node with P100 or V100 GPUs, add `--flash_attention_implementation=xla` to the `alphafold` command in the example below.

For optimum performance do not use more than eight CPU cores. The following batch script demonstrates how you can use this module:

```bash
#!/bin/bash
#SBATCH --job-name=alphafold3-run
#SBATCH --time=04:00:00
#SBATCH --gres=gpu:nvidia_a100_80gb_pcie_2g.20gb
#SBATCH --cpus-per-task=8
#SBATCH --ntasks-per-node=1
#SBATCH --partition=gpu_standard
#SBATCH --account=<pi-account>

module load cuda12
module load alphafold/3.0.0

alphafold --db_dir=/data --output_dir=<output_dir> --model_dir=models --json_path=<input.json>
```

You can find out the full list of options that you can specify by loading the module in an interactive session and running `alphafold --helpfull`. 
