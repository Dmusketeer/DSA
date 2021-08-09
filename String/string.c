// Length of string
#include <stdio.h>
#include <string.h>

int main() {
  char a[100];
  int length;

  printf("Enter a string to calculate its length\n");
  gets(a);

  length = strlen(a);

  printf("Length of the string = %d\n", length);

  return 0;
}



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




// Count Number Of Vowels &Consonants In A String
#include <stdio.h>
#include <string.h>

    int
    main()
{
    char s[1000];
    int i, vowels = 0, consonants = 0;

    printf("Enter  the string : ");
    gets(s);
    //   store the string into the variable ‘s’
    for (i = 0; s[i]; i++)
    {
        if ((s[i] >= 65 && s[i] <= 90) || (s[i] >= 97 && s[i] <= 122))
        {

            if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' || s[i] == 'A' || s[i] == 'E' || s[i] == 'I' || s[i] == 'O' || s[i] == 'U')
                vowels++;
            else
                consonants++;
        }
    }
    printf("vowels = %d\n", vowels);
    printf("consonants = %d\n", consonants);
    return 0;
}