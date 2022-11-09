// wiemy że nasza aplikacja będzie zawietała pakiety zewnętrzne, w tym celu tworzymy manifest naszej aplikacji
// krok 1: npm init
// (pamiętamy aby pracować w odpowiednim katalogu, oraz odpowiednio wypełnić nasz manifest)
// (dla tych co zgadzają się na ustawienia standardowe polecam polecenie z flagą '-y': npm init -y)
//
// wiemy że będziemy korzystać z pakietu 'yargs' do parsowania parametrów wejściowych
// krok 2: npm install yargs

// wczytujemy moduł yargs
const yargs = require('yargs');

// zgodnie z dokumentacją biblioteki, aby wywołać przeparsowanie parametrów wejściowych (node app.js --a=2 --b=3 --operator=*)
const args = yargs.argv;

// w celu zademonstrowania wyświetlamy w konsolu przeparsowany obiekt
console.log(args);
// dla porówniania tablica parametrów wejściowych wygląda następująco:
console.log(process.argv);

// stwórzmy moduł zawierający funkcje matematyczne i wczytajmy je do zmiennej 'myCalc'
const myCalc = require('./calc');

// wywołanie naszej aplikacji powinno wyglądać mniej więcej tak:
// node app.js --a=3 --b=4 --operator=*
// parametry które są dynamicznie modyfikowane, co daje nam możliwość wprowadzania danych do naszej aplikacji
// pobawić się zmianą parametrów wejściowych! 

// moduł 'yargs' pozwolił nam na przeparsowanie parametrów wejściowych na konkretne właściwości w obiekcie
const a = args.a;
const b = args.b;
const operator = args.operator;

// znając konstrukcję warunkową 'switch' wywołajmy odpowiednią funkcję z naszego kalkulatora
let result;

switch (operator) {
    case '+':
        result = myCalc.add(a, b);
        break;
    case '-':
        result = myCalc.sub(a, b);
        break;
        
    case '*':
        result = myCalc.mul(a, b);
        break;
            
    case '/':
        result = myCalc.div(a, b);
        break;
}
// wyświetlamy wynik działania
console.log('wynik: ', result);
