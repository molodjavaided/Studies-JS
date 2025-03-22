// /* Задание на урок:

// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно*/

// 'use strict';

// // Код возьмите из предыдущего домашнего задания

// 'use strict';

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };



// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// // rememberMyFilms();



// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// // detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGenres();

// -------------------- 1 задача -------------------

function calculateVolumeAndArea(edge) {
    const volume = edge * edge * edge;
    const area = 6 * (edge * edge);

    if (typeof (edge) !== 'number' || edge <= 0 || !Number.isInteger(edge)) {
        console.log("При вычислении произошла ошибка");
    } else {
        console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
    }
}

calculateVolumeAndArea('5');

// -------------------- 2 задача -------------------

function getCoopeNumber(place) {
    coope = place / 4;
    if (typeof (place) !== 'number' || place < 0 || !Number.isInteger(place)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (place === 0 || place > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(place / 4);
}

console.log(getCoopeNumber(12));

// -------------------- 3 задача -------------------

function getTimeFromMinutes(time) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;

    let strHours = ''

    switch (hours) {
        case 1:
            strHours = 'час';
            break;

        case 2:
        case 3:
        case 4:
            strHours = 'часа';
            break;

        default:
            strHours = 'часов';
            break;
    }

    return `Это ${hours} ${strHours} и ${minutes} минут`
}

console.log(getTimeFromMinutes(523));

// -------------------- 4 задача -------------------

function findMaxNumber(numOne, numTwo, numThreе, numFour) {

    if (typeof (numOne) !== 'number' ||
        typeof (numTwo) !== 'number' ||
        typeof (numThreе) !== 'number' ||
        typeof (numFour) !== 'number') {
        return 0;
    }
    return Math.max(numOne, numTwo, numThreе, numFour);
}

console.log(findMaxNumber(-4, -20000, -123, -442));
