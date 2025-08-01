#include<stdio.h>
#include<conio.h>
void main()
{
    for (int i=41;i<=45;i++)
    {
        for (int j=41;j<=i;j++)
        {
            printf("%d ",j);
        }
        printf("\n");
    }

    getch();
}