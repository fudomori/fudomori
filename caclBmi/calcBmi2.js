const alex = {
  name: 'Alex',
  surname: 'Zemskov',
  weight: 84,
  height: 1.85,
  calcbmi: function() {
    return this.weight / this.height ** 2
  }
}

const nastya = {
  name: 'Nastya',
  surname: 'Yugovich',
  weight: 65,
  height: 1.63,
  calcbmi: function() {
    return this.weight / this.height ** 2
  }
}

console.log(alex.calcbmi())



