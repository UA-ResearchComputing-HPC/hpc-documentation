# Secure Services

<link rel="stylesheet" href="../../../assets/stylesheets/animated_dropdown.css">
<link rel="stylesheet" href="../../../assets/stylesheets/spacing.css">

<html>
    
<button class="collapsible">How do I get access to Soteria?</button>
<div class="content">
  <p>
    You will first need to request access. Follow the instructions in our <a href="../../../resources/secure_hpc/">Secure HPC page</a> to see all the steps that are required.
  </p>
</div>


<button class="collapsible">Why am I getting "Operation timed out" when I try to ssh to Soteria?</button>
<div class="content">
  <p>
    It's possible you're not <a href="../../../resources/secure_hpc/#prerequisites-and-registration">connected to the VPN</a>. You will need to be connected to access any Soteria resources.
  </p>
</div>


<button class="collapsible">How do I transfer my data to Soteria?</button>
<div class="content">
  <p>
    The easiest way to transfer your data to Soteria is using Globus. We have a high assurance endpoint set up accessible under the endpoint <b>UA HPC HIPAA Filesystems</b>.
  </p>
</div>


<button class="collapsible">Does my personal computer's Globus endpoint need to be set to high assurance?</button>
<div class="content">
  <p>
  It depends.

  You do not need your personal computer's Globus endpoint set to high assurance for the purposes of transferring data to Soteria using our UArizona HPC HIPAA Filesystems endpoint. HIPAA requires data transfer auditing. We log transfers on our DTN that use the HIPAA endpoint, regardless of the client's managed status.
  <br><br>
  If you are working with another institution/endpoint that only allows connections from high assurance endpoints, then you must enable High Assurance during your Globus Personal Connect configuration process. This requires that you are added to our Globus subscription which can be done by <a href="https://uarizona.service-now.com/sp?id=sc_cat_item&sys_id=2983102adbd23c109627d90d689619c6&sysparm_category=84d3d1acdbc8f4109627d90d6896191f">opening a support ticket</a> to request help from our consultants. Your endpoint must be set to public to allow us to add you. Once you have been added, you may set your endpoint to private.

  </p>
</div>
    
    
<div class="vertical-space"></div>
<script src="../../../assets/javascripts/animated_dropdown.js"></script>
</html>