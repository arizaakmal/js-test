
function greeting(myName, age) {
  
  console.log(`Hello! my name is ${myName} and my age is ${age} years old`);
}
greeting('Riza', 18);

let mySelf = {
  name: 'Riza',
  country: 'Indonesia',
  age: 18,
};
mySelf.isTrue = true;

console.log(mySelf);

let myFavoriteFood = ['noodle', 'chili', 'ghostpepper', 'chicken', 'kebab' ];
myFavoriteFood.splice(1, 2);
console.log(myFavoriteFood);
