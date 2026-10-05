'use client';

import { useState, useEffect, useCallback } from 'react';
import { MOTIVATIONAL_QUOTES } from '../lib/constants';

export default function Motivation() {
  const [quoteIndex, setQuoteIndex] = useState<number | null>(null);
  const [opacity, setOpacity] = useState(0);

  const getRandomIndex = useCallback((excludeIndex?: number | null) => {
    if (MOTIVATIONAL_QUOTES.length <= 1) return 0;
    let nextIndex: number;
    do {
      nextIndex = Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length);
    } while (nextIndex === excludeIndex);
    return nextIndex;
  }, []);

  useEffect(() => {
    // Pick initial quote
    const initialIndex = getRandomIndex();
    setQuoteIndex(initialIndex);

    // Fade in initially
    const initialFadeTimer = setTimeout(() => {
      setOpacity(1);
    }, 100);

    return () => clearTimeout(initialFadeTimer);
  }, [getRandomIndex]);

  useEffect(() => {
    if (quoteIndex === null) return;

    const interval = setInterval(() => {
      // Fade out
      setOpacity(0);

      // Wait for fade out, then change quote and fade in
      setTimeout(() => {
        setQuoteIndex((prev) => getRandomIndex(prev));
        setOpacity(1);
      }, 500);
    }, 30000);

    return () => clearInterval(interval);
  }, [quoteIndex, getRandomIndex]);

  if (quoteIndex === null) {
    return null;
  }

  return (
    <div className="w-full py-6 flex justify-center items-center">
      <p
        className="text-zinc-500 italic text-sm md:text-base text-center max-w-lg transition-opacity duration-500 ease-in-out"
        style={{ opacity }}
      >
        &ldquo;{MOTIVATIONAL_QUOTES[quoteIndex]}&rdquo;
      </p>
    </div>
  );
}
