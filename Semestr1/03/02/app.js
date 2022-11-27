// node app.js --name=Adam --lastName=Mickiewicz
const fs = require('fs');
const argv = require('yargs').argv;

const user = {
    name: argv.name,
    lastName: argv.lastName
};

const userData = JSON.stringify(user);

fs.writeFile('user.json', userData, (error) => {
    if (error) {
        console.log('błąd zapisu do pliku');
    } else {
        console.log('plik został zapisany');
    }
});
