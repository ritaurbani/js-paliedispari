// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//Le 3 C
// Cosa deve fare questa funzione
// Cosa mi serve per farlo (parametri)
// Cosa restituisce / return (boolean, string, numero?) ==>Return

// function getReversed(word) ==> posso creare un altra funzione

function isPalindrome(word) {
    let isPalindromeResult = false;
    let reversedWord = "";

    for (let i = word.length - 1; i >= 0; i--) {
        let currentLetter = word[i];
        // console.log(currentLetter)
        reversedWord += currentLetter;//loop deve finire prima per poter if
    }

    if (word === reversedWord) {
        isPalindromeResult = true
    }

    return isPalindromeResult
}


const userWord = prompt('Please insert a word');

console.log(isPalindrome(userWord));

