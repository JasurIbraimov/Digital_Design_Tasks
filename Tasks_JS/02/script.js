/* Требование к задаче:
1. Создать массив;
2. Заполнить массив рандомными целыми числами (например от -100 до 100);
3. Заменить все отрицательные числа нулем;
4. После каждого элемента с четным индексом, который равен нулю, вставить элемент равный -1.
*/

// 1. An array with 5 empty elements 
// Массив с 5 пустыми элементами 
const arr = new Array(5)

// 2. A function which takes an array and fills it with random intergers
// Функция которая принимает массив и заполняет его случайными целыми числами 
function fillArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        // Min -100 
        // Max 100
        arr[i] = (Math.round(Math.random() * (100 - (-100)) - 100))
    }
    return arr
}

const arrfilledWithRnd = fillArray(arr)
console.log('Создаем массив с случайными целыми числами от -100 до 100: ', arrfilledWithRnd)

// 3. A function which takes an array and replaces all negative numbers with zero
// Фукнция которая принимает массив и заменяет все отрицательные числа нулями
function replaceFromArray(arr) {
    arr.forEach((elem, index) => {
        if (elem < 0) {
            return arr[index] = 0
        } else return elem
    })
    return arr
}

const arrWithoutNegativeNums = replaceFromArray(arrfilledWithRnd)
console.log('Заменяем все отрицательные значения на 0: ', arrWithoutNegativeNums)

// 4. A function which takes an array and addes -1 after zero
// Фукнция которая принимает массив и добавляет -1 после 0
function addToArray(arr) {
    let d = []
    arr.forEach((elem, index) => {
        if (index % 2 === 0 && elem === 0) {
            d.push(...[elem, -1])
        } else {
            d.push(elem)
        }
    })
    return d
}
const addedMinusOneAfterZero = addToArray(arrWithoutNegativeNums)
console.log('Добавляем после 0, стоящего под четным индексом, -1: ', addedMinusOneAfterZero)