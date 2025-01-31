// Create variables of different data types and print them
let score = 100
let temperature = 36.6
let greeting = "Hello, JavaScript!"
let isLearningFun = true
console.log(score, temperature, greeting, isLearningFun)

// Create an object and an array, then access and modify their elements
const student = {
    name: "Stacy",
    age: 21,
    subjects: ["Math", "Biology", "Computer Science"],
    isGraduated: false
}

const primeNumbers = [2, 3, 5, 7, 11]
primeNumbers[1] = 4;
console.log(primeNumbers[1], "Mistake detected");
primeNumbers[1] = 3;
console.log(primeNumbers, "Mistake fixed");

// Perform operations using different operators and understand their results
var x = 3
var y = 5

function sum(x, y) {
    return x + y;
}

function product(x, y) {
    return x * y;
}

function modulus(x, y) {
    return x % y;
}

console.log("Numbers")
console.log("Sum:", sum(x,y)); 
console.log("Product:", product(x,y));
console.log("Modulus:", modulus(x,y)); 

console.log("Booleans")
x = true
y = false
console.log("Sum:", sum(x,y)); 
console.log("Product:", product(x,y));
console.log("Modulus:", modulus(x,y)); 

// Write conditional statements and loops using control flow operators
if (score > 50) {
    console.log("Great job!")
}
else {
    console.log("Keep trying!")
}

for (var i = 0; i < primeNumbers.length; i++) {
    console.log(primeNumbers[i])
}

while (score != 0) {
    score -= 1
    console.log(score)
}

// Understand JS functions

function eventCountdown(eventDate) {
    const now = new Date();
    const event = new Date(eventDate);
    const timeDiff = event - now;
  
    let seconds = Math.floor(timeDiff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
  
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
  
    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining until the event.`;
  }
  
  const countdownMessage = eventCountdown('December 31, 2024 23:59:59');
  console.log(countdownMessage); // Outputs the time remaining until New Year's Eve 2024

  // The function eventCountdown calculates the time remaining until a certain date.
  // In this case, the function is calculating the time from now until New Years, which is negative time
  // because it has passed already. The function eventCountdown takes an eventDate as input, and this
  // eventDate is the target day we want to count down to. The modulo makes sure that the hours, minutes, and seconds are
  // within units, meaning that the hours are within the max of 24, and minutes and seconds are no greater than 60.
  
//   Write a swap function that will take 3 variables and swap a to b and b to c and c to a.
function swap(a, b, c) {
    let temp = a;
    a = b;
    b = c;
    c = temp;

    return [a, b, c];
}

console.log(swap(3, 5, 7))

//   Complete the function below:
  
  function findLongestWord(sentence) {
    const words = sentence.split(' '); // words is an array of all the words in the sentence
    // write your code here
    longest = 0
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest) {
            longest = i
        }
    }
    return words[longest]
  }
  
  // Example usage:
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 
  // your function should output the correct longest word.
  