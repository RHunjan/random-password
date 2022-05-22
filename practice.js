

var generatePassword = function(){
  var pwOptions = [];
  var pwOrder = [];
  var password = [];
  var pwNumbers = [0,1,2,3,4,5,6,7,8,9];
  var pwLetters = ['a','b', 'c','d'];
  var pwLetCap = ['A', 'B', 'C','D', 'E'];
  var pwCharacters = ['!', '@', '%', '&'];

  
  

  //prompt for length of password - enter a number between 8 and 128
  var pwLength = window .prompt('Choose a password length between 8 and 128');
  

  // determining length of password

    if (pwLength < 8 || pwLength > 128){
        window.alert('TRY AGAIN! Pick a password length between 8 and 128 characters');
        generatePassword();}
   
   // include numbers?
        var numbers = window.confirm('Do you want to include numbers in your password?');
        if (numbers){
            window.alert('Your password will contain numbers');
            let ranInt = Math.floor(Math.random() * (pwNumbers.length+1));
            password.push(pwNumbers[ranInt]);
            console.log(password);

            // create pwOptions
            for (i=0; i < pwNumbers.length; i++){
                 pwOptions.push(pwNumbers[i]);
            }
             console.log(pwOptions); 
           } 
           else {
             window.alert('Your password will not contain numbers');
        }
      
    // include lowercase letters?
        var letters = window.confirm('Do you want to include lowercase letters in your password?');
       if (letters){
           window.alert('Your password will contain lowercase letters.');
             let ranInt2 = Math.floor(Math.random() * (pwLetters.length+1));
            password.push(pwLetters[ranInt2]);
            console.log(password);

            // create pwOptions
            for (j=0; j < pwLetters.length; j++){
                 pwOptions.push(pwLetters[j]);
                } 
            
            }
                else {
           window.alert('Your password will NOT contain lowercase letters.');
       }

    // include capital letters?
        var upper = window.confirm('Do you want to include capital letters in your password?');
        if (upper){
          window.alert('Your password will contain capital letters.');
            let ranInt3 = Math.floor(Math.random() * (pwLetCap.length+1));
           password.push(pwLetCap[ranInt3]);
           console.log(password);

            // create pwOptions
            for (k=0; k < pwLetCap.length; k++){
                 pwOptions.push(pwLetCap[k]);
                            }
      } else {
           window.alert('Your password will NOT contain uppercase letters.');
      }

    // include special characters?
        var characters = window.confirm('Do you want to include special characters in your password?');
        if (characters){
            window.alert('Your password will contain special characters.');
              let ranInt4 = Math.floor(Math.random() * (pwCharacters.length+1));
              password.push(pwCharacters[ranInt4]);
              console.log(password);
        }
     
    
}; //end of generate password function

generatePassword();