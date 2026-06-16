import React from 'react';
import { Planet, planets } from '../data/planets';
import { calculatePlanetAge, calculatePlanetWeight } from '../utils/calculations';
import { motion } from 'framer-motion';

interface PlanetGridProps {
  earthAge: number;
  earthWeight: number; // in kg
  unit: 'kg' | 'lbs';
  selectedPlanet: Planet;
}

const PlanetGrid: React.FC<PlanetGridProps> = ({ earthAge, earthWeight, unit, selectedPlanet }) => {
  return (
    <div className="glass-card p-4 mt-2">
      <h2 className="text-xs font-bold tracking-widest text-center text-gray-300 uppercase mb-4">
        Age & Weight Across the Solar System
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {planets.map((planet) => {
          const age = calculatePlanetAge(earthAge, planet.orbitalPeriod);
          const weight = calculatePlanetWeight(earthWeight, planet.gravityFactor);
          const isSelected = planet.name === selectedPlanet.name;

          return (
            <motion.div
              key={planet.name}
              whileHover={{ y: -4, boxShadow: `0 0 15px ${planet.color}40` }}
              transition={{ duration: 0.2 }}
              className={`bg-space-card/80 p-3 rounded-xl border flex flex-col items-center text-center ${
                isSelected ? 'border-space-accent-purple shadow-[0_0_10px_rgba(139,92,246,0.3)]' : 'border-white/5'
              }`}
            >
              <div 
                className="w-10 h-10 rounded-full mb-2 shadow-inner"
                style={{ background: `radial-gradient(circle at 30% 30%, ${planet.color}, #000)` }}
              />
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-white mb-2">
                {planet.name}
              </h3>
              
              <div className="w-full space-y-1.5 text-left">
                <div>
                  <p className="text-[9px] text-gray-400 uppercase leading-none mb-0.5">Age</p>
                  <p className="text-xs font-bold text-white leading-none">{age}</p>
                  <p className="text-[9px] text-gray-500 leading-none mt-0.5">years</p>
                </div>
                
                <div>
                  <p className="text-[9px] text-gray-400 uppercase leading-none mb-0.5">Weight</p>
                  <p className="text-xs font-bold text-white leading-none">
                    {weight} <span className="text-[9px] text-gray-500 font-normal">{unit}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PlanetGrid;
