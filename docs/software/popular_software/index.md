# Popular Software

Our systems provide access to hundreds of software packages spanning scientific computing, data analysis, machine learning, visualization, and more. Because of the breadth of available software, we cannot provide detailed documentation for every package installed on the cluster.

This section highlights commonly used software and workflows on our systems, including tools such as Python, R, Gaussian, MATLAB, and package managers like Micromamba. These pages provide cluster-specific guidance, example job scripts, and environment setup instructions to help users get started more quickly.

<div class="grid cards" markdown>

-   :material-dna:{ .lg .middle } __Alphafold__

    ---

    AlphaFold is a deep learning-based protein structure prediction tool developed by DeepMind. On our systems, it is provided via containerized environments to ensure reproducibility and simplify setup across compute nodes. This page includes example workflows and job submission instructions for running AlphaFold at scale.

    [:octicons-arrow-right-24: View documentation](./alphafold/)

-   :material-snake:{ .lg .middle } __Anaconda__

    ---

    Anaconda is no longer the recommended Python environment manager on our systems. It has been deprecated due to performance overhead and known conflicts with HPC desktop environments (including OnDemand sessions). We instead provide and recommend micromamba, which offers faster environment creation and better compatibility with cluster software.

    [:octicons-arrow-right-24: See instead: Micromamba](./mamba/)

-   :material-test-tube:{ .lg .middle } __Gaussian___

    ---

    Gaussian is available on the cluster for quantum chemistry and electronic structure calculations. Access requires membership in a software group due to licensing requirements, but access is broadly available upon request. This page includes notes on GPU usage.

    [:octicons-arrow-right-24: View documentation](./gaussian/)

-   :material-snake:{ .lg .middle } __Mamba__

    ---

    Mamba/Micromamba is a lightweight environment manager for Python and other software stacks. It is the preferred alternative to Anaconda on our systems because it is significantly faster and does not interfere with HPC software environments such as OnDemand desktop sessions. See this page for installation steps and usage information.

    [:octicons-arrow-right-24: View documentation](./mamba/)

-   :material-math-integral:{ .lg .middle } __Matlab__

    ---

    MATLAB is available on the cluster for numerical computing, visualization, and algorithm development. It is provided under a site license and is best used for compute-intensive workflows via batch jobs. This page includes setup instructions, information on running in batch, and details on using the parallel computing toolbox.

    [:octicons-arrow-right-24: View documentation](./matlab/)

-   :material-hexagon-multiple:{ .lg .middle } __Ollama__

    ---

    Ollama provides a lightweight way to run large language models locally on the cluster. On our systems, it is deployed via Apptainer containers to ensure compatibility with HPC environments. This page covers how to build and run Ollama containers, as well as how to use it interactively and within Jupyter notebooks.

    [:octicons-arrow-right-24: View documentation](./ollama/)

-   :material-code-tags:{ .lg .middle } __Perl__

    ---

    Perl is available on all compute nodes as part of the system software stack. This page describes the system-provided installation and provides guidance for setting up user-level Perl environments to manage modules without affecting the base system.

    [:octicons-arrow-right-24: View documentation](./perl/)

-   :fontawesome-brands-python:{ .lg .middle } __Python__

    ---

    Multiple versions of Python are available as modules on the cluster. Users are strongly encouraged to use virtual environments to manage packages for package management. This page covers environment setup, best practices, and setting up custom Jupyter kernels.

    [:octicons-arrow-right-24: View documentation](./python/)

-   :fontawesome-brands-r-project:{ .lg .middle } __R__

    ---

    ZR is provided on the cluster for statistical computing and data analysis workflows. Users are expected to install packages in personal libraries rather than the system library to avoid permission and dependency issues. This page includes guidance for package installation, RStudio usage, and common troubleshooting scenarios.

    [:octicons-arrow-right-24: View documentation](./R/)

-   :material-microsoft-visual-studio-code:{ .lg .middle } __VS Code Remote Connection__

    ---

    VS Code Remote SSH can be used on the cluster to connect to compute nodes using a local VS Code interface. This page covers setup instructions, connection workflows, and best practices for using VS Code with HPC environments.

    [:octicons-arrow-right-24: View documentation](./vscode_remote_connection/)

</div>