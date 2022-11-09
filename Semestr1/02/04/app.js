// krok 1: wywołujemy w konsoli polecenie do stworzenia 'package.json'
// npm init
//
// krok 2: instalujemy zewnętrzny moduł 'lodash'
// npm install lodash
//
// krok 3: wczytujemy zewnętrzy moduł do naszej aplikacji

const _ = require('lodash');

// przykładowa tablica
const someArray = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8];

// wywołanie funkcji 'min' z modułu 'lodash' i przypisanie do zmiennej 'minValue' minimalnej wartości z tablicy
const minValue = _.min(someArray);

// wywołanie funkcji 'max' z modułu 'lodash' i przypisanie do zmiennej 'maxValue' maksymalnej wartości z tablicy
const maxValue = _.max(someArray);

// wyświetlenie wartości min i max w konsoli
console.log('min:', minValue);
console.log('max:', maxValue);
