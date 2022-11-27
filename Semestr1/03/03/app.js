// node app.js --name=Adam --lastName=Mickiewicz
// rezultat w konsoli:
// problem z odczytaniem pliku
// plik został zapisany

// node app.js --name=Jan --lastName=Mickiewicz
// rezultat w konsoli:
// wcześniej zapisany użytkownik Adam
// plik został zapisany

const fs = require('fs');
const argv = require('yargs').argv;

const fileName = 'user.json';

const user = {
    name: argv.name,
    lastName: argv.lastName
};

const userData = JSON.stringify(user);

fs.readFile(fileName, 'utf-8', (error, data) =>{
    if (error) {
        console.log('problem z odczytaniem pliku');
    } else {
        const userFromFile = JSON.parse(data);
        console.log('wcześniej zapisany użytkownik', userFromFile.name);
    }

    fs.writeFile(fileName, userData, (error) => {
        if (error) {
            console.log('błąd zapisu do pliku');
        } else {
            console.log('plik został zapisany');
        }
    });
});
