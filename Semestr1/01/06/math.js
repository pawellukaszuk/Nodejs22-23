// funkcja dodawania
function add(a, b) {
    return a + b;
}

// funkcja odejmowania
function sub(a, b) {
    return a - b;
}

// funkcja mnożenia
function mul(a, b) {
    return a * b;
}

// funkcja dzielenia
function div(a, b) {
    return a / b;
}

// stała PI z wartością 3.14
const PI = 3.14;

// eksport funkcji, aby możliwy był dostęp do nich z innego modułu
module.exports = {
    add: add,
    sub: sub,
    mul: mul,
    div: div,
    PI: PI
};
