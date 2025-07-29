let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let numbers = [0, 1, 2, 3, 4, 5, 44, 51, 156, 56, 84, 86, 23, 50, 34, 27];

fruits.push("fig");
numbers.push(6);

fruits.pop(); // removes the last element
numbers.shift(); // removes the first element
numbers.unshift(10); // adds an element to the beginning

fruits.forEach(function (fruit) {
    console.log(fruit);
});

numbers.forEach(function (number) {
    console.log(number);
});

let upperCaseFruits = fruits.map(function (fruit) {
    return fruit.toUpperCase();
});

let squaredNumbers = numbers.map(function (number) {
    return number * number;
});

console.log(upperCaseFruits);
console.log(squaredNumbers);

let longNames = fruits.filter(function (fruit) {
    return fruit.length > 5;
});

let startsWithE = fruits.filter(function (fruit) {
    return fruit.toLowerCase().startsWith("e");
});

console.log(longNames);
console.log(startsWithE);

let largeNumbers = numbers.filter(function (number) {
    return number > 9;
});

console.log(largeNumbers);

// Incorrect reduce usage in original code was fixed here:
let totalSum = numbers.reduce(function (total, current) {
    return total + current;
}, 0);
console.log(totalSum);

// Multiply even numbers by 10 and sum them
let evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});

let multiplied = evenNumbers.map(function (number) {
    return number * 10;
});

let sumMultiplied = multiplied.reduce(function (total, current) {
    return total + current;
}, 0);

console.log(sumMultiplied);

// All in one line:
let finalResult = numbers
    .filter(function (number) {
        return number % 2 === 0;
    })
    .map(function (number) {
        return number * 10;
    })
    .reduce(function (total, current) {
        return total + current;
    }, 0);

console.log(finalResult);

