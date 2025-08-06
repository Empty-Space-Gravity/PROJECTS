// #include<stdio.h>
// #include<conio.h>

// void main() {
//     int rows, cols;

//     printf("Enter number of rows: ");
//     scanf("%d", &rows);

//     printf("Enter number of columns: ");
//     scanf("%d", &cols);

//     int arr[100][100]; 

//     printf("Enter the elements of the array:\n");
//     for(int i = 0; i < rows; i++) {
//         for(int j = 0; j < cols; j++) {
//             scanf("%d", &arr[i][j]);
//         }
//     }

//     int largest = arr[0][0];

//     for(int i = 0; i < rows; i++) {
//         for(int j = 0; j < cols; j++) {
//             if(arr[i][j] > largest) {
//                 largest = arr[i][j];
//             }
//         }
//     }

//     printf("The largest element in the array is: %d\n", largest);

// }



// #include<stdio.h>
// #include<conio.h>
// void main()
// {
//     int rows, columns;
//     printf("Enter the No. of rows and columns");
//     scanf("%d %d",&rows,&columns);
//     int array[rows][columns];
//     printf("Enter the elements of array to create a matrix");
    
//     for (int i=0; i<rows ; i++)
//     {
//         for (int j=0;j<columns;j++)
//         {
//             scanf("%d",&array[i][j]);    
//         }
//     }

    
//     for (int i =0; i< rows ; i++)
//     {
//         for (int j =0;j<columns;j++)
//         {
//             printf("%d",array[i][j]);    
//         }

//         printf("\n");
//     }

//     getch();

// }



// #include <stdio.h>

// void main() {
//     int rows, columns, col_sum, sum = 0;

//     printf("Enter the number of rows and columns: ");
//     scanf("%d %d", &rows, &columns);

//     int array[rows][columns];

//     // Input array elements
//     printf("Enter the elements of the array:\n");
//     for (int i = 0; i < rows ; i++) {
//         for (int j = 0; j < columns; j++) {
//             scanf("%d", &array[i][j]);    
//         }
//     }

//     // Input column number
//     printf("Enter the column number to find the sum (starting from 0): ");
//     scanf("%d", &col_sum);

//     // Check valid column
//     if (col_sum < 0 || col_sum >= columns) {
//         printf("Invalid column number!\n");
//         return;
//     }

//     // Calculate column sum
//     for (int i = 0; i < rows; i++) {
//         sum += array[i][col_sum];
//     }

//     // Print result
//     printf("Sum of column %d = %d\n", col_sum, sum);
// }
