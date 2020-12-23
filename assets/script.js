// Assignment Code
var generateBtn = document.querySelector("#generate");
// Fully Capitalized variables are constants throughout the script
// The .split() function separates each character in the string into an array
const ALPHA = 'abcdefghijklmnopqrstuvwxyz'.split('');
const UPPERALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const NUMERIC = '0123456789'.split('');
const SPECIAL = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// Declaring the function generatePassword
function generatePassword() {

  // Declaring a variable for the length of the password
  let passLength;

  // If the passLength variable is not a number, is a string, is a number that is less than 8, or is a number that is more than 128, run this loop
  while (isNaN(passLength) || (!isNaN(passLength) && passLength < 8) || (!isNaN(passLength) && passLength > 128)) {

    // setting the passLength variable within generatePassword() to whatever string the user inputs
    passLength = prompt("How long do you want your password to be? Please keep your password between 8 and 128 characters.");
    if (passLength === null) return;
    passLength = parseInt(passLength)

    // if the user inputed a number and that number is >= to 8 and <= 128, fun the following code
    if (!isNaN(passLength) && passLength >= 8 && passLength <= 128) {

      // Declare which characters are being allowed in the final password
      let passwordCharacters = [];

      // Ask the user if they want to use lowercase letters
      let useLowerCase = confirm('Do you want to use lowercase letters? Click \'Ok\' for yes and \'cancel\' for no.');
      if (useLowerCase) passwordCharacters.push(ALPHA);

      // Ask the user if they want to use uppercase letters
      let useUpperCase = confirm('Do you want to use uppercase letters? Click \'Ok\' for yes and \'cancel\' for no.');
      if (useUpperCase) passwordCharacters.push(UPPERALPHA);

      //  Ask the user if they want to use uppercase letters
      let useNums = confirm('Do you want to use numbers? Click \'Ok\' for yes and \'cancel\' for no.');
      if (useNums) passwordCharacters.push(NUMERIC);

      // declare a list of what special characters the user wants to use
      let specialCharacters;

      // If the list is less than one, loop this code
      while (specialCharacters.length < 1) {

        // Ask the user which special characters they want to use
        specialCharacters = prompt("Which special characters do you want to include in your password? Special characters are limited to !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~. No spaces.");

        // if the user hits cancel, exit the function
        if (specialCharacters === null) return;

        specialCharacters.length >= 1 &&
          specialCharacters.split('').forEach(character => {
            if (!SPECIAL.includes(character)) {
              specialCharacters = specialCharacters.replace(new RegExp(character), '')
              console.log(specialCharacters)
              alert(`Sorry, "${character}" is not a valid character`);
            }
          })

        //  If the length of the special characters list is at least 1, run the following code
        if (specialCharacters.length >= 1) {

          passwordCharacters.push(specialCharacters);

          // Create the password
          let pass = "";

          // Run this code the number of times that the user requested their password length to be
          for (x = 0; x < passLength; x++) {
            // Add a random character from the list of possible characters to the password
            let randomArray = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
            let randomChar = randomArray[Math.floor(Math.random() * randomArray.length)]
            pass += randomChar
          }

          // set the value of the function generatePassword() to the password string and exit the function
          return pass;

        } else {
          // If the user entered no special characters, ask them to, and loop the while loop again
          alert("You need to enter at least one valid character");
        };

      };

    } else if (isNaN(passLength)) {
      // if the user didn't enter a number, let them know they need to enter a number and prompt them again
      alert("Password needs to be a number.");

    } else if (passLength < 8 && !isNaN(passLength) || passLength > 128 && !isNaN(passLength)) {
      // If the user entered a number outside the range of 8-128, let them know and prompt them again
      alert("Password needs to be a number within 8 and 128 characters.");
    } else {
      alert('Something went wrong!')
      return;
    };

  };

};

// Write password to the #password input
function writePassword() {

  // set the return value of generatePassword() to the password variable
  var password = generatePassword();

  // if it is not undefined, run this code
  if (password) document.querySelector("#password").value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
