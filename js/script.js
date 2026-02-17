// getElementsByTagName

/* const listCollection = document.getElementsByTagName("li");
console.log(listCollection);
for(const li of listCollection){
    console.log(li.innerText);
} */

// getElementsByClassName VS getElementById

const foodTile = document.getElementById("food_title")
console.log(foodTile.innerText);

const getByClass = document.getElementsByClassName("foreign")
console.log(getByClass);
for(const food of getByClass){
    console.log(food.innerText);
    
}

