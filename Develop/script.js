// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var letterChar = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
  var letterUpperChar = [A,B,C,D,E,F,G,H,I,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
  passwordText.value = password;
//Math.floor(Math.random()*99999999)+1
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
