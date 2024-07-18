import React from 'react';

const LeagueSelector = ({ leagues, selectedLeague, onChange }) => {
  return (
    <select value={selectedLeague} onChange={(e) => onChange(e.target.value)}>
      {leagues.map((league) => (
        <option key={league.code} value={league.code}>
          {league.name}
        </option>
      ))}
    </select>
  );
};

export default LeagueSelector;
