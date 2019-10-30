let numbers = [1, 2, 3, 4, 5];

let squareNumbers = numbers.map(function(item) {
    return item * item;
})

let moreNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = moreNumbers.filter(function(item){
  return item % 2 === 0;
})

let oddNumbers = moreNumbers.filter(function(item){
  return item % 2 !== 0;
})



const people = [
  {
    name: "john",
    age: 24,
    city: "Saskatoon"
  },
  {
    name: "bobby",
    age: 19,
    city: "Saskatoon"
  },
  {
    name: "brent",
    age: 89,
    city: "Regina"
  },
  {
    name: "brian",
    age: 14,
    city: "Saskatoon"
  },
  {
    name: "brenda",
    age: 67,
    city: "Regina"
  },
    
];

const overThirty = people.filter(function(person){
  return person.age > 30;
})

const twentySaskatoon = people.filter(function(person){
  return person.age < 20 && person.city == "Saskatoon";
})
console.log(squareNumbers); // 1, 4, 9, 16, 25
console.log(evenNumbers); // 2, 4, 6, 8, 10
console.log(oddNumbers); // 1, 3, 5, 7, 9
console.log(overThirty);
console.log(twentySaskatoon);

//bonus question
function stripVowels(str) {
    // take string remove vowels return string all vowels removed
    // convert the string into array of infividual characters and use filter to keep only consonants
    let splitArr = str.split(""); // split the string into an array of ind letters
    let noVowels = splitArr.filter(function(item){ // strip the vowels from the ind letters
      return item.replace(/[aeiou]/g, ""); // replaces a,e,i,o,u with " "
    })
    let strNoVowels = noVowels.join(""); //joins the array together as a string
    return strNoVowels; //returns string of consonants
}

console.log(stripVowels("hello")); //results "hll"
console.log(stripVowels(" this is so crazy")); //results " ths s s crzy"
console.log(stripVowels("hello my name is awesome and yours is?")); //result "hll my nm s wsm nd yrs s?"

