// #include<stdio.h>
// #include<conio.h>
// void main()
// {

//     int loude;
//     int lasan;

//    scanf("%d",&loude);
//    scanf("%d",&lasan);

//     if (loude > lasan)
//     {
//          printf("Yessssssss");
//     }

//     else if (loude == lasan)
//     {
//          printf("Hum do bhai aur dono hi tabahi");
//     }

//     else
//     {
//         printf("lehsun bada hai");
//     }

//     getch();
// }


#include<stdio.h>
#include<conio.h>

void main()
{


    int first_number;

    printf("Enter A Number To Check");
    scanf("\n%d" , &first_number);

    if (first_number < 0)
    {
         printf("Negative.....");
    }
    else if(first_number == 0)
    {
         printf("Neutral.....");
    }
    else
    {
        printf("Positive.....");
    }


    getch();

}