// Method1:Using Direct formulas

function SumOfNumbers(number){
    sumOfNums  = (number*(number+1))/2 
    console.log(sumOfNums);
}

// Time Complexity : O(1)
SumOfNumbers(5);//15


// Method 2 :Using recursive formulas
// 1+2+3+.......+(n-1)+n;
// func(n-1)+func(n)

function summation(n){
    if(n<0){
        return 0;
    }else{
        return summation(n-1)+n;
    }
}

console.log(summation(5)); //