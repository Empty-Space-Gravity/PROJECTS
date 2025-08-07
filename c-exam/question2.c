#include<stdio.h>
#include<conio.h>
void main()
{   
    int array[4];
    printf("Enter value");
    int largest = array[0];
    for (int i=1;i<=4;i++)
    {
        scanf("%d",&array[i]);

    }
    for (int i=1; i<=4; i++)
    {
        if (array[i] < array[i+1])
        {
            largest = array [i+1];
        }
 
    }
    printf("%d",largest);

    getch();

}