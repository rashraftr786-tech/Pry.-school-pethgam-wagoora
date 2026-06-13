// results-handler.js
// Shared grading logic for all result pages

/**
 * Calculate grade, remarks, and grade points based on percentage
 * @param {number} obtainedMarks - Total marks obtained by student
 * @param {number} totalMarks - Maximum possible marks (default 500)
 * @returns {Object} { percentage, grade, remarks, points }
 */
export function calculateGrades(obtainedMarks, totalMarks = 500) {
    const percentage = (obtainedMarks / totalMarks) * 100;
    
    let grade, remarks, points;
    
    if (percentage > 85) {
        grade = "A+";
        remarks = "Excellent";
        points = 10;
    } else if (percentage > 70) {
        grade = "A";
        remarks = "Very Good";
        points = 8.5;
    } else if (percentage > 55) {
        grade = "B";
        remarks = "Good";
        points = 7;
    } else if (percentage > 40) {
        grade = "C";
        remarks = "Average";
        points = 5.5;
    } else if (percentage > 33) {
        grade = "D";
        remarks = "Pass";
        points = 4;
    } else {
        grade = "E";
        remarks = "Needs Improvement";
        points = 0;
    }
    
    return {
        percentage: percentage.toFixed(2),
        grade: grade,
        remarks: remarks,
        points: points
    };
}

/**
 * Calculate proficiency level (Stream, Mountain, Sky) based on percentage
 * @param {number} percentage 
 * @returns {string}
 */
export function getProficiencyLevel(percentage) {
    if (percentage >= 75) return "Sky";
    if (percentage >= 50) return "Mountain";
    return "Stream";
}

/**
 * Get overall result (Pass/Fail) – assuming minimum 33% in each subject? 
 * For now, overall pass if percentage > 33
 */
export function getOverallResult(percentage) {
    return percentage > 33 ? "Pass" : "Fail";
}
