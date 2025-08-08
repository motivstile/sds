// // for..of — это цикл, позволяющий проходиться по значениям массива.

// let fruits = ["apple", "banana", "orange"];

// console.log(fruits);
// console.log('--------------------------');

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i);
// }



// // sort() — сортировка

// let names = ["Ali", "Vali", "Sami"];
// names.sort();
// console.log(names); // ["Ali", "Sami", "Vali"]

// let numbers = [10, 2, 30, 5];
// numbers.sort();
// console.log(numbers); // [10, 2, 30, 5] ❌ как строки

// // Правильно сортировать числа
// numbers.sort((a, b) => a - b);
// console.log(numbers); // [2, 5, 10, 30]

// // reverse() — реверс
// let letters = ["a", "b", "c"];
// letters.reverse();
// console.log(letters);

// // join() — объединение
// let words = ["I", "love", "JS"];
// console.log(words.join());
// console.log(words.join(" "));



// console.log('--------------------------');

// // forEach — это метод массива, который вызывает функцию для каждого элемента.

// fruits.forEach(function(fruit) {
//   console.log(fruit);
// });

// console.log('--------------------------');

// fruits.forEach((fruit, index) => {
//   console.log(index, fruit);
// });

let array = [2, 4, 9, 10, 45, 67, 8, 90]
let newArr = []


for (let i = 0; i < array.length; i++) {
  if(array[i] % 2 == 0){
    newArr.push(array[i])
  }
}

console.log(newArr)