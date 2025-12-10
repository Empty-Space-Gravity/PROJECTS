// #include <stdio.h>
// #include <conio.h>
// int main(void)
// {
//     int Number_1;
//     scanf("%d",&Number_1);
    
//     int Not_prime;
//     int prime;
//     if (Number_1%2!=0)
//     {
//         for (int i = 2 ; i <=Number_1 ; i++)
//             {
//                 if (Number_1%i==0)
//                 { 
//                     if (i==Number_1)
//                     {
//                         continue;
//                         printf("Not Prime");
//                     }
//                 }
//                 else 
//                 {
//                     printf("prime");
//                 }
                
//             }
//     }
    

//     getch();
// }
#include<stdio.h>
#include<conio.h>
void main()
{

    int num = 2;

    for (int i = 1; i <=num; i++)
    {
        for (int j=1;j<=num;j++)
        {
            printf("%d",num);
        }
        printf("\n");
    }


    // if(str[0]==str[1])
    // {
    //     printf("True");
    // }

    getch();
}