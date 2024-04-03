<link rel="stylesheet" href="../../../assets/stylesheets/embedded_files.css">

# Intro to HPC Workshop Materials

<center>
[Click here to download PDF (Fall 2023)](files/IntroToHPC.Fall2023.pdf){ .md-button }
[Click here to download PDF (Spring 2024)](files/IntroToHPC.Spring2024.pdf){ .md-button }

</center>

## Video Presentation
<div class="auto-resizable-iframe">
  <div>
    <iframe frameborder="0" allowfullscreen="" src="https://www.youtube.com/embed/xlgL6u1jkVI"></iframe>
  </div>
</div>


## Interactive Materials

<!-- Using the actual html from MKDocs here to add the target="_blank" bit
This makes it so the link opens in a new tab rather than redirecting the current tab
This should hopefully make navigation easier for the students?-->

### Logging In

<a class="md-button" href="../../../registration_and_access/system_access/" target="_blank">Instructions on Logging In</a>

### Activity: Let’s run a batch job!

Let’s write a basic Python script, then submit it to the queue 

Process:

1. write a Python script
2. write a batch script
3. submit the batch script

**Step 1: Write a Python script**

You can write anything you want! It can be as simple as print(‘hello world’), or you can make it more interesting.. up to you ;)

1. If you haven't already, log onto the HPC
2. create a blank python file: ```touch myscript.py```
3. edit the script: ```nano myscript.py```

    a. feel free to use vim or emacs or any other text editor if you are more comfortable with one of those

    b. add something simple like
        ```print(“hello world!”)```
4. be sure to save it!

**Step 2: Write your batch script**

Batch Script

Part 1: Use directives to tell the scheduler what resources you want

```
#!/bin/bash
#SBATCH --job-name=test 
#SBATCH --output=test_%A.out 
#SBATCH --error=test_%A.err 
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --partition=standard 
#SBATCH --account=<your_account> 
#SBATCH --time=00:05:00
```

Part 2: Load your modules

<!-- Changed this from the original PDF. Probably best practice to get
users to be comfortable with using version number for reproducibility-->

```
module load python/3.11
```

Part 3: Run your script

<!-- Changed this from the original PDF. The command "python" calls
the system python (version 2.75). Need pytyhon3 to access module version-->

```
python3 myscript.py
```

**Step 3: Submit your job**

1. Send to scheduler

    ```
    sbatch myscript.slurm
    ```
2. Check the queue
    
    ```
    squeue --user=<my netid>
    ```

3. View the output files

    ```
    cat <name>.out
    cat <name>.err
    ```
4. View the job history report
    
    ```
    job-history <job id>
    ```

Congrats! You just ran your first batch job!

### Additional Resources

The HPC Consult Team is here for you!

- Documentation: docs.hpc.arizona.edu
- GitHub: ua-researchcomputing-hpc.github.io
- ServiceNow: [HPC Support and Consulting Request](https://uarizona.service-now.com/sp?id=sc_cat_item&sys_id=2983102adbd23c109627d90d689619c6&sysparm_category=84d3d1acdbc8f4109627d90d6896191f)
- Office Hours: every Wednesday 2-4pm on [GatherTown](https://gather.town/app/dVsAprPNBVmI9NpL/hpc-office-hours)