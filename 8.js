// Function to process the first 100 natural numbers
function processNaturalNumbers() {
    const results = []; // Array to store the final results

    for (let i = 1; i <= 100; i++) {
        let number = i; // Start with the current number

        // Check if the number is a multiple of 2
        if (number % 2 === 0) {
            number *= 5; // Multiply by 5
        }

        // Check if the number is a multiple of 3
        if (number % 3 === 0) {
            number /= 3; // Divide by 3
        }

        // Store the final result
        results.push(number);
    }

    return results; // Return the array of results
}

// Call the function and log the results
const finalResults = processNaturalNumbers();
console.log(finalResults); // This line will output the results