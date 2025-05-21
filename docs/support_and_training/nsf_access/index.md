# NSF ACCESS CI

## About ACCESS

!!! tip "ACCESS has succeeded the XSEDE program which concluded in August 2022."

ACCESS is a comprehensive NSF-funded initiative designed to facilitate usage of national supercomputing resources for researchers, educators, and students. These resources encompass state-of-the-art computing clusters, data and storage services, scientific applications, educational materials, workshops, and dedicated support services.

For University of Arizona (UArizona) affiliates, ACCESS presents an opportunity to leverage additional computing power and resources beyond what is available through UArizona's existing High-Performance Computing (HPC) infrastructure. Notable advantages and use cases for UArizona affiliates include:

- Researchers requiring extended computing time or additional computational resources beyond the capacity of UArizona's HPC systems.
- Users seeking computational resources for Windows-based software applications. For instance, Jetstream2, a national resource, offers Windows Virtual Machines (VMs) to accommodate such needs.
- Educators looking to harness GPU resources for classroom instruction. While UArizona's HPC facilities do provide GPU resources, high demand may lead to prolonged wait times, making ACCESS an appealing alternative.

For more information on ACCESS, see: [https://access-ci.org/](https://access-ci.org/)

## ACCESS Resources Catalog

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
<div id="resource-catalog-react"></div>
<script type="module">
  const baseUrl = "https://esm.sh/@xras/ui@onramps_v1/dist";
  import {
    onRampsResourceCatalog,
    shadowTarget,
  } from "https://esm.sh/@xras/ui@onramps_v1/dist/xras-ui.js";
  onRampsResourceCatalog({
    target: shadowTarget(
        document.getElementById("resource-catalog-react"),
        { accessStyles: true, baseUrl }
    ),
    onRamps: true,
    baseUrl
  });
</script>