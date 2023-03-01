
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

var userSelection = [];

function randomSpecialChar() {
  // create cope listChar into an array
  var listChar = ["@", "$", "!", "<", ">", "?", "&", "%", "@"];
  const char = listChar[Math.floor(Math.random() * listChar.length)];
  return char;
}

function randomLowerChar() {
  // create cope listChar into an array
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
  const lowChar = lowerChar[Math.floor(Math.random() * lowerChar.length)];
  return lowChar;
}

function randomUpperChar() {
    var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const upChar = upperChar[Math.floor(Math.random() * upChar.length)]
    return upChar
}

function randomNumChar() {
    let numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const ranNum = numChar[Math.floor(Math.random() * ranNum.length)]
    return ranNum
}

// var finalPassword = window.open("renderedPassword")

function promptMe() {
  var userPassword = prompt(
    "Please chose a password lenght between 8 and 128 characters long"
  );

  if (userPassword < 8 || userPassword > 128) {
    alert("Your password does dont meet criteria");
    promptMe();
  } else {
    var specialChar = confirm("Do you want to include special characters");
    var lowercaseChar = confirm("Do you wish to add a lower case letter");
    var uppercaseChar = confirm("Do you wish to add a upper case letter");
    var numberChar = confirm("Do you wish to add a number");
    if (specialChar || lowercaseChar || uppercaseChar || numberChar) {
      if (specialChar) {
        // add fuction for random selection do the same for other
        optionChar = randomSpecialChar();
        // optionChar.concat(listChar)
        console.log(optionChar);
      }
      if (numberChar) {
          // optionChar = optionChar.concat(numChar)
          optionNum = randomNumChar()
          // optionChar.concat(listChar)
          console.log(optionNum)
      }
      if (lowercaseChar) {
        // optionChar = optionChar.concat(UpperChar)
        optionLow = randomLowerChar();
        // optionChar.concat(listChar)
        console.log(optionLow);
      }
      if (uppercaseChar) {
          // optionChar = optionChar.concat(UpperChar)
          optionUp = randomUpperChar()
          // optionChar.concat(listChar)
          console.log(optionUp)
      }
      for (var i = 0; i < userPassword; i++) {
        var randomIndex = math.floor(Math.random() * userSelection.lenght);
        console.log(randomIndex)
        passwordfinal = passwordfinal + userSelection[randomIndex]
        console.log(userSelection)
        return passwordfinal;
      };
    } else {
      alert("Your password does dont meet criteria");
    }
  }
 

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }


















// function passwordGenerated() {
//     var userOptions= userPassword
//   if (lowercase) {
//     userSelection = userSelection.push(lowercase);
//   }
//   if (lowercase) {
//     userSelection = userSelection.push(lowercase);
//   }
//   if (lowercase) {
//     userSelection = userSelection.push(lowercase);
//   }
//   if (lowercase) {
//     userSelection = userSelection.push(lowercase);
//   }
// }
// var passwordfinal = "";

// console.log(userSelection)



//   for (var i = 0; i < userPassword; i++) {
//       var finalPassword = (listChar[i] + lowerChar[i] +
//       UpperChar + numChar[i]);
//       alert(finalPassword)
//   }
//   var password = document.getElementById("password");
//    var generatedPass = alert(optionChar)
}




// var specialChar = ["@", "$", "!", "<", ">", "?", "&", "%", "@"]
// var lowercaseChar = [""]
// console.log("user password: ", userPassword)

// prompt(
//     "Please include at least one of the following; lowercase, uppercase, numeric, and/or special characters"
//   );

// alert (userPassword);

// var passwordChar = prompt("Please include at least one of the following; lowercase, uppercase, numeric, and/or special characters");
// alert (userPassword);

// work with the || sign, looking in to using split method
// }

// if (passwordLength => userPassword.length) {
//     console.log("Meets Criteria");

// } else if (passwordLength) {
//     prompt("Please make password at least 8 characters long");
//   }

// 2nd ATTEMPT AFTER READING SECTION 17
// var userPassword = length(8)

// var passwordChar = ("@", "&", "$", "*", "#")

// function meetsCriteria(userPassword, passwordLength) {
//     if (x === y) {
//       console.log('Meets Criteria');
//     } else if (x == y) {
//       console.log('ehh');
//     } else {
//       console.log('Please make password at least 8 characters long');
//     }
//     return;
//   }

//   function meetsCriteria2(userPassword, passwordChar) {
//     if (x === y) {
//       console.log('Meets Criteria');
//     } else if (x == y) {
//       console.log('ehh');
//     } else {
//       console.log('Please use a special character from the list above');
//     }
//     return;
//   }

// var passwordCheck = (passwordLength => text.length)

// console.log(passwordCheck)

// if { const userPassword !== function text.passwordLength }
// if {
//     console.log(userPassword == function
// }

//         const passwordCrit = function () {
//             const passwordLength = prompt('Make password at least 8 characters long').toLowerCase();
// if (playerChoice !== 'r' && playerChoice !== 'p' && playerChoice !== 's') {
//   alert("You must choose a valid option");
//   return;
// }





// var listChar = ["@", "$", "!", "<", ">", "?", "&", "%", "@"]
// var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var UpperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// var numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// var optionChar = ""

// function randomSpecialChar() {
//     // create cope listChar into an array
//     var listChar = ["@", "$", "!", "<", ">", "?", "&", "%", "@"]
//     const char = listChar[Math.floor(Math.random() * listChar.length)]
//     return char
// }

// function randomSpecialChar() {
//     // create cope listChar into an array
//     var listChar = ["@", "$", "!", "<", ">", "?", "&", "%", "@"]
//     const char = listChar[Math.floor(Math.random() * listChar.length)]
//     return char
// }

// function randomSpecialChar() {
//     // create cope listChar into an array
//     var listChar = ["@", "$", "!", "<", ">", "?", "&", "%", "@"]
//     const char = listChar[Math.floor(Math.random() * listChar.length)]
//     return char
// }

// // var finalPassword = []



// function promptMe() {
//   var userPassword = prompt(
//     "Please chose a password lenght between 8 and 128 characters long"
//   );

//   if (userPassword < 8 || userPassword > 128) {
//     alert("Your password does dont meet criteria");
//     promptMe();
//   } else {
//     var specialChar = confirm("Do you want to include special characters");
//     var lowercaseChar = confirm("Do you wish to add a lower case letter");
//     var uppercaseChar = confirm("Do you wish to add a upper case letter");
//     var numberChar = confirm("Do you wish to add a number");
//     if (specialChar || lowercaseChar || uppercaseChar || numberChar) {
//         if (specialChar) { 
//             // add fuction for random selection do the same for other 
//             optionChar = randomSpecialChar()
//             // optionChar.concat(listChar)
//             console.log(optionChar)
//         }
//         if (numberChar) {
//             optionChar = optionChar.concat(numChar)
//         }
//         if (lowercaseChar) {
//             optionChar = optionChar.concat(UpperChar)
//         }
//     } else {
//       alert("Your password does dont meet criteria");
//     }
//   }
// for (var i = 0; i < userPassword; i++) {
//     var finalPassword = (listChar[i] + lowerChar[i] +
//     UpperChar + numChar[i]);
//     alert(finalPassword)
// }
// // var password = document.getElementById("password");
// // var generatedPass = alert(optionChar)
// }