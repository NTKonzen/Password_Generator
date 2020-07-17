// Assignment Code
var generateBtn = document.querySelector("#generate");

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'.split('');

const UPPERALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const NUMERIC = '0123456789'.split('');

const SPECIAL = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

function generatePassword() {

  console.log(`Running generatePassword()`);

  let passLength;

  while (isNaN(passLength) || typeof passLength === 'string' || !isNaN(parseInt(passLength)) && parseInt(passLength) < 8 || !isNaN(parseInt(passLength)) && parseInt(passLength) > 128) {

    passLength = prompt("How long do you want your password to be? Please keep your password between 8 and 128 characters.");

    console.log(`passLength is ${passLength}`);

    console.log(`parseInt(passLength) is ${parseInt(passLength)}`);

    if (!isNaN(parseInt(passLength)) && parseInt(passLength) >= 8 && parseInt(passLength) <= 128) {


      passLength = parseInt(passLength);


      let passwordCharacters = [];


      let useLowerCase = confirm('Do you want to use lowercase letters? Click \'Ok\' for yes and \'cancel\' for no.');

      if (useLowerCase) {
        passwordCharacters = passwordCharacters.concat(ALPHA);

        console.log(`User wants to use lower case letters`);
      } else {
        console.log(`User does not want to use lower case letters`);
      }


      let useUpperCase = confirm('Do you want to use uppercase letters? Click \'Ok\' for yes and \'cancel\' for no.');

      if (useUpperCase) {
        passwordCharacters = passwordCharacters.concat(UPPERALPHA);

        console.log(`User wants to use upper case letters`);
      } else {
        console.log(`User does not want to use upper case letters`);
      }


      let useNums = confirm('Do you want to use numbers? Click \'Ok\' for yes and \'cancel\' for no.');

      if (useNums) {
        passwordCharacters = passwordCharacters.concat(NUMERIC);

        console.log(`User wants to use numbers`);
      } else {
        console.log(`User does not want to use numbers`);
      }

      let specialCharacters = "";

      while (specialCharacters.length < 1) {

        specialCharacters = prompt("Which special characters do you want to include in your password? Special characters are limited to !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~. No spaces.");

        console.log(`specialCharacters includes ${specialCharacters}`);

        console.log(`passwordCharacters length is ${passwordCharacters.length}`);


        if (specialCharacters.length >= 1) {

          for (character in specialCharacters) {

            if (SPECIAL.indexOf(specialCharacters[character]) !== -1) {
              passwordCharacters.push(specialCharacters[character]);
            } else {
              alert('Sorry, "' + specialCharacters[character] + '" is not a valid character');
            };

          };

          let pass = [''];

          console.log(`pass before .join() is ${pass}`);

          for (x = 0; x < passLength; x++) {

            pass.push(passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]);

          }


          pass = pass.join("");

          console.log(`pass after .join() is ${pass}`);


          return pass;


        } else {

          alert("You need to enter at least one character");

        }
      }


    } else if (passLength === null) {
      return;
    } else if (isNaN(parseInt(passLength))) {
      alert("Password needs to be a number.");
    } else if (passLength < 8 && !isNaN(passLength) || passLength > 128 && !isNaN(passLength)) {
      alert("Password needs to be a number within 8 and 128 characters.");
    };

  };

};

// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  if (password !== undefined) {

    console.log(`Assigning the variable 'password' to the function 'generatePassword`);

    var passwordText = document.querySelector("#password");

    console.log(`Assining the variable passwordText to the html`);

    passwordText.value = password;

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
