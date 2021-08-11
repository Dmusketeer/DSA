#include<iostream>
    using namespace std;


class Array {

    private:
        int *A;
        int size;
        int length;
    public:
    // constructor
        Array(int size){
            this->size = size;
            A=new int[size];
        }
        void create(){
            length =5;
            for(int i=0;i<length;i++){
                A[i]=10;
            }
        }
        void display(){
            cout<<"Array Elements are : ";
            for(int i=0;i<length;i++){
                    cout<<A[i]<<" ";
            }
            cout<<"\n";
        }
        //destructor
        ~Array(){
            delete[] A;
            cout<<"The array is destroyed!";
        }
};

int main(){
    Array array1(9);
    array1.create();
    array1.display();
    return 0;

}