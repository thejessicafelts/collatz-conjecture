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

## **Recent Updates**

:white_check_mark: There is no safeguard for numbers beyond Step 1 being larger than the `Number.MAX_SAFE_INTEGER` limit. This will be the next issue addressed by the program.

## **Updates Currently Underway**

- I would like to build out a more robust UI, to display what is happening to the numbers on the page instead of inside the console. This will allow more users to be able to interact with the program, understand what is happening, and learn from it.

- Once the UI is updated, I intend to release the program online to the public, either hosted on my personal website, a new website, or my github pages account. When that step has been completed, I will updated this README.md to include links to the relevant site or page.

## **Future Planning**

Once the above improvements have been made, I intend to begin building it out using `BigInt()` values, (which I currently have no experience with).

For my own curiosity, I would like to see how large of a number I can successfully run through my program, once the `Number.MAX_SAFE_INTEGER` limit is no longer a barrier to larger numbers.

---

### **About Me**

I am a Software Engineer, and am also currently a University Student with a casual interest in Mathematics, and absolute fascination with Computer Science.

I am beginning an initial build of this program at just before midnight on a Monday, because it sounded like a fun idea. That's the type of person I am.