// Tree Recursion: To understand Tree Recursion let’s first understand Linear Recursion.If a recursive function calling itself for one time then it’s known as Linear Recursion.Otherwise if a recursive function calling itself for more than one time then it’s known as Tree Recursion.
function treeFun(n){
    if(n>0){
        console.log(n + " ");
        //  calling Once 
        treeFun(n-1);
        // calling twice
        treeFun(n-1);
        
    }
}

var val=3
treeFun(val);
// Time Complexity For Tree Recursion: O(2 ^ n)