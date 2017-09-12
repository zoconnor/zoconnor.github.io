function validateForm() 
{
    var a = document.forms[contactForm][firstname].value;
    if (a == "")
        {
            alert("First Name must be filled out.");
            return false;
        }
    var b = document.forms["contactForm"]["lastname"].value;
    else if (b == "")
        {
            alert("Last Name must be filled out.");
            return false;
        }
    var c = document.forms["contactForm"]["email"].value;
    else if(c == "")
        {
            alert("Email must be filled out.");
            return false; 
        }
    var d = document.forms["contactForm"]["contactreason"].value;
    else if(d == "")
        {
            alert("Reason must be filled out.");
            return false; 
        }
    var e = document.forms["contactForm"]["subject"].value;
    else if(e == "")
        {
            alert("Subject must be filled out.");
            return false; 
        }
}

function clearForm()
{
    document.getElementById("contactForm").reset();
}