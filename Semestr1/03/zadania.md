## Zadania do wykonania w czasie ćwiczeń

1. Stworzenie aplikacji która pozwoli na zapisanie całego obiektu do pliku. Z wykorzystaniem funkcji pozwalającej na przekonwertowanie obiektu na postać tekstową(`JSON.stringify`).

Obiekt do zapisu:
```javascript
const user = {
    name: 'Jan',
    lastName: 'Nowak'
};
```
Wynik zapisać do pliku `user.json` za pomocą funkcji asynchronicznej `fs.writeFile`.

2. Rozszerzenie aplikacji z zadania 1 o dynamiczne wprowadzanie danych które chcemy zapisać do pliku. Do wykorzystania zewnętrzny moduł `yargs`.

Przykład uruchomienia aplikacji
```bash
node app.js --name=Adam --lastName=Mickiewicz
```

3. Dodanie do naszej aplikacji z zadania 2 wczytanie już wcześniej zapisanego obiektu, przed nadpisaniem nowymi wartościami. W konsoli wypiszmy jedynie imię wczytanego użytkownika. Wszystkie operacja na plikach wykonujemy za pomocą modułu `fs` i funkcji asynchronicznych.

4. Aplikacja która pobierze z zewnętrznego API informację o użytkowniku i wyświetli w konsoli współrzędne geograficzne skąd dany użytkownik pochodzi oraz jego imię.

Adres URL do API: https://jsonplaceholder.typicode.com/users/{ID} gdzie `ID` to identyfikator użytkownika (wybrana liczba od 1 do 10 włącznie).

Np: Adres URL dla użytkownika o ID=2: https://jsonplaceholder.typicode.com/users/2

Wynik w konsoli
```bash
Ervin Howell
lat -43.9509
lng -34.4618
```

**W zadaniach 4-10, do pobieranie danych z API, wykorzystamy zewnętrzny moduł `request`. Moduł jest przestarzały ale to nie będzie nam przeszkadzać w zajęciach.**

Dokumentacja: https://github.com/request/request#readme

Strona: https://www.npmjs.com/package/request

5. Rozszerzenie zadania 4 tak aby aplikacja poinformowała użytkownika o błędzie pobierania danych lub braku szukanego użytkownika w bazie.

6. Dodajmy do zadania 5 dynamiczne wprowadzanie `ID` poprzez użycie zewnętrznej biblioteki `yargs`.

Przykład uruchomienia aplikacji
```bash
node app.js --id=2
```

Wynik w konsoli
```bash
Ervin Howell
lat -43.9509
lng -34.4618
```

```bash
node app.js --id=20
```
Wynik w konsoli
```bash
User not found.
```

7. Dodanie do zadanie 6 opcji pobrania pogody dla wczytanego
użytkownika. Odpowiednie zabezpieczenie naszej aplikacji w przypadku błędu API (podobnie jak w zadaniu 5).

Adres do pobrania danych:
```bash
https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={LAT}&lon={LNG}

gdzie `{LAT}` i `{LNG}` to współrzędne geograficzne pobrane od naszego użytkownika
```

8. Podziel aplikację z zadania 7 na funkcje:

`getUser` – odpowiedzialną za pobieranie danych użytkownika

`getWeather` – odpowiedzialną za pobieranie pogody

9. Podziel aplikację z zadania 8 na moduły odpowiednio:

`app.js` – plik główny który uruchomi naszą aplikację i wywoła funkcje z naszego modułu `user.js`

`user.js` – moduł z pobieraniem danych użytkownika

`weather.js` – moduł z pobieraniem danych o prognozie pogody

10. Dodaj do zadania 9 zapis do pliku obiektu składającego się z nazwy użytkownika oraz pobranej temperatury.

11. Napisz program, który po 4 sekundach wypisze komunikat `Hello afer 4 seconds`, a po 8 sekundach `Hello afer 8 seconds`.
Możesz zdefiniować tylko jedną własną funkcję!

12. Napisz program który:
Wypisze komunikat `Hello` 5 razy, w odstępach co 1 sekundę,
następnie wypisze `Finish` i się zakończy. Użyj funkcji `setInterval`.

13. Napisz program który w nieskończoność będzie wypisywał komunikat `Hello World X` z różnymi opóźnieniami, gdzie X to aktualne opóźnienie w sekundach. Zacznij z 1-sekundowym opóźnieniem, a następnie zwiększaj opóźnienie za każdym razem o 1 sekundę. (Za drugim razem opóźnienie będzie wynosiło 2 sekundy, za trzecim 3 sekundy, i tak dalej). Niech program wykonuje się nieskończoność, do momentu przerwania przez użytkownika.
