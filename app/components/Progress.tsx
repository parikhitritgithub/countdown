'use client';

import { useState, useEffect } from 'react';
import { START_DATE, TARGET_DATE, TOTAL_DAYS } from '../lib/constants';

export default function Progress() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => {
      setNow(new Date());
    }, 60000); // update every minute

    return () => clearInterval(interval);
  }, []);

  if (!now) {
    return null; // or a loading state
  }

  // Calculate days elapsed
  const msElapsed = now.getTime() - START_DATE.getTime();
  let daysElapsed = Math.floor(msElapsed / (1000 * 60 * 60 * 24));
  daysElapsed = Math.max(0, Math.min(daysElapsed, TOTAL_DAYS));

  // Calculate days remaining
  let daysRemaining = TOTAL_DAYS - daysElapsed;
  daysRemaining = Math.max(0, daysRemaining);

  // Calculate percentage
  let percentage = (daysElapsed / TOTAL_DAYS) * 100;
  percentage = Math.max(0, Math.min(percentage, 100));

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="w-full flex flex-col gap-6">
      <h2 className="text-xs tracking-[0.2em] text-zinc-500 uppercase">Progress</h2>
      
      <div className="flex flex-col gap-2">
        <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-zinc-300 transition-all duration-1000"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-zinc-500">Day {daysElapsed} / {TOTAL_DAYS}</span>
          <span className="text-zinc-400">{percentage.toFixed(1)}%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 mt-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs tracking-[0.15em] text-zinc-500 uppercase">Today</span>
          <span className="text-2xl font-mono text-zinc-200">{dateFormatter.format(now)}</span>
        </div>
        
        <div className="flex flex-col gap-1">
          <span className="text-xs tracking-[0.15em] text-zinc-500 uppercase">Days Completed</span>
          <span className="text-2xl font-mono text-zinc-200">{daysElapsed}</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xs tracking-[0.15em] text-zinc-500 uppercase">Days Remaining</span>
          <span className="text-2xl font-mono text-zinc-200">{daysRemaining}</span>
        </div>
      </div>
    </div>
  );
}
