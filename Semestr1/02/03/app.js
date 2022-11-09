
// podmieniamy nasz moduł 'utils' na zewnętrzny moduł 'lodash'
// krok 1: wywołujemy w konsoli polecenie do stworzenia 'package.json'
// npm init
//
// krok 2: instalujemy zewnętrzny moduł 'lodash'
// npm install lodash
//
// krok 3: wczytujemy zewnętrzy moduł do naszej aplikacji

const _ = require('lodash'); // jako zmienną wybrałem nazwę '_' bo lodash najczęsciej jest tak imporotwany

// przykładowa tablica
const someArray = ['ala', 3, 'ma', 'kota', 2, 'ala', 5, 3];

// wywołanie funkcji 'uniq' z modułu 'lodash' i przypisanie nowej tablicy do zmiennej
const funcResult = _.uniq(someArray);

// wyświetlenie tablic w konsoli
console.log(someArray);
console.log(funcResult);

// przykładowe tablice do przetestowania nowej funkcji 'difference' z modułu 'lodash'
const tabA = ['ala', 'ma', 'kota'];
const tabB = ['ala', 'ma', 'psa'];

// wyświetlamy wyniki wywołań funkcji 'difference' z modułu 'lodash'
console.log(_.difference(tabA, tabB));
console.log(_.difference(tabB, tabA));
