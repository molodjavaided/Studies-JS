// Масивы и псевдомасивы

'use strict'

const arr = [1, 2, 3, 4, 5];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}


// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// метод перебора массива
arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});


// // убираем последний элемент в массиве
// arr.pop();

// // добавляем последний элемент в массиве
// arr.push(10)

// console.log(arr);

// // перебираем каждый элемент массива
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// другая конструкция перебора 'value' = любое другое название
for (let value of arr) {
    console.log(value);
}

const str = prompt("", "");
const products = str.split(", ");

// console.log(products);
products.sort();
console.log(products.join('; '));
