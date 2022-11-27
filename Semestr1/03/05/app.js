const request = require('request');

const url = `https://jsonplaceholder.typicode.com/users/2`;

request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        const user = JSON.parse(body);

        console.log(user.name);
        console.log('lat', user.address.geo.lat);
        console.log('lng', user.address.geo.lng);
    } else {
        console.log('User not found or network connection issues');
    }
});
