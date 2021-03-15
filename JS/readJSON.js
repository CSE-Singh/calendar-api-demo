const fs = require('fs')

module.exports.readJSON = (file) => JSON.parse(fs.readFileSync(file)) 