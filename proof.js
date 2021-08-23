// Number Limit (9007199254740991)
var maxNumber = Number.MAX_SAFE_INTEGER;

// Prevent Form from Resetting
document.querySelector("#userSubmit").addEventListener("click", function(event){
   event.preventDefault();
}, false);

// Submitting and Saving User Input
function submit_form(){

   // Clear Previous Entries
   document.getElementById("outputSummary").innerHTML = '';
   document.getElementById("outputTableBody").innerHTML = '';
   document.getElementById("outputTableSummary").innerHTML = '';
   document.getElementById("outputGraph").innerHTML = '';

   // Start Step Counter
   var stepCounter = 0;

   // Set value of "userInput" when form is submitted
   var originalInput = document.getElementById("userInput").value;
   var userInput = originalInput;  

   // Show Output Section
   document.getElementById("output").style.display = "block";

   if (userInput <= maxNumber) {

      document.getElementById("outputSummary").innerHTML += `You entered: <strong>${userInput}</strong><br/>`;

      // While the sequence is greater than 1...
      while ((userInput > 1) && (userInput <= maxNumber)) {

         stepCounter++;

         // Check if userInput is "even" or "odd"...
         var stateEvenOdd = (userInput % 2 == 0) ? "even" : "odd";

         // If stateEvenOdd is "even"...
         if (stateEvenOdd == "even") {

            newNum = (userInput / 2);
            equation = `n = (n / 2)`;
            equationStepOne = `n = (${userInput} / 2)`;
            equationStepTwo = `n = ${newNum}`;

            document.getElementById("outputTableBody").innerHTML += 
            `
            <tr>
               <td class="step">Step ${stepCounter}</td>
               <td class="num-start">${userInput}</td>
               <td class="num-status">${stateEvenOdd}</td>
               <td class="equation">
                  <strong>${equation}</strong><br/>
                  ${equationStepOne}<br/>
                  ${equationStepTwo}
               </td>
               <td class="num-end">${newNum}</td>
            </tr>
            `;

            userInput = newNum;

         }

         // If stateEvenOdd is "odd"...
         else if (stateEvenOdd == "odd") {

            newNum = ((userInput * 3) + 1);
            newNumStepTwo = userInput * 3;
            equation = `n = ((n * 3) + 1)`;
            equationStepOne = `n = ((${userInput} * 3) + 1)`;
            equationStepTwo = `n = (${newNumStepTwo} + 1)`;
            equationStepThree = `n = ${newNum}`;

            document.getElementById("outputTableBody").innerHTML += 
            `
            <tr>
               <td class="step">Step ${stepCounter}</td>
               <td class="num-start">${userInput}</td>
               <td class="num-status">${stateEvenOdd}</td>
               <td class="equation">
                  <strong>${equation}</strong><br/>
                  ${equationStepOne}<br/>
                  ${equationStepTwo}<br/>
                  ${equationStepThree}
               </td>
               <td class="num-end">${newNum}</td>
            </tr>
            `;

            userInput = newNum;

         }

         // If stateEvenOdd is neither "even" nor "odd"...
         else {

            document.getElementById("outputTableBody").innerHTML += 
            `
            <tr class="error">
               <td class="step">Step ${stepCounter}</th>
               <td class="num-start"><em>error</em></th>
               <td class="num-status"><em>error</em></th>
               <td class="equation"><em>error</em></th>
               <td class="num-end"><em>error</em></th>
            </tr>
            `;

         }

      }

      // Once the sequence reaches 1... 
      document.getElementById("outputTableSummary").innerHTML +=
      `
      <p>The sequence has reached 1.</p>
      <p>Sequence terminated.</p>
      <p>It took ${stepCounter} steps for ${originalInput} to reach 1.</p>
      `;

   } 
   
   // If userInput is larger than maxNumber...
   else if (userInput > maxNumber) {
      document.getElementById("outputSummary").innerHTML += 
      `
      <div class="alert error">
         <strong>ERROR:</strong> ${userInput} is too large;<br />
         Please enter a smaller number.
      </div>
      `;
   }
   
   // If userInput has no relation to maxNumber...
   else {
      document.getElementById("outputSummary").innerHTML += 
      `
      <div class="alert error">
         <strong>ERROR:</strong> Something went wrong!
      </div>
      `;
   }

   // Reset Form
   document.getElementById('userInputForm').reset();

}

