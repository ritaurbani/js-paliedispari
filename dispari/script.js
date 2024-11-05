// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

// Istruzioni
// 1. chiedo utente scegliere pari o dispari e inserire prompt un numero da 1-5 ex: 4 ==> pari
// 2. genero un numero per il computer ex: 3 ==> dispari
// 3. sommo i numeri 4+3 = 7 ==> dispari
// 4. decreto vincitore il computer

//Le 3 C
// Cosa deve fare questa funzione
// Cosa mi serve per farlo (parametri)  ==> Input
// Cosa restituisce / return (boolean, string, numero?) ==> Output


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
function getUserInput(userNumber) {
    let userNumber2 = parseInt(prompt('Insert a number from 1 to 5'))
    return userNumber2;
}
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
function getRandomNumber(min, max) {
    let computerNumber2 = Math.floor(Math.random() * (max - min + 1) + min)
    return computerNumber2;
}
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)

function sum(num1, num2) {
    let sumResult = num1 + num2;
    return sumResult

}
function evenOdd(num) {
    let result = "";
    if (num % 2 === 0) {
        result = "even";
    } else {
        result = "odd";}
        return result;
    }

    //Invoco funzioni

    const playerInputNumber = getUserInput(4)
    const computerNumber = getRandomNumber(1, 6)
    const total = sum(playerInputNumber, computerNumber)
    const result = evenOdd(total)

console.log(`utente ha scelto il numero ${playerInputNumber}, il computer ha generato ${computerNumber}, la somma dei due numeri e ${total} che e un numero ${result}`)





