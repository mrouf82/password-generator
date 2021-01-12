// Generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //define the variables
  var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var letterLowerCharacters = [
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
  var letterUpperCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
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
  var symbolsCharacters = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "^",
    "&",
    "*",
    "?",
    "/",
    "+",
    "-",
  ];

  //initial password is blank
  var outputPassword = "";

  var input = [];

  //allows the input of character length to be a number instead of string.
  var charLength = parseInt(
    prompt("Choose size of password(min: 8, max: 128 character)")
  );
  if (isNaN(charLength)) {
    alert("This is not a number. Please input a number from 8 to 128.");
    return "";
  }
  //for input not in range
  if (charLength < 8 || charLength > 128) {
    alert("Please input number from 8 to 128");
    return "";
  }
  // all the criteria for the password
  var inputUpperCase = confirm("Include Uppercase letters?");
  if (inputUpperCase) {
    input = input.concat(letterUpperCharacters);
  }

  var inputLowerCase = confirm("Include Lowercase letters?");
  if (inputLowerCase) {
    input = input.concat(letterLowerCharacters);
  }

  var inputNumber = confirm("Include Numbers?");
  if (inputNumber) {
    input = input.concat(numberCharacters);
  }

  var inputSymbol = confirm("Include Symbols?");
  if (inputSymbol) {
    input = input.concat(symbolsCharacters);
  }
  //in case the user doesn't select the criteria
  if (
    inputLowerCase === false &&
    inputUpperCase === false &&
    inputSymbol === false &&
    inputNumber === false
  ) {
    alert("You have to choose atleast one of the criteria to get a password.");
    return "";
  }

  for (var i = 0; i < charLength; i++) {
    outputPassword += input[Math.floor(Math.random() * input.length)];
  }
  return outputPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
