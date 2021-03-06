// console.log(`The bill was $${bill}, the tip was ${bill <= 300 && bill >= 50 ? '15%' : '20%' } ($${tip}), and the total is $${total}`);


const calcTip = (bill) => {
    return Number.parseFloat(bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2).toFixed(2)
}

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log(bills, tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log("totals", totals)