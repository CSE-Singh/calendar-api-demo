const { getToday } = require("./getToday");
const request = require("postman-request");
const { readJSON } = require('./readJSON')
const { writeJSON } = require('./writeJSON')
const creds = readJSON('./creds.json');


const getHolidays = (country = "IN") => {
  const today = getToday();
  const req_url =
    "https://calendarific.com/api/v2/holidays/?api_key=" +
    creds.api_key +
    "&country=" +
    country +
    "&year=" +
    today.year.toString() +
    "&day=" +
    today.day.toString() +
    "&month=" +
    today.month.toString();

  const options = { json: true, url: req_url };

  try {
    request.get(options, (error, res, body) => {
      if (error) {
        return console.log(error);
      }
      if (!error && res.statusCode == 200) {
        // do something with JSON, using the 'body' variable
        console.log(body);
        writeJSON('./holidays.json', body) 
      }
    });
  } catch (error) {
    console.log("error occured in getholidays: ", error.message);
  }
};
getHolidays();

module.exports = { getHolidays };
