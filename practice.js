
//Declare Empty Arrays

  var pwOptions = [];
  var pwOrder = [];
  var password = [];
  var pwNumbers = [0,1,2,3,4,5,6,7,8,9];
  var pwLetters = ['a','b', 'c','d'];
  var pwLetCap = ['A', 'B', 'C','D', 'E'];
  var pwCharacters = ['!', '@', '%', '&'];

  //Start function to determine password length

  var pwLength = function (){
      //prompt for length of password - enter a number between 8 and 128
      var pwLength = window.prompt('Enter a password length between 8 and 128');
      // confirming length of the password is valid
       if (pwLength < 8 || pwLength > 128){
        window.alert('TRY AGAIN! Pick a password length between 8 and 128 characters');
        generatePassword();}
     };
  
    // function for including number
    var includeNumbers = function(){
      var numbers = window.confirm('Do you want to include numbers in your password?');

      if (numbers){
        window.alert('Your password will contain numbers');

        // add random number to password []
           let ranInt = Math.floor(Math.random() * (pwNumbers.length+1));
           password.push(pwNumbers[ranInt]);
           console.log(password);
            // add pwNumbers into pwOptions []
          for (i=0; i <=pwNumbers.length;i++){
          pwOptions.push(pwNumbers[i]);
          }
          
          } 
          
           else{
            window.alert("Your password will NOT contain numbers");
          }
 
     }; //end of includeNumbers;
   
     // function for including lowercase letters

      var includeLower = function(){
      var lowerLetters = window.confirm('Do you want to include lower case letters in your password?');
        // add random lowercase letter to password []
     if (lowerLetters){
        window.alert('Your password will contain lowercase letters.');
        let ranInt2 = Math.floor(Math.random() * (pwLetters.length+1));
        console.log(ranInt2);
        password.push(pwLetters[ranInt2]);
        console.log(password);

          //add pwLetters into pwOptions []
        for (j=0; j <=pwLetters.length;j++){
         pwOptions.push(pwLetters[j]);
          }

      } else {
        window.alert('Your password will NOT contain lowercase letters.');
     }
    
     }; //end includeLower()
      
   //function to include capital letters
   var includeUpper = function (){
     var upper = window.confirm('Do you want to include capital letters in your password?');
     //add random capital letter into password []
     if (upper){
       window.alert('Your password will contain capital letters.');
        let ranInt3 = Math.floor(Math.random() * (pwLetCap.length+1));
       console.log(ranInt3);
       password.push(pwLetCap[ranInt3]);
       console.log(password);

          // add pwLetters into pwOptions []
        for (k=0; k <=pwLetCap.length;k++){
          pwOptions.push(pwLetCap[k]);
          }

        } else {
        window.alert('Your password will NOT contain lowercase letters.');
     }
     }; // end of includeUpper()

   // function to include special characters

     var includeSpecial = function(){
        var characters = window.confirm('Do you want to include special characters in your password?');
        
        //add random special character into password []
        if(characters){
          window.alert("Your password will include special characters.")
           let ranInt4 = Math.floor(Math.random() * (pwCharacters.length+1));
           console.log(ranInt4);
          password.push(pwCharacters[ranInt4]);
         console.log(password);

         for (x=0; x<=pwCharacters.length; x++){
           pwOptions.push(pwCharacters[x]);
           password = [];
           pwOptions = [];
         }
          
        }
        else {
          window.alert("You must choose at least one character type for your password. Try again.")
          generatePassword();
        }

     };

     // function to generate remainder of password

     //function to generate the password
    var generatePassword = function(){
     pwLength();
     includeNumbers();
     includeLower();
     includeUpper();
     includeSpecial();
 };

 generatePassword();