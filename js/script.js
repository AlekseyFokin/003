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
let quation1=prompt("Один из последних просмотренных фильмов?","Robocop");
let quation2=prompt("На сколько оцените его?",0);
let quation3=prompt("Один из последних просмотренных фильмов?","Robocop");
let quation4=prompt("На сколько оцените его?",0);

personalMovieDB.movies[quation1]=quation2;
personalMovieDB.movies[quation3]=quation4;

console.log(personalMovieDB);