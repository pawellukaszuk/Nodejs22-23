## Tutorial z pracy z linią komend:
https://tutorial.djangogirls.org/en/intro_to_command_line/

## Zadania do wykonania w czasie ćwiczeń

1. Aplikacja która podczas uruchomienia przywita nas komunikatem `Hello World!`. Aplikacja ma być uruchamiana z poziomu konsoli. (`node app.js`).

2. Aplikacja złożona z 2 plików: `app.js` oraz `user.js`, która wyświetli przywitanie osoby. Plik `app.js` odpowiedzialny jest za wczytanie modułu pliku `user.js` i wyświetlenie w konsoli `hello {name}!`, gdzie `name` to wartość z pliku `user.js`.

3. Rozszerzenie zadania 2 tak by plik `user.js` zwracał imię oraz nazwisko jako oddzielne zmienne. W `app.js` wyświetlmy przywitanie osoby.

4. Kalkulator wykonujący cztery podstawowe działania (dodawanie, odejmowanie, dzielenie oraz mnożenie). Aplikacja powinna składać się z 2 plików (główna aplikacja `app.js` oraz `math.js` zawierający odpowiednie funkcje).

5. Rozbudowanie kalkulatora o stałą matematyczną `PI` i wypisanie tejże wartości na konsoli w naszej głównej aplikacji.

6. Zapisanie wyniku działania z zadania 5 do pliku, wykorzystując moduł Core'owy File System (https://nodejs.org/dist/latest-v16.x/docs/api/fs.html , szukana funkcja ma przyrostek `Sync`).

7. Aplikacja wyświetlająca informację o zalogowanym użytkowniku systemu, przy użyciu modułu OS (https://nodejs.org/dist/latest-v16.x/docs/api/os.html , szukana funkcja ma przyrostek `Sync`). Dodatkowo: zapis nazwy użytkownika do pliku na dysku.

8. Rozszerzenie zadania 4. Aplikacja powinna wczytać jedną liczbę z pliku `a.txt`, drugą liczbę z pliku `b.txt`. Na tych liczbach należy wykonać operacja dodawania, odejmowania, mnożenia i dzielenia a wyniki wszystkich działań zapisać w pliku `wynik.txt`, każdy wynik w osobnej linii.
Należy wykorzystać moduł Core'owy File system (https://nodejs.org/dist/latest-v16.x/docs/api/fs.html , szukana funkcja ma przyrostek `Sync`)

Przykład pliku wynik txt:
```
Dodawanie liczb 1024 i 16 daje w wyniku 1040
Odejmowanie liczb 1024 i 16 daje w wyniku 1008
Mnożenie liczb 1024 i 16 daje w wyniku 16384
Dzielenie liczb 1024 i 16 daje w wyniku 64
```
9. Obsługa parametrów wejściowych. Aplikacja złożona jest z 1 pliku: `app.js`. Podczas uruchamiania aplikacji możemy przekazać jej dodatkowy parametr, który zostanie wyświetlony po komunikacie `hello`. Gdy podanych będzie więcej parametrów, wtedy ignorujemy wszystkie prócz pierwszego. Gdy nie będzie podanych żadnych parametrów aplikacja wyświetla `hello world`. 
Należy wykorzystać globalną zmienną: `process`.

```
Przykładowe uruchomienie aplikacji:
> node app.js Pawel
Wynik działania aplikacji:
> hello Pawel

Przykładowe uruchomienie aplikacji:
> node app.js
Wynik działania aplikacji:
> hello world

Przykładowe uruchomienie aplikacji:
> node app.js Pawel Lukaszuk
Wynik działania aplikacji:
> hello Pawel
```

10. Rozszerzenie aplikacji z zadania 8 tak, by nazwy plików z których pobieramy liczby były podawane w parametrach w czasie uruchamiania.

```
Przykładowe uruchomienie aplikacji:
> node app.js a.txt b.txt
```

11. Rozszerzenie aplikacji z zadania 10 tak, by jej uruchomienie z niewłaściwą liczbą parametrów skutkowało wyświetleniem stosownego komunikatu w konsoli.

```
Przykładowe uruchomienie aplikacji:
> node app.js a.txt
Wynik działania aplikacji:
> zbyt mało parametrów!

Przykładowe uruchomienie aplikacji:
> node app.js a.txt b.txt c.txt
Wynik działania aplikacji:
> zbyt dużo parametrów!
```

12. Aplikacja złożona jest z 1 pliku: `app.js`. Podczas uruchamiania możemy przekazać jej dodatkowy parametr który jest ścieżką do istniejącego na dysku folderu. Zadaniem aplikacji jest wyświetlanie w konsoli nazw wszystkich plików i folderów znajdujących się bezpośrednio we wskazanym folderze.
Uruchomienie z niewłaściwą liczbą parametrów powinno skutkować wyświetleniem komunikatu w konsoli. Należy wykorzystać moduł Core'owy File system (https://nodejs.org/dist/latest-v16.x/docs/api/fs.html , szukana funkcja ma przyrostek `Sync`)

```
Przykładowe uruchomienie aplikacji:
> node app.js C:\\code
Wynik działania aplikacji:
Pliki w folderze C:\\code:
folder1
folder2
plik1.txt
plik2.txt

Przykładowe uruchomienie aplikacji:
> node app.js
Wynik działania aplikacji:
> zbyt mało parametrów!

Przykładowe uruchomienie aplikacji:
> node app.js C:\\code C:\\apps
Wynik działania aplikacji:
> zbyt dużo parametrów!
```
