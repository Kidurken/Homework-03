// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = [""];

function generatePassword() {
uppercase = window.confirm("Do you want uppercase characters?");
lowercase = window.confirm("Do you want lowercase characters?");
numeric = window.confirm("Do you weant numbers?");
specialCharacters = window.confirm("do you want special characters");
length = prompt("how many characters do you want?(8 to 128)");
if (length < 8 || legth > 128){
  length = prompt("please enter a valid number (8 to 128)");
  return;
} 
if (uppercase = true){
  characters.concat(["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]);
}
if (lowercase = true){
  characters.concat(["abcdefghijklmnopqrstuvwxyz"]);
}
if (numeric = true){
  characters.concat(["0123456789"]);
}
if (specialCharacters = true){
  characters.concat(["!@#$%^&*()/*-+"]);
}
console.log(characters);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)