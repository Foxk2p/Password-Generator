// Assignment Code
const generateBtn = document.querySelector("#generate");

// Variables defined
const lowerChar = 'abcdefghijklmnopqrstuvwxyz'
const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numberChar = '0123456789'
const specialChar = `!#$%&')(*+,-./:;<=>?@][^}{|~`

// User input event, parameters.

function generatePassword() {
  const passLength = parseInt(prompt("Please choose a password length that is at least 8 characters and no more than 128 characters."))

  // Password length check
  if (passLength < 8 || passLength > 128) {
    alert("Your password length must be at least 8 characters and no more than 128 characters! Please choose a password length again.")
    generatePassword()
  }

  // Asks user to confirm each character set included in password generation.
  const lowC = confirm(`Would you like to include lowercase characters? Please click OK for yes or click Cancel for no.`)
  const upC = confirm(`Would you like to include uppercase characters? Please click OK for yes or click Cancel for no.`)
  const numC = confirm(`Would you like to include numbers? Please click OK for yes or click Cancel for no.`)
  const specC = confirm(`Would you like to include special characters? Please click OK for yes or click Cancel for no.`)

  let passHolder = ' '
  let newPass = ' '

  if (lowC) {
    passHolder += lowerChar;
  }
  if (upC) {
    passHolder += upperChar;
  }
  if (numC) {
    passHolder += numberChar;
  }
  if (specC) {
    passHolder += specialChar;
  }

  // User character-sets selection, check

  if (!lowC && !upC && !numC && !specC) {
    alert("Sorry, you must choose to include at least one character set to create a password. Please try again.")
    generatePassword()
  }

  // grab random index and include in the password

  for (let i = 0; i < passLength; i++) {
    let randomIndex = Math.floor(Math.random() * passHolder.length)
    newPass += passHolder[randomIndex]
  }
  return newPass
}

// Password to #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
