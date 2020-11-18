const calcAverage = (a, b, c) => Math.floor((a + b + c) / 3)
console.log("calcAverage", calcAverage(3, 4 , 5))

// test 1
const scoreDolphin = calcAverage(1144, 23, 71)
const scoreKoala = calcAverage(65, 54, 49)
console.log(scoreDolphin, scoreKoala);


const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win! (${avgDolphins} vs ${avgKoalas}) 🏆`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win! 🏆 (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphin, scoreKoala)