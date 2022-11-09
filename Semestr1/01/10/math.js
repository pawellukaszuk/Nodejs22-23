// tworzymy funkcję dodawania
function add(a, b) {
    return a + b
}

// tworzymy funkcję odejmowania
function sub(a, b) {
    return a - b
}

// tworzymy funkcję mnożenia
function multi(a, b) {
    return a * b
}

// tworzymy funkcję dzielenia
function div(a, b) {
    return a / b
}

// dodajemy zmienną PI z wartością 3.14
const PI = 3.14;

// eksportujemy nasze funkcje aby możliwy był dostęp do nich z innego modułu
module.exports = {
    add: add,
    sub: sub,
    multi: multi,
    div: div,
    PI: PI // dodajemy zmienną PI do naszego obiektu który będzie widoczny w module 'rodzica'
};
