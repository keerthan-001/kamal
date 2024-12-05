function isEligibleForExam(totalClasses, attendedClasses) {
    const attendancePercentage = (attendedClasses / totalClasses) * 100;
    if (attendancePercentage >= 85) {
        return "Eligible to attend the exam.";
    } else {
        return "Not eligible to attend the exam.";
    }
}

// Example usage
const totalClasses = 100;
const attendedClasses = 85;
console.log(`Attendance: ${attendedClasses}/${totalClasses} - ${isEligibleForExam(totalClasses, attendedClasses)}`);
