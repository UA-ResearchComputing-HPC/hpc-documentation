# Software and Modules

<link rel="stylesheet" href="../../../assets/stylesheets/animated_dropdown.css">
<link rel="stylesheet" href="../../../assets/stylesheets/spacing.css">

<html>
    
    
<!-- Are any software modules loaded by default? -->   
<button class="collapsible">Are any software modules loaded by default?</button>
<div class="content">
  <p>
      Yes, when you start an interactive terminal session or submit a batch script, the modules ohpc, gnu8, openmpi3, and cmake are automatically loaded. If your code uses Intel compilers, you will want to manually unload gnu8 and openmpi3 to prevent conflicts.
      <br>
      The exception: If you are working in a terminal in an Open OnDemand interactive desktop session, nothing is loaded by default and you will need to manually load any necessary modules. To start, always use <code>module load ohpc</code>
  </p>
</div>

<!-- What executables are available when I load a module? -->   
<button class="collapsible">What executables are available when I load a module?</button>
<div class="content">
  <p>
      Load the module, find the path to the executable by checking the <code>$PATH</code> variable, then list the contents.  For example:
      <pre><code>
module load lammps
echo $PATH
ls /opt/ohpc/pub/apps/lammps/3Mar20/bin
lmp_mpi
      </code></pre>
      Alternatively, use the command <code>module show &#60;software&#62;</code> to see all the environment variables that are set at load time. 
  </p>
</div>

<!-- Why am I getting "command: module not found"? -->   
<button class="collapsible">Why am I getting "command: module not found"? </button>
<div class="content">
  <p>
      There are a few different possibilities:
      <ul>
          <li>You are not in an interactive session. Modules are not available on the login nodes. You may request an interactive session by using the command <code>interactive</code>. </li>
          <li>Your shell is not set to bash. If this is the case, contact our consultants so that they can reset it for you.</li>
          <li>You have modified or deleted your <code>~/.bashrc</code>. If this is the case, open (if the file exists) or create and open (if the file is missing) the file .bashrc in your home directory and add the lines:</li>
          <pre><code>
if [ -f /etc/bashrc ]; then
        . /etc/bashrc
fi
          </code></pre>
      </ul>
  </p>
</div>

<!--How do I access Gaussian or Gaussview? -->   
<button class="collapsible">How do I access the module for Gaussian or Gaussview?</button>
<div class="content">
  <p>
    You need to belong to a special group called g03.  You can request to be added by <a href="../../consulting_services/">submitting a help ticket</a>. This is a constraint in Gaussian that other modules do not have.
  </p>
</div>

<!-- How can I maximize my software performance on Puma? -->   
<button class="collapsible">How can I maximize my software performance on Puma?</button>
<div class="content">
  <p>
      If you are able to compile your software you can take advantage of most of the AMD Zen architecture.
  </p>
  <table>
      <tr>
          <th>Compiler</th>
          <th>Arch-Specific</th>
          <th>Arch-Favorable</th>
      </tr>
      <tr>
          <td>GCC 9</td>
          <td><code>-march=znver2</code></td>
          <td><code>-mtune=znver2</code></td>
      </tr>
      <tr>
          <td>LLVM 9</td>
          <td><code>-march=znver2</code></td>
          <td><code>-mtune=znver2</code></td>
      </tr>
  </table>
</div>

<!-- Is the Intel compiler faster than GCC on Puma? -->   
<button class="collapsible">Is the Intel compiler faster than GCC on Puma?</button>
<div class="content">
  <p>
    Intel compilers are optimized for Intel processors. There is some debate around the concept of unfair CPU dispatching in Intel compilers. By default, software on the HPC clusters is built with GCC (on Puma it is GCC 8.3).  This is in keeping with our preference for community software.
  </p>
</div>

<!-- I've been using an older version of Singularity, why isn't available anymore? -->   
<button class="collapsible">I've been using an older version of Apptainer (formerly Singularity), why isn't available anymore?</button>
<div class="content">
  <p>
    Prior versions of Apptainer are routinely removed since only the latest one is considered secure. Notify the consultants if you need help with transition to the current version. Apptainer is installed on the operating systems of all compute nodes so does not need to be loaded with a module. 
  </p>
</div>

<!-- Can I use Windows applications on HPC? -->   
<button class="collapsible">Can I use Windows applications on HPC?</button>
<div class="content">
  <p>
    Unfortunately, Windows applications can't be run on HPC. However, AWS has been used successfully for Windows software with GPU needs. It’s easy to set up, cost effective, and very scalable. Amazon also has a <a href="https://aws.amazon.com/government-education/research-and-technical-computing/cloud-credit-for-research/">cloud credit for research program available</a>.
    <br>
    You may also consider trying Jetstream2, a national resource where you can create and use Windows virtual machines. More information can be found here: <a href="https://jetstream-cloud.org/">https://jetstream-cloud.org/</a>
  </p>
</div>


<!-- How do I install this R package/Why can't I install this R package? -->   
<button class="collapsible">How do I install this R package/Why can't I install this R package?</button>
<div class="content">
  <p>
      R installations can sometimes be frustrating. We have instructions for how to set up a usable R environment, how to diagnose and troubleshoot problems, and steps to help with known troublesome packages documented in in our <a href="../../../software/popular_software/R/">Using and Customizing R Packages</a> section. 
  </p>
</div>

<!-- How do I install Python packages? -->   
<button class="collapsible">How do I install Python packages?</button>
<div class="content">
  <p>
     You can install python packages locally using either a <a href="../../../software/popular_software/python/#installing-python-packages-using-a-virtual-environment">virtual environment</a> or a <a href="../../../software/popular_software/anaconda/#creating-a-conda-environment">local conda environment</a>. 
  </p>
</div>


<!-- How do I access custom Python packages from an OOD Jupyter session? -->   
<button class="collapsible">How do I access custom Python packages from an OOD Jupyter session?</button>
<div class="content">
  <p>
  You can install packages and make them available by first creating a virtual environment or conda environment, then setting up a custom Jupyter kernel. See instructions in our <a href="../../../software/popular_software/python/">Python</a> or <a href="../../../software/popular_software/anaconda/">Anaconda</a> documentation for details. 
  </p>
</div>



<!-- How do I take advantage of the Distributed capability of Ansys? -->   
<button class="collapsible">How do I take advantage of the Distributed capability of Ansys?</button>
<div class="content">
  <p>
    Ansys has the Distributed capability built in to increase performance. Ansys uses the Intel compiler and so uses Intel MPI.  By default, we load OpenMPI, so you will need to do this: 
    <pre><code>
module unload gnu8 openmpi3
module load intel
module load ansys
    </code></pre>
  </p>
</div>


    
    
<div class="vertical-space"></div>
<script src="../../../assets/javascripts/animated_dropdown.js"></script>
</html>