// wersja z kontrolą błędów
// ten kod jest bezpieczny, ale nieczytelny - czytelność poprawi się po rozbiciu go na funkcje i moduły

// node app.js --id=3
const request = require('request');
const argv = require('yargs').argv;

// sprawdzenie czy parametr id został podany i jest liczbą naturalną
if (argv.id == null
    || !Number.isInteger(argv.id)
    || argv.id < 0) {
    console.log('nieprawidłowy parametr wywołania');
    process.exit(0); //zakończenie pracy programu
}

const correctStatuCode = 200;

const urlUser = `https://jsonplaceholder.typicode.com/users/${argv.id}`;
request(urlUser, (error, response, body) => {
    if (!error) {
        if (response.statusCode === correctStatuCode) {
            let user;
            try {
                user = JSON.parse(body);
            } catch (error) {
                console.log("serwer użytkowników zwrócił niepoprawnego JSONa");
                process.exit(0); //zakończenie pracy programu
            }

            if (user?.name == null
                || user?.address?.geo?.lat == null
                || user?.address?.geo?.lng == null) {
                console.log("serwer użytkowników zwrócił niekompletne dane");
            } else {
                console.log(`użytkownik ${user.name}`);
                console.log(`lat ${user.address.geo.lat}`);
                console.log(`lng ${user.address.geo.lng}`);
        
                const urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${user.address.geo.lat}&lon=${user.address.geo.lng}`;
                request(urlWeather, (error, response, body) => {
                    if (!error) {
                        if (response.statusCode === correctStatuCode) {
                            let weatherData;
                            try {
                                weatherData = JSON.parse(body);
                            } catch (error) {
                                console.log("serwer pogody zwrócił niepoprawnego JSONa");
                                process.exit(0); //zakończenie pracy programu
                            }

                            if (weatherData?.weather[0]?.description) {
                                console.log(`aktualna pogoda to: ${weatherData.weather[0].description}`);
                            } else {
                                console.log("serwer pogody zwrócił niekompletne dane");
                            }
                        } else {
                            console.log(`nie znaleziono pogody dla koordynatów lat=${user.address.geo.lat} lon=${user.address.geo.lng}`);
                        }
                    } else {
                        console.log('wystąpił problem z połączeniem do serwera pogody');
                    }
                });
            }
        }
        else {
            console.log('nie znaleziono użytkownika o id: ' + argv.id);
        }
    } else {
        console.log('wystąpił problem z połączeniem do serwera uzytkowników');
    }
});
