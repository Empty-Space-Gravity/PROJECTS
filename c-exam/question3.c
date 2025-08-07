#include<stdio.h>
#include<conio.h>
#include<string.h>
char reversestring()
{

    char str[] = "uitns";
    // printf("%d",str[0]);
    
    for (char c = strlen(str) ;c>=0;c--)
    {
        printf("%c",str[c]);
    }
    

}
void main()
{
    reversestring();
    getch();

}