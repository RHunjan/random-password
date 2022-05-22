// Assignment code here

//contirm user wants password 'You will be asked a series of questions to create a secure password. 
//click ok to continue'
//function generatePassword(){
//var length = window.prompt("choose password length between 8 and 128")
//char = "abcdefghijklmnopqrstuvwkyz"
//num = "1234567890"
//passwordText = [""]
 //for(i=0;i < length; i++){
   //passwordText = char.charAt(Math.floor(Math.random() * char.length))
   //return passwordText
 //}
//};

var generatePassword = function(){
  //number options
  var pwOptions = [];
  var pwNumbers = [1,2,3,4,5,6,7,8,9];
  var pwLetters = ['a','b', 'c'];
  

  //prompt for length of password - enter a number between 8 and 128
  var pwLength = window .prompt('Choose a password length between 8 and 128');
  // prompt for numeric
  var numbers = window.confirm('Do you want to include numbers in your password?');

  if (numbers){
    pwOptions.push(pwNumbers);
    console.log(pwOptions);
  }

  for (i=0; i <=pwLength.length -1; i++){
    var randNum = Math.floor(Math.random()*pwLength);
    return randNum;
 
  }
  




  passwordText = randNum;
  return passwordText;
 
};




//confirm character type - upper, lower or both

//confirm character type - numeric

//confirm character type - special



//share password with user


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
