
//Declare Empty Arrays

  var pwOptions = [];
  var pwOrder = [];
  var password = [];
  var pwNumbers = [0,1,2,3,4,5,6,7,8,9];
  var pwLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
  't','u','v','w','x','y','z'];
  var pwLetCap = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S',
  'T','U','V','W','X','Y','Z'];
  var pwCharacters = ['!', '@', '%', '&', '#', '$', '(', ')'];
  let counter = 0;
  var passwordLength = 0;

  //Start function to determine password length

  var pwordLength = function (){
      //prompt for length of password - enter a number between 8 and 128
      var pwLength = window.prompt('Enter a password length between 8 and 128');
      passwordLength = pwLength;
  
         
      // confirming length of the password is valid
       if (pwLength < 8 || pwLength > 128){
        window.alert('TRY AGAIN! Pick a password length between 8 and 128 characters');
        generatePassword();}
     };
  
    // function for including number
    var includeNumbers = function(){
      var numbers = window.confirm('Do you want to include numbers in your password?');
      counter = counter +1;

      if (numbers){
        window.alert('Your password will contain numbers');

        // add random number to password []
           let ranInt = Math.floor(Math.random() * (pwNumbers.length+1));
           password.push(pwNumbers[ranInt]);
           console.log(password);
            // add pwNumbers into pwOptions []
          for (let i=0; i <pwNumbers.length;i++){
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
        counter = counter + 1;

        // add random lowercase letter to password []
     if (lowerLetters){
        window.alert('Your password will contain lowercase letters.');
        let ranInt2 = Math.floor(Math.random() * (pwLetters.length+1));
        console.log(ranInt2);
        password.push(pwLetters[ranInt2]);
        console.log(password);

          //add pwLetters into pwOptions []
        for (let j=0; j <pwLetters.length;j++){
         pwOptions.push(pwLetters[j]);
          }

      } else {
        window.alert('Your password will NOT contain lowercase letters.');
     }
    
     }; //end includeLower()
      
   //function to include capital letters
   var includeUpper = function (){
     var upper = window.confirm('Do you want to include capital letters in your password?');
      counter = counter +1;
     //add random capital letter into password []
     if (upper){
       window.alert('Your password will contain capital letters.');
        let ranInt3 = Math.floor(Math.random() * (pwLetCap.length+1));
       console.log(ranInt3);
       password.push(pwLetCap[ranInt3]);
       console.log(password);

          // add pwLetters into pwOptions []
        for (let k=0; k <pwLetCap.length;k++){
          pwOptions.push(pwLetCap[k]);
          }

        } else {
        window.alert('Your password will NOT contain lowercase letters.');
     }
     }; // end of includeUpper()

   // function to include special characters

     var includeSpecial = function(){
        var characters = window.confirm('Do you want to include special characters in your password?');
         counter = counter +1;
        
        //add random special character into password []
        if(characters){
          window.alert("Your password will include special characters.")
           let ranInt4 = Math.floor(Math.random() * (pwCharacters.length+1));
           console.log(ranInt4);
          password.push(pwCharacters[ranInt4]);
         console.log(password);

         for (let x=0; x<pwCharacters.length; x++){
           pwOptions.push(pwCharacters[x]);
         
         }
          
        }
        else {
          window.alert("You must choose at least one character type for your password. Try again.")
           password = [];
           pwOptions = [];
          generatePassword();

        }

     };

     // function to generate remainder of password

     var remainingCharacters = function(){
      console.log(passwordLength);
      console.log(counter);
      var difference = passwordLength - counter;
      console.log(difference);
      console.log(pwOptions);

      for (let q=0; q < difference; q++){
        let ranInt5 = Math.floor(Math.random() * (pwOptions.length));
       console.log(ranInt5);
       password.push(pwOptions[ranInt5]);
            
      }
 
      console.log(password);

     };

       // function to join elements in password
        var finalPassword = function(){
        var finalPw = password.join('');
        console.log(finalPw);
  }
  

     //function to generate the password
    var generatePassword = function(){
     pwordLength();
     includeNumbers();
     includeLower();
     includeUpper();
     includeSpecial();
     remainingCharacters();
     finalPassword();
 };


 

 generatePassword();
