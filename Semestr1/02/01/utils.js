// deklarujemy funkcję która przyjmuje 1 argument i zwraca nową tablicę
// argumentem wejściowym jest tablica
function uniq(tab) {
    // deklarujemy zmienną która będzie zwracana jako wynik naszego zadania
    let result = [];

    // iterujemy po każdym elemencie z tablicy przekazanej jako parametr funkcji
    for (let i = 0; i < tab.length; i++) {
        // wywołujemy funkcję 'indexOf' w celu sprawdzenia czy element z tablicy znajduje się w tablicy wynikowej
        // -1 oznacza że wartość nie znajduje się w naszej tablicy
        if (result.indexOf(tab[i]) === -1) {
            // jeżeli tablica wynikowa nie posiada naszego elementu, to dodajemy wartość do naszej tablicy
            result.push(tab[i]);
        }
    }

    // zwracamy nową tablicę bez powtórzeń
    return result;
}

// eksportujemy nasze funkcje aby możliwy był dostęp do nich z innego modułu
module.exports = {
    uniq: uniq,
};
