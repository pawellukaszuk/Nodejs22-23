// deklarujemy stałą 'name' z wartością 'Jan'
const firstName = "Jan";

// deklarujemy stałą 'lastName' z wartością 'Kowalski'
const lastName = "Kowalski"

// musimy w sposób jawny powiedzieć co jest wyeksportowane
// w tym przypadku powinniśmy stworzyć nowy obiekt zawierający 2 właściwości
module.exports = {
    firstName: firstName,
    lastName: lastName,
};

// możemy też użyć takiego zapisu
// module.exports.firstName = firstName;
// module.exports.lastName = lastName;
