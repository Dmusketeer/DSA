// Length of string
// #include <stdio.h>
// #include <string.h>
//
// int main() {
//   char a[100];
//   int length;

//   printf("Enter a string to calculate its length\n");
//   gets(a);

//   length = strlen(a);

//   printf("Length of the string = %d\n", length);

//   return 0;
// }



// change the case from upper to lower and lower to upper
#include <stdio.h>
    
int main(){
    int c = 0;
    char ch, s[1000];

    printf("Input a string\n");
    gets(s);

    while (s[c] != '\0')
    {
        ch = s[c];
        if (ch >= 'A' && ch <= 'Z')
            s[c] = s[c] + 32;
        else if (ch >= 'a' && ch <= 'z')
            s[c] = s[c] - 32;
        c++;
    }
    printf("%s\n", s);
    return 0;
}
