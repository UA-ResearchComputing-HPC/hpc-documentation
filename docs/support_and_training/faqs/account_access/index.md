# Account Access

<link rel="stylesheet" href="../../../assets/stylesheets/animated_dropdown.css">
<link rel="stylesheet" href="../../../assets/stylesheets/spacing.css">

<html>


<button class="collapsible">How do I create an account?</button>
<div class="content">
  <p>A step by step guide is available in our <a href="../../../registration_and_access/account_creation/">Account Creation</a> page. </p>
</div>


<button class="collapsible">Why can't I log in?</button>
<div class="content">
  <p>There are many reasons you may be having issues logging in. A possible list of reasons may include:
    <ul>
        <li>You haven't <a href="../../../registration_and_access/account_creation/">created an account</a> yet or you have not yet been sponsored.</li>
        <li>You aren't using two-factor authentication (NetID+).</li>
        <li>You need to wait 15 minutes. If you just created your account, it takes time before you can log in.</li>
        <li>You're trying to connect using ssh <code>&#60;netid&#62;@login.hpc.arizona.edu</code>. This will not work. Instead, use: <code>ssh &#60;netid&#62;@hpc.arizona.edu</code>.</li>
        <li>You're using <code>&#60;netid&#62;@hpc.arizona.edu</code> or <code>&#60;netid&#62;@email.arizona.edu</code> as your username in PuTTY. Instead, use only your NetID.</li>
        <li>You've entered your password incorrectly too many times. After multiple failed password entries, the system will place a 60 minute ban on your account for security reasons. Your account will automatically unlock after 60 minutes. Attempting to log in before your account unlocks will reset the timer. </li>
    </ul></p>
</div>

<button class="collapsible">Why can't I enter my password in my terminal?</button>
<div class="content">
  <p>Linux systems do not display character strokes while entering your password which can make it look like the SSH client is frozen. Even though it doesn't appear that anything is happening, the system is still logging your input. To proceed, type your password at the prompt and press enter.</p>
</div>

<button class="collapsible">Why am I getting "You do not appear to have registered for an HPC account"?</button>
<div class="content">
  <p>If you have just registered for an HPC account, you need to wait a little while for the request to propagate through the University systems (this can take up to an hour).  Patience &#128578; </p>
</div>

<button class="collapsible">Why am I getting "permission denied" when I try to log in?</button>
<div class="content">
  <p>You need an HPC account - see our <a href="../../../registration_and_access/account_creation/">Account Creation page</a> for details.  Once you've done that, you'll need to wait a little while to log in. If your PI hasn't already added you to their group, you'll need to wait for that as well.</p>
</div>

<button class="collapsible">Why am I unable to log in with the error "Your account is disabled and cannot access this application. Please contact your administrator."?</button>
<div class="content">
  <p>This error shows up when your NetID has been locked, usually due to multiple failed login attempts when trying to access university services. Contact 24/7 to unlock your account: <a href="https://it.arizona.edu/get-support">https://it.arizona.edu/get-support</a></p>
</div>

<button class="collapsible">Why am I getting the message "incorrect password" when I try to log in?</button>
<div class="content">
  <p>
      <ul>
          <li>Ensure you are using the correct password. Sometimes typing your password into a plain text file and copying/pasting it into the terminal can help.</li>
          <li>You need to wait about 15 minutes after your account is approved for the account to be available</li>
          <li>You must <a href="https://netid-portal.iam.arizona.edu/">enroll in NetID+</a>. Depending on the application you use to log in, you may not get the typical NetID+/Duo menu of options, or an error message indicating this is your problem</li>
      </ul>
  </p>
</div>

<button class="collapsible">I've forgotten my password, how can I reset it?</button>
<div class="content">
  <p>HPC uses the same NetID login credentials as all UArizona services. If you need to reset your NetID password you can do so using <a href="https://netid-portal.iam.arizona.edu/">the NetID portal</a>.</p>
</div>

<button class="collapsible">How do I add members to my HPC research group?</button>
<div class="content">
  <p>Faculty members who manage their own HPC groups can follow the instructions in our <a href="../../../registration_and_access/group_management/">Research and Class Groups</a> page.</p>
</div>

<button class="collapsible">I'm leaving the university/retiring/not affiliated with the university, can I maintain/receive access to HPC?</button>
<div class="content">
  <p>Yes, if you are a former university affiliate or campus collaborator participating in research, you may register as a <a href="https://it.arizona.edu/service/designated-campus-colleague-accounts">Designated Campus Colleague (DCC)</a>. Once your DCC status has been approved, you will receive a NetID+ which you may use to <a href="../../../registration_and_access/account_creation/">create an HPC Account</a>. If you already have an HPC Account, no further action is required.</p>
</div>



<div class="vertical-space"></div>
<script src="../../../assets/javascripts/animated_dropdown.js"></script>
</html>