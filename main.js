// console.log("Hello")

// const myPet = {
//     name: "Leo",
// species: "Main Coon",
// nicknames: ["Fat Head", "Leonidus", "Jerk"],
// age: 16
// }

// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object.
// There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this).
// You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

const restaurant = {
  name: "Bob's Burgers",
  placeOrder: function(meal) {
      this.orders.push(meal);
  },
  orders: [],

  getOrders: function() {
    return this.orders;
  }
};

const chickenComboMeal = {
  sandwichtype: "chicken",
  fries: true,
  drinkSize: "Large"
};

// Place an order
restaurant.placeOrder(chickenComboMeal);

// Invoke the function to return the list of all orders
restaurant.getOrders();
// Output all orders to the console using console.table()
console.table(restaurant.orders);
