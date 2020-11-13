const score = 100
const dolphins = Math.round((96 + 91 + 95) / 3)
console.log("dolphins", dolphins)
const koalas = Math.round((88 + 191 + 110) / 3)
console.log("koalas", koalas)

if (dolphins > koalas && dolphins >= score) {
    console.log(`Dolhins are the winners!! They beat the Koalas by ${dolphins - koalas} points!`);
} else if (koalas > dolphins && koalas >= score) {
    console.log(`Koalas are the winners!! They beat the Dolphins by ${koalas - dolphins} points!`);
} else if (dolphins >= score && koalas >= score) {
    console.log(`Ladies and Gents we have a draw!!`);
} else {
    console.log(`No one wins the trophy 😢`);
}
