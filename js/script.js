"use strict";
let numberOfFilms=+prompt("Сколько фильмов Вы уже посмотрели?",0);
console.log(`Пользователь посмотрел ${numberOfFilms} фильма(ов).`);
//------------------------------------------------------------------------
let personalMovieDB={
   count:   numberOfFilms,
   movies:  {},
   actors:  {},
   genres:  [],
   privat:false
};
//------------------------------------------------------------------------


let i=0;
let j=0;

while (i<2)
{
    let quation1=prompt("Один из последних просмотренных фильмов?","Robocop");
    if ((quation1!=null)&&(quation1.length>0) && (quation1.length<51)) {

                                                        while (j<1)
                                                        {
                                                         let quation2=prompt("На сколько оцените его?",0);
                                                         if ((quation2!=null)&&((+quation2)>-1) && ((+quation2)<11))
                                                             { j++; personalMovieDB.movies[quation1]=quation2;}
                                                        }
                                                        j=0;
                                                        i++;
                                                        
                                                    }

    
}
alert("второй вид цикла");
//-----------------------------------------------------------------------------------------
i=0;
j=0;
do
{
    let quation3=prompt("Один из последних просмотренных фильмов?","Rambo");
    if ((quation3!=null)&&(quation3.length>0) && (quation3.length<51)) {

                                                        do
                                                        {
                                                         let quation4=prompt("На сколько оцените его?",0);
                                                         if ((quation4!=null)&&((+quation4)>-1) && ((+quation4)<11))
                                                             { j++; personalMovieDB.movies[quation3]=quation4;}
                                                        }while (j<1);
                                                        j=0;
                                                        i++;
                                                        
                                                    }

    
}
while (i<2);
//--------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
alert("третий вид цикла");
i=0;
j=0;
for (i=0; i<2;i++)
{
    let quation3=prompt("Один из последних просмотренных фильмов?","Predator");
    if ((quation3!=null)&&(quation3.length>0) && (quation3.length<51)) {

                                                        for (j=0;j<2;j++)
                                                        {
                                                         let quation4=prompt("На сколько оцените его?",0);
                                                         if ((quation4!=null)&&((+quation4)>-1) && ((+quation4)<11))
                                                             { personalMovieDB.movies[quation3]=quation4;j=2;}
                                                         else {j--;}    
                                                        }
                                                     }
    else {i--;}
}




if (personalMovieDB.count<10) {alert("Просмотрено довольно мало фильмов");}
    else if ((personalMovieDB.count>=10)&&(personalMovieDB.count<=30)){alert("Вы классический зритель");}
            else if ((personalMovieDB.count>30)) {alert("Вы киноман.");}
                    else {alert("Произошла ошибка");}

console.log(personalMovieDB);

/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/