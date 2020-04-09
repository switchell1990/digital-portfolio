function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if(name.length < 5){
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter valid Email containing @";
        error_message.innerHTML = text;
        return false;
    }
    if(subject.length < 10){
        text = "Please Enter More than 10 Characters in your Subject";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length < 60){
        text = "Please Enter More Than 60 Characters in your Message";
        error_message.innerHTML = text;
        return false;

    }
    return true;
}