let currentWeight = prompt('Напишите Ваш вес в кг:')
let currentHeight = prompt('Напишите Ваш рост в м:')

const formulExcessWeight = currentWeight / (currentHeight**2)

if (formulExcessWeight < 19)
  {alert('У ВАС НЕДОСТАТОЧНЫЙ ВЕС')}
if (formulExcessWeight > 24)
  {alert('У ВАС ИЗБЫТОК ВЕСА')}

  alert('УРА!!! ВАШ ВЕС В ПРЕДЕЛАХ НОРМЫ')

console.log(formulExcessWeight)