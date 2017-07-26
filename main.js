// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(myInt1, myInt2){
    if (myInt1 !== myInt2) {
      return (myInt1 > myInt2) ? myInt1 : myInt2;
    }
}

console.log(max(5, 9001));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(int1, int2, int3){
    if ((int1 !== int2) || (int1 !== int3) || (int2 !== int3)) {
      return max( max(int1, int2), max(int2, int3) )
    }
}

console.log(maxOfThree(3, 5, 800));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(myChar){
    return (myChar === 'a' || myChar === 'e' || myChar === 'i' || myChar === 'o' || myChar === 'u');
}

console.log(isVowel('e'));
console.log(isVowel('i'));
console.log(isVowel('c'));
console.log(isVowel('Stress Test'));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum (int1, int2) {
  return int1 + int2;
}

console.log(sum(5, 9));
console.log(sum(9000, 1));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg (int1, int2, int3) {
  return (int1 + int2 + int3) /  3;
}

console.log(avg(3,3,3));
console.log(avg(3,6,9));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength (myString) {
  return myString.length;
}

console.log(getLength('testString'));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(int1, int2) {
  return (int1 > int2) ? false : true;
}

console.log(greaterThan(9,5));
console.log(greaterThan(9, 9001));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(targetName) {
  return 'Hello, ' + targetName + '!';
}

console.log(greet('Bob Arctor'));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib (name, pastTenseVerb, item, place) {
  return name + " " + pastTenseVerb + " the " + item + " in his " + place;
}

console.log(madlib('John', 'walked', 'dog', 'yard.'));
