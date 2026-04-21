import { useEffect, useState } from 'react';

const COLORS = ['#83d4db', '#54c7ab', '#8ae900', '#a7d41e'];

export function useColorCycle(interval: number = 3000, offset: number = 0) {
  const [colorIndex, setColorIndex] = useState(offset % COLORS.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % COLORS.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return COLORS[colorIndex];
}

export function useMultipleColorCycle(count: number, interval: number = 3000) {
  const [indices, setIndices] = useState<number[]>(
    Array.from({ length: count }, (_, i) => i % COLORS.length)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIndices((prev) => prev.map((idx) => (idx + 1) % COLORS.length));
    }, interval);

    return () => clearInterval(timer);
  }, [count, interval]);

  return indices.map((idx) => COLORS[idx]);
}

export { COLORS };
