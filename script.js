//Roman Numeral Converter
// This takes in a number from the user and converts that number into a roman numeral

// I - 1
// IV - 4
// V - 5
// IX - 9
// X - 10
// XL - 40
// L - 50
// XC - 90
// C - 100
// CD - 400
// D - 500
// CM - 900
// M - 1000

function convertToRoman(num){
const numerals = {
     1: "I",
     4: "IV",
     5: "V",
     9: "IX",
     10: "X",
     40: "XL",
     50: "L",
     90: "XC",
     100: "C",
     400: "CD",
     500: "D",
     900: "CM",
     1000: "M"
}
//Initialized an empty string to build the final roman numeral result
let romanized = ""

//Object -> loop to go through the keys
//This ensures we start with the largest numeral values (1000,900,etc.).
//object.keys(bring back number with strings), .reverse()reverse the string from largest to small/last to first, .map(Number) takes aways the strings and turn it into numbers
const numeralKeys = Object.keys(numerals).reverse().map(Number)

//We need to Iterate over each key in the numberalKeys array
numeralKeys.forEach(key => {
    //while the current Roman numeral value(key) can be subtracted from number(num)...
    while(key <= num){
        //I need to append the corresponding Roman numeral symbol to the result string
        romanized += numerals[key]
        //subtract the current key from num, reducing it until the numeral can no longer be used(reduced)
        num -= key
    }
})
return romanized
}
console.log(convertToRoman(2024))