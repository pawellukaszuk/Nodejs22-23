// wczytujemy moduł 'user' do stałej user;
// w takim przypadku stała będzie miała wartość 'Paweł' gdyż plik 'user.js' wyeksportował string o wartości 'Paweł'
const user = require('./user');

// konsola zwróci: Hello Paweł
console.log('Hello ' + user);
