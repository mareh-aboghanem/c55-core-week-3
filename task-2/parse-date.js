// Your code here
function parseDateString(dateString) {
    //const format_MDY = "MDY 10-21-1983";
    //const format_DMY = "DMY 21-10-1983";
    if (dateString.includes("MDY")) {
        const parts = dateString.split(" ")[1].split("-");
        //Format: MM-DD-YYYY
        const month = parts[0];
        const day = parts[1];
        const year = parts[2];
        return { day, month, year };
    } else if (dateString.includes("DMY")) {
        //Format: DD-MM-YYYY
        const parts = dateString.split(" ")[1].split("-");
        const month = parts[1];
        const day = parts[0];
        const year = parts[2];
        return { day, month, year };
    }
}
console.log(parseDateString("MDY 10-1-1983"));
// Output: { day: 1, month: 10, year: 1983 }

console.log(parseDateString("DMY 21-10-1983"));
// Output: { day: 21, month: 10, year: 1983 }

console.log(parseDateString("MDY 03-15-2024"));
// Output: { day: 15, month: 3, year: 2024 }

console.log(parseDateString("DMY 15-03-2024"));
// Output: { day: 15, month: 3, year: 2024 }