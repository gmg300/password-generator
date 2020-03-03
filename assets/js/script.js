// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var passwordLength = document.querySelector("#passwordLength");
var includeUppercase = document.querySelector("#includeUppercase");
var includeLowercase = document.querySelector("#includeLowercase");
var includeNumbers = document.querySelector("#includeNumbers");
var includeSymbols = document.querySelector("#includeSymbols");


// Password character option arrays
var lettersUpperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lettersLowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbolsArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '=', '<', '>', '/', ',', '.'];

function randomUpper() {
    var letterUpper = lettersUpperArr[Math.floor(Math.random() * lettersUpperArr.length)]
    return letterUpper;
}
function randomLower() {
    var letterLower = lettersLowerArr[Math.floor(Math.random() * lettersLowerArr.length)]
    return letterLower;
}
function randomNumber() {
    var number = numbersArr[Math.floor(Math.random() * numbersArr.length)]
    return number;
}
function randomSymbol() {
    var symbol = symbolsArr[Math.floor(Math.random() * symbolsArr.length)]
    return symbol;
}
var characterOptions = {
  upper: randomUpper(),
  lower: randomLower(), 
  numbers: randomNumber(),
  symbols: randomSymbol()
};

console.log(characterOptions.upper)


function generatePassword() {
  var password = ''; // Set password and options variables
  var length = parseInt(passwordLength.value); // Get user settings
  var upper = includeUppercase.checked;
  var lower = includeLowercase.checked;
  var numbers = includeNumbers.checked;
  var symbols = includeSymbols.checked;
  var settingsCount = upper + lower + numbers + symbols;
  var settings = [
    {
      upper
    }, 
    {
      lower
    }, 
    {
      numbers
    }, 
    {
      symbols
    }
  ].filter(setting => { // filter out unchecked settings
    return Object.values(setting)[0];
  });

  if(length < 8 || length > 128 || isNaN(length)) { // Validate length setting
    return 'Password length must be a number between 8 and 128.';
  }
  if(settingsCount < 1) { // Validate character types setting
    return 'You must include at least one type of character.';
  }
  
  // Loop through length generating random character from selected options and append it to password string
  for(i = 0; i < length; i += settingsCount) {
    characterOptions = {
      upper: randomUpper(),
      lower: randomLower(), 
      numbers: randomNumber(),
      symbols: randomSymbol()
    };
    settings.forEach(setting => {
      var characterType = Object.keys(setting)[0];
      console.log(characterType)
      password += characterOptions[characterType];
    });
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if(password == 'Password length must be a number between 8 and 128.' || password == 'You must include at least one type of character.' ) {
    passwordText.style.color = 'red'
    passwordText.style.fontWeight = 'bold'
  } else {
    passwordText.style.color = 'hsl(206, 17%, 28%)'
    passwordText.style.fontWeight = 'normal'
  }
  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
