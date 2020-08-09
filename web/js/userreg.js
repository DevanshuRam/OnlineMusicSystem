var pass = document.getElementById("n_pass");
var c_pass = document.getElementById("c_pass");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
        

        pass.onfocus = function () 
        {
            document.getElementById("pass_verify").style.display = "block";
        }

        pass.onblur = function () 
        {
            document.getElementById("pass_verify").style.display = "none";
        }

        pass.onkeyup = function () 
        {
            
            var upperCaseLetters = /[A-Z]/g;
            if (pass.value.match(upperCaseLetters)) {
                capital.classList.remove("invalid");
                capital.classList.add("valid");
            } else {
                capital.classList.remove("valid");
                capital.classList.add("invalid");
            }

            
            var numbers = /[0-9]/g;
            if (pass.value.match(numbers)) {
                number.classList.remove("invalid");
                number.classList.add("valid");
            } else {
                number.classList.remove("valid");
                number.classList.add("invalid");
            }

            
            if (pass.value.length >= 8) 
            {
                length.classList.remove("invalid");
                length.classList.add("valid");
            } 
            else 
            {
                length.classList.remove("valid");
                length.classList.add("invalid");
            }
        }

function validate()
{
    var ps1 = document.getElementsByName("pwd");
    var ps2 = document.getElementsByName("repwd");
    
    if(ps1[0].value != ps2[0].value)
    {
      alert("Please Enter The Same password");
    }
    else
    {
      alert("Registration Successful");
    }  
}