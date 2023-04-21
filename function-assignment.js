//You manage a grocery store and need to keep track of the inventory 
//of various items. You will use arrays to store the data and various functions 
//to manipulate and analyze the data.
//Create an array containing the names of all items in the inventory.
let myinventory = ["rice", "sugar", "cooking oil", "eggs", "bread", "milk"];
console.log(myinventory);

//Create a separate array with the corresponding
// stock quantities of each item.
let inventorythings=[5,10,15,20,30,40];
let x={}
myinventory.forEach((things,indexx) => {
    x[things]=inventorythings[indexx]
    
});
console.log(x);
//Write a function to add a new item to
// the inventory, updating both arrays.
function addinventory(item1,item2) {
    myinventory.push(item1)
    inventorythings.push(item2)
    console.log(item1,item2);
    
}
addinventory("bar-soap",25)
// //Write a function to update the stock quantity of an existing item.
function update(item1,nquantity) {
    let next=myinventory.indexOf(item1)
    if (item1 === -1) {
        console.log( itemName);
        return;
      }
      inventorythings[item1]=nquantity;
      console.log(`${item1 } ${nquantity}`);
    
}
update("bread",50)

// //Write a function to calculate the total number of items in the inventory.
function total() {
    let totalnum=0;
    for (let i = 0; i < inventorythings.length; i++) {
        totalnum+=inventorythings[i];  
        
        
    }
    return totalnum;
 
    
}
let numbers=total()
console.log(numbers);

//Write a function to find the item with the lowest stock quantity.

function findMin(){
    let lowest = Math.min(...inventorythings);
    console.log(lowest);
}
findMin()