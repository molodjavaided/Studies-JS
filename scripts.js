'use strict';

function first() {
    //Do something
    // const obj = new Object(); это редко используемый вариант

    setTimeout(function () {
        console.log(1);
    }, 500);
}
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Test');

        function second() {
            console.log(2);
        }
    }
};

first();
second();
options.makeTest();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
const { border, bg } = options.colors;
console.log(border);

function done() {
    console.log('Я прошел этот урок');

}
// посчитать колличетсво свойств в объекте

learnJS('JavaScript', done);
// console.log(Object.keys(options).length);


// // достучаться до свойста из объекта
// console.log(options.colors.border);


// // удалить свойство из объекта
// delete options.name;

// console.log(options);

// // перебрать все свойтсва в объекте и добавили счетчик этих свойств

// let counter = 0;

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i}, имеет значение ${options[key][i]} `);
//             counter++;
//         }

//     } else {
//         console.log(`Свойство ${key}, имеет значение ${options[key]} `);
//         counter++
//     }
// }

// console.log(counter);


// ------------- задача 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S.желательно использовать деструктуризацию, но не обязательно

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
// };

// function showExperience(plan) {

//     return console.log(plan.skills.exp);

// }

// showExperience(personalPlanPeter);

// ------------- задача 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

//    Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков.Если ни один не указан, то возвращается пустая строка.

//    P.S.Для переноса строки используется \n в конце строки.

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
// };

// function showProgrammingLangs(plan) {

//     return console.log(`Язык js изучен на ${personalPlanPeter.skills.programmingLangs.js} Язык php изучен на ${personalPlanPeter.skills.programmingLangs.php}`);
// }

// showProgrammingLangs(personalPlanPeter);

// ------------- задача 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter.При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

//    Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре(большими буквами).Если данные в объекте поменяются, то и сообщение тоже изменится.

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
};

personalPlanPeter.showAgeAndLangs = function (plan) {
    const { age } = plan;
    const { languages } = plan.skills;

    let str = `Мне ${age} и я владею:`;
    str += `${toUpperCase(languages)}`
    return console.log();
    ;
}

// ------------ НЕ РЕШЕНО --------------------