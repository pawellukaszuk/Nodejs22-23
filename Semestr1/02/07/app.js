const fs = require('fs');

const user = {
    name: 'Jan',
    lastName: 'Nowak'
};

const userData = JSON.stringify(user);

fs.writeFileSync('user.json', userData);
