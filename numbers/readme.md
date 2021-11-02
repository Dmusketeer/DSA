# -------------------------- JavaScript Numbers --------------------------


- Math.floor - rounds down to nearest integer
- Math.round - rounds to nearest integer
- Math.ceil - rounds up to nearest integer


## Number.EPSILON
- Number.EPSILON returns the smallest interval between two representable numbers. 
- This is useful for the problem with floating-point approximation.
<br/>

function numberEquals(x, y) { <br/>
    return Math.abs(x - y) < Number.EPSILON; <br/>
}<br/>
numberEquals(0.1 + 0.2, 0.3); // true <br/>

- This function works by checking whether the difference between the two numbers 
are smaller than Number.EPSILON. Remember that Number.EPSILON is the smallest 
difference between two representable numbers. The difference between 0.1+0.2 and 0.3 
will be smaller than Number.EPSILON.



## Maximums & Minimums
- Number.MAX_SAFE_INTEGER [returns the largest integer]
- Number.MIN_SAFE_INTEGER [returns the smallest integer]
- Number.MIN_VALUE [returns the smallest floating-point number possible.]
- Number.MAX_VALUE [ returns the largest floating-point number possible.]



## Infinity

- The only thing greater than Number.MAX_VALUE is Infinity, and the only thing smaller 
than Number.MAX_SAFE_INTEGER is <b>-</b> Infinity.
    - 1) Infinity > Number.MAX_SAFE_INTEGER; // true
    - 2) -Infinity < Number.MAX_SAFE_INTEGER // true;
    - 3) -Infinity -32323323 == -Infinity -1; // true

    This evaluates to true because nothing can go smaller than -Infinity



## Size Summary
- This inequality summarizes the size of JavaScript numbers from smallest (left) to 
largest (right): <br/>
        `-Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_
SAFE_IN- TEGER < Number.MAX_VALUE < Infinity`



## Random Number Generator
`Math.random() * (max - min + 1) ) + min` [min and max both includes]  
- Random number generation is important to simulate conditions. JavaScript has a built-in 
function for generating numbers:<br/> <b>Math.random() : </b>
returns a float between 0 and 1

- To get floating points higher than 1, simply multiply Math.random() by the range. <br/>

Add or subtract from it to set the base.
- Math.random() * 100; //  floats between 0 and 100
- Math.random() * 25 + 5; // floats between 5 and 30
- Math.random() * 10 - 100; // floats between -100 and -90

