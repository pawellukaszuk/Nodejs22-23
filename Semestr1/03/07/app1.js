// wersja podstawowa
// node app.js --id=3
const request = require('request');
const argv = require('yargs').argv;

const userId = argv.id;

const urlUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
request(urlUser, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        const user = JSON.parse(body);

        console.log(user.name);
        console.log('lat', user.address.geo.lat);
        console.log('lng', user.address.geo.lng);

        const urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${user.address.geo.lat}&lon=${user.address.geo.lng}`;
        request(urlWeather, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                const weatherData = JSON.parse(body);
                
                console.log(weatherData.weather[0].description);
            } else {
                console.log('Weather not found or network connection issues');
            }
        });
    } else {
        console.log('User not found or network connection issues');
    }
});
