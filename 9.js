const numbers = [];
let count = 0;

// Find the first 5 multiples of 7 that are not multiples of 10
for (let i = 1; count < 5; i++) {
    const multipleOf7 = 7 * i;
    if (multipleOf7 % 10 !== 0) {
        numbers.push(multipleOf7);
        count++;
    }
}

// Add 15 more numbers (can be any integers)
for (let i = 1; numbers.length < 20; i++) {
    numbers.push(i);
}

console.log(numbers);
