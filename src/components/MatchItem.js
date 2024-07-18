import React from 'react';
import '../styles/MatchItem.css';

const MatchItem = ({ homeTeam, awayTeam, utcDate, score }) => {
  return (
    <div className="match-item">
      <div className="team">
        <img src={homeTeam.crest} alt={`${homeTeam.name} logo`} className="team-logo" />
        <h2>{homeTeam.name}</h2>
      </div>
      <div className="team">
        <img src={awayTeam.crest} alt={`${awayTeam.name} logo`} className="team-logo" />
        <h2>{awayTeam.name}</h2>
      </div>
      <p>{new Date(utcDate).toLocaleString()}</p>
      <p>Score: {score.fullTime.home} - {score.fullTime.away}</p>
    </div>
  );
};

export default MatchItem;
