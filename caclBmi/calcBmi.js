const alex = {
  name: 'Alex',
  surname: 'Zemskov',
  sex: 'Male',
  age: 22,
  weight: 84,
  height: 1.85
}

const nastice = {
  name: 'Nastice',
  surname: 'Yugovich',
  sex: 'Female',
  age: 80,
  weight: 65,
  height: 1.63
}


let currentImtSex = {
  min: 19,
  max: 24
}

/* let currentImt = {
  min: 19,
  max: 24
} */

//  Variable 1 sex

const calcBmi = (object) => {
  
  object.sex === 'Male' ? (currentImtSex.min++, currentImtSex.max++) : currentImtSex

  return Math.trunc(object.weight / object.height ** 2)
}


const printCalcBmi = (calcBmi) => {

  if (calcBmi >= currentImtSex.min && calcBmi <= currentImtSex.max)
  return `Поздравляю! У Вас нормальный вес! Ваш ИМТ: ${calcBmi}. Норма для вашего пола: ${currentImtSex.min}-${currentImtSex.max}`

  if (calcBmi > currentImtSex.max)
  return `О нет! У Вас предожирение или хуже! Ваш ИМТ: ${calcBmi}. Норма для вашего пола: ${currentImtSex.min}-${currentImtSex.max}`
  
  if (calcBmi < currentImtSex.min)
  return `О нет! У Вас дефицит массы тела или хуже! Ваш ИМТ: ${calcBmi}. Норма для вашего пола: ${currentImtSex.min}-${currentImtSex.max}`}

console.log(printCalcBmi(calcBmi(alex)))

// Variable 2 sex + age

/* const calcBmi = (object) => {

  if (object.sex == 'Female') {
    
    currentImt => {
    object.age <= 24 ? console.log(currentImt) :
    object.age <= 34 ? (currentImt.min++, currentImt.max++) :
    object.age <= 44 ? (currentImt.min + 2, currentImt.max + 2) :
    object.age <= 54 ? (currentImt.min + 3, currentImt.max + 3) :
    object.age <= 64 ? (currentImt.min + 4, currentImt.max + 4) :
    object.age >= 65 ? (currentImt.min + 5, currentImt.max + 5) : currentImt} }
    
  if (object.sex == 'Male') {

    currentImt => {
    object.age <= 24 ? (currentImt.min++, currentImt.max++) :
    object.age <= 34 ? (currentImt.min + 2, currentImt.max + 2) :
    object.age <= 44 ? (currentImt.min + 3, currentImt.max + 3) :
    object.age <= 54 ? (currentImt.min + 4, currentImt.max + 4) :
    object.age <= 64 ? (currentImt.min + 5, currentImt.max + 5) :
    object.age >= 65 ? (currentImt.min + 6, currentImt.max + 6) : currentImt} }

    console.log(currentImt)

  return Math.trunc(object.weight / object.height ** 2)
}


const printCalcBmi = (calcBmi) => {

  if (calcBmi >= currentImt.min && calcBmi <= currentImt.max)
  return `Поздравляю! У Вас нормальный вес! Ваш ИМТ: ${calcBmi}. Норма для вашего возраста и пола: ${currentImt.min}-${currentImt.max}`

  if (calcBmi > currentImt.max)
  return `О нет! У Вас предожирение или хуже! Ваш ИМТ: ${calcBmi}. Норма для вашего возраста и пола: ${currentImt.min}-${currentImt.max}`
  
  if (calcBmi < currentImt.min)
  return `О нет! У Вас дефицит массы тела или хуже! Ваш ИМТ: ${calcBmi}. Норма для вашего возраста и пола: ${currentImt.min}-${currentImt.max}`}


console.log(printCalcBmi(calcBmi(nastice))) */