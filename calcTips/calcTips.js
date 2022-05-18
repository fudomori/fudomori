const arrayInvoice = [110, 200, 470]

// 1 variable
const calculateTips = arrayInvoice.forEach((cum) => {
  let currentTips = 0
  if (cum < 200) {
    currentTips = 20
    let arrayTips = cum / 100 * currentTips
    console.log(`Ваши чаевые ${currentTips}% и составляют ${arrayTips}₽ от ${cum}₽`)}
  
  else {
    currentTips = 15
    let arrayTips = cum / 100 * currentTips
    console.log(`Ваши чаевые ${currentTips}% и составляют ${arrayTips}₽ от ${cum}₽`)}
})

// 2 variable
const calculatTips = arrayInvoice.forEach((invoice) => {
  console.log(`Ваши чаевые составляют ${invoice < 200 ? invoice * 0.2  : invoice * 0.15}₽`)
})