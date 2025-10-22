import React from 'react';
import DeckColumn from './DeckColumn';

const DeckGrid = () => {
  const deckColumns = [
    {
      title: 'Menagerie Priest',
      color: 'bg-gray-600',
      decks: [
        { rank: 1, name: 'Elemental Priest', stats: '64.2%', winRate: '64.2%' },
        { rank: 2, name: 'Cariel Paladin', stats: '62.1%', winRate: '62.1%' },
        { rank: 3, name: 'Elemental Mage', stats: '61.8%', winRate: '61.8%' },
        { rank: 4, name: 'Shadow Priest', stats: '61.5%', winRate: '61.5%' },
        { rank: 5, name: 'Questline Priest', stats: '60.9%', winRate: '60.9%' },
        { rank: 6, name: 'Control Priest', stats: '60.2%', winRate: '60.2%' },
        { rank: 7, name: 'Big Priest', stats: '59.8%', winRate: '59.8%' },
        { rank: 8, name: 'Reno Priest', stats: '59.1%', winRate: '59.1%' }
      ],
      poweredBy: 'Powered by: Menagerie_HS',
      firstStreamed: 'First Streamed: 4 minutes ago'
    },
    {
      title: 'Elemental Shaman',
      color: 'bg-hs-blue',
      decks: [
        { rank: 1, name: 'Elemental Shaman', stats: '63.4%', winRate: '63.4%' },
        { rank: 2, name: 'Aggro Shaman', stats: '62.7%', winRate: '62.7%' },
        { rank: 3, name: 'Totem Shaman', stats: '61.9%', winRate: '61.9%' },
        { rank: 4, name: 'Murloc Shaman', stats: '61.2%', winRate: '61.2%' },
        { rank: 5, name: 'Control Shaman', stats: '60.8%', winRate: '60.8%' },
        { rank: 6, name: 'Evolve Shaman', stats: '60.1%', winRate: '60.1%' },
        { rank: 7, name: 'Overload Shaman', stats: '59.7%', winRate: '59.7%' },
        { rank: 8, name: 'Spell Shaman', stats: '59.3%', winRate: '59.3%' }
      ],
      poweredBy: 'Powered by: 暴雪爸爸-7',
      firstStreamed: 'First Streamed: 暴雪爸爸-7'
    },
    {
      title: 'Elemental Mage',
      color: 'bg-hs-light-blue',
      decks: [
        { rank: 1, name: 'Elemental Mage', stats: '65.1%', winRate: '65.1%' },
        { rank: 2, name: 'Spell Mage', stats: '63.8%', winRate: '63.8%' },
        { rank: 3, name: 'Secret Mage', stats: '62.4%', winRate: '62.4%' },
        { rank: 4, name: 'Freeze Mage', stats: '61.7%', winRate: '61.7%' },
        { rank: 5, name: 'Big Spell Mage', stats: '61.0%', winRate: '61.0%' },
        { rank: 6, name: 'Tempo Mage', stats: '60.3%', winRate: '60.3%' },
        { rank: 7, name: 'Control Mage', stats: '59.9%', winRate: '59.9%' },
        { rank: 8, name: 'Reno Mage', stats: '59.2%', winRate: '59.2%' }
      ],
      poweredBy: 'Powered by: 暴雪爸爸-7',
      firstStreamed: 'First Streamed: 暴雪爸爸-7'
    },
    {
      title: 'Across the Timelines Community Events',
      color: 'bg-hs-orange',
      decks: [
        { rank: '', name: 'Across the Timelines', stats: '23.4.2 Patch Notes', winRate: '' },
        { rank: '', name: 'Warcraft Heroes Past and Future Unite in Across the Timelines Hearthstone Mini-Set', stats: '23.4.2 Patch Notes', winRate: '' },
        { rank: '', name: 'The Hearthstone International Championship is Here!', stats: '23.4.2 Patch Notes', winRate: '' },
        { rank: '', name: 'Crack Open Ancient Power with the New 23.4 Patch Notes', stats: '', winRate: '' }
      ],
      poweredBy: '',
      firstStreamed: ''
    },
    {
      title: 'Paladin Tier',
      color: 'bg-hs-yellow',
      decks: [
        { rank: 1, name: 'Cariel Paladin', stats: '64.8%', winRate: '64.8%' },
        { rank: 2, name: 'Secret Paladin', stats: '63.2%', winRate: '63.2%' },
        { rank: 3, name: 'Murloc Paladin', stats: '62.5%', winRate: '62.5%' },
        { rank: 4, name: 'Aggro Paladin', stats: '61.9%', winRate: '61.9%' },
        { rank: 5, name: 'Control Paladin', stats: '61.1%', winRate: '61.1%' },
        { rank: 6, name: 'Handbuff Paladin', stats: '60.4%', winRate: '60.4%' },
        { rank: 7, name: 'Libram Paladin', stats: '59.8%', winRate: '59.8%' },
        { rank: 8, name: 'Pure Paladin', stats: '59.1%', winRate: '59.1%' }
      ],
      poweredBy: 'Powered by: 暴雪爸爸',
      firstStreamed: 'First Streamed: 暴雪爸爸'
    },
    {
      title: 'Elemental Mage',
      color: 'bg-hs-teal',
      decks: [
        { rank: 1, name: 'Elemental Mage', stats: '66.2%', winRate: '66.2%' },
        { rank: 2, name: 'Spell Mage', stats: '64.7%', winRate: '64.7%' },
        { rank: 3, name: 'Secret Mage', stats: '63.1%', winRate: '63.1%' },
        { rank: 4, name: 'Freeze Mage', stats: '62.4%', winRate: '62.4%' },
        { rank: 5, name: 'Big Spell Mage', stats: '61.8%', winRate: '61.8%' },
        { rank: 6, name: 'Tempo Mage', stats: '61.0%', winRate: '61.0%' },
        { rank: 7, name: 'Control Mage', stats: '60.3%', winRate: '60.3%' },
        { rank: 8, name: 'Reno Mage', stats: '59.7%', winRate: '59.7%' }
      ],
      poweredBy: 'Powered by: 暴雪爸爸-7',
      firstStreamed: 'First Streamed: 暴雪爸爸-7'
    }
  ];

  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-4 pb-6" style={{ width: 'max-content' }}>
        {deckColumns.map((column, index) => (
          <DeckColumn key={index} {...column} />
        ))}
      </div>
    </div>
  );
};

export default DeckGrid;