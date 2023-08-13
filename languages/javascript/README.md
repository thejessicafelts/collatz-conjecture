# **Collatz Conjecture in JavaScript**

To see the solution to the Collatz Conjecture in JavaScript, visit this website: [Programiz Online JavaScript Compiler](https://www.programiz.com/javascript/online-compiler/), and copy the following code:

```
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
```

---

# **About the Collatz Conjecture**

The Collatz conjecture is a conjecture in mathematics that is named after **Lothar Collatz**, who first introduced the idea in 1937. It concerns sequences of numbers, defined as follows: 

- Start with any positive integer: `n`. 

Then each term is obtained from the previous term as follows: 

- If the previous term is even, the next term is one half of the previous term: `(n / 2)`.

- If the previous term is odd, the next term is 3 times the previous term plus 1: `((n * 3) + 1)`.

The conjecture is that no matter what value of `n`, the sequence will always reach 1.