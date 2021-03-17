const dateTime = require("date-and-time");

const getToday =  () => {
    // handle exceptions:
    // 1. No argument
    // 2. Wrong argument
    // 3. Wrong Object passed
    today = dateTime.format(new Date(), "DD/MM/YYYY");

    date = {};
    date.day = today.slice(0, 2);
    date.month = today.slice(3, 5);
    date.year = today.slice(6, 10);
    
    // console.log(date);
    return date
}
// getDate()
module.exports = { getToday }