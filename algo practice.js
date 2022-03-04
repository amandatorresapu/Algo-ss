// Day 2 2.24 Algo session

// var isSunny = true;
// var temperature = 45; // let's assume degrees Fahrenheit
// var isRaining = false;
// var whatToBring = "I should bring: ";

// if (isSunny) {
//   whatToBring += whatToBring + "sunglasses, ";
// }
// if (temperature < 50) {
//   whatToBring += whattoBring + "a coat, ";
// }
// if (isRaining) {
//   whatToBring += whattoBring + "an umbrella, ";
// }
// whatToBring += whattoBring + "and a smile!";

// console.log(whatToBring);


// // I should bring ___ sunglasses, a coat, and a smile! is the final code/console.log

// // true will always run, false just does not run

// for(var i=10; i>0; i--) {
//   if(i != 2) {
//     console.log(i);
//   } else {
//     console.log("ignition!");
//   }
// }

// console.log("liftoff!");

// // Can only run if or else, not both

// // loop through the array and count all the numbers

// var countPositives = 0;
// var numbers = [3, 4, -2, 7, 16, -8, 0];
//   for(var i=0; i<=Array.length; i++)  {
//       if(numbers[i]>0) {
//          countPositives++;
//       }
//   }

// console.log("there are " + countPositives + " positive values");

// // using the varible ++ is saying count the number of times it is true

// // algo practice w1d5
// var x = 5;
//                 // new value is a parameter/which is a variable
// function setX(newValue) {
//     x = newValue;
// }

// console.log(x);
// setX(15);
// console.log(x);

// var x = 5;

// function addToX(amount) {
//     return x + amount;
//     console.log("hello there");
// }

// console.log(x);
// var result = addToX(-10);
// console.log(result);
// console.log(x);

// function isPal(arr) {
//     for(var left=0; left<arr.length/2; left++) {
//         var right = arr.length-1-left;
//         if(arr[left] != arr[right]) {
//             return "Not a pal-indrome!";
//         }
//     }
//     return "Pal-indrome!";
// }

// var result1 = isPal( [1, 1, 2, 2, 1] );
// console.log(result1);

// var result2 = isPal( [3, 2, 1, 1, 2, 3] );
// console.log(result2);

// // Algo practice W1D5
// // How to swap variables
// var fruit1 = "apples";
// var fruit2 = "oranges";

// fruit2 = fruit1;

// console.log(fruit2 + " and " + fruit1);

// var fruit1 = "apples";
// var fruit2 = "oranges";

// var temp = fruit1; // temp is a common name for this
// fruit1 = fruit2;
// fruit2 = temp;

// console.log(fruit2 + " and " + fruit1);

// temp = "apples"

// apples = oranges
// oranges = apples

// oranges and apples

// // while loops
// var start = 0;
// var end = 12;

// while(start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }

// var monster = {
//     id: 1,
//     name: "Bulbasaur",
//     types: ["poison", "grass"]
// };

// var pokémon = [
//     { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
//     { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
//     { "id": 9,   "name": "Blastoise",  "types": ["water"] },
//     { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
//     { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
//     { "id": 23,  "name": "Ekans",      "types": ["poison"] },
//     { "id": 24,  "name": "Arbok",      "types": ["poison"] },
//     { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
//     { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
//     { "id": 52,  "name": "Meowth",     "types": ["normal"] },
//     { "id": 63,  "name": "Abra",       "types": ["psychic"] },
//     { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
//     { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
//     { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
//     { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
//     { "id": 98,  "name": "Krabby",     "types": ["water"] },
//     { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
//     { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
//     { "id": 133, "name": "Eevee",      "types": ["normal"] },
//     { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
//     { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
//     { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
//     { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
// ];

// for(var i=0; i<pokémon.length; i++) {
//     if(pokémon[i].id > 99) {
//         console.log(pokémon[i].name);
//     }
// }

// // console.log the pokémon objects whose id is evenly divisible by 3

// for(var i=0; i<pokémon.length; i++) {
//     if(pokémon[i].id > 99) {
//       if(pokemon[i].id % 3 == 0)
//         console.log(pokémon[i].name);
//     }
// }

// // console.log the pokémon objects that have more than one type
// for(var i=0; i<pokémon.length; i++) {
//     if(pokémon[i].types.length > 1) {
//         console.log(pokémon[i].name);
//     }
// }

// // console.log the names of the pokémon whose only type is "poison"

// for(var i=0; i<pokémon.length; i++) {
//     if(pokémon[i].types.length == 1 && pokemon[i].types == "posion") {
//         console.log(pokémon[i].name);
//     }
// }

// // console.log the first type of all the pokémon whose second type is "flying"

// for(var i=0; i<pokémon.length; i++) {
//     if(pokémon[i].types.length == 2 && pokemon[i].types[1] == "flying") {
//         console.log(pokémon[i].types[0]);
//     }
// }

// // bonus question

// for(var i = 0; i < pokémon.length; i++){
//   if(pokémon[i].types.length == 1 && pokémon[i].types[0] == "poison"){
//     var holder = '';
//     for(var x = pokémon[i].name.length -1 ; x >= 0; x--){
//       // holder.push(pokemon[i].name[x])

//       holder += pokémon[i].name[x];

//     }
//   console.log(holder)
//   }
// }

// w1d4;
var arr2d = [
  [2, 5, 8],
  [3, 6, 1],
  [5, 7, 7],
];

console.log(arr2d[0][2]);

function isPresent2d(arr2d, value) {
  for (var i = 0; i < arr2d.length; i++) {
    for (var j = 0; j < arr2d.length; i++) {
      if (arr[i][j] === value) {
        return true;
      }
    }
  }
  return false
}



isPresent2d(arr2d, 7);

// var arr2d = [
//   [2, 5, 8],
//   [3, 6, 1],
//   [5, 7, 7],
// ];

// // We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

// ****Could we determine if a certain value was present? Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise

// Note - Don't assume the array will always be the same size, we must rely on its .length property

// Hint - Can we put a for loop inside another for loop?

// complete the following function
function flatten(arr2d) {
  var flat = [];
  // your code here
  return flat;
}

var result = flatten([
  [2, 5, 8],
  [3, 6, 1],
  [5, 7, 7],
]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

function flattenArray(arr){
  
}
