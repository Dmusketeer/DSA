# code to count and display number of vowels

def check_vowels(string,vowels):
    final = [each for each in string if each in vowels] 
    print(len(final))
    print(final)


name = "Dheeraj Tiwari"
Vowels="aAeEiIoOuU"
check_vowels(name,Vowels)