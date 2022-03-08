const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";
// SUDO CODE
// 1 make a fuction that takes in 2 parameters
// create an empty string for the output
// does arry length = 1 or 0? return arr[0] or empty string
// loop through the array
    // push stuff into my output from the array
    // push separator into my output from the array
// return output

function join(arr, separator){
    for(var i=0; i<arr.length; i++){
return arr[i] + separator + arr[i+1] + separator + arr[i +2]
    }  
}

console.log(join(arr1,separator1))
console.log(join(arr2,separator2))
console.log(join(arr3,separator3))
console.log(join(arr4,separator4))


const str1 = "there's no free lunch - gotta pay yer way."
const str2 = "Live from New York, it's Saturday night!"

function acronymize(str){
for(var i = 0; i<str.length; i++){
    if(str[i]) === " "){
    str[i +1].toUpperCase();
    }
}
return str[i+1]
}

console.log(acronymize(str1))

// sudo code
// create a funciton that takes in a String
// create an empty output 
// split on ""
// loop throuhg the result array
//     pass the string at [0].upper() into output

// create a function that takes in a String
// create an empty output
// loop through input string
//      if index == 0 && string[index] !+ " " , push string[index] into output
//     if current letter is a space, pass string[i +1].upper() to output
// return my output