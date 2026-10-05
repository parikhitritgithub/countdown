'use client';

import { useCountdown } from '../hooks/useCountdown';
import { TARGET_DATE } from '../lib/constants';

export default function Countdown() {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(TARGET_DATE);

  if (isComplete) {
    return (
      <div className="flex flex-col items-center justify-center mt-16 sm:mt-24 space-y-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-wider">
          THE DAY HAS ARRIVED.
        </h2>
        <p className="text-xl text-zinc-400 font-mono">
          GATE 2027 — Today is the day.
        </p>
      </div>
    );
  }

  const pad = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center justify-center mt-16 sm:mt-24 space-y-12">
      <div className="flex flex-col items-center">
        <div 
          className="text-7xl sm:text-8xl lg:text-9xl font-mono tabular-nums text-white transition-opacity duration-300 font-bold"
          style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}
        >
          {days}
        </div>
        <div className="text-zinc-500 text-sm sm:text-base tracking-[0.3em] font-mono mt-4 uppercase">
          Days
        </div>
      </div>

      <div className="flex items-center space-x-4 sm:space-x-8 text-3xl sm:text-5xl lg:text-6xl font-mono tabular-nums transition-opacity duration-300">
        <div className="flex flex-col items-center">
          <div className="text-zinc-200">{pad(hours)}</div>
          <div className="text-zinc-500 text-xs sm:text-sm tracking-widest uppercase mt-2">Hours</div>
        </div>
        <div className="text-zinc-600 mb-6">:</div>
        <div className="flex flex-col items-center">
          <div className="text-zinc-200">{pad(minutes)}</div>
          <div className="text-zinc-500 text-xs sm:text-sm tracking-widest uppercase mt-2">Mins</div>
        </div>
        <div className="text-zinc-600 mb-6">:</div>
        <div className="flex flex-col items-center">
          <div className="text-zinc-200">{pad(seconds)}</div>
          <div className="text-zinc-500 text-xs sm:text-sm tracking-widest uppercase mt-2">Secs</div>
        </div>
      </div>
    </div>
  );
}
