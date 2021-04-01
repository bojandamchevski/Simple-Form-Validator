var form = document.getElementById("form");
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-pass");
var date = document.getElementById("date");

var radioMale = document.getElementById("male");
var radioFemale = document.getElementById("female");
var radioOther = document.getElementById("other");

function radioButtonValidation(input1, input2, input3, message1, message2) {
    var formControl = document.getElementsByClassName("form-control2")[0];
    var small = formControl.querySelector("small");
    if (input1.checked === true || input2.checked === true || input3.checked === true) {
        formControl.className = "form-control2 success";
        small.innerText = message1;
    }
    else {
        formControl.className = "form-control2 error";
        small.innerText = message2;
    }
}

function message(input, message1, message2) {
    var formControl = input.parentElement;
    var small = formControl.querySelector("small");
    if (input.value === "") {
        formControl.className = "form-control error";
        small.innerText = message1;
        return;
    }
    else {
        if(input.value.length < 3){
            formControl.className = "form-control error";
            small.innerText = "Type at least 3 characters !";
            return;
        }
        else{
            formControl.className = "form-control success";
            small.innerText = message2;
            return;
        }
    }
}

function emailValidation(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isEmailValid(input) {
    var formControl = input.parentElement;
    var small = formControl.querySelector("small");
    if (input.value === "") {
        message(input, "E-mail required !", "E-mail approved !");
    }
    else {
        if (!emailValidation(input.value)) {
            formControl.className = "form-control error";
            small.innerText = "E-mail is not valid";
        }
        else {
            message(input, "E-mail required !", "E-mail approved !");
        }
    }
}

function passwordConfirmation(input) {
    var formControl = input.parentElement;
    var small = formControl.querySelector("small");
    if (input.value === "") {
        formControl.className = "form-control error";
        small.innerText = "Password confirmation required !";
    }
    else {
        if (password.value !== input.value) {
            formControl.className = "form-control error";
            small.innerText = "Passwords do not match !";
        }
        else {
            formControl.className = "form-control success";
            small.innerText = "Passwords match !";
        }
    }
}

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    message(firstName, "First Name required !", "First Name approved !");
    message(lastName, "Last Name required !", "Last Name approved !");
    message(username, "Username required !", "Username approved !");
    message(password, "Password required !", "Password approved !");
    message(date, "Date of birth required !", "Date of birth approved !");
    passwordConfirmation(confirmPassword);
    isEmailValid(email);
    radioButtonValidation(radioMale,radioFemale,radioOther,"Gender approved !","Gender required !");
});

document.getElementById("reset").addEventListener("click", () => {
    document.querySelectorAll("input").forEach(input => input.value = "");
});