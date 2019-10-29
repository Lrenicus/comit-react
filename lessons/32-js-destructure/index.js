const userPrompt = prompt("Enter top 5 favourite fruit seperated by comma.");

const favFruit = userPrompt.split(",");
  
const [first, second, third, ...restFruit] = favFruit;

alert(`Top 3 fruit: ${first}, ${second}, ${third}!`);
alert(`The rest: ${restFruit}!`);
