// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
//Math.floor(Math.random()*99999999)+1
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
