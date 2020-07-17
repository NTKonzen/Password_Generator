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
  
  console.log(`Running generatePassword()`); 

  // Declaring a variable for the length of the password
  let passLength;

  // If the passLength variable is not a number, is a string, is a number that is less than 8, or is a number that is more than 128, run this loop
  while (isNaN(passLength) || typeof passLength === 'string' || !isNaN(parseInt(passLength)) && parseInt(passLength) < 8 || !isNaN(parseInt(passLength)) && parseInt(passLength) > 128) {

    // setting the passLength variable within generatePassword() to whatever string the user inputs
    passLength = prompt("How long do you want your password to be? Please keep your password between 8 and 128 characters.");
    
    console.log(`passLength is ${passLength}`);

    console.log(`parseInt(passLength) is ${parseInt(passLength)}`);

    // if the user inputed a number and that number is >= to 8 and <= 128, fun the following code
    if (!isNaN(parseInt(passLength)) && parseInt(passLength) >= 8 && parseInt(passLength) <= 128) {

      // permanently convert passLength to a number
      passLength = parseInt(passLength);

      // Declare which characters are being allowed in the final password
      let passwordCharacters = [];

      // Ask the user if they want to use lowercase letters
      let useLowerCase = confirm('Do you want to use lowercase letters? Click \'Ok\' for yes and \'cancel\' for no.');
      
      // If they said yes, add the ALPHA variable to the list of possible password characters
      if (useLowerCase) {
        passwordCharacters = passwordCharacters.concat(ALPHA);
        console.log(`User wants to use lower case letters`);
      } else {
        console.log(`User does not want to use lower case letters`);
      }

      // Ask the user if they want to use uppercase letters
      let useUpperCase = confirm('Do you want to use uppercase letters? Click \'Ok\' for yes and \'cancel\' for no.');

      // If they said yes, add UPPERALPHA to the list of possible password characters
      if (useUpperCase) {
        passwordCharacters = passwordCharacters.concat(UPPERALPHA);
        console.log(`User wants to use upper case letters`);
      } else {
        console.log(`User does not want to use upper case letters`);
      }

      //  Ask the user if they want to use uppercase letters
      let useNums = confirm('Do you want to use numbers? Click \'Ok\' for yes and \'cancel\' for no.');

      // If they said yes, add the NUMERIC variable to the list of possible password characters
      if (useNums) {
        passwordCharacters = passwordCharacters.concat(NUMERIC);
        console.log(`User wants to use numbers`);
      } else {
        console.log(`User does not want to use numbers`);
      }

      // declare a list of what special characters the user wants to use
      let specialCharacters = "";

      // If the list is less than one, loop this code
      while (specialCharacters.length < 1) {

        // Ask the user which special characters they want to use
        specialCharacters = prompt("Which special characters do you want to include in your password? Special characters are limited to !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~. No spaces.");

        // if the user hits cancel, exit the function
        if (specialCharacters === null) {
          return;
        }

        console.log(`specialCharacters includes ${specialCharacters}`);

        console.log(`specialCharacters length is ${specialCharacters.length}`);

        //  If the length of the special characters list is at least 1, run the following code
        if (specialCharacters.length >= 1) {

          // run this code once for every character in the list of special characters
          for (character in specialCharacters) {

            // if the character matches a character in the SPECIAL array, run the following code
            if (SPECIAL.indexOf(specialCharacters[character]) !== -1) {

              // add the character to the list of possible password characters
              passwordCharacters.push(specialCharacters[character]);

            } else { 
              // If the character is not allowed, let the user know that character is not allowed 
              alert('Sorry, "' + specialCharacters[character] + '" is not a valid character');
            };

          };

          // Create the password
          let pass = [''];

          // Run this code the number of times that the user requested their password length to be
          for (x = 0; x < passLength; x++) {

            // Add a random character from the list of possible characters to the password
            pass.push(passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]);

          }

          // convert the pass array into a string
          pass = pass.join("");

          console.log(`pass after .join() is ${pass}`);

          // set the value of the function generatePassword() to the pass string and exit the function
          return pass;


        } else {
          // If the user entered no special characters, ask them to, and loop the while loop again
          alert("You need to enter at least one character");
        };

      };

    // If the user clicks the cancel button, exit the function
    } else if (passLength === null) { 
      return;

    // if the user didn't enter a number, let them know they need to enter a number and prompt them again
    } else if (isNaN(parseInt(passLength))) { 
      alert("Password needs to be a number.");

    // If the user entered a number outside the range of 8-128, let them know and prompt them again
    } else if (passLength < 8 && !isNaN(passLength) || passLength > 128 && !isNaN(passLength)) { 
      alert("Password needs to be a number within 8 and 128 characters.");
    };

  };

};

// Write password to the #password input
function writePassword() {

  // set the return value of generatePassword() to the password variable
  var password = generatePassword();

  // if it is not undefined, run this code
  if (password !== undefined) {

    console.log(`Assigning the variable 'password' to the function 'generatePassword`);
    // Assign the html text to the variable passwordText
    var passwordText = document.querySelector("#password");

    console.log(`Assining the variable passwordText to the html`);
    // display the password in the html text
    passwordText.value = password;

  };

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
