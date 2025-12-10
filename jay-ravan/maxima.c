#include <stdio.h>
#include <conio.h>
void main()
{

    int a;
    int b;
    int c;
    int d;

    printf("Enter Four Numbers!!");
    scanf("%d %d %d %d", &a, &b, &c, &d);

    if (a > b && a > c && a > d)
    {
        printf("A Tussi Great Ho!");
    }
    else if (b > a && b > c && b > d)
    {
        printf("B Tussi Great Ho!");
    }
    else if (c > a && c > b && c > d)
    {
        printf("C Tussi Great Ho!");
    }
    else
    {
        printf("D Tussi Great Ho!");
    }

    getch();
}