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