import './List.css';
import Fighter from '../Fighter/Fighter.js';
import data from '../../smash-bros.json';

import { useState } from 'react';

function List() {
  const [query, setQuery] = useState('');

  let fighters = data.filter(fighter => {
    const inName = fighter.name.toLowerCase().includes(query.toLowerCase());
    const inSeries = fighter.series.toLowerCase().includes(query.toLowerCase());
    return (inName || inSeries);
  });

  fighters = fighters.map(fighter => {
    return (
        <Fighter
          className="Fighter"
          key={fighter.id}
          id={fighter.id}
          name={fighter.name}
          image={fighter.image}
          series={fighter.series}
          icon={fighter.icon}
        />
    );
  });

  return (
    <div className="List">
      <div className="form">
        <form>
          <input
            type="text"
            value={query}
            placeholder="Search by name or series"
            onChange={e => setQuery(e.target.value)}
          />
        </form>
      </div>
      <div className="grid">
        {fighters}
      </div>
    </div>
  );
}

export default List;
