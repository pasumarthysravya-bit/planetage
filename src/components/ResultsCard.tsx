import React, { useState, useEffect } from 'react';
import { Planet } from '../data/planets';
import { Calendar, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResultsCardProps {
  planet: Planet;
  resultAge: number;
  resultWeight: number;
  unit: 'kg' | 'lbs';
}

function useCountUp(target: number, duration: number = 1000): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const fps = 60;
    const step = target / (duration / (1000 / fps));

    if (target === 0) {
      setCount(0);
      return;
    }

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(2)));
      }
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ planet, resultAge, resultWeight, unit }) => {
  const animatedAge = useCountUp(resultAge);
  const animatedWeight = useCountUp(resultWeight);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      key={planet.name}
      className="glass-card relative overflow-hidden flex-1 min-h-0 flex flex-col"
      style={{ boxShadow: `0 0 30px ${planet.color}15` }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-15 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top, ${planet.color}55, transparent 65%)` }}
      />

      <div className="relative z-10 p-4 flex flex-col flex-1 min-h-0">
        <div className="text-center mb-4 shrink-0">
          <p className="text-xs font-medium tracking-[0.15em] text-gray-400 uppercase mb-2">
            If you lived on
          </p>
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
            <div
              className="w-3 h-3 rounded-full shrink-0"
              style={{ background: planet.color, boxShadow: `0 0 8px ${planet.color}` }}
            />
            <span className="text-base font-bold" style={{ color: planet.color }}>
              {planet.name}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
          <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4 flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calendar size={18} className="text-sky-400 shrink-0" />
              <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Age</p>
            </div>
            <p className="text-4xl font-bold text-white tabular-nums leading-none">
              {animatedAge}
            </p>
            <p className="text-sm text-gray-400 mt-2">years old</p>
          </div>

          <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4 flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Scale size={18} className="text-violet-400 shrink-0" />
              <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Weight</p>
            </div>
            <p className="text-4xl font-bold text-white tabular-nums leading-none">
              {animatedWeight}
            </p>
            <p className="text-sm text-gray-400 mt-2">{unit}</p>
          </div>
        </div>

        <p className="text-center text-[11px] text-gray-500 mt-4 shrink-0">
          Based on {planet.name}&apos;s orbit &amp; gravity
        </p>
      </div>
    </motion.div>
  );
};

export default ResultsCard;
