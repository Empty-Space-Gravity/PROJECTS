#include<stdio.h>
#include<conio.h>

void main()
{
  

    int first_number;
    int last_number;
    int number;
    int sum;

    printf("Enter A Number");
    scanf("%d",&number);

    last_number = number % 10;
    first_number = number;
    do 
    {
        first_number = first_number /10;
    }
    while(first_number >=10);
    
    sum  = first_number + last_number;
    printf("the sum is :  %d",sum);
}