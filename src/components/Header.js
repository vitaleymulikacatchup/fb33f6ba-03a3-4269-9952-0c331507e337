import React, { useState } from 'react';
import { Menu, X, ChevronDown, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Leaderboards', hasDropdown: true },
    { name: 'Decks', hasDropdown: true },
    { name: 'Meta', hasDropdown: true },
    { name: 'Matchups (WIP)', hasDropdown: false },
    { name: 'Streamer Decks', hasDropdown: false },
    { name: 'Esports', hasDropdown: false },
    { name: 'Utilities', hasDropdown: true },
    { name: 'Misc', hasDropdown: true }
  ];

  return (
    <header className="bg-hs-dark border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-white font-bold text-lg mr-8">HSGuru</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button className="flex items-center text-gray-300 hover:text-white text-sm py-2">
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="ml-1 w-3 h-3" />}
                  </button>
                </div>
              ))}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block">
              <input 
                type="text" 
                placeholder="Search..."
                className="bg-hs-darker text-white text-sm px-3 py-1 rounded border border-gray-600 focus:border-hs-blue focus:outline-none w-40"
              />
            </div>
            
            {/* User menu */}
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-gray-400" />
              <span className="text-gray-300 text-sm hidden md:inline">No ads & more</span>
              <span className="text-red-500 font-bold text-sm">PATREON</span>
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-700">
            {navItems.map((item, index) => (
              <div key={index} className="py-2">
                <button className="flex items-center text-gray-300 hover:text-white text-sm w-full text-left">
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 w-3 h-3" />}
                </button>
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;