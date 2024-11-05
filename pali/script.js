// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//Istruzioni
// Cosa deve fare questa funzione
// Cosa mi serve per farlo (parametri)
// Cosa restituisce / return (boolean, string, numero?)



function isPalindrom ( word ) {

    let isPalindrome = false;
    let reversedWord = " ";

    for ( let i = word.length -1; i>0; i--) {
        const currentLetter = word[i];
        // console.log(currentLetter)
        reversedWord += currentLetter;   
        if (word === reversedWord) {
        isPalindrome = true
    } return ...
    
    }
}

const userWord = prompt('Please insert a word');

console.log(isPalindrom (userWord));

