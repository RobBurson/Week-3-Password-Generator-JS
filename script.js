// Assignment code here

function gogoGadgetPassword() {
  //create empty arrays
  var arrayForPrompt = [];
  var arrayForPw = [];

  //create arrays for all possible characters
  var numericArray = ["0", "1", "2", "3", "3", "5", "6", "7", "8", "9"];
  var alphaLowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var alphaUpperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "~", "?"];

//get form input and save to var; checked returns boolean(true/false)

var alphaLower = document.querySelector('#alphaLowerCase').checked;
var alphaUpper = document.querySelector('#alphaUpperCase').checked;
var numeric = document.querySelector('#numeric').checked;
var specChar = document.querySelector('#specChars').checked;
var longEnough = document.querySelector('#longEnough').value;

//validate length chosen in longEnough = between 8 and 128; re-prompt if not
console.log(alphaUpper);
console.log(alphaLower);

if(longEnough < 8 || longEnough > 128) {
  window.alert('Your password was NOT between 8 and 128 characters 😠. Do it again! 😠 😠 😠')
  return "Length Invalid";
}

//check if checkbox results are checked or not checked; concat array to ArrayForPrompt if true
if(alphaUpper) {
  arrayForPrompt = arrayForPrompt.concat(alphaUpperArray);
};
if(alphaLower) {
  arrayForPrompt = arrayForPrompt.concat(alphaLowerArray);
};
if(numeric) {
  arrayForPrompt = arrayForPrompt.concat(numericArray);
};
if(specChar) {
  arrayForPrompt = arrayForPrompt.concat(specCharArray);
};

console.log(arrayForPrompt);

//for loop and math.random to pick a random index of arrayForPrompt then push to arrayForPw

for (var i = 0; i < longEnough; i++) {
  arrayForPw.push(arrayForPrompt[Math.floor(Math.random() * arrayForPrompt.length)])
};

//array.join to convert array to string and return it
console.log(arrayForPw);
return arrayForPw.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = gogoGadgetPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);