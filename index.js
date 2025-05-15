// add number
function add(a,b){
    return a+b;
}
let totalAdd = add(20,40) + add(34,55) + add(51,66);
console.log(totalAdd)

// Multiple Number

function multiple(x,y){
    return x * y
}
console.log(multiple(1,17));

// Even Odd number checker

function isEven(num){
//     if(num % 2 === 0){
//      return "Even";
// } else {
//     return "Odd";
// }

 return num % 2 === 0 ? "Even" : "Odd";

// switch(true){
//     case (num % 2 === 0):
//         return "Even";
//         break;
//     default :
//     return "Odd";
// }

}
console.log(isEven(6));

// Celsius to Fahrenheit

function celsiusToFahrenheit(cel){
    return (cel * 9/5) + 32;
}
console.log(celsiusToFahrenheit(2));

// Square to Number 

function squareToNumber(num){
    return num*num;
}
console.log(squareToNumber(7));

// Get character of a string

function gCoAs(str){
    return str.charAt(4);
}
console.log(gCoAs("Shaan"));

// Positive or Negative

function pOn(num){
    // if(num >= 0){
    //     return "Positive";
    // } else {
    //     return "Negative"
    // }

     return num >= 0 ? "Positive" :  "Negative";

    // switch(true){
    //     case (num >= 0):
    //         return "Positive" ;
    //         break;
    //     default :
    //         return "Negative";
    // }
}
console.log(pOn(1));

// convert Min to Sec

function minToSec(min){
    return min * 60;
}
console.log(minToSec(27));

// Concate to string

function addString(a,b){
    return a + b;
}
console.log(addString("Hello ", "World"));

// Check word

function wordChecker(sentence, word){
    return sentence.includes(word);
}
console.log(wordChecker("I love Programming", "love"));







