function Filtry({ aktualni, nastavFiltr, aktualniKat, nastavKat }) {
  return (
    <div className="ovladaci-panel">
      
      
      <div className="skupina-tlacitek">
        <button 
          className={aktualni === 'vsechno' ? 'aktivni-btn' : ''} 
          onClick={() => nastavFiltr('vsechno')}
        >
          Vše
        </button>
        <button 
          className={aktualni === 'nedokoncene' ? 'aktivni-btn' : ''} 
          onClick={() => nastavFiltr('nedokoncene')}
        >
          Nedokončené
        </button>
        <button 
          className={aktualni === 'dokoncene' ? 'aktivni-btn' : ''} 
          onClick={() => nastavFiltr('dokoncene')}
        >
          Dokončené
        </button>
      </div>

      <select 
        value={aktualniKat} 
        onChange={(e) => nastavKat(e.target.value)}
        className="filtr-kategorie"
      >
        <option value="vse">Všechny kategorie</option>
        <option value="škola">Škola</option>
        <option value="domácnost">Domácnost</option>
        <option value="práce">Práce</option>
        <option value="jiné">Jiné</option>
      </select>

    </div>
  );
}

export default Filtry;