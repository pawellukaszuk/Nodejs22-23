// wczytujemy moduł 'math'
const math = require('./math');

// wywołujemy funkcje z naszego modułu i wyświetlamy wyniki 
console.log('3 + 5 = ', math.add(3, 5));
console.log('4 - 7 = ', math.sub(4, 7));
console.log('6 * 2 = ', math.mul(6, 2));
console.log('8 / 2 = ', math.div(8, 2));
