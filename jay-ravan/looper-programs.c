// Alphabet skipper
// #include<stdio.h>
// void main()
// {
//     char string[]="abcdefghijklmnopqrstuvwxyz";

//     int i = 0; 

//     do
//     {
//         printf("%d",string[i]);
//         i=i+4;
//     }while( i < 26);
// }

// digit counter
// #include<stdio.h>
// #include<conio.h>
// void main()
// {

//    int number;
//    int count =0;
//    scanf("%d",&number); //12345

//    if (number == 0)
//    {
//         count=1;    
//    }
//    else
//    {
//         if(number < 0)
//         {
//             number = -number;
//         }

//         do
//         {
//             number = number / 10; //1234.5
//             count++; //5
//         } 
//         while(number != 0);

//    }
//         printf("%d",count);
// }

// sum of the first and last digit program
// #include<stdio.h>
// #include<conio.h>

// void main()
// {
  

//     int first_number;
//     int last_number;
//     int number;
//     int sum;

//     printf("Enter A Number");
//     scanf("%d",&number);

//     last_number = number % 10;
//     first_number = number;
//     do 
//     {
//         first_number = first_number /10;
//     }
//     while(first_number >=10);
    
//     sum  = first_number + last_number;
//     printf("the sum is :  %d",sum);
// }

