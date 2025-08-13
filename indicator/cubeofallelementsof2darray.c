#include<stdio.h>
#include<conio.h>
void findCubes(int *arr, int rows, int cols) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            int val = *(arr + i * cols + j); // Pointer arithmetic
            printf("Cube of %d is %d\n", val, val * val * val);
        }
    }
}

void main() {
    int rows, cols;

    printf("Enter rows and columns: ");
    scanf("%d %d", &rows, &cols);

    int arr[rows][cols];

    printf("Enter %d elements:\n", rows * cols);
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            scanf("%d", &arr[i][j]);
        }
    }

    printf("\nCubes of all elements:\n");
    findCubes((int *)arr, rows, cols); 

    getch();
}
