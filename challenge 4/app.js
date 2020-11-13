const bill = 51

const tip = Number.parseFloat(bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2).toFixed(2)
console.log("tip", tip)

const total = bill + tip
console.log("total", total)

console.log(`The bill was $${bill}, the tip was ${bill <= 300 && bill >= 50 ? '15%' : '20%' } ($${tip}), and the total is $${total}`);