# **Collatz Conjecture in Python**

To see the solution to the Collatz Conjecture in JavaScript, visit this website: [Programiz Online Python Compiler](https://www.programiz.com/python-programming/online-compiler/), and copy the following code:

```
    def collatz_conjecture(n):
        steps = 0
        if n != 1:
            print(f"\nUser Input: {user_input}.\n\n{n} is not equal to 1.\nBegin calculation...")

        while n != 1:
            if n % 2 == 0:
                next_number = n // 2
                if next_number == 1:
                    print(f"\nStep {(steps + 1)}\n--------\n{n} is even.\n({n} // 2) = {next_number}.\n{next_number} is equal to 1.\nCalculation complete.")
                else:
                    print(f"\nStep {(steps + 1)}\n--------\n{n} is even.\n({n} // 2) = {next_number}.\n{next_number} is not equal to 1.\nContinue calculation...")
                n = next_number
            else:
                next_number = (n * 3) + 1
                if next_number == 1:
                    print(f"\nStep {(steps + 1)}\n--------\n{n} is odd.\n(({n} * 3) + 1) = {next_number}.\n{next_number} is equal to 1.\nCalculation complete.")
                else:
                    print(f"\nStep {(steps + 1)}\n--------\n{n} is odd.\n(({n} * 3) + 1) = {next_number}.\n{next_number} is not equal to 1.\nContinue calculation...")
                n = next_number
            steps += 1

        print(f"\n{user_input} reached 1 in {steps} steps.")

    user_input = int(input("Enter a Positive Whole Number: "))

    if user_input <= 0:
        print("Please enter a positive whole number.")
    else:
        collatz_conjecture(user_input)
```

<br />

## **About the Collatz Conjecture**

The Collatz conjecture is a conjecture in mathematics that is named after **Lothar Collatz**, who first introduced the idea in 1937. It concerns sequences of numbers, defined as follows: 

- Start with any positive integer: `n`.

Then each term is obtained from the previous term as follows: 

- If the previous term is even, the next term is one half of the previous term: `(n / 2)`.

- If the previous term is odd, the next term is 3 times the previous term plus 1: `((n * 3) + 1)`.

The conjecture is that no matter what value of `n`, the sequence will always reach 1.

<br/>

##  **View Solutions in Other Languages**

- View the Solution in [C++](https://github.com/thejessicafelts/collatz-conjecture/tree/master/languages/c++)
- View the Solution in [JavaScript](https://github.com/thejessicafelts/collatz-conjecture/tree/master/languages/javascript)
- Return to the [Repository Homepage](https://www.github.com/thejessicafelts/collatz-conjecture/)

<br />

## **About Me**

I am a Senior/Lead Software Engineer and an Accessibility Advocate. I am currently completing dual Bachelor of Science degrees -- one in Neuroscience, and the other in CMB (Cell Biology, Molecular Biology, and Biomedical Sciences). I have a passion for Neuroscience, and am translating that into a career change to Artificial Intelligence and Machine Learning.

### **Connect with Me:**

[![Twitter @thejessicafelts](https://raw.githubusercontent.com/thejessicafelts/thejessicafelts/master/icon-twitter.png)](https://www.twitter.com/thejessicafelts) &nbsp; &nbsp; [![Instagram @thejessicafelts](https://raw.githubusercontent.com/thejessicafelts/thejessicafelts/master/icon-instagram.png)](https://www.instagram.com/thejessicafelts) &nbsp; &nbsp; [![LinkedIn @thejessicafelts](https://raw.githubusercontent.com/thejessicafelts/thejessicafelts/master/icon-linkedin.png)](https://www.linkedin.com/in/thejessicafelts)
