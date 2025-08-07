// #include<stdio.h>
// #include<conio.h>
// void main()
// {
//     int pattern=1;
//     printf("1\n");
//     printf("4 4\n");
//     printf("9 9 9\n");
//     printf("16 16 16 16\n");
//     printf("25 25 25 25 25\n");
//     getch();
// }

/// or 


#include<stdio.h>
#include<conio.h>
void main()
{
    int tmkc=1;
    for (int i=1;i<=5;i++)
    {
        for (int j=1;j<=i;j++)
        {
            printf("%d",i*i);

        }
        printf("\n");
    }
    getch();
}