import React, { useState, useEffect } from 'react';
import { Planet } from '../data/planets';
import { Info, Calendar, Clock, Star } from 'lucide-react';

interface PlanetInfoProps {
  planet: Planet;
}

const PlanetInfo: React.FC<PlanetInfoProps> = ({ planet }) => {
  const [randomFact, setRandomFact] = useState<string>('');

  useEffect(() => {
    if (planet.facts && planet.facts.length > 0) {
      const fact = planet.facts[Math.floor(Math.random() * planet.facts.length)];
      setRandomFact(fact);
    }
  }, [planet]);

  return (
    <div className="glass-card p-6 flex flex-col h-full">
      <div className="mb-6">
        <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">About</h2>
        <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 uppercase" style={{ color: planet.color }}>
          {planet.name}
        </h1>
      </div>

      <div className="space-y-4 mb-6 flex-1">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-space-card/80 text-space-accent-purple">
            <Info size={20} />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Gravity</p>
            <p className="text-sm text-gray-200">{planet.gravity} m/s²</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-space-card/80 text-space-accent-purple">
            <Calendar size={20} />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Year Length</p>
            <p className="text-sm text-gray-200">{planet.orbitalPeriod} Earth Years</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-space-card/80 text-space-accent-purple">
            <Clock size={20} />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Day Length</p>
            <p className="text-sm text-gray-200">{planet.dayLength}</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2">Description</h3>
        <p className="text-sm text-gray-300 leading-relaxed">{planet.description}</p>
      </div>

      {randomFact && (
        <div className="mt-auto bg-space-card/40 rounded-xl p-4 border border-white/5 flex gap-3">
          <Star className="text-space-accent-purple shrink-0" size={20} />
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-1 text-gray-200">Fun Fact</h4>
            <p className="text-xs text-gray-300 italic">{randomFact}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanetInfo;
