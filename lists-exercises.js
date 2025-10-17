var fruits = ["apple", "banana", "orange", "kiwi", "tomato"];
var vegetables = ["broccoli", "asparagus", "carrot", "lettuce", "leaf"];

function fruitOrVeggie(food){
var food = "broccoli"
if (fruits.includes(food))
    console.log("Fruit");

 else if (vegetables.includes(food)) {
    console.log("Vegetable");
}
}

console.log(fruitOrVeggie("kiwi"));

fruits.push("pineapple");
fruits.push("fries");
fruits.pop("fries")
vegetables.splice(1, 1);
 console.log(vegetables);