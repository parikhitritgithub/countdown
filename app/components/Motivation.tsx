'use client';

import { useState, useEffect } from 'react';
import { MOTIVATIONAL_QUOTES } from '../lib/constants';

export default function Motivation() {
  const [quoteIndex, setQuoteIndex] = useState<number | null>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Pick initial quote
    const initialIndex = Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length);
    setQuoteIndex(initialIndex);
    
    // Fade in initially
    const initialFadeTimer = setTimeout(() => {
      setOpacity(1);
    }, 100);

    const interval = setInterval(() => {
      // Fade out
      setOpacity(0);
      
      // Wait for fade out, then change quote and fade in
      setTimeout(() => {
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length);
        } while (MOTIVATIONAL_QUOTES.length > 1 && nextIndex === quoteIndex); // prevent same quote twice in a row
        
        setQuoteIndex(nextIndex);
        setOpacity(1);
      }, 500); // 500ms for fade out transition
      
    }, 30000); // 30s interval

    return () => {
      clearTimeout(initialFadeTimer);
      clearInterval(interval);
    };
  }, [quoteIndex]);

  if (quoteIndex === null) {
    return null;
  }

  return (
    <div className="w-full py-8 flex justify-center items-center">
      <p 
        className="text-zinc-500 italic text-sm md:text-base text-center max-w-2xl transition-opacity duration-500 ease-in-out"
        style={{ opacity }}
      >
        "{MOTIVATIONAL_QUOTES[quoteIndex]}"
      </p>
    </div>
  );
}
