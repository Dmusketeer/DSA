// Indirect Recursion: In this recursion, there may be more than one functions and they are calling one another in a circular manner.

function funB(n){
    if(n>1){
        console.log(n);
        funA(n/2);
    }
}

function funA(n){
    if(n>0){
        console.log(n);
        funB(n-1);
    }
}

var val = 20;
funA(val);

// output
// 20 19 9.5 8.5 4.25 3.25 1.625