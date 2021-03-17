const fs = require('fs');

const creds = {
    api_key: "API_KEY"
};


const json = JSON.stringify(creds)

console.log(json);

fs.writeFile('creds.json', json, err => {

    if(err) {
        console.log('Cannot Write File', err);
    }
    else {
        console.log('File write Successful');
    }
})