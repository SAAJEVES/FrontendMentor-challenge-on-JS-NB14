// Get firstname
let firstNameDiv = document.querySelector(".firstname");
let firstNameInput = document.querySelector("#fname");
let firstNameAlert = document.querySelector(".fname-alert");

firstNameInput.onfocus = () => {
    if (firstNameAlert.style.display == "block") {
        firstNameAlert.style.display = "none";
        firstNameInput.style.backgroundImage = "";
    }
}


// Get lastname
let lastNameDiv = document.querySelector(".lastname");
let lastNameInput = document.querySelector("#lname");
let lastNameAlert = document.querySelector(".lname-alert");

lastNameInput.onfocus = () => {
    if (lastNameAlert.style.display == "block") {
        lastNameAlert.style.display = "none";
        lastNameInput.style.backgroundImage = "";
    }
}


// Get email
let emailDiv = document.querySelector(".email");
let emailInput = document.querySelector("#email");
let emailAlert = document.querySelector(".email-alert");

emailInput.onfocus = () => {
    if (emailAlert.style.display == "block") {
        emailAlert.style.display = "none";
        emailInput.style.backgroundImage = "";
    }
}


// Get password
let pswdlDiv = document.querySelector(".password");
let pswdInput = document.querySelector("#pword");
let pswdAlert = document.querySelector(".pword-alert");

pswdInput.onfocus = () => {
    if (pswdAlert.style.display == "block") {
        pswdAlert.style.display = "none";
        pswdInput.style.backgroundImage = "";
    }
}


// Get button
let btn = document.querySelector(".button");

// Get form
let form = document.querySelector(".form");

// Get form div
let formDiv = document.querySelector(".form-container");





btn.onclick = function (e) {
    e.preventDefault();
    let fnameValue = firstNameInput.value;
    let lnameValue = lastNameInput.value;
    let emailValue = emailInput.value;
    let pswdValue = pswdInput.value;
    let theTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Validation for Firstname
    function valFname() {
        if (fnameValue == "") {
            firstNameAlert.style.display = "block";
            firstNameInput.style.backgroundImage = "url(icon-error.svg)";
        }
    };

    // Validation for Lastname
    function valLname() {
        if (lnameValue == "") {
            lastNameAlert.style.display = "block";
            lastNameInput.style.backgroundImage = "url(icon-error.svg)";
        }
    };


    // Validation for Password
    function valPswd() {
        if (pswdValue == "") {
            pswdAlert.style.display = "block";
            pswdInput.style.backgroundImage = "url(icon-error.svg)";
        }
    };

    // Validatio for Email address
    function valEmail() {
        if (theTest.test(emailValue) === false) {
            emailAlert.style.display = "block";
            emailInput.style.backgroundImage = "url(icon-error.svg)";
        }
    };

    if (fnameValue == "" || lnameValue == "" || pswdValue == "" || theTest.test(emailValue) === false) {
        valFname();
        valLname();
        valPswd();
        valEmail();
    } else {
        btn.onclick = null;
    }
}