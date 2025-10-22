import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-hs-dark border-t border-gray-700 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Donate Button */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded text-sm">
            Donate
          </button>
          
          {/* Discord */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">D</span>
            </div>
            <span className="text-indigo-400 font-bold text-sm">Discord</span>
          </div>
          
          {/* Twitch */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">T</span>
            </div>
            <span className="text-purple-400 font-bold text-sm">twitch</span>
          </div>
          
          {/* Patreon */}
          <div className="flex items-center space-x-2">
            <span className="text-red-500 font-bold text-sm">PATREON</span>
          </div>
          
          {/* Follow */}
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm flex items-center space-x-1">
            <span>✕</span>
            <span>Follow</span>
          </button>
        </div>
        
        {/* Privacy Policy */}
        <div className="text-center mt-4">
          <a href="#" className="text-teal-400 hover:text-teal-300 text-sm">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;