// funkcja dodawania
function addition(a, b) {
    return a + b;
}

// funkcja odejmowania
function substraction(a, b) {
    return a - b;
}

// funkcja mnożenia
function multiplication(a, b) {
    return a * b;
}

// funkcja dzielenia
function division(a, b) {
    return a / b;
}

// stała PI z wartością 3.14
const PI = 3.14;

// eksport funkcji, aby możliwy był dostęp do nich z innego modułu
module.exports = {
    add: addition,
    sub: substraction,
    mul: multiplication,
    div: division,
    PI: PI
};
