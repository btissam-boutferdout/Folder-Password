let myInput = document.getElementById("psw");
let LowerCase = document.getElementById("lower");
let UpperCase = document.getElementById("upper");
let Number = document.getElementById("number");
let Length = document.getElementById("length");
//
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
}; //
myInput.onkeyup = function () {
  let LowerCaseS = /[a-z]/g;
  if (myInput.value.match(LowerCaseS)) {
    LowerCase.classList.remove("invalid");
    LowerCase.classList.add("valid");
  } else {
    LowerCase.classList.remove("valid");
    LowerCase.classList.add("invalid");
  } // for upper case
  let UpperCaseS = /[A-Z]/g;
  if (myInput.value.match(UpperCaseS)) {
    UpperCase.classList.remove("invalid");
    UpperCase.classList.add("valid");
  } else {
    UpperCase.classList.remove("valid");
    UpperCase.classList.add("invalid");
  } //for numbres
  let NumberS = /[0-9]/g;
  if (myInput.value.match(NumberS)) {
    Number.classList.remove("invalid");
    Number.classList.add("valid");
  } else {
    Number.classList.remove("valid");
    Number.classList.add("invalid");
  } // for length
  if (myInput.value.length >= 8) {
    Length.classList.remove("invalid");
    Length.classList.add("valid");
  } else {
    Length.classList.remove("valid");
    Length.classList.add("invalid");
  }
};
