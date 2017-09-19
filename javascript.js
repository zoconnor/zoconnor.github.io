// Contact Us - Submit Button Click
function validateForm() 
{
    var a = document.forms[contactForm][firstname].value;
    if (a == "")
        {
            alert("First Name must be filled out.");
            return false;
        }
    var b = document.forms[contactForm][lastname].value;
    if (b == "")
        {
            alert("Last Name must be filled out.");
            return false;
        }
    var c = document.forms[contactForm][email].value;
    if(c == "")
        {
            alert("Email must be filled out.");
            return false; 
        }
    var d = document.forms[contactForm][contactreason].value;
    if(d == "")
        {
            alert("Reason must be filled out.");
            return false; 
        }
    var e = document.forms[contactForm][subject].value;
    if(e == "")
        {
            alert("Subject must be filled out.");
            return false; 
        }
    else
        {
            return true;
        }
}

// Contact Us - Clear Button Click
function clearForm()
{
    document.getElementById(contactForm).reset();
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}