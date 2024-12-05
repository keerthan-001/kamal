let reversedAlphabet = '';

// Loop through uppercase letters from 'Z' to 'A'
for (let i = 90; i >= 65; i--) {
    reversedAlphabet += String.fromCharCode(i) + ' ';
}

// Loop through lowercase letters from 'z' to 'a'
for (let i = 122; i >= 97; i--) {
    reversedAlphabet += String.fromCharCode(i) + ' ';
}

console.log(reversedAlphabet.trim()); // Trim to remove the trailing space
