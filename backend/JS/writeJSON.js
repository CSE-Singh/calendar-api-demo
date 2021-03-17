const fs = require('fs')

module.exports.writeJSON = (file, data) => fs.writeFileSync(file, JSON.stringify(data))