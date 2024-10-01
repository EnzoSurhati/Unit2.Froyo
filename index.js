const dinner = {
  cheeseburger: 12,
  steak: 20,
  soup: 8,
  macAndCheese: 14,
  soupAndSalad: 16
};

console.log(Object.keys(dinner));
console.log(Object.values(dinner));

// let totalCost=0;

// for(const individualMeal in dinner){
//   totalCost+= dinner[individualMeal];
// }

// console.log(totalCost);

function calculateCost(meal){
  let total = 0;
  for(const food in meal){
    total += meal[food];
  }
  return total;
}