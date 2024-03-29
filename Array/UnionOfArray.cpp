// Given two sorted arrays, find their union and intersection.
#include <stdio.h>

/* Function prints union of arr1[] and arr2[]
   m is the number of elements in arr1[]
   n is the number of elements in arr2[] */
void printUnion(int arr1[], int arr2[], int m, int n)
{
    int i = 0, j = 0;
    while (i < m && j < n)
    {
        if (arr1[i] < arr2[j])
        {
            printf("%d ", arr1[i++]);
        }
        else if (arr2[j] < arr1[i])
        {
            printf("%d ", arr2[j++]);
        }
        else
        {
            printf("%d ", arr1[i++]);
            j++;
        }
    }
    /* Print remaining elements of the larger array */
    while (i < m)
    {
        printf("%d", arr1[i++]);
    }
    while (j < n)
    {
        printf("%d", arr2[j++]);
    }
}

// driver code
int main()
{
    int arr1[] = {1, 2, 4, 5, 6};
    int arr2[] = {2, 3, 5, 7};
    int m = sizeof(arr1) / sizeof(arr1[0]);
    int n = sizeof(arr2) / sizeof(arr2[0]);
    printUnion(arr1, arr2, m, n);
    return 0;
}
// Time Complexity : O(m + n)