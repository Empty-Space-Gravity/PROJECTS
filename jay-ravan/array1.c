#include<stdio.h>
#include<conio.h>
void main()
{

    int no;
    printf("Enter No");
    scanf("%d",&no); //5

    int arr[no]; //arr[5]

    for(int i=0;i<no;i++)
    {
        scanf("%d",&arr[i]);
    }


    printf("\n------------------");

    for(int i=0;i<no;i++)
    {
        printf("%d",arr[i]);
    }

    getch();

}