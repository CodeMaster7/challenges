const calcTip = (bill) => {
    return Number(bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2)
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
console.log("tips", tips)
const totals = []
console.log("totals", totals)

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(tip + bills[i])
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

calcAverage([2, 3, 6])
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));