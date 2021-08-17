// Number Limit (9007199254740991)
let maxNumber = Number.MAX_SAFE_INTEGER;

// Prevent Form from Resetting
document.querySelector("#userSubmit").addEventListener("click", function(event){
   event.preventDefault();
}, false);

// Submitting and Saving User Input
function submit_form(){

   // Set value of "userInput" when form is submitted
   var userInput = document.getElementById("userInput").value;
   console.log(`The user entered: ${userInput}.`);

   // While the sequence is greater than 1...
   while (userInput > 1) {

      // Check if userInput is Even or Odd...
      var checkNumber = (userInput % 2 == 0) ? "even" : "odd";

      // If userInput is Even...
      if (checkNumber == "even") {

         console.log(`${userInput} is ${checkNumber}; n = (n / 2) will be performed.`);

         var userInput = (userInput / 2);
         console.log(`The new number is: ${userInput}.`);

      } 
      
      // If userInput is Odd... 
      else if (checkNumber == "odd") {

         console.log(`${userInput} is ${checkNumber}; n = ((n * 3) + 1) will be performed.`);

         var userInput = ((userInput * 3) + 1);
         console.log(`The new number is: ${userInput}.`);

      } 
      
      // If userInput is somehow neither Even nor Odd...
      else {
         console.log(`ERROR: Cannot determine if ${userInput} is Even or Odd...`)
      }
      
   }

   // Once sequence reaches 1, termiate the sequence...
   console.log("The sequence has reeached 1.");
   console.log("Sequence terminated.")

}
