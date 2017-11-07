// Contact Us - Submit Button Click
function validateForm() 
{
    var a = document.contactForm.firstname.value;
    var b = document.contactForm.lastname.value;
    var c = document.contactForm.email.value;
    var d = document.contactForm.contactreason.value;
    var e = document.contactForm.subject.value;

    if (a == "" || a == null)
        {
            alert("First Name must be filled out.");
            return false;
        }
    else if (b == "" || b == null)
        {
            alert("Last Name must be filled out.");
            return false;
        }
    else if(c == "" || c == null)
        {
            alert("Email must be filled out.");
            return false; 
        }
    else if(d == "" || d == null)
        {
            alert("Reason must be filled out.");
            return false; 
        }
    else if(e == "" || e == null)
        {
            alert("Subject must be filled out.");
            return false; 
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

// Close the dropdown if the user clicks outside of it
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