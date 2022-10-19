// Assignment code here

//select button in html
var createPasswordButton=document.querySelector("#generate")
console.log (createPasswordButton)

//this is what happens when you click the button
function createPassword(){
  //ask user what length of password should be
  var passwordlength=prompt("how long is your password")
  console.log(passwordlength)
}


// make button do something when you click it
createPasswordButton.addEventListener("click",createPassword)





// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
