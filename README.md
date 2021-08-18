# **Collatz Conjecture**

The Collatz conjecture is a conjecture in mathematics that is named after **Lothar Collatz**, who first introduced the idea in 1937. It concerns sequences of numbers, defined as follows: 

- Start with any positive integer: `n`. 

Then each term is obtained from the previous term as follows: 

- If the previous term is even, the next term is one half of the previous term: `(n / 2)`.

- If the previous term is odd, the next term is 3 times the previous term plus 1: `((n * 3) + 1)`.

The conjecture is that no matter what value of `n`, the sequence will always reach 1.

## **About this Program** 

This program will currently take any input, up to the `Number.MAX_SAFE_INTEGER` limit (2<sup>53</sup> – 1), and apply the rules of Collatz Conjecture to it. As of 2020, the conjecture has been check by computers for all starting values up to 2<sup>68</sup>, and has found that all values tested so far eventually end in the repeating cycle 4-2-1. Because the `Number.MAX_SAFE_INTEGER` limit is less than 2<sup>68</sup>, this program will prove any number entered will eventually reach 1.

This program is not intended to prove the Collatz Conjecture false, but rather to show that any number smaller than the `Number.MAX_SAFE_INTEGER` limit (2<sup>53</sup> – 1) does, in fact, conform to it.

<br />

---

<br />

## **Recent Updates**

:white_check_mark: &nbsp; UI now displays the general result &mdash; `It took ${stepCounter} steps for ${originalInput} to reach 1.` &mdash; for the user to see outside of the console.

:white_check_mark: &nbsp; There are now safeguards for numbers beyond Step 1, being larger than the `Number.MAX_SAFE_INTEGER` limit. Numbers larger than the limit will now terminiate the program and provide an error message in console.

## **Updates Currently Underway**

:soon: &nbsp; **UI UPDATE** to display a basic table with all steps necessary for a user input to reach 1.

:soon: &nbsp; **UI UPDATE** once a more robust UI has been developed, the program will be published to a live site, accessible to anyone interested in playing around with the program.

## **Future Planning**

:rocket: &nbsp; **UI UPDATE** building out additional UI features such as a more advanced/robust table, graphs, etc.

:rocket: &nbsp; **SCOPE INCREASE** begin building out the program using `BigInt()` values, removing the need for the `Number.MAX_SAFE_INTEGER` limit.

## **Eventual Goal**

:crystal_ball: &nbsp; Eventually expand the program to automatically sort through all numbers, from low to highest. 

Numbers checked within another set will be listed for exclusion (i.e. 3 would also exclude 10, 5, 16, 8, 4, and 2 being checked in the future).

Eventually it would be desirable to terminate sequences once they run into an already checked number (i.e. 6 would terminate at 3, since 3 has already been checked and confirmed to result in 1). 

<br />

---

<br />

## **About Me**

I am a Software Engineer, and am also currently a University Student with a casual interest in Mathematics, and absolute fascination with Computer Science. I am beginning an initial build of this program at just before midnight on a Monday, because it sounded like a fun idea. That's the type of person I am.

### **Connect with Me:**

[![Twitter @thejessicafelts](https://raw.githubusercontent.com/thejessicafelts/thejessicafelts/master/icon-twitter.png)](https://www.twitter.com/thejessicafelts) &nbsp; &nbsp; [![Instagram @thejessicafelts](https://raw.githubusercontent.com/thejessicafelts/thejessicafelts/master/icon-instagram.png)](https://www.instagram.com/thejessicafelts) &nbsp; &nbsp; [![LinkedIn @thejessicafelts](https://raw.githubusercontent.com/thejessicafelts/thejessicafelts/master/icon-linkedin.png)](https://www.linkedin.com/in/thejessicafelts)
