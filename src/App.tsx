import React, { useState, useEffect } from 'react';
import { planets } from './data/planets';
import { calculatePlanetAge, calculatePlanetWeight, lbsToKg } from './utils/calculations';
import PlanetNavbar from './components/PlanetNavbar';
import PlanetViewer from './components/PlanetViewer';
import PlanetInfo from './components/PlanetInfo';
import CalculatorForm from './components/CalculatorForm';
import ResultsCard from './components/ResultsCard';
import { Share2 } from 'lucide-react';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(planets[2]); // Earth
  const [earthAge, setEarthAge] = useState<number | string>(25);
  const [earthWeight, setEarthWeight] = useState<number | string>(70);
  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg');

  const parsedAge = typeof earthAge === 'number' ? earthAge : parseFloat(earthAge) || 0;
  const parsedWeight = typeof earthWeight === 'number' ? earthWeight : parseFloat(earthWeight) || 0;

  const weightInKg = unit === 'lbs' ? lbsToKg(parsedWeight) : parsedWeight;

  const resultAge = calculatePlanetAge(parsedAge, selectedPlanet.orbitalPeriod);
  const resultWeight = calculatePlanetWeight(weightInKg, selectedPlanet.gravityFactor);

  const handleShare = () => {
    const text = `On ${selectedPlanet.name} I would weigh ${resultWeight} ${unit} and be ${resultAge} years old! 🪐`;
    navigator.clipboard.writeText(text);
    alert('Result copied to clipboard!');
  };

  // Generate stars on mount
  useEffect(() => {
    const starCount = 100;
    const starsContainer = document.createElement('div');
    starsContainer.className = 'fixed inset-0 z-[-2] overflow-hidden pointer-events-none';
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      starsContainer.appendChild(star);
    }
    
    document.body.appendChild(starsContainer);
    
    return () => {
      document.body.removeChild(starsContainer);
    };
  }, []);

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden p-4 md:py-4 md:px-6 relative font-sans max-w-[1600px] mx-auto flex flex-col">
      <div className="space-bg-effects" />

      {/* Header section with Navbar and Share button */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-4 lg:shrink-0">
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-space-accent-blue to-space-accent-purple flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.5)] shrink-0">
            <div className="w-8 h-8 rounded-full border-2 border-space-dark bg-transparent" style={{ transform: 'rotate(-20deg)' }}>
              <div className="w-full h-[2px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: '120%' }} />
            </div>
          </div>
          <div>
            <h1 className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest leading-tight">Planet Age & Weight</h1>
            <h2 className="text-lg md:text-xl font-black text-white uppercase tracking-wider leading-tight">Explorer</h2>
          </div>
        </div>

        <div className="flex-1 w-full lg:w-auto overflow-hidden">
          <PlanetNavbar 
            selectedPlanet={selectedPlanet} 
            onSelectPlanet={setSelectedPlanet} 
          />
        </div>

        <button 
          onClick={handleShare}
          className="flex items-center gap-2 px-5 py-2 rounded-full border border-space-accent-purple/50 bg-space-card/80 text-white font-semibold text-sm hover:bg-space-accent-purple/20 transition-all w-full lg:w-auto justify-center"
        >
          <Share2 size={16} />
          Share Result
        </button>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 flex-1 min-h-0">
        
        {/* Left Column: About Planet */}
        <div className="lg:col-span-1 flex flex-col overflow-y-auto no-scrollbar pb-2 lg:pb-0 h-full">
          <PlanetInfo planet={selectedPlanet} />
        </div>

        {/* Center Column: 3D Planet Viewer */}
        <div className="lg:col-span-2 flex flex-col justify-center overflow-y-auto no-scrollbar pb-2 lg:pb-0 h-full">
          <PlanetViewer selectedPlanet={selectedPlanet} />
        </div>

        {/* Right Column: Calculator Form & Results Card */}
        <div className="lg:col-span-1 flex flex-col gap-3 lg:overflow-hidden pb-2 lg:pb-0 h-full min-h-0">
          <CalculatorForm 
            earthAge={earthAge}
            earthWeight={earthWeight}
            unit={unit}
            onAgeChange={setEarthAge}
            onWeightChange={setEarthWeight}
            onUnitChange={setUnit}
          />
          <ResultsCard 
            planet={selectedPlanet}
            resultAge={resultAge}
            resultWeight={resultWeight}
            unit={unit}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
