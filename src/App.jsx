import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Formular from './Formular';
import SeznamUkolu from './SeznamUkolu';
import Filtry from './Filtry';
import './App.css'; 

function App() {
  const [ukoly, setUkoly] = useState([]);
  const [aktualniFiltr, setAktualniFiltr] = useState('vsechno');
  const [kategorieFiltr, setKategorieFiltr] = useState('vse');

  const pridatUkol = (novyNazev, novyPopis, novaKategorie) => {
    const novyUkol = {
      id: uuidv4(),
      nazev: novyNazev,
      popis: novyPopis,
      kategorie: novaKategorie,
      hotovo: false
    };
    setUkoly([...ukoly, novyUkol]);
  };

  const smazatUkol = (idKeSmazani) => {
    setUkoly(ukoly.filter(ukol => ukol.id !== idKeSmazani));
  };

  const prepnoutStav = (idKPrepnuti) => {
    setUkoly(ukoly.map(ukol => {
      if (ukol.id === idKPrepnuti) {
        return { ...ukol, hotovo: !ukol.hotovo };
      }
      return ukol;
    }));
  };

  const filtrovaneUkoly = ukoly.filter(ukol => {
    let sediStav = true;
    if (aktualniFiltr === 'dokoncene') sediStav = ukol.hotovo === true;
    if (aktualniFiltr === 'nedokoncene') sediStav = ukol.hotovo === false;

    let sediKategorie = true;
    if (kategorieFiltr !== 'vse') {
      sediKategorie = ukol.kategorie === kategorieFiltr;
    }

    return sediStav && sediKategorie;
  });

  const pocetZbyvajicich = ukoly.filter(u => !u.hotovo).length;
//tohle, abych tma nemela zbyva 1 ukolu ale ukol 
  const getSklonovani = (pocet) => {
    if (pocet === 1) return 'úkol';
    if (pocet >= 2 && pocet <= 4) return 'úkoly';
    return 'úkolů';
  };

  return (
    <div className="obal-aplikace">
      <h1>To Do List</h1>
      
      <Formular funkceNaPridani={pridatUkol} />
      
      <Filtry 
        aktualni={aktualniFiltr} 
        nastavFiltr={setAktualniFiltr}
        aktualniKat={kategorieFiltr}
        nastavKat={setKategorieFiltr}
      />

      {filtrovaneUkoly.length > 0 && (
        <p className="statistika">
          Zbývá splnit celkem: <strong>{pocetZbyvajicich}</strong> {getSklonovani(pocetZbyvajicich)}
        </p>
      )}

      <SeznamUkolu 
        data={filtrovaneUkoly} 
        funkceSmazat={smazatUkol} 
        funkcePrepnout={prepnoutStav} 
      />
    </div>
  );
}

export default App;