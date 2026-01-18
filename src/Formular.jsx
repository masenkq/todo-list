import { useState } from 'react';

function Formular({ funkceNaPridani }) {
  const [nazev, setNazev] = useState('');
  const [popis, setPopis] = useState('');
  const [kategorie, setKategorie] = useState('jiné');

  const odeslatFormular = (e) => {
    e.preventDefault();
    if (!nazev.trim()) return;

    funkceNaPridani(nazev, popis, kategorie);

    setNazev('');
    setPopis('');
  };

  return (
    <form onSubmit={odeslatFormular} className="muj-formular">
      <div className="vstupy">
        <input
          type="text"
          placeholder="Název úkolu..."
          value={nazev}
          onChange={(e) => setNazev(e.target.value)}
          className="input-nazev"
        />
        
        <input
          type="text"
          placeholder="Popis (volitelné)..."
          value={popis}
          onChange={(e) => setPopis(e.target.value)}
          className="input-popis"
        />
      </div>
      
      <div className="ovladani-formular">
        <select 
          value={kategorie} 
          onChange={(e) => setKategorie(e.target.value)}
        >
          <option value="škola">škola</option>
          <option value="domácnost">domácnost</option>
          <option value="práce">práce</option>
          <option value="jiné">jiné</option>
        </select>

        <button type="submit">Přidat</button>
      </div>
    </form>
  );
}

export default Formular;