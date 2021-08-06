// If a recursive function calling itself and that recursive call is the last statement in the function then it’s known as Tail Recursion.After that call the recursive function performs nothing

function fun(n){

    if(n>0){
        console.log(n + " "); //3 2 1
        // Last statement in the function
        fun(n-1);
        // console.log(n + " "); //1 2 3 // example of head recursion
    } 
}
var x=3;
fun(x);
// Time Complexity For Tail Recursion: O(n)


// Head Recursion: If a recursive function calling itself and that recursive call is the first statement in the function then it’s known as Head Recursion.There’s no statement, no operation before the call.