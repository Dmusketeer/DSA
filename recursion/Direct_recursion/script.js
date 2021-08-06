function count(n){  
    if(n>0){
        console.log(n);
        count(n - 1);// decreasing number
    }else{
        return;
    }
}
count(12);


function count(n) {
    //base case
    if (n > 0) {
        count(n - 1);// increasing number
        console.log(n); 
    } else {
        return;
    }
}
count(12);