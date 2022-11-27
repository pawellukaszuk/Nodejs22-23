// node app.js --name=Jan --lastName=Kochanowski
// rezultat w konsoli:
// wcześniej zapisany użytkownik Adam

const fs = require('fs');
const argv = require('yargs').argv;

if (argv.name != null && argv.lastName != null) {
    const user = {
        name: argv.name,
        lastName: argv.lastName
    };

    const userData = JSON.stringify(user);

    try {
        let data = fs.readFileSync('user.json', 'utf-8');
        const userFromFile = JSON.parse(data);
        console.log('wcześniej zapisany użytkownik', userFromFile.name);    
    } catch (error) {
        console.log("błąd odczytu danych z pliku: " + error.message)
    }
    
    try {
        fs.writeFileSync('user.json', userData);
    } catch (error) {
        console.log("błąd zapisu danych do pliku: " + error.message)
    }
} else {
    console.log("nie podano parametrów wejściowych --name i --lastName")
}
