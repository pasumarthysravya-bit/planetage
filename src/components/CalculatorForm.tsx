import React from 'react';
import { User, Weight } from 'lucide-react';

interface CalculatorFormProps {
  earthAge: number | string;
  earthWeight: number | string;
  unit: 'kg' | 'lbs';
  onAgeChange: (age: number | string) => void;
  onWeightChange: (weight: number | string) => void;
  onUnitChange: (unit: 'kg' | 'lbs') => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({
  earthAge,
  earthWeight,
  unit,
  onAgeChange,
  onWeightChange,
  onUnitChange,
}) => {
  return (
    <div className="glass-card p-4 shrink-0">
      <h2 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">Enter Your Info</h2>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label htmlFor="earthAge" className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
            <User size={12} className="text-space-accent-blue shrink-0" />
            Age
          </label>
          <input
            type="number"
            id="earthAge"
            min="1"
            max="120"
            value={earthAge}
            onChange={(e) => onAgeChange(e.target.value)}
            className="w-full bg-space-card/80 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-space-accent-blue focus:ring-1 focus:ring-space-accent-blue transition-colors"
            placeholder="25"
          />
        </div>

        <div>
          <label htmlFor="earthWeight" className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
            <Weight size={12} className="text-space-accent-blue shrink-0" />
            Weight
          </label>
          <input
            type="number"
            id="earthWeight"
            min="1"
            value={earthWeight}
            onChange={(e) => onWeightChange(e.target.value)}
            className="w-full bg-space-card/80 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-space-accent-blue focus:ring-1 focus:ring-space-accent-blue transition-colors"
            placeholder="70"
          />
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onUnitChange('kg')}
          className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
            unit === 'kg'
              ? 'bg-space-accent-purple/20 border-space-accent-purple text-white'
              : 'bg-space-card/50 border-transparent text-gray-400 hover:text-gray-200'
          }`}
        >
          kg
        </button>
        <button
          onClick={() => onUnitChange('lbs')}
          className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
            unit === 'lbs'
              ? 'bg-space-accent-purple/20 border-space-accent-purple text-white'
              : 'bg-space-card/50 border-transparent text-gray-400 hover:text-gray-200'
          }`}
        >
          lbs
        </button>
      </div>
    </div>
  );
};

export default CalculatorForm;
