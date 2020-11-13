const massMark = 78
const heightMark = 1.69
const massJohn = 95
const heightJohn = 1.95

const BMIMark = massMark / heightMark ** 2
console.log("BMIMark", BMIMark)
const BMIJohn = massJohn / (heightJohn * heightJohn)
console.log("BMIJohn", BMIJohn)

const markHigherBMI = BMIMark > BMIJohn
console.log("markHigherBMI", markHigherBMI)

