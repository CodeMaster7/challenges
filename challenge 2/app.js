const massMark = 78
const heightMark = 1.69
const massJohn = 95
const heightJohn = 1.95

const BMIMark = massMark / heightMark ** 2
console.log("BMIMark", BMIMark)
const BMIJohn = massJohn / (heightJohn * heightJohn)
console.log("BMIJohn", BMIJohn)

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${Math.round(BMIMark) / 10}) is higher than John's (${Math.round(BMIJohn) / 10})!`);
} else {
    console.log(`John's BMI (${Math.round(BMIJohn) / 10})is higher than Mark's (${Math.round(BMIMark) / 10})!`);
}
