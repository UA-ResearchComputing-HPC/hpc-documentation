# Using a Pipefail

This script uses a pipefail to kill a SLURM job in the event of a failure at any point in the pipeline rather than continuing on to the next step.

## Example Submission Script

```bash
#!/bin/bash
#SBATCH --account=YOUR_GROUP
#SBATCH --partition=standard
#SBATCH --ntasks=1
#SBATCH --nodes=1
#SBATCH --time=00:01:00

singularity exec --nv /contrib/singularity/nvidia/nvidia-tensorflow-2.6.0.sif python3 -c "import foo"

set -oe pipefail # <- kills the batch script on the next error it encounters
singularity exec --nv /contrib/singularity/nvidia/nvidia-tensorflow-2.6.0.sif python3 -c "import bar"
singularity exec --nv /contrib/singularity/nvidia/nvidia-tensorflow-2.6.0.sif python3 -c "import baz"
```

## Job Submission

```bash
[user@cpu37 fail_test]$ sbatch pipefail.slurm
Submitted batch job 361837
```

## Output

Notice that before the pipefail is set, the script moves on to subsequent commands (trying to import bar). After the pipefail is set, the job exits when it can't import bar and never tries to import baz. 

```
[user@cpu37 fail_test]$ cat slurm-361837.out
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ModuleNotFoundError: No module named 'foo'
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ModuleNotFoundError: No module named 'bar'
```
