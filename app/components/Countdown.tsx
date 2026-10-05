'use client';

import { useCountdown } from '../hooks/useCountdown';
import { TARGET_DATE } from '../lib/constants';

export default function Countdown() {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(TARGET_DATE);

  if (isComplete) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-wider animate-subtle-pulse">
          THE DAY HAS ARRIVED.
        </h2>
        <p className="text-lg sm:text-xl text-zinc-400 font-mono tracking-wide">
          GATE 2027 — Today is the day.
        </p>
      </div>
    );
  }

  const pad = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      {/* Days */}
      <div className="flex flex-col items-center">
        <div
          className="text-7xl sm:text-8xl lg:text-9xl font-mono tabular-nums text-white font-bold text-glow"
        >
          {days}
        </div>
        <div className="text-zinc-500 text-sm sm:text-base tracking-[0.3em] font-mono mt-3 uppercase">
          Days
        </div>
      </div>

      {/* Hours : Minutes : Seconds */}
      <div className="flex items-baseline gap-3 sm:gap-6 text-3xl sm:text-5xl lg:text-6xl font-mono tabular-nums">
        <div className="flex flex-col items-center">
          <div className="text-zinc-200">{pad(hours)}</div>
          <div className="text-zinc-500 text-[10px] sm:text-xs tracking-[0.2em] uppercase mt-2">Hours</div>
        </div>
        <div className="text-zinc-600 self-start">:</div>
        <div className="flex flex-col items-center">
          <div className="text-zinc-200">{pad(minutes)}</div>
          <div className="text-zinc-500 text-[10px] sm:text-xs tracking-[0.2em] uppercase mt-2">Mins</div>
        </div>
        <div className="text-zinc-600 self-start">:</div>
        <div className="flex flex-col items-center">
          <div className="text-zinc-200">{pad(seconds)}</div>
          <div className="text-zinc-500 text-[10px] sm:text-xs tracking-[0.2em] uppercase mt-2">Secs</div>
        </div>
      </div>
    </div>
  );
}
