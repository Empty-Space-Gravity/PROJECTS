#include<stdio.h>
#include<conio.h>
void main()
{
    char character;
    printf("Enter A character");
    scanf("%s",&character);

    switch (character)
    {
    case 'a':
        printf("vowel");
        break;
    case 'e':
        printf("vowel");
        break;
    case 'i':
        printf("vowel");
        break;
    case 'o':
        printf("vowel");
        break;
    case 'u':
        printf("vowel");
        break;
    case 'y':
        printf("Both vowel & consonant");
        break;
    default:
        printf("Consonant");
        break;
    }
}