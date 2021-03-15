const date = require("date-and-time");

const now = new Date();

today = date.format(now, "DD/MM/YYYY");

day = today.slice(0, 2);
month = today.slice(3, 5);
year = today.slice(6, 10);
console.log("Day: ", day);
console.log("Month: ", month);
console.log("Year: ", year);


// today = today.split("")
// index = 0
// today.forEach(element => {
//     console.log("Element at ", index++, " is: ", element);
// });