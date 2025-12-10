// type conversion means to convert one data type into another data type

// types
// 1) implicit type conversion (low to high)
// 2) explicit type conversion` (high to low)


// byte , short , int , float , double 

// #include<stdio.h>
// #include<conio.h>
// void main()
// {
//     int a = 10;
//     float f;
//     f=a;

//     printf("%f",f);
    
//     getch();

// }


#include<stdio.h>
#include<conio.h>
void main()
{
    float f = 3.145;
    double d;
    d=f;
    printf("%lf", d);
}