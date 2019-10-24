//lesson 26

const siblings = ["Blair", "Bobby", "Brandon"];
const parents = ["Ken", "Flo"];

const family = siblings.concat(parents);

console.log(family);

family.push('Neo');

console.log(family);

family.reverse();

console.log(family);

family[1] = "Mom";

console.log(family);

let i;
for (let i = 0; i < family.length; i++) {

    console.log(family[i]);
}

let a;
for (a of family) {
    console.log(a);
}

//extra exercise
//recipe card

let favRecipe = {
    title: 'Mole',
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"],
}

console.log(favRecipe.title);
console.log(`serves: ${favRecipe.servings}`);
console.log('ingredients:');
let r;
for (r of favRecipe.ingredients) {
    console.log(r);
}

// the reading list
const books = [{
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J K Rowling",
    alreadyRead: true,
    }, {
        title: "Harry Potter and the Goblet of Fire",
        author: "J K Rowling",
        alreadyRead: false,
    }
   
]

for (let b = 0; b < books.length; b++) {
    let book = books[b];
    let bookData = book.title + ' by ' + book.author;
    let bookIf = '\"' + book.title + '\"' + ' by ' + book.author; 
    if (book.alreadyRead) {
        console.log('You have already read ' + bookIf);
    } else {
        console.log('You still need to read ' + bookIf);
    }
}


//(Difficult) - Recreate the array.map function. Complete the following code

function map(arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]));
    }
    return newArr;
  };
  
const result = map([1, 2, 3], function(item) {
return item * 2;
});

console.log(result); // [2, 4, 6]