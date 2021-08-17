## **Collatz Conjecture**


---

<br />

The Collatz conjecture is a conjecture in mathematics that is named after **Lothar Collatz**, who first introduced the idea in 1937. It concerns sequences of numbers, defined as follows: 

- Start with any positive integer: `n`. 

Then each term is obtained from the previous term as follows: 

- If the previous term is even, the next term is one half of the previous term: `(n / 2)`.

- If the previous term is odd, the next term is 3 times the previous term plus 1: `((n * 3) + 1)`.

The conjecture is that no matter what value of `n`, the sequence will always reach 1.

<br />
<br />

---

<br />

## **About this Program** 
<br/>

It is my desire to create a JavaScript program that will take any input and apply the rules of the Collatz Conjecture, prooving any number provided (up to the `MAX_SAFE_INTEGER` limit) will, in fact, always reach 1.

As of 2020, the conjecture has been checked by computer for all starting values up to 2<sup>68</sup>, with all initial values tested so far eventually ending in the repeating cycle (4;2;1) of period 3.

Since 2<sup>68</sup> is larger than the `MAX_SAFE_INTEGER` limit of (2<sup>53</sup> – 1), the expected outcome of this program is that each input provided will eventually reach 1.

Therefore, this program is not intended to prove the Collatz Conjecture false, but rather to show that any number smaller than (2<sup>53</sup> – 1) does, in fact, conform to it.

<br />
<br />

---

<br />

Jessica Felts &nbsp; / &nbsp; 2021