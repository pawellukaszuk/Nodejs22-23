// deklarujemy funkcję która przyjmuje 1 argument i zwraca nową tablicę
// argumentem wejściowym jest tablica
function uniq(tab) {
    // deklarujemy zmienną która będzie zwracana jako wynik naszego zadania
    let result = [];

    // iterujemy po każdym elemencie z tablicy przekazanej jako parametr funkcji
    // możemy tutaj zastosować również funkcję 'forEach'
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

// tworzymy nową funkcję do poruwnania 2 tablic
// wejściowe parametry są tablicami
function diff(a, b) {
    // deklarujemy zmienną tablicową w której zwrócimy różnicę jakie występują między tablicą 'a' i 'b'
    let result = [];

    // iterujemy po każdym elemencie tablicy 'a'
    a.forEach(function (element) {
        // sprawdzamy czy w tablicy 'b' znajduje się 'element' z tablicy 'a'
        if (b.indexOf(element) === -1) {
            // jeżeli tablica 'b' nie zawiera elementu z tablicy 'a', dodajemy element do tablicy wynikowej
            result.push(element);
        }
    });

    // zwracamy nową tablicę zawierającą różnicę między tablicami
    return result;
}

// eksportujemy nasze funkcje aby możliwy był dostęp do nich z innego modułu
module.exports = {
    uniq: uniq,
    diff: diff
};
