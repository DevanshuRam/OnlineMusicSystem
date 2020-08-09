function login()
{
    var username = document.getElementsByName("username");
    var password = document.getElementsByName("pwd");

            if(username[0].value=="devanshu" && password[0].value=="123123")
            {
                alert("Login Succesful");
                window.location.replace("https://devanshuram.github.io/OnlineMusicSystem/web");
            }
            else if(username[0].value=="devanshu" && password[0].value!="123123")
            {
                alert("Invalid Password"); 
            }
            else if(username[0].value!="devanshu" && password[0].value=="123123")
            {
                alert("Invalid Username"); 
            }
            else
            {
                alert("Invalid User Name and Password");
            }

}