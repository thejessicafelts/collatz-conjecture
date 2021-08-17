// Number Limit (9007199254740991)
let maxNumber = Number.MAX_SAFE_INTEGER;

// Prevent Form from Resetting
document.querySelector("#userSubmit").addEventListener("click", function(event){
   event.preventDefault();
}, false);

// Submitting and Saving User Input
function submit_form(){
   var userInput = document.getElementById("userInput").value;
   console.log(`STEP 1 -- User Entered: ${userInput}.`);

   // Check for Even or Odd Number
   var checkNumber = (userInput % 2 == 0) ? "even" : "odd";
   console.log(`STEP 1 -- ${userInput} is ${checkNumber}.`);

      // If userInput Even
      if (checkNumber == "even") {

         var userInput = (userInput / 2);
         console.log(`STEP 2 -- The new number is: ${userInput}.`);
         
         var checkNumber = (userInput % 2 == 0) ? "even" : "odd";
         console.log(`STEP 2 -- ${userInput} is ${checkNumber}.`);

      } else if (checkNumber == "odd") {

         var userInput = ((userInput * 3) + 1);
         console.log(`STEP 2 -- The new number is: ${userInput}.`);

         var checkNumber = (userInput % 2 == 0) ? "even" : "odd";
         console.log(`STEP 2 -- ${userInput} is ${checkNumber}.`);

      } else {
         console.log("You've Done Something Wrong.")
      }

}
