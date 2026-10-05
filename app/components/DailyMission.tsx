'use client';

import { useState, useEffect } from 'react';

export default function DailyMission() {
  const [isChecked, setIsChecked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const getTodayKey = () => {
      const today = new Date();
      return `gate2027-mission-${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    };

    // Initial check
    const todayKey = getTodayKey();
    const storedValue = localStorage.getItem(todayKey);
    if (storedValue === 'true') {
      setIsChecked(true);
    }

    // Interval to check for midnight reset
    const interval = setInterval(() => {
      const currentKey = getTodayKey();
      const currentStored = localStorage.getItem(currentKey);
      if (currentStored !== 'true') {
         // It's a new day, or somehow it was un-checked in another tab
         // We reset state if it's a new day
         // If they hadn't checked it today, we should reflect that
         setIsChecked(currentStored === 'true');
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    
    const today = new Date();
    const todayKey = `gate2027-mission-${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    
    localStorage.setItem(todayKey, newValue.toString());
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-xs tracking-[0.2em] text-zinc-500 uppercase">Today's Mission</h2>
      <p className="text-zinc-300">Study. Practice. Revise. Repeat.</p>
      
      <label className="flex items-center gap-3 cursor-pointer group w-fit mt-2">
        <div className={`w-5 h-5 flex items-center justify-center border-2 rounded transition-colors duration-200 ${
          isChecked 
            ? 'bg-zinc-300 border-zinc-300' 
            : 'border-zinc-600 group-hover:border-zinc-400'
        }`}>
          {isChecked && (
            <svg 
              className="w-3.5 h-3.5 text-zinc-900" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <span className="text-zinc-400 select-none group-hover:text-zinc-300 transition-colors">
          I completed today's mission.
        </span>
      </label>
    </div>
  );
}
