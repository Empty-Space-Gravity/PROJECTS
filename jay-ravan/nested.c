#include<stdio.h>
#include<conio.h>
void main()
{
    int a = 10;

    if(a>0) //-11 > 0
    {
        if(a%2==0) //11%2 == 0
        {
            printf("even");
        }
        else
        {
            printf("odd");
        }
    }
    else
    {
        printf("-ve number");
    }
}