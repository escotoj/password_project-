
//  FIRST ATTEMPT USING TIPS AND CODE FROM CLASS
var listChar = ["@", "$", "!", "<", ">", "?", "&", "%", "@"];
var lowerChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var optionChar = "";
var optionNum = "";
var optionUp = "";
var optionLow = "";

var userSelection = []; // -----

function randomSpecialChar() {
  var char = listChar[Math.floor(Math.random() * listChar.length)];
  return char;
}

function randomLowerChar() {
  var lowChar = lowerChar[Math.floor(Math.random() * lowerChar.length)];
  return lowChar;
}

function randomUpperChar() {
  var upChar = upperChar[Math.floor(Math.random() * upperChar.length)];
  return upChar;
}

function randomNumChar() {
  var ranNum = numChar[Math.floor(Math.random() * numChar.length)];
  return ranNum;
}

function promptMe() {
  var userPassword = prompt(
    "Please choose a password length between 8 and 128 characters long"
  );

  if (userPassword < 8 || userPassword > 128) {
    alert("Your password does not meet criteria");
    promptMe();
  } else {
    var specialChar = confirm("Do you want to include special characters");
    var lowercaseChar = confirm("Do you wish to add a lower case letter");
    var uppercaseChar = confirm("Do you wish to add a upper case letter");
    var numberChar = confirm("Do you wish to add a number");

    var passwordFinal = "";
    while (passwordFinal.length < userPassword) {
      if (specialChar && passwordFinal.length < userPassword) {
        optionChar = randomSpecialChar();
        listChar.splice(listChar.indexOf(optionChar), 1);
        passwordFinal += optionChar;
      }
      if (numberChar && passwordFinal.length < userPassword) {
        optionNum = randomNumChar();
        numChar.splice(numChar.indexOf(optionNum), 1);
        passwordFinal += optionNum;
      }
      if (lowercaseChar && passwordFinal.length < userPassword) {
        optionLow = randomLowerChar();
        lowerChar.splice(lowerChar.indexOf(optionLow), 1);
        passwordFinal += optionLow;
      }
      if (uppercaseChar && passwordFinal.length < userPassword) {
        optionUp = randomUpperChar();
        upperChar.splice(upperChar.indexOf(optionUp), 1);
        passwordFinal += optionUp;
        var passwordText = document.getElementById("password");
        passwordText.textContent = passwordFinal;
    } else {
      alert("Your password does not meet the criteria");
    }
  }}
};

  












