var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    var links = content.querySelectorAll('a'); // Select all links within the collapsible content

    // Toggle the "active" class on the collapsible button
    this.classList.toggle("active");

    // Toggle the visibility of the collapsible content
    if (content.style.maxHeight){
      // If the content is currently expanded, collapse it
      content.style.maxHeight = null;
      // Disable tabbing for links when collapsing
      links.forEach(function(link) {
        link.tabIndex = -1;
      });
    } else {
      // If the content is currently collapsed, expand it
      content.style.maxHeight = content.scrollHeight + "px";
      // Enable tabbing for links when expanding
      links.forEach(function(link) {
        link.tabIndex = 0;
      });
      // Focus on the first link when expanding
      if (links.length > 0) {
        links[0].focus();
      }
    }
  });

  // Initially disable tabbing for links within collapsed elements
  var content = coll[i].nextElementSibling;
  var links = content.querySelectorAll('a');
  links.forEach(function(link) {
    link.tabIndex = -1;
  });
}
