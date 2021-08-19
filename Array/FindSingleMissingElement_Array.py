# inding single missing element in sorted array of Natural elements :
# Algorithm: 
# Calculate the sum of first n natural numbers as sumtotal= n*(n+1)/2
# Create a variable sum to store the sum of array elements.
# Traverse the array from start to end.
# Update the value of sum as sum = sum + array[i]
# Print the missing number as sumtotal – sum
def getMissing(A):
    n=len(A)
    total = (n+1)*(n+2)/2;
    total_of_A = sum(A)
    return int(total-total_of_A)

A=[1,3,4,5,6];
missing = getMissing(A)
print(missing)