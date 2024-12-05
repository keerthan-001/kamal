function categorizeStudent(score) {
    if (score >= 90) {
        return "A+";
    } else if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B+";
    } else if (score >= 60) {
        return "B";
    } else if (score >= 50) {
        return "C+";
    } else if (score >= 40) {
        return "C";
    } else {
        return "D";
    }
}

// Example usage
const studentScore = 85;
console.log(`The student's category is: ${categorizeStudent(studentScore)}`);
