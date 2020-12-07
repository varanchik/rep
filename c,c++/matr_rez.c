#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <stdbool.h>
#include <ctype.h>
#include <string.h>

bool is_integer(const char* str);
void tArray(int m, int n, int mas[m][n], int mas2[n][m]);
void inputArrayRnd(int m, int n, int mas[m][n]);
void inputArrayHand(int m, int n, int mas[m][n]);
void printArray(int m, int n,int mas[m][n]);

int main(int argc, char *argv[]) 
{
	printf("Задание: транспонировать матрицу m на n\n");
	printf("\n");
	if(argc < 4)
	{
		printf("НЕ хватает аргументов!\nИспользуйте %s [Hand/Random] [M] [N], где Hand/Random - способ ввода, M и N размерность матрицы\n", argv[0]);
      	exit(0);
    }
    if((strcmp(argv[1],"Random"))&&(strcmp(argv[1],"Hand")))
    {
    	printf("Не известный аргумент %s\n", argv[1]);
    	exit(0);
   	}
   	else
   	{
   		if((is_integer(argv[2]) == false ) || (is_integer(argv[3]) == false))
    	{
    		printf("Ошибка! M и N должны быть числами...\n");
    		exit(0);
   		}else
		{
			int m = atoi(argv[2]);
			int n = atoi(argv[3]);
			int a[m][n];
			int b[n][m];
   			if(!strcmp(argv[1], "Random"))
				inputArrayRnd(m,n,a);
			if(!strcmp(argv[1], "Hand"))
				inputArrayHand(m,n,a);	
			printf("\nИсходный массив: \n");
			printArray(m,n,a);
			tArray(m,n,a,b);
			printf("\nРезультат: \n");
			printArray(n,m,b);
		}
		
  	}
  	return 0;
}

bool is_integer(const char* str)
{
	while(*str)
		if(!isdigit(*str++))
			return false;
	return true;	
}

void tArray(int m, int n, int mas[m][n], int mas2[n][m])
{
	int i = 0;
	int j = 0;
	for(i = 0; i < n; i++)
		for(j = 0; j < m; j++)
			mas2[i][j] = mas[j][i];
}
void inputArrayRnd( int m, int n, int mas[m][n])
{
	int i = 0;
	int j = 0;
	srand(time(NULL));
	for(i = 0; i < m; i++)
		for(j = 0; j < n; j++)
			mas[i][j] = rand()%10+1;
}

void inputArrayHand(int m, int n, int mas[m][n])
{
	int i = 0;
	int j = 0;
	char buf[100];
	for(i = 0; i < m; i++)
	{
		for(j = 0; j < n; j++)
		{
			fgets(buf, 100, stdin);	
			mas[i][j] = atoi(buf);
		}
	}	
}

void printArray(int m, int n,int mas[m][n])
{
	int i = 0;
	int j = 0;
	for(i = 0; i < m; i++)
	{
		for(j = 0; j < n; j++)
		{
			printf("%d ", mas[i][j]);	
		}
		printf("\n");
	}
		
}