// wiemy już z poprzednich zadań skąd się bierze 'name' itp..
const name = process.argv[2];

// zmieniamy nasze przywitanie na zmienną, tak by można było w łatwy sposób zapisać do pliku
let helloMessage;

if (name) {
    helloMessage = 'hello ' + name;
} else {
    helloMessage = 'hello world';
}

// wyświetlamy nasze przywitanie w konsoli
console.log(helloMessage);
