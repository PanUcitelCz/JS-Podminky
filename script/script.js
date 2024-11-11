function Login(){
    const password = document.getElementById("password");
    const control_password = document.getElementById("control_password");
    const output = document.getElementById("output");
    let code = document.getElementById("code");

    if(password.value == control_password.value)
    {
        if(!isNaN(code.value))
        {
            output.innerHTML = "Login is true";
        }
        else
        {
            output.innerHTML = "Login is false";
        }
    }
    else
    {
        output.innerHTML = "Login is false";
    }
}

function Login_a(){
    const password = document.getElementById("password");
    const control_password = document.getElementById("control_password");
    const output = document.getElementById("output");
    const nick = document.getElementById("nick");
    let code = document.getElementById("code");

    if((password.value == control_password.value) && (!isNaN(code.value)))
    {
        output.innerHTML = "Login is true";
    }
    else
    {
        output.innerHTML = "Login is false";
    }

    // || - pravý alt + W

    if((nick.value == "") || (password.value == "") || (control_password.value == "") || (code.value == ""))
    {
        output.innerHTML = "Any input is empty";
    }
}