// m^n = pow(m,n) = m*m*m*m*m*....(n-1)times * m

function pow(m,n){
    if(n===0){
        return 1;
    }else{
        return pow(m,n-1)*m;
    }
}
console.log(pow(4, 3));


function pow(m, n) {
    if (n === 0) {
        return 1;
    } if(n%2===0) {
        return pow(m*m, n/2);
    }else{
        return m*pow(m * m, (n-1 )/ 2);
    }
}
console.log(pow(4, 3));
