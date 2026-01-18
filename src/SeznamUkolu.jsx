import Polozka from './Polozka';

function SeznamUkolu({ data, funkceSmazat, funkcePrepnout }) {
  
  // Pokud není nic k zobrazení, vypíšu požadovanou hlášku
  if (data.length === 0) {
    return (
      <p className="prazdny-seznam">
        Nemáte naplánovaný žádný úkol
      </p>
    );
  }

  return (
    <div className="seznam">
      {data.map((jedenUkol) => (
        <Polozka 
          key={jedenUkol.id} 
          ukol={jedenUkol} 
          naSmazani={funkceSmazat} 
          naPrepnuti={funkcePrepnout} 
        />
      ))}
    </div>
  );
}

export default SeznamUkolu;