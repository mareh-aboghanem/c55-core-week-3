function isBookApplicable(searchString) { 
    const titleOfbook ="The fundamentals of JavaScript";

    const titleLowerCase = titleOfbook.toLowerCase();
    return titleLowerCase.includes(searchString.trim().toLowerCase());
}

console.log(isBookApplicable("javascript"));
// Output: true

console.log(isBookApplicable("javascript "));
// Output: true

console.log(isBookApplicable("python"));
// Output: false

console.log(isBookApplicable("JavaScript"));
// Output: true

console.log(isBookApplicable("JAVASCRIPT"));
// Output: true