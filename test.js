/* eslint-disable linebreak-style */
/* eslint-disable no-console */
function greeting(myName, age) {
  // eslint-disable-next-line no-console
  console.log(`Halo! namaku adalah ${myName} dan umurku ${age} tahun`);
}
greeting('Riza', 18);

let mySelf = {
  name: 'Riza',
  country: 'Indonesia',
  age: 18,
};
mySelf.isTrue = true;

console.log(mySelf);

let myFavoriteFood = ['noodle', 'chili', 'ghostpepper', 'bread'];
myFavoriteFood.splice(1, 2);
console.log(myFavoriteFood);
