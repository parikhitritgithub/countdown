'use client';

import { useState, useEffect } from 'react';

function getTodayKey(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `gate2027-mission-${year}-${month}-${day}`;
}

export default function DailyMission() {
  const [isChecked, setIsChecked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Check localStorage for today's mission
    const todayKey = getTodayKey();
    const storedValue = localStorage.getItem(todayKey);
    if (storedValue === 'true') {
      setIsChecked(true);
    }

    // Check for midnight reset every 60 seconds
    const interval = setInterval(() => {
      const currentKey = getTodayKey();
      const currentStored = localStorage.getItem(currentKey);
      if (currentStored !== 'true') {
        setIsChecked(false);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    const todayKey = getTodayKey();
    localStorage.setItem(todayKey, newValue.toString());
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-4 pt-8 border-t border-zinc-800">
      <h2 className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
        Today&apos;s Mission
      </h2>
      <p className="text-zinc-300 text-sm sm:text-base font-mono">
        Study. Practice. Revise. Repeat.
      </p>

      <label className="flex items-center gap-3 cursor-pointer group w-fit mt-1">
        <button
          type="button"
          role="checkbox"
          aria-checked={isChecked}
          onClick={handleCheckboxChange}
          className={`w-5 h-5 flex items-center justify-center border-2 rounded transition-all duration-200 ${
            isChecked
              ? 'bg-zinc-300 border-zinc-300'
              : 'border-zinc-600 group-hover:border-zinc-400'
          }`}
        >
          {isChecked && (
            <svg
              className="w-3 h-3 text-zinc-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
        <span className="text-sm text-zinc-400 select-none group-hover:text-zinc-300 transition-colors">
          I completed today&apos;s mission.
        </span>
      </label>
    </div>
  );
}
