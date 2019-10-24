alert('Enter two numbers to see if the first is greater than the second.');

let numOne = prompt('What is the first number?');

let numTwo = prompt('What is the second number?');

if (numOne > numTwo) {
    alert(`${numOne} is greater than ${numTwo}!`);
} else {
    alert(`${numTwo} is greater than ${numOne}!`);
}
