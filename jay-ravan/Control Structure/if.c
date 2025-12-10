#include<stdio.h>
#include<conio.h>
void main()
{
    int maths, eng, sci;

    float avg;

    printf("Enter maths marks ");
    scanf("%d",&maths);

    printf("Enter eng marks ");
    scanf("%d",&eng);

    printf("Enter sci marks ");
    scanf("%d",&sci);

    avg = (maths + sci + eng)/3;
    printf("%f",avg);


}