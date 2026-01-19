React To Do List
Jednoduchy seynam ukolu v Reactu. Umi pridavat ukoly s popisem a muyeme si vybrat kategorii, mazat ukoly a filtrovat je podle kategorie nebo podle stavu.

Instalace a spusteni
Stahnete projekt, otevrete terminal ve slozce a napiste:
npm install 
npm run dev 

Architektura
Hlavni stranka kde jsou zobrazovany ukoly drzi komponenta App.jsx pomoci useState. Data a funkce posilam do ostatnich komponent (Formular, Filtry, SeznamUkolu) pres props. Styly jsou ciste CSS.

