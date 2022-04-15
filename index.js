var loginFormEl = document.getElementById("login-form");
var registerFormEl = document.getElementById("register-form");
var pointerBtnEl = document.getElementById("pointer-btn");
var loginEl = document.getElementById("login");
var registerEl = document.getElementById("register");
var actionTitleEl = document.getElementById("action_title");

function register() {
    loginFormEl.style.left = "-450px";
    registerFormEl.style.left = "25px";
    pointerBtnEl.style.left = "215px";
    loginEl.style.color = "#848484";
    registerEl.style.color = "#00ffc3";
    actionTitleEl.textContent = "Register";
}

function login() {
    loginFormEl.style.left = "25px";
    registerFormEl.style.left = "450px";
    pointerBtnEl.style.left = "30px";
    loginEl.style.color = "#00ffc3";
    registerEl.style.color = "#848484";
    actionTitleEl.textContent = "Login";
}	