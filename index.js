"use strict";

$("main").fitVids();

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById("date");
selectElement.innerHTML = "Today's date: " + formatDate;

function myOtherFunction() {
  var x = document.getElementById("Yes");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
function myFunction(x) {
  x.classList.toggle("change");
  theFunction();
}

function theFunction() {
  var x = document.getElementById("myTopnav");

  if (x.className === "w3-bar w3-black w3-card w3-top topnav") {
    x.className += " responsive";
    x.style = "position:fixed;top:0;";

  } else {
    x.className = "w3-bar w3-black w3-card w3-top topnav";
    x.style =
      "position:fixed;top:0; display:flex; align-items:center; overflow:hidden;";

  }
  
  function toggleMenu() {
    y = document.querySelector(".header__hamburger");
    y.classList.toggle("click");
  }
}

const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
}

const getKey = [
  function upperCase() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function symbol() {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  }
];

function createPassword() {
  const upper = document.getElementById("upperCase").checked;
  const lower = document.getElementById("lowerCase").checked;
  const number = document.getElementById("number").checked;
  const symbol = document.getElementById("symbol").checked;
  if (upper + lower + number + symbol === 0) {
    alert("Please check atleast one box!");
    return;
  }
  const passwordBox = document.getElementById("passwordBox");
  const length = document.getElementById("length");
  let password = "";
  while (length.value > password.length) {
    let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    let isChecked = document.getElementById(keyToAdd.name).checked;
    if (isChecked) {
      password += keyToAdd();
    }
  }
  passwordBox.innerHTML = password;
}

function copyPassword() {
  const textarea = document.createElement("textarea");
  const password = document.getElementById("passwordBox").innerText;
  if (!password) { return; }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
}