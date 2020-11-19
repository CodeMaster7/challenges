const massMark = {
    fullName: 'Mark Miller',
    mass: '78',
    height: 1.69,
    bmi: function () {
        return (this.mass / this.height ** 2).toFixed(1)
    }
}
const massJohn = {
    fullName: 'John Smith',
    mass: '92',
    height: 1.95,
    bmi: function () {
        return (this.mass / (this.height * this.height)).toFixed(1)
    }
}

const BMIMark = massMark.bmi()
const BMIJohn = massJohn.bmi()

console.log("BMIMark", massMark.bmi())
console.log("BMIJohn", massJohn.bmi())

const markHigherBMI = BMIMark > BMIJohn
console.log("markHigherBMI", markHigherBMI)

if (BMIMark > BMIJohn) {
    console.log(`${massMark.fullName}'s BMI (${BMIMark}) is higher than ${massJohn.fullName}'s (${BMIJohn})!`);
} else if (BMIJohn > BMIMark) {
    console.log(`${massJohn.fullName}'s BMI (${BMIJohn}) is higher than ${massMark.fullName}'s (${BMIMark})!`);
}
