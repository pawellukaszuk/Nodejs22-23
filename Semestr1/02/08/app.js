// node app.js --name=Adam --lastName=Mickiewicz
const fs = require('fs');
const argv = require('yargs').argv;

const user = {
    name: argv.name,
    lastName: argv.lastName
};

const userData = JSON.stringify(user);

fs.writeFileSync('user.json', userData);
