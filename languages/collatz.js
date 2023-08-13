const userInput = parseInt(prompt("Enter a Positive Whole Number:"));

if(isNaN(userInput) || userInput <= 0){
    console.log("Please enter a value Positive Whole Number.");
} else {
    collatzConjecture(userInput);
}

function collatzConjecture(n){
    let steps = 0;
    if(n !== 1){
        console.log(`User Input: ${userInput}.\n${n} is not equal to 1.\nBegin calculation...`);
    }
    while (n !== 1){
        if(n % 2 === 0){
            const nextNumber = n / 2;
            if(nextNumber == 1){
                console.log(`Step ${(steps + 1)}\n--------\n${n} is even.\n(${n} / 2) = ${nextNumber}.\n${nextNumber} is equal to 1.\nCalculation complete.`);
            } else {
                console.log(`Step ${(steps + 1)}\n--------\n${n} is even.\n(${n} / 2) = ${nextNumber}.\n${nextNumber} is not equal to 1.\nContinue calculation...`);
            }
            n = nextNumber;
        } else {
            const nextNumber = ((n * 3) + 1);
            if(nextNumber == 1){
                console.log(`Step ${(steps + 1)}\n--------\n${n} is odd.\n((${n} * 3) + 1) = ${nextNumber}.\n${nextNumber} is equal to 1.\nCalculation complete.`);
            } else {
                console.log(`Step ${(steps + 1)}\n--------\n${n} is odd.\n((${n} * 3) + 1) = ${nextNumber}.\n${nextNumber} is not equal to 1.\nContinue calculation...`);
            }
            n = nextNumber;
        }
        steps++;
    }
    console.log(`${userInput} reached 1 in ${steps} steps.`);
}