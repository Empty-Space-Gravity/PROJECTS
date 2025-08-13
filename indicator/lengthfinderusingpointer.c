#include<stdio.h>
#include<conio.h>
void main() {
    char str[100];
    char *ptr;
    int length = 0;

    printf("Enter any string: ");
    fgets(str, sizeof(str), stdin);  

    ptr = str;  
    while (*ptr != '\0') {  
        length++;
        ptr++;
    }

    if (str[length - 1] == '\n') {
        length--;
    }

    printf("The length of a string is: %d\n", length);
    
    getch();
}
