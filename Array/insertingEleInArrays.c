

// C Program to Insert an element at a specific position in an Array

#include <stdio.h>
int main(){
    int Arr[100]={0};
    int i,pos=5,n=10;
    // element to be inserted
    int x=50;
    // initial array of size 10
    for(i=0;i<10;i++){
        Arr[i]=i+2;
    }
    // print the original array
    for(i=0;i<n;i++){
        printf("%d ",Arr[i]);
    }
    printf("\n");
    n++;
    // shift elements forward
    for(i=n-1;i>=pos;i--){
        Arr[i]=Arr[i-1];
    }
    // insert x at pos
    Arr[pos-1]=x;
    // print the updated array
    for(i=0;i<n;i++){
        printf("%d ",Arr[i]);
    }
}