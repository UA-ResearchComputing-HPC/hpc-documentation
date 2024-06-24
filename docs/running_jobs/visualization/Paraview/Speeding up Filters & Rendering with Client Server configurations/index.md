For Both of these configurations it is recommended that you start up a
remote desktop and launch paraview according to the instructions on the
previous documented page Getting Started With ParaView. Using the
Embedded graphics library paraview binary

### Steps To launch a EGL server

This workflow uses offscreen rendering and a gpu to speed up interactive
workflows.

First request an allocation on Ocelote that has 1 gpu **Please remember
to replace the <span
class="legacy-color-text-green2">`<your account>`</span> with your own
account name**

`salloc -A <your account> -p standard --gres=gpu:1 -t 3:00:00 -N 1 -n 16`

The following lines will download a version of paraview that we can use
for offscreen headless rendering. The command will actually rename the
export file in order to make it easier to uncompress it.

`wget "https://www.paraview.org/paraview-downloads/download.php?submit=Download&version=v5.11&type=binary&os=Linux&downloadFile=ParaView-5.11.1-egl-MPI-Linux-Python3.9-x86_64.tar.gz" -O paraview_egl.tar.gz`

Here we uncompress the tar file

`tar xf paraview_egl.tar.gz`

The folder we get from this will probably include the full paraview
version name so we will use a \* pattern match character to go into the
bin folder where the `pvserver` program we need to use resides

`cd ParaView-5.11.1*/bin/`

Here's where the exciting part occurs. We will use the `pvserver`
program to start up a process which listens for connections from the
graphical interface and fulfills requests on its behalf. The extra
benefit is that it will use GPU hardware accelerated rendering to get
back results to the viewport even faster. We will also be making use of
the embedded graphics library EGL, to perform these renderings without
the need for an x-server display. The flag `--displays` is used to
specify the gpu card index that we want to make use of, starting from
the number 0. So if we had another card we wished to use instead we
would use `--displays=1`. The potential to leverage multiple gpus is
available but requires a different compiled version of paraview with a
specific nvidia license so it will not be covered here.

`./pvserver --displays=0`

For completeness here are the commands all together for copying in
pasting into a terminal on the HPC

    wget "https://www.paraview.org/paraview-downloads/download.php?submit=Download&version=v5.11&type=binary&os=Linux&downloadFile=ParaView-5.11.1-egl-MPI-Linux-Python3.9-x86_64.tar.gz" -O paraview_egl.tar.gz
    cd ParaView-5.11.1*/bin/
    tar xf paraview_egl.tar.gz
    ./pvserver --displays=0

Take note of the address that is written to the screen at this point it
will look something like
`cs://<node_name>.<cluster_name>.arizona.edu:11111` and this will be
used when we connect via the gui client Steps to launch a client to
connect to the server

For a first draft of this page we will rely on the documentation
provided on the paraview read the docs page to understand the process of
connecting from the graphical user interface.
<a href="https://docs.paraview.org/en/latest/ReferenceManual/parallelDataVisualization.html#configuring-a-server-connection" class="external-link">https://docs.paraview.org/en/latest/ReferenceManual/parallelDataVisualization.html#configuring-a-server-connection</a>

Once the connection has been made, it is possible to determine the
extent to which the gpu is utilized by putting the running `./pvserver`
in the background with `ctrl-z` and then typing `bg`. At this point you
can now type `nvidia-smi -l 2` to get a log of the activity on the gpu
in a text table.
<video controls src="egl.mp4" title="Title"></video>

### Using multinode MPI and osmesa for

This process is very similar to the above, but we will be asking for a
slightly different allocation. Use the following command on Elgato for
testing having two full nodes of 16 cpu cores to speed up filtering and
rendering with paraview. After this tutorial feel free to test out using
different machines or node and core counts. The rule being that the
total number of cpu cores is specified in the `-n ` flag and the total
number of nodes is specified with the `-N ` flag. For more information
consult the basic Slurm scheduling pages. **Please remember to replace
the with your own account name**

`interactive -a <your account> -N 2 -n 32 -t 1:00:00 `

When the first of the multiple nodes is allocated go and download the
latest paraview osmesa.

`wget "https://www.paraview.org/paraview-downloads/download.php?submit=Download&version=v5.11&type=binary&os=Linux&downloadFile=ParaView-5.11.1-osmesa-MPI-Linux-Python3.9-x86_64.tar.gz" -O paraview_mesa.tar.gz`

The next step is to untar it

`tar xf paraview_mesa.tar.gz`

Then at this point you are ready to navigate into the bin folder

`cd Paraview*/bin` Now use the provided mpiexec binary to start up a
`pvserver` backed up by all our allocated cores

`./mpiexec -n 32 ./pvserver`

Once again this is an offscreen rendering system able to run without
needing to have displays or anything. A side benefit is since this is an
entire osmesa build, no missing opengl dependencies cause problems.
Again we need to pay attention to the output of this command so that we
can see the server's connection url to use. For instance if the mpi
nodes are `gpu1&gpu2` it will look like
`cs://gpu2.elgato.hpc.arizona.edu:11111`

At this point we are now all set in order to start up the paraview gui
in the remote desktop allocation. Again, please refer back to the
**Getting Started with Paraview documentation for instructions on this**
TODO replace this with the link in confluence.

Once the gui is open, configure a new connection, and put in just the
server address ie `gpu2.elgato.hpc.arizona.edu` for the host, then
supply the port as `11111`

After about 10-30 seconds you will be connected and all of the filters
and rendering will be accelerated by parallel multinode-mpi.

To double check whether your cores are being fully utilised consider
using the following. First open a separate terminal ssh into each of the
mpi nodes and run htop to see their individual cpu core utilization. As
you interact with the paraview gui client the multinode-mpi server will
undergo periods of low and high activity observable in the htop display.

Please consult the video below for any additional questions or reach out
to the
<a href="mailto:vislab-consult@list.arizona.edu" class="external-link">vislab-consult@list.arizona.edu</a>

  

\*\*Note that this video is using less mpi resources because waiting on
two full elgato nodes wasn't allocating very quickly and made it harder
to record the video. Just remember instead of -n 8 you can use -n 32 and
then go out for a quick snack.\*\*

  
<video controls src="paraview_mpi_mesa.mp4" title="Title"></video>
 