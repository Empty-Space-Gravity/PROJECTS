#include<stdio.h>
#include<conio.h>
void main() {
    char str[100];
    int i, length = 0, fl = 0;

    printf("Enter a string: ");
    scanf("%s", str); 

    for (i = 0; str[i] != '\0'; i++) {
        length++;
    }

    for (i = 0; i < length / 2; i++) {
        if (str[i] != str[length - i - 1]) {
            fl = 1;
            break;
        }
    }

    if (fl == 0)
        printf("Palindrome\n");
    else
        printf("Not Palindrome\n");
}
