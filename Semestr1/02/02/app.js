// wczytujemy moduł zawierający funkcje do pracy z tablicą
const utils = require('./utils');

// przykładowa tablica
const someArray = ['ala', 3, 'ma', 'kota', 2, 'ala', 5, 3];

// wywołanie funkcji 'uniq' z modułu 'utils' i przypisanie nowej tablicy do zmiennej
const funcResult = utils.uniq(someArray);

// wyświetlenie tablicy w konsoli
console.log(someArray);
console.log(funcResult);

// przykładowe tablice do przetestowania nowej funkcji 'diff' z naszego modułu
const tabA = ['ala', 'ma', 'kota'];
const tabB = ['ala', 'ma', 'psa'];

// wyświetlamy wyniki wywołań funkcji 'diff' z modułu 'utils'
console.log(utils.diff(tabA, tabB));
console.log(utils.diff(tabB, tabA));
