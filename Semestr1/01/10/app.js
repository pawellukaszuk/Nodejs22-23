// wczytujemy moduł 'math' który weksportował odpowiednie funkcje matematyczne
const math = require('./math');

// wczytujemy wbudowany moduł 'fs'(file system) i przypisujemy jego wyeksportowane funkcje/zmienne do zmiennej 'fs'
const fs = require('fs');

const nameA = process.argv[2];
const nameB = process.argv[3];

const a = parseInt(fs.readFileSync(nameA, 'utf-8'));
const b = parseInt(fs.readFileSync(nameB, 'utf-8'));

// tworzymy zmienne które będą zawierały resultaty wywołań funkcji z modułu 'math'
const wynikDodawania = `Dodawanie liczb ${a} i ${b} daje w wyniku ` + math.add(a, b);
const wynikOdejmowania = `Odejmowanie liczb ${a} i ${b} daje w wyniku ` + math.sub(a, b);
const wynikMnozenia = `Mnożenie liczb ${a} i ${b} daje w wyniku ` + math.multi(a, b);
const wynikDzielenia = `Dzielenie liczb ${a} i ${b} daje w wyniku ` + math.div(a, b);

// wywołujemy funkcję 'writeFileSync' z naszego modułu 'fs'
// pierwszy parametr funkcji to nazwa pliku, drugi zaś wartość którą chcemy zapisać
fs.writeFileSync('wynik.txt', wynikDodawania);

// aby przećwiczyć różne funkcje dodajmy do naszego pliku 'wynik.txt' kolejne wyniki działań matematycznych
// funkcja appendFileSync pozwala na dodanie nowych danych do pliku bez jego czyszczenia
fs.appendFileSync('wynik.txt', '\n' + wynikOdejmowania);
// dla czytelności zapisanych wartości możemy dodać znak nowej linii (\n)
fs.appendFileSync('wynik.txt', '\n' + wynikMnozenia);
fs.appendFileSync('wynik.txt', '\n' + wynikDzielenia);
