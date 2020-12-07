#include<stdio.h>
#include<stdlib.h>
#include<math.h>
#include<string.h>
#include<time.h>
#include "znak.c"

void TimeStamp(FILE *f)
{time_t Time=time(NULL);
 fprintf(f,"%s \n",ctime(&Time));
}

main(int argc, char*argv[])
{
  FILE *fin,*fout,*log;
  logo();
  
  char line[100],*p;
  int poz;
  
  printf("Если в строке встречается suslik заменить его на slon \n");
  printf("\n");
  
  if ((log=fopen("protokol.log","a"))==NULL)printf("\n");
  {
  printf("ERROR!!! \n");
  printf("Файл лога protokol.log не найден! \n");
  printf("\n");
  exit(0);
  }
  
  printf("Программа приступила к работе \n");
  printf("\n");
  TimeStamp(log);
  fprintf(log,"Программа приступила к работе\n");
  fprintf(log,"\n");
  
  if (argc<3)
  {
  printf("Ошибка! Не достаточно аргументов клммандной строки \n");
  printf("Используйте например %s input output (input - входной файл, output - файл для вывода \n",argv[0]);
  printf("\n");
  TimeStamp(log);
  fprintf(log,"Ошибка! Не достаточно аргументов коммандной строки \n");
  fprintf(log,"\n");
  exit(0);printf("\n");
  }
  
  if ((fin=fopen(argv[1],"r"))==NULL)
  {
  printf("Файл %s не существует \n",argv[1]);
  printf("\n");
  TimeStamp(log);
  fprintf(log,"Файл %s не Существует \n",argv[1]);
  fprintf(log,"\n");
  fclose(log);
  exit(0);
  }
  
  printf("Файл %s успешно открылся \n",argv[1]);
  printf("\n");
  TimeStamp(log);
  fprintf(log,"Файл %s успешно открылся \n",argv[1]);
  fprintf(log,"\n"); 
  
  
  if ((fout=fopen(argv[2],"w"))==NULL)
  {
  printf("Файл %s не существует \n",argv[2]);
  printf("\n");p = strstr (line,"suslik"); 
  TimeStamp(log);
  fprintf(log,"Файл %s не существует \n",argv[2]);
  fprintf(log,"\n");
  fclose(fin);
  fclose(log);
  exit(0);
  }
  
  printf("Файл %s успешно открылся \n",argv[2]);
  printf("\n");
  TimeStamp(log);
  fprintf(log,"Файл %s успешно открылся \n",argv[2]);
  fprintf(log,"\n");
 
  printf("Программа приступила к выполнению задания \n");
  printf("\n");
  TimeStamp(log);
  fprintf(log,"Программа приступила к выполнению задания \n");
  fprintf(log,"\n");
  
  
   while ( 1 ) {
    p = fgets (line,100,fin);  
    poz=0;
    if ( p == NULL ) {
                       TimeStamp(log);
                       fprintf(log,"Строки в файле %s закончились\n",argv[1]);
                       fprintf(log,"\n");  
                       break;
                     }
    else printf("Прочитанная строка:\n %s", line);
    TimeStamp(log);
    fprintf(log,"Прочитанная строка:\n %s", line);
    fprintf(log,"\n"); 
    
    printf("\n");
    
      while (1) { 
                   p = strstr (line,"suslik"); 
                   if (p==NULL) break;
		   char nline[100];
                   strcpy (nline,p+6);
                   strcpy (line+strlen(line)-strlen(p),"slon"); 
		   strcat(line,nline);
		   p = strstr (line,"suslik"); 
                   }
   printf("Замененная строка:\n %s",line);
   printf("\n");
   TimeStamp(log);
   fprintf(log,"Замененная строка:\n %s",line);
   fprintf(log,"\n"); 
   fputs(line,fout);
}
  printf("\n");
  printf("Программа завершила выполнение задания \n");
  printf("\n");
  TimeStamp(log);
  fprintf(log,"Программа завершила выполнение задания \n");
  fprintf(log,"\n");
    
  
 
  fclose(fin);
  fclose(fout);
}
