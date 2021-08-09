# Write a function to check whether two given strings are anagram of each other or not.
        # An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are an anagram of each other.
            # example :
            #  medical   <=>  decimal
            #  listen    <=>  silent 


def areAnagrams(str1, str2):
    n1=len(str1)
    n2=len(str2)
    if n1!=n2: 
        return 0

    str1=sorted(str1)
    str2=sorted(str2)
    for i in range(0, n1):
        if str1[i] != str2[i]:
            return 0
    
    return 1

if areAnagrams("medical","decimal"):
    print('The two strings are anagrams of each other')
else:
    print('The two strings are not anagrams of each other')
# Time Complexity : O(nlogn)







