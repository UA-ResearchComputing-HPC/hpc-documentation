# Common Datasets

We host several large community datasets.  It is beneficial to you and us.  For you, it saves all that time downloading and filling up your storage allocation.  And for us it reduces the occurrence of the same data in many places. We do not currently update them on any particular cadence. You can request updates if you feel those would be useful to the community.

These datasets and databases are available on the compute nodes under `/contrib/datasets` in read-only mode. 

## AlphaFold

AlphaFold is an AI system developed by the Google DeepMind project to predict the 3D structure of a protein from its amino acid sequence. AlphaFold needs multiple datasets to for inference, the combined size of which is around several TBs. We host the datasets for both AlphaFold 2 & 3. You can find these datasets under `/contrib/datasets/alphafold/2.3.0` and `/contrib/datasets/alphafold/3.0.0`. For more information on using these datasets with the provided AlphaFold modules, see [AlphaFold](../popular_software/alphafold/index.md). If you want to use these datasets with other software, you can access these paths from an interactive session or a batch script.

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

## NCBI BLAST
The Basic Local Alignment Search Tool (BLAST), developed by NCBI, is a program for comparing primary biological sequence information, such as amino-acid or nucleotide sequences. NCBI has several databases that you can use with BLAST. We have the `nr`, `nt`, and `taxdb` databases available locally under `/contrib/datasets/blast`. You can use these datasets with the `blast` module.
