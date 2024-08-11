//Create an array and name it groceries, add 6 groceries to it
let groceries = ["water", "red bull", "chocolate", "chips", "snacks", "nuts"];
console.log(groceries);

//Print the second element from the array groceries
console.log(groceries[1]);

//Print how many elements are in the array (i.e length of the array)

let groceriesElements = groceries.length;
console.log(groceriesElements);

//Print the last element in the array

let groceriesLast = groceries.length;
console.log(groceries[groceriesLast - 1]);

//Remove the last element from the array and print it

let groceriesLastArray = groceries.pop();
console.log(groceries);
console.log(groceriesLastArray);

//Add two new and different elements to the end of the array

groceries.push("fruits", "vegetables");
console.log(groceries);
console.log(groceries.length);

//Create a new array named firstThreeItems and it’s elements are the first three elements from the groceries array.

let firstThreegroceries = groceries.slice(0, 3);
console.log(`The first three groceries ${firstThreegroceries}`);
