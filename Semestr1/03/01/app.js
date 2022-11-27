const fs = require('fs');

const user = {
    name: 'Jan',
    lastName: 'Nowak'
};

const userData = JSON.stringify(user);

fs.writeFile('user.json', userData, (error) => {
    if (error) {
        console.log('błąd zapisu do pliku');
    } else {
        console.log('plik został zapisany');
    }
});
