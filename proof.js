// Number Limit (9007199254740991)
let maxNumber = Number.MAX_SAFE_INTEGER;

/*   
   Validating the user entry.
   - Make sure entry is a number. Else, return error.
   - Make sure entry is positive. Else, return error.
   - Make sure entry is a whole number. Else, return error.
   - Make sure entry is below maxNumber. Else, return error.
   - Submit only once conditions are met.
*/

// Prevent Form from Resetting
document.querySelector("#userSubmit").addEventListener("click", function(event){
   event.preventDefault();
}, false);

// Submitting and Saving User Input
function submit_form(){
   let userInput = document.getElementById("userInput").value;
   console.log(`User Entered: ${userInput}.`);
}




// // Collatz Conjecture
// if(userNumber <= maxNumber) {

//    while(userNumber < 1) {

//       // Check Even or Odd
//       checkNumber = (userNumber % 2 == 0) ? "even" : "odd";
//       console.log(`${userNumber} is ${checkNumber}.`);

//       // If Even
//       if(checkNumber == "even"){
//          let userNumber = userNumber / 2;
//          console.log(`The new number is ${userNumber}`);
//       }

//       // If Odd
//       if(checkNumber == "odd"){
//          let userNumber = ((userNumber * 3) + 1);
//          console.log(`The new number is ${userNumber}`);
//       }

//    }
//    console.log(`${userNumber} has reached 1`).

// } else {
//    alert("Number is too large.")
// }

// while(userNumber < 1) {

//       // Check Even or Odd
//       checkNumber = (userNumber % 2 == 0) ? "even" : "odd";
//       console.log(`${userNumber} is ${checkNumber}.`);

//       // If Even
//       if(checkNumber == "even"){
//          let userNumber = userNumber / 2;
//          console.log(`The new number is ${userNumber}`);
//       }

//       // If Odd
//       if(checkNumber == "odd"){
//          let userNumber = ((userNumber * 3) + 1);
//          console.log(`The new number is ${userNumber}`);
//       }

//    }
//    console.log(`${userNumber} has reached 1`).
