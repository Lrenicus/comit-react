
let movie = prompt("Ener your 3 favorite movies seperated by comma!");
let favMovie = [movie];
console.log(favMovie);

let sentence = prompt("Enter a sentence to reverse.");

function reverseString (sentenceToReverse) {
    //reverse sentance and output result as alert
    let arr = sentenceToReverse.split("");
    arr.reverse();
    let sentenceReversed = arr.join("");
    return sentenceReversed;
}

alert(reverseString(sentence));