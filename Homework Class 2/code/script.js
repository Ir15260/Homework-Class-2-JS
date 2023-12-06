

let input = prompt("Enter your Birth Year");
let birthYear = parseFloat(input);

console.log(`The Birth year you entered is ${birthYear}`);

let zodiacCalculation = (birthYear-4)%12;
// console.log(zodiacCalculation)
console.log(`Your Zodiac Number is: ${zodiacCalculation}`);

if(zodiacCalculation == 0) {
    console.log("Your Chineese Zodiac sign is Rat");
}
else if(zodiacCalculation == 1) {
    console.log("Your Chineese Zodiac sign is OX");
}
else if(zodiacCalculation == 2) {
    console.log("Your Chineese Zodiac sign is Tiger");
}
else if(zodiacCalculation == 3) {
    console.log("Your Chineese Zodiac sign is Rabbit");
}
else if(zodiacCalculation == 4) {
    console.log("Your Chineese Zodiac sign is Dragon");
}
else if(zodiacCalculation == 5) {
    console.log("Your Chineese Zodiac sign is Snake");
}
else if(zodiacCalculation == 6) {
    console.log("Your Chineese Zodiac sign is Horse");
}
else if(zodiacCalculation == 7) {
    console.log("Your Chineese Zodiac sign is Goat");
}
else if(zodiacCalculation == 8) {
    console.log("Your Chineese Zodiac sign is Monkey");
}
else if(zodiacCalculation == 9) {
    console.log("Your Chineese Zodiac sign is Rooster");
}
else if(zodiacCalculation == 10) {
    console.log("Your Chineese Zodiac sign is Dog");
}
else if(zodiacCalculation == 11) {
    console.log("Your Chineese Zodiac sign is Pig");
}
else {
    console.log("This Calculation wont work for you please contact someone to help you :(");
}






