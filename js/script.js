"scriptstrict";
let numberOfFilms=prompt("Сколько фильмов Вы уже посмотрели?",0);
console.info(`Пользователь посмотрел ${numberOfFilms} фильма(ов).`);
//------------------------------------------------------------------------
let personalMovieDB={
   count:   numberOfFilms,
   movies:  {},
   actors:  {},
   genres:  [],
   privat:false
};
//------------------------------------------------------------------------
