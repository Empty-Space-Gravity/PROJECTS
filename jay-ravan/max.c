#include<stdio.h>
#include<conio.h>
void main()
{
    int a = 1000;
    int b = 2000;
    int c = 150;

    if(a>b)  //10 > 20
    {
        if(a>c)
        {
            printf("A is max");
        }
        else
        {
            printf("C is max");
        }
    }

    else if(b > c)
    {
        printf("B is max");
    }

    else
    {
        printf("C is max");
    }
}