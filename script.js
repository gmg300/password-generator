// Assignment Code
let generateBtn = document.querySelector("#generate")
let passwordText = document.querySelector("#password")
// let passwordLength = document.querySelector("#passwordLength")
// let includeUppercase = document.querySelector("#includeUppercase")
// let includeLowercase = document.querySelector("#includeLowercase")
// let includeNumbers = document.querySelector("#includeNumbers")
// let includeSymbols = document.querySelector("#includeSymbols")


// Password character option arrays
let lettersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let lettersLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '=', '<', '>', '/', ',', '.']


function generatePassword() {
  // Set password and options variables
  let password = ''
  let characterOptions = []
  // Get password length
  let passwordLength = prompt("Pick a password length between 8 and 128.")
  // Validate password length
  while(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("Invalid input! \nPassword length must be a number between 8 and 128.")
  }
  // Get character settings
  let includeUppercase = confirm("Include uppercase letters?")
  let includeLowercase = confirm("Include lowercase letters?")
  let includeNumbers = confirm("Include numbers?")
  let includeSymbols = confirm("Include symbols?")
  let settings = includeUppercase + includeLowercase + includeNumbers + includeSymbols
  console.log(settings)
  // Validate character settings
  while(settings < 1) {
    alert("Invalid input! \nAt least one character type must be selected.")
    includeUppercase = confirm("Include uppercase letters?")
    includeLowercase = confirm("Include lowercase letters?")
    includeNumbers = confirm("Include numbers?")
    includeSymbols = confirm("Include symbols?")
    settings = includeUppercase + includeLowercase + includeNumbers + includeSymbols
  } 
  alert(`Your password settings: \n\nPassword length: ${ passwordLength } \nInclude uppercase letters: ${ includeUppercase } \nInclude lowercase letters: ${ includeLowercase } \nInclude numbers: ${ includeNumbers } \nInclude symbols: ${ includeSymbols }`)
  
  // Filter out options marked false and create array of everything else
  if(includeUppercase) {
    characterOptions = characterOptions.concat(lettersUpper)
  }
  if(includeLowercase) {
    characterOptions = characterOptions.concat(lettersLower)
  }
  if(includeNumbers) {
    characterOptions = characterOptions.concat(numbers)
  }
  if(includeSymbols) {
    characterOptions = characterOptions.concat(symbols)
  }
  // console.log(characterOptions)
  
  // Loop through length generating random character each time and appending to password
  for (i = 0; i < passwordLength; i++) {
    let value = characterOptions[Math.floor(Math.random() * characterOptions.length)]
    password = password.concat(value)
    // console.log(password)
  }
  return password
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
