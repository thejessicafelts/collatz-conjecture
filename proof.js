// Number Limit
let maxNumber = Number.MAX_SAFE_INTEGER;

// Enter a Number
const userNumber = prompt("Enter a number: ");

// Collatz Conjecture
if(userNumber <= maxNumber) {

   // Check Even or Odd
   checkNumber = (userNumber % 2 == 0) ? "even" : "odd";
   console.log(`${userNumber} is ${checkNumber}.`);

   // If Even
   if(checkNumber == "even"){
      let newNumber = userNumber / 2;
      console.log(`The new number is ${newNumber}`);
   }

   // If Odd
   if(checkNumber == "odd"){
      let newNumber = ((userNumber * 3) + 1);
      console.log(`The new number is ${newNumber}`);
   }

} else {
   alert("Number is too large.")
}



