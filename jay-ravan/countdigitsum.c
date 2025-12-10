// For loop (entry control loop)
// while loop (entry control loop)
// do while (exit control loop)

#include<stdio.h>
#include<conio.h>
void main()
{

   int number;
   int count =0;
   scanf("%d",&number); //12345

   if (number == 0)
   {
        count=1;    
   }
   else
   {
        if(number < 0)
        {
            number = -number;
        }

        do
        {
            number = number / 10; //1234.5
            count++; //5
        } 
        while(number != 0);

   
        
   }
        printf("%d",count);

}
