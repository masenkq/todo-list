import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import Formular from './Formular';
import SeznamUkolu from './SeznamUkolu';
import Filtry from './Filtry';
import './App.css'; 

function Aplikace() {

    const [ukoly, setUkoly] = useState([]);
 

  //Podle čeho zrovna filtruju? (výchozí je 'vsechno')
  const [aktualniFiltr, setAktualniFiltr] = useState('vsechno');

  const pridatUkol = (novyNazev, novaKategorie) => {
    const novyUkol = {
      id: uuidv4(),
      nazev: novyNazev,
      kategorie: novaKategorie,
      hotovo: false
    };
    setUkoly([...ukoly, novyUkol]);
  };

  const smazatUkol = (idKeSmazani) => {
    // nechavam  jen ty ukoly, co maji jine ID než to co chci smazat.
    //pomci filter se udela novy seznam ktery bude s temi ID co se nerovnaji id ke smazani
    setUkoly(ukoly.filter(ukol => ukol.id !== idKeSmazani));
  };


  const prepnoutStav = (idKPrepnuti) => {
    // Projdu pole mapem a změním jen ten jeden konkrétní úkol na ktery jsem klikla, tomu 
    // zmenim stav na oapcny.
    setUkoly(ukoly.map(ukol => {
      if (ukol.id === idKPrepnuti) {
        return { ...ukol, hotovo: !ukol.hotovo }; 
      }
      return ukol; 
    }));
  };
//filtruju podle dokoncene a nedokocene
 const filtrovaneUkoly = ukoly.filter(ukol => {
    if (aktualniFiltr === 'dokoncene') return ukol.hotovo === true;
    if (aktualniFiltr === 'nedokoncene') return ukol.hotovo === false;
    return true; 
  });

  //Zbývá splnit celkem: 1 úkol je tady to
  const pocetZbyvajicich = ukoly.filter(u => !u.hotovo).length;

  return (
    <div className="obal-aplikace">
      <h1>To-Do List</h1>
      
      {/* Rodič posílá funkci 'pridatUkol' do formuláře */}
      <Formular funkceNaPridani={pridatUkol} />
      
      {/* Tlačítka pro filtrování + posílám funkci na změnu filtru */}
      <Filtry 
        aktualni={aktualniFiltr} 
        nastavFiltr={setAktualniFiltr} 
      />
      <p className="statistika">Zbývá splnit: <strong>{pocetZbyvajicich}</strong> úkolů</p>

      <SeznamUkolu 
        data={filtrovaneUkoly} 
        funkceSmazat={smazatUkol} 
        funkcePrepnout={prepnoutStav} 
      />
    </div>
  );
}

export default Aplikace;