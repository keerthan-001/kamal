const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const oddLetters = [];

// Loop through odd numbers from 1 to 26
for (let i = 1; i <= 26; i += 2) {
    oddLetters.push(alphabet[i - 1]); // i - 1 to match 0-based index
}

console.log(oddLetters.join(', '));
