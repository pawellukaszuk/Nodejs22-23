function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

// musimy pamiętać o wyeksportowaniu naszych funkcji aby były widoczne oraz dostępne poza tym modułem
module.exports = {
    add: add,
    sub: sub,
    mul: mul,
    div: div,
};
