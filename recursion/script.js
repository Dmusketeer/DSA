function count(n){  // decreasing number
    if(n>0){
        console.log(n);
        count(n - 1);
    }else{
        return;
    }
}
count(12);


function count(n) {
    //base case
    if (n > 0) {
        count(n - 1);
        console.log(n); // increasing number
    } else {
        return;
    }
}
count(12);