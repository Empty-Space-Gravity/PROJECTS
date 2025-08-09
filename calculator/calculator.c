#include <stdio.h>
#include <conio.h>
void main()
{

    int first_input_number;
    int Second_input_number;

    printf("Enter First Number");
    scanf("%d", &first_input_number);
    printf("Enter Second Number");
    scanf("%d", &Second_input_number);
    char user_choice[100];
    printf("Enter which operation do you want to perform\n");
    printf("+ for Addition\n");
    printf("- for substraction\n");
    printf("/ for division\n");
    printf("* for multiplication\n");
    scanf("%s", &user_choice);

    if (user_choice[0] == '+')
    {
         printf("Ans : %d", first_input_number + Second_input_number);
    }
    else if (user_choice[0] == '-')
    {
         printf("Ans : %d", first_input_number - Second_input_number);
    }
    else if (user_choice[0] == '*')
    {
         printf("Ans : %d", first_input_number * Second_input_number);
    }
    else if (user_choice[0] == '/')
    {
         printf("Ans : %d", first_input_number / Second_input_number);
    }
    getch();
}