const numberOffilms = +prompt ('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
    count: numberOffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Один из последних посмотренных фильмов?', ''),
      b = prompt ('На сколько оцните его?', ''),
      c = prompt('Один из последних посмотренных фильмов?', ''),
      d = prompt ('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);