// Dodawanie - kolejnego obiektu (podobnie jak w React) -- destukturyzacja
// cw 1.
const car = ['audi', 'mercedes']

const AddCar = [...car, 'BMW']
console.log(AddCar)

// ćw 2.
const meal = [{
        id: 0,
        meal: 'śniadanie'
    },
    {
        id: 1,
        meal: 'obiad'
    }
]

const newMeal = [...meal, {
    id: 2,
    meal: 'kolacja'
}]

console.log(newMeal)


// Usuwanie - metoda Filter najlepsza 
// ćw 1. 
const phone = ['samsung', 'iphone', 'iphone14']
const deleteOnePhone = phone.filter(el => el !== 'iphone14')
console.log(deleteOnePhone)

// Ćw 2.
const deleteOneItem = [newMeal.filter(el => el.id !== 1)]
console.log(deleteOneItem)

// Edycja - medtoda map najlpesza NAJLEPSZA DO ZMIANY CZEGOŚ
const sports = ['boks', 'szachy', 'piłka nożna', 'koszykówka']
const editSports = sports.map(el => el === 'piłka nożna' ? 'siatkówkę' : el)
console.log(editSports)

// MAP VS forEACH - "map jest szybszy 60% od ForEach'a"
const number = [1, 2, 3, 4]

console.log(number.map(el => el))
// Wynik: zwraca - NOWĄ tablice

console.log(number.forEach(el => el))
// Wynik: Undefined - bo nie może stworzyć NOWEJ tablicy

number.map(el => console.log(el * 2))
// Wynik tablicę 
console.log('--------')

number.forEach(el => console.log(el * 2))
// Wynik tablicę 

// Użycia forEacha 
const btn = document.querySelectorAll('.btn')

btn.forEach(btn => btn.addEventListener('click', () => {
    console.log('Kliknięto')
}))

// Metoda REDUCE 
console.log('Metoda Reduce:')
// Przykład 1
const numberArray = [1, 3, 5]

const sumAll = numberArray.reduce((prev, cur) => {
        return prev + cur
}, 0)

console.log(sumAll)

// Przykład 2
const numberArrayTwo = [2, 4, 6]

const sumAllTwo = numberArrayTwo.reduce((prev, cur) => {
    return prev + cur
}, 0)

console.log(sumAllTwo)

// Przykład 3 -- całość ma dać 20
const numberArrayThree = [3, 6, 9]

const sumAllThree = numberArrayThree.reduce((prev, cur) => {
        return prev + cur
}, 2) 
console.log(sumAllThree)

// Przykład 4 
// suma wieku wszytskich uczestników

const people = [
    {
        firstName: 'Tomek', 
        age: 22, 
        sports: ['🚴‍♀️', '🏊‍♂️ ']
    }, 
    {
        firstName: 'Jan', 
        age: 33, 
        sports: ['🤺', '🤾‍♂️']
    }, 
    {
        firstName: 'Piotr', 
        age: 17, 
        sports: ['⛷', '🏂']
    }
]

const countAge = people.reduce((prev, cur) => {
        return prev + cur.age
}, 0)

console.log(countAge)

// Suma wszytskich sportów 
const shwoMeals = people.reduce((prv, cur) => {
        return [...prv ,...cur.sports]
}, [])

console.log(shwoMeals)

// Różnica między Append i AppendChild 

const btnClick = document.querySelector('.clickBtn')
const wrapper = document.querySelector('.wrapper')
const squareBtn = document.querySelector('.squareBtn')

let num = 1

const addSquar = () => {
    const square = document.createElement('div')

    square.innerHTML = `
    <div class="squareBtn">${num}</div>
    `
    wrapper.appendChild(square)
    num++
}


btnClick.addEventListener('click', addSquar)