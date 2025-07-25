#include<stdio.h>
void main()
{
    
    int input;
    printf("Enter Your Marks");
    scanf("%d",&input);
    int grade = input/10;

    switch (grade)
    {
    case 10:
        printf("A aaya hai!!!!");
        break;
    case 9:
        printf("A aaya Hai!!!!!");
        break;
    case 8:
        printf("B aaya Hai!!!!!!");
        break;
    case 7:
        printf("C aaya Hai!!!!!");
        break;
    default:
        printf("Jaa davle aur teri biwi ko mere paas chhod ke jaa");
        break;
    }

}