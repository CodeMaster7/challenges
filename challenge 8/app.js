const calcTip = (bill) => {
    return (bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2).toFixed(2)
}

const bills = []
const bills = [125, 558, 56]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log(bills, tips);
const totals = [Number(bills[0]) + Number(tips[0]), Number(bills[1]) + Number(tips[1]), Number(bills[2]) + Number(tips[2])]
console.log("totals", totals)