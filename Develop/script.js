// var numberCharacters = ['0','1','2','3','4','5','6','7','8','9']
// var letterLowerCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// var letterUpperCharacters = ['A','B','C','D','E','F','G','H','I','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
// var symbolsCharacters = ['~','`','!','@','#','$','^','&','*','?','/','+','-']
// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// var form = document.getElementById('passwordOutput')

// let characterLengthElement = document.getElementById('characterLength')
// let uppercaseElement = document.getElementById('uppercase')
// let lowercaseLengthElement = document.getElementById('lowercase')
// let symbolsElement = document.getElementById('symbols')
// let passwordDisplay = document.getElementById('passwordDisplay')

// // Write password to the #password input
// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");
// //   var letterChar = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
// //   var letterUpperChar = [A,B,C,D,E,F,G,H,I,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
// //   passwordText.value = password;
// // //Math.floor(Math.random()*99999999)+1
// // }

// // Add event listener to generate button
// //generateBtn.addEventListener("click", writePassword);

// //this prevents the generated password from disappearing again
// form.addEventListener("click", function(event){
//   event.preventDefault();
// // these allow the criteria to be applied if clicked
//   let characterLength = characterLengthElement.value
//   let uppercase = uppercaseElement.checked
//   let lowercase = lowercaseLengthElement.checked
//   let symbols = symbolsElement.checked
//   let password = generatePassword (characterLength, uppercase, lowercase, symbols)
//   passwordDisplay.innerText = password;
// })


// function generatePassword( characterLength, uppercase, lowercase, symbols) {
//  let characters = numberCharacters;
//  if ( uppercase ) {characters = characters.concat(letterUpperCharacters)}
//  if (lowercase ) {characters = characters.concat(letterLowerCharacters)}
//  if (symbols ) {characters = characters.concat(symbolsCharacters)}
//  const passwordCharacters = []
//  for (let i=0; i <characterLength; i++)
//  const output = characters[Math.floor(Math.random() * characters.length)]
//   passwordCharacters.push(characters)
//  }
// return passwordCharacters.join('');



var numberCharacters = "1234567890";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var symbols= "!@#$%^&*-_=+";

function generatePassword() {
 
  var criteria = '';
  if (document.passwordOutput.numberCharacters.checked){
    criteria = criteria + numberCharacters;
  };
  if (document.passwordOutput.uppercase.checked){
    criteria = criteria + uppercase;
  };
  if (document.passwordOutput.lowercase.checked){
    criteria = criteria + lowercase;
  };
  if (document.passwordOutput.symbols.checked){
    criteria = criteria + symbols;
  };

  let password = '';
  var length= parseInt(document.passwordOutput.characterLength.value)
  for( var i = 0; i < length; i++) {

    var random= Math.floor(Math.random()*criteria.length);
    password = password + criteria[random];
  }
return password; 

}



