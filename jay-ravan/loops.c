
#include<stdio.h>
#include<conio.h>
void main()
{

    int i=2020;

    while (i<=2040)
    {
        if(i % 4 == 0  && i % 100!= 0)
        {
             printf("\n%d",i);
        }
        i++;
    }


    getch();
}