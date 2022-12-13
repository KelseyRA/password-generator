// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables containing possible password character values.

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["*", "&", "%", "$", "#","@", "!"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variables for user questions.

var includeLowercaseLetters;
var includeUppercaseLetters;
var includeNumbers;
var includeSpecialCharacters;

// Add event listener to generate button
// Prompts are delivered to the user once the click the 'generate password' button

generateBtn.addEventListener("click", writePassword);


// 5 different prompts are served to the user asking about the structure of the password

function generatePassword() {
  
  var numberOfCharacters = [];
  var passwordCharacters = [];

  // User must pick a length of the password 8-128 characters

  var numberOfCharacters = (prompt("How many characters would you like your password to contain?"));

   numberOfCharacters = numberOfCharacters;
 
// Check to make sure the user has entered a valid length

if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert("Password must contain at least 8 characters and no more than 128.");
    numberOfCharacters = (prompt("How many characters would you like your password to contain?"));
  }

  // User selects 'ok' or 'cancel' to indicate if that want to include the certain types of characters

  includeLowercaseLetters = confirm("Do you want to add lowercase letter?");
  includeUppercaseLetters = confirm("Do you want to add uppercase letters?");
  includeNumbers = confirm("Do you want to add numbers?");
  includeSpecialCharacters = confirm("Do you want to include special characters?");


  // If user selects cancel for all prompts an alert will be shared then the questions will be asked again.

  while (includeLowercaseLetters === false && includeUppercaseLetters === false && includeNumbers === false && includeSpecialCharacters === false) {
    alert("You have not selected any types of characters a password cannot be generated.");
    includeLowercaseLetters = confirm("Do you want to add lowercase letter?");
    includeUppercaseLetters = confirm("Do you want to add uppercase letters?");
    includeNumbers = confirm("Do you want to add numbers?");
    includeSpecialCharacters = confirm("Do you want to include special characters?");
  }

    if (includeLowercaseLetters === true) {
      passwordCharacters = passwordCharacters.concat(lowercaseLetters);
    }

    if (includeUppercaseLetters === true) {
      passwordCharacters = passwordCharacters.concat(uppercaseLetters);
    }

    
    if (includeNumbers === true) {
      passwordCharacters = passwordCharacters.concat(numbers);
    }


    if (includeSpecialCharacters === true) {
      passwordCharacters = passwordCharacters.concat(specialCharacters);
    }


    // a password is created with all indicated characters and the length entered
    
    var finishedPassword = [];

    for (var i = 0; i < numberOfCharacters; i++) {
      finishedPassword = finishedPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
      console.log(finishedPassword);
    }

    return(finishedPassword);

}

// The password is then displayed for the user to see
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}







