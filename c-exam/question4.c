#include<stdio.h>
#include<conio.h>
void main()
{

    int array[] = {1,2,3,4,5};
    int *squared_number = &array[4];
    printf("%d" , (*squared_number *  *squared_number));
    
    getch();
}