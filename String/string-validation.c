// The ASCII values range of A to Z is 65 to 90, and a to z is 97 to 122 and 0 t0 9 is 48 to 57.
#include <stdio.h>
#include <string.h>

int main(){
    char s[1000];
    int i, alphabets = 0, digits = 0, specialcharacters = 0;

    printf("Enter  the sQwertytring : ");
    gets(s);

    for (i = 0; s[i]; i++)
    {
        if ((s[i] >= 65 && s[i] <= 90) || (s[i] >= 97 && s[i] <= 122))
            alphabets++;
        else if (s[i] >= 48 && s[i] <= 57)
            digits++;
        else
            specialcharacters++;
    }

    printf("Alphabets = %d\n", alphabets);
    printf("Digits = %d\n", digits);
    printf("Special characters = %d", specialcharacters);

    return 0;
}