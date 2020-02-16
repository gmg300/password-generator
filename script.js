// Assignment Code
let password = document.querySelector("#password")
let passwordLength = document.querySelector("#passwordLength")
let includeUppercase = document.querySelector("#includeUppercase")
let includeLowercase = document.querySelector("#includeLowercase")
let includeNumbers = document.querySelector("#includeNumbers")
let includeCharacters = document.querySelector("#includeCharacters")
let generateBtn = document.querySelector("#generate")


// Generate Randoms Functions
function randomUpper() {
  let lettersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  return (lettersUpper[Math.floor(Math.random() * 26)])
}

function randomLower() {
  let lettersLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  return (lettersLower[Math.floor(Math.random() * 26)])
}

function randomNumber() {
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  return (numbers[Math.floor(Math.random() * 10)])
}

function randomCharacter() {
  let characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '=', '<', '>', '/', ',', '.']
  return (characters[Math.floor(Math.random() * characters.length)])
}



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
