#include<stdio.h>
#include<conio.h>

void main()
{
    int i,j=1;
    int main_variable = 10;

    for (i=1;i<=4;i++)
    {
        for (j=1;j<=i;j++)
        {   
            main_variable++;
            printf("%d",main_variable);
        }
        printf("\n");
    }

}