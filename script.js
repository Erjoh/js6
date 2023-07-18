// const arrayObj = [
//     {
//         name: 'Vasya',
//         age: 20,
//         isMarried: false,
//     },
//     {
//         name: 'Petr',
//         age: 29,
//         isMarried: true,
//     },
//     {
//         name: 'Volodya',
//         age: 25,
//         isMarried: true,
//     },
//     {
//         name: 'Lera',
//         age: 20,
//         isMarried: false,
//     },
//     {
//         name: 'Nikita',
//         age: 30,
//         isMarried: false,
//     }
// ]
//
//

// const arrayObj = [
//     {
//         name: 'Vasya',
//         age: 20,
//         isMarried: false,
//         gender: 'male'
//     },
//     {
//         name: 'Petr',
//         age: 29,
//         isMarried: true,
//         gender: 'male'
//     },
//     {
//         name: 'Volodya',
//         age: 25,
//         isMarried: true,
//         gender: 'male'
//     },
//     {
//         name: 'Lera',
//         age: 20,
//         isMarried: false,
//         gender: 'female'
//     },
//     {
//         name: 'Nikita',
//         age: 30,
//         isMarried: false,
//         gender: 'male'
//     }
// ]
//
//

// const arrayObj = [
//     {
//         name: 'Vasya',
//         age: 20,
//         isMarried: false,
//         gender: 'male'
//     },
//     {
//         name: 'Petr',
//         age: 19,
//         isMarried: true,
//         gender: 'male'
//     },
//     {
//         name: 'Volodya',
//         age: 25,
//         isMarried: true,
//         gender: 'male'
//     },
//     {
//         name: 'Lera',
//         age: 20,
//         isMarried: false,
//         gender: 'female'
//     },
//     {
//         name: 'Nikita',
//         age: 23,
//         isMarried: false,
//         gender: 'male'
//     }
// ]
//
//
// console.log(arrayObj.filter(user => user.gender === "male" && user.age < 24 && !user.isMarried));
// console.log(arrayObj.filter(user => user.gender !== "male"));
// console.log(arrayObj.filter(user => user.age > 24 && user.isMarried));

// Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.

// const arrReverse = (arr) => {
//     return arr.reverse()
// }
//
// console.log(arrReverse([1, 2, 3]))

// Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.

// const arrClean = (arr) => {
//     return arr.filter(el => el)
// }
//
// console.log(arrClean([0, 1, false, 2, undefined, '', 3, null]))

// Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.

// const arrAdd = (arr) => {
//     return arr.filter((el1, idx ) => arr.indexOf(el1) === idx)
// }
//
// console.log(arrAdd([1, 2, 3, 1, 2, 5, 254, 3, 1, 2]))

// Задача. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// const arr = ['a', 'b', 'c']
// const num = [1, 2, 3]
//
// console.log([...arr, ...num])

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// const str = [1, 2, 3]
// str.push(4, 5, 6)
//
// console.log(str)

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// const str = [1, 2, 3]
// str.unshift(4, 5, 6)
//
// console.log(str)

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// const checkSplice = arr => {
//     return [...arr.splice(0, 1) , ...arr.splice(2)]
// }
//
// console.log(checkSplice([1, 2, 3, 4, 5]))

// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

// const arrayObj = {
//     js: 'test',
//     jq: 'hello',
//     css: 'world',
// }
//
// console.log(Object.keys(arrayObj))

// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой.

// const array = (str) => {
//     return str.join(', ')
// }
//
// console.log(array(['Капуста', 'Репа', 'Редиска', 'Морковка']))

// const arrUpperCase = (str) => {
//     return [str.split('').map((el, idx) => el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase()).join('')]
// }
//
// console.log(arrUpperCase('YoU aRe GoOd It'))

// 1 фильтровать по цене. от 40000 до 60000 и год до 2019
// 2 марка

const cars = [
    {
        make: "Ford",
        model: "Mustang",
        year: 1969,
        color: "red",
        price: 25000
    },
    {
        make: "Ford",
        model: "F-150",
        year: 2017,
        color: "blue",
        price: 30000
    },
    {
        make: "Tesla",
        model: "Model S",
        year: 2018,
        color: "black",
        price: 120000
    },
    {
        make: "Chevrolet",
        model: "Camaro",
        year: 1970,
        color: "orange",
        price: 60000
    },
    {
        make: "Dodge",
        model: "Challenger",
        year: 2019,
        color: "red",
        price: 35000
    },
    {
        make: "Chevrolet",
        model: "Corvette",
        year: 2019,
        color: "blue",
        price: 90000
    },
    {
        make: "Tesla",
        model: "Model 3",
        year: 2019,
        color: "white",
        price: 40000
    },
    {
        make: "Mercedes",
        model: "C-Class",
        year: 2019,
        color: "black",
        price: 60000
    }
]

// console.log(cars.filter(car => car.price >= 40000 && car.price <= 60000 && car.year >= 2019))

const checkType = (mark) => {
    return cars.filter(item => item.make.toUpperCase() === mark.toUpperCase())
}

console.log(checkType('ford'))