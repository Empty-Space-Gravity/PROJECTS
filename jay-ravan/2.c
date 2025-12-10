    #include<stdio.h>
    #include<conio.h>

void main()
{
    float principal = 100.0;
    float rate = 10.0;
    float time = 5.0;
    float interest = (principal * rate * time) / 100;
    printf("The interest is: %.0f\n", interest);

    getch();

}