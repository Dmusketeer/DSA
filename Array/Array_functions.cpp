#include<iostream>

using namespace std;

struct Array{
 int A[10];
 int size;
 int length;   
};

void display(struct Array arr){
 for(int i=0; i<arr.length; i++){
     cout << arr.A[i] << " ";
    }
    cout<<endl;
}   


void swap(int *x , int *y){
    int temp = *x;
    *x=*y;
    *y=temp;
}

int get(struct Array arr,int index){
    if(index>0 && index<arr.length){
        return arr.A[index];
    }else{
        return -1;
    }
}

void set(struct Array *arr,int index,int ele){
     if(index>0 && index<arr->length){
        arr->A[index]=ele;
     }
}

int Max(struct Array arr){
    int max=arr.A[0];
    for(int i=0;i<arr.length;i++){
        if(arr.A[i]>max){
            max=arr.A[i];
        }
        return max;
          }
}

int Min(struct Array arr){
    int min=arr.A[0];
    for (int i = 0; i < arr.length; i++){
        if (arr.A[i] < min){
            min = arr.A[i];
        }
    }
    return min;
}



int main(){
    struct Array arr1={{1,2,3,4,5},5,5};
    display(arr1);
    cout<<"The element at index 2 is : " <<get(arr1,2);
    set(&arr1, 0, 50);
    cout<<endl;
    display(arr1);
    return 0;
}