import React from 'react';

const DeckColumn = ({ title, color, decks, poweredBy, firstStreamed }) => {
  return (
    <div className="deck-column">
      <div className={`deck-header ${color}`}>
        {title}
      </div>
      
      <div className="space-y-1">
        {decks.map((deck, index) => (
          <div key={index} className="deck-item">
            {deck.rank && (
              <span className="deck-rank">{deck.rank}</span>
            )}
            <span className="deck-name">{deck.name}</span>
            {deck.stats && (
              <span className="deck-stats">{deck.stats}</span>
            )}
            <div className="deck-image bg-gray-600"></div>
          </div>
        ))}
      </div>
      
      {poweredBy && (
        <div className="powered-by">
          {poweredBy}
        </div>
      )}
      
      {firstStreamed && (
        <div className="first-streamed">
          {firstStreamed}
        </div>
      )}
    </div>
  );
};

export default DeckColumn;