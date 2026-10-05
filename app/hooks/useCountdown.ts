'use client';

import { useState, useEffect } from 'react';

export function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true });
        return true;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isComplete: false });
      return false;
    };

    const isDone = calculateTimeLeft();
    if (isDone) return;

    const intervalId = setInterval(() => {
      const isDone = calculateTimeLeft();
      if (isDone) clearInterval(intervalId);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return timeLeft;
}
