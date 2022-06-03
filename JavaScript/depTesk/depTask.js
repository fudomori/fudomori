const firstQuarterDep1 = {
  jun: 35467,
  feb: 29842,
  mar: 38501
}

const firstQuarterDep2 = {
  jun: 70533,
  feb: 50121,
  mar: 33899
}

const secondQuarterDep1 = {
  jun: 50301,
  feb: 21984,
  mar: 19207
}

const secondQuarterDep2 = {
  jun: 72381,
  feb: 41562,
  mar: 29465
}


let getAverage = (cum) => {
  sum = 0
  for (values in cum) {
    sum += cum[values]
  }
  return sum
}


const firstPrintBonus = (Dep1, Dep2) => {
  if (Dep1 > Dep2 && Dep1 >= 1.3 * Dep2) {
    let sum = Dep1 - Dep2
    let current = Math.trunc(sum / Dep2 * 100)
    console.log(`Победитель в 1 квартале: 1 Отдел! Отдел 1 получит бонус в размере ${current}%`)}

  if (Dep2 > Dep1 && Dep2 >= 1.3 * Dep1) {
    let sum = Dep2 - Dep1
    let current = Math.trunc(sum / Dep1 * 100)
    console.log(`Победитель в 1 квартале: 2 Отдел! Отдел 2 получит бонус в размере ${current}%`)}

  else console.log(`Нет победителя в 1 квартале, так как текущий бонус меньше 30%`)
}

firstPrintBonus(getAverage(firstQuarterDep1), getAverage(firstQuarterDep2))

const secondPrintBonus = (Dep1, Dep2) => {
  if (Dep1 > Dep2) {
    let sum = Dep1 - Dep2
    let current = Math.trunc(sum / Dep2 * 100)
      if (current >= 30)
      console.log(`Победитель во 2 квартале: 1 Отдел! Отдел 1 получит бонус в размере ${current}%`)

      else console.log(`Нет победителя в 1 квартале, так как текущий бонус меньше 30%`)
    }
  if (Dep1 < Dep2) {
    let sum = Dep2 - Dep1
    let current = Math.trunc(sum / Dep1 * 100)
      if (current >= 30)
      console.log(`Победитель во 2 квартале: 2 Отдел! Отдел 2 получит бонус в размере ${current}%`)}

      else console.log(`Нет победителя в 1 квартале, так как текущий бонус меньше 30%`)
}

secondPrintBonus(getAverage(secondQuarterDep1), getAverage(secondQuarterDep2))




