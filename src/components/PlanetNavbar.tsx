import React from 'react';
import { Planet, planets } from '../data/planets';
import { motion } from 'framer-motion';

interface PlanetNavbarProps {
  selectedPlanet: Planet;
  onSelectPlanet: (planet: Planet) => void;
}

const PlanetNavbar: React.FC<PlanetNavbarProps> = ({ selectedPlanet, onSelectPlanet }) => {
  return (
    <div className="w-full overflow-x-auto pb-4 no-scrollbar">
      <div className="flex items-center justify-start lg:justify-center gap-4 min-w-max px-4">
        {planets.map((planet) => {
          const isSelected = planet.name === selectedPlanet.name;
          return (
            <button
              key={planet.name}
              onClick={() => onSelectPlanet(planet)}
              aria-label={`Select ${planet.name}`}
              aria-selected={isSelected}
              className={`flex flex-col items-center p-3 rounded-xl transition-all duration-300 relative group
                ${isSelected ? 'bg-space-card/80 border border-space-accent-purple shadow-[0_0_15px_rgba(139,92,246,0.3)]' : 'hover:bg-space-card/40 border border-transparent'}
              `}
            >
              <div 
                className="w-10 h-10 rounded-full mb-2 shadow-[inset_-6px_-6px_10px_rgba(0,0,0,0.7),inset_2px_2px_5px_rgba(255,255,255,0.3)] transition-transform group-hover:scale-110 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${planet.textureUrl})`,
                  backgroundSize: '200% auto' // Zoom in slightly to avoid equator distortion
                }}
              />
              <span className={`text-sm font-medium ${isSelected ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                {planet.name}
              </span>
              {isSelected && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-space-accent-purple rounded-full shadow-[0_0_8px_rgba(139,92,246,0.8)]"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PlanetNavbar;
