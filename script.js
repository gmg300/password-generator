// Assignment Code
let generateBtn = document.querySelector("#generate")
let passwordText = document.querySelector("#password")
let passwordLength = document.querySelector("#passwordLength")
let includeUppercase = document.querySelector("#includeUppercase")
let includeLowercase = document.querySelector("#includeLowercase")
let includeNumbers = document.querySelector("#includeNumbers")
let includeSymbols = document.querySelector("#includeSymbols")


// Password character option arrays
let lettersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let lettersLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '=', '<', '>', '/', ',', '.']


function generatePassword() {
  // Set password and options variables
  let password = ''
  let characterOptions = []
 
  // Get settings
  let length = passwordLength.value
  let settingUpper = includeUppercase.checked
  let settingLower = includeLowercase.checked
  let settingNumbers = includeNumbers.checked
  let settingSymbols = includeSymbols.checked
  let settings = settingUpper + settingLower + settingNumbers + settingSymbols
  
  // console.log(length)
  // console.log(settingUpper)
  // console.log(settingLower)
  // console.log(settingNumbers)
  // console.log(settingSymbols)
  // console.log(settings)

  // Validate settings
  while(length < 8 || length > 128 || isNaN(length)) {
    let errorNumber = "Password length must be a number between 8 and 128."
    passwordText.value = errorNumber
    length = passwordLength.value
  }

  while(settings < 1) {
    settings = includeUppercase + includeLowercase + includeNumbers + includeSymbols
  } 
  
  // Filter out arrays marked false and create array of everything marked true
  if(settingUpper) {
    characterOptions = characterOptions.concat(lettersUpper)
  }
  if(settingLower) {
    characterOptions = characterOptions.concat(lettersLower)
  }
  if(settingNumbers) {
    characterOptions = characterOptions.concat(numbers)
  }
  if(settingSymbols) {
    characterOptions = characterOptions.concat(symbols)
  }
  // console.log(characterOptions)
  
  // Loop through length generating random character from selected options and append it to password string
  for (i = 0; i < length; i++) {
    let value = characterOptions[Math.floor(Math.random() * characterOptions.length)]
    password = password.concat(value)
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
