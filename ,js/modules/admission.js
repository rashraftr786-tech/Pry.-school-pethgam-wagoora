export const generateStudentID = (admittedClass) => {
    const year = new Date().getFullYear();
    const random = Math.floor(1000 + Math.random() * 9000);
    // Example Format: GPS/2025/CL5/4829
    return `GPS/${year}/CL${admittedClass}/${random}`;
};

export const validateAadhaar = (aadhaar) => {
    return /^\d{12}$/.test(aadhaar); // Simple 12-digit check
};
