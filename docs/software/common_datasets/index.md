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
Meta has open-sourced [Llama2](https://llama.meta.com/llama2/), a group large language models, and it is available for free for research uses, under a [community license](https://ai.meta.com/llama/license/). These models range from tens of GBs to hundreds of GBs in size. We have downloaded them and made them available for you at `/contrib/datasets/llama2` and `/contrib/datasets/llama2-hf`. The latter are compatible with the HuggingFace ecosystem.

You do not need to copy these models to another location to use them. You can directly access those locations from an interactive session or an batch script. However, if you copy them to another location, then also copy the license files, present in the directories mentioned above. The following Python code shows how you can load the HuggingFace compatible models.

``` python
from transformers import LlamaForCausalLM, LlamaTokenizer

llama_path = "/contrib/datasets/llama2-hf/meta-llama_Llama-2-7b-chat-hf"
tokenizer = LlamaTokenizer.from_pretrained(llama_path)
model = LlamaForCausalLM.from_pretrained(llama_path)
```

You can run the above code from either a Jupyter notebook (see [Open OnDemand](/running_jobs/open_on_demand/)), or a batch script. If you do not provide enough memory, then the Jupyter kernel will die, or the Slurm job will terminate with an out of memory (OOM) error message. We recommend that you request at least 60 GB of memory for the models with 7 billion parameters, and progressively more for the models with 13 billion and 70 billion parameters. For more information on using Llama2, we recommend that you check Llama2's Github [repository](https://github.com/meta-llama/llama) and HuggingFace [documentation](https://huggingface.co/docs/transformers/en/model_doc/llama2).


## NCBI Blast
The Blast databases are provided in support of the Blast module under `/contrib/datasets/blast`.
