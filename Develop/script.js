// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = ["*", "&", "%", "$", "#","@", "!"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
generateBtn.addEventListener("click", writePassword);

// Prompts are delivered to the user once the click the 'generate password' button
// 5 different prompts are served to the user asking about the structure of the password


function generatePassword() {

  var password = "";
  var passwordCharacters = "";

  var numberOfCharacters = prompt("How many characters would you like your password to contain?");
  numberOfCharacters = parseInt(numberOfCharacters);
 
// User must pick a length of the password 8-128 characters
if (numberOfCharacters < 8){
    alert("Password must contain at least 8 characters");
    return ""
  }

  if (numberOfCharacters > 128) {
    alert("Password must contain less than 128 characters");
    return ""
  }

  // User selects 'ok' or 'cancel' to indicate if that want to include the certain types of characters

  lowercaseLetters = confirm("Do you want to add lowercase letter?");

    if (lowercaseLetters === true) {
      passwordCharacters += lowercaseLetters;
    }

  uppercaseLetters = confirm("Do you want to add uppercase letters?");

    if (uppercaseLetters === true) {
      passwordCharacters += uppercaseLetters;
    }

    numbers = confirm("Do you want to add numbers?");
    if (numbers === true) {
      passwordCharacters += numbers;
    }

    specialCharacters = confirm("Do you want to include special characters?");

    if (specialCharacters === true) {
      passwordCharacters += specialCharacters;
    }

    for (var i = 0; i < numberOfCharacters; i+1) {
      password = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
    }
}


// If user selects cancel for all prompts the prompts should loop again
// a password is created with all indicated characters and the length entered
// This password is then displayed for the user to see

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
// call other function to make it appear on the screen
}

// Add event listener to generate button

