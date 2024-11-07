import { useState, useEffect } from "react";

const useNumberTicker = (
  startNumber: number = 0,
  endNumber: number,
  duration: number = 2000
) => {
  const [number, setNumber] = useState(startNumber);

  useEffect(() => {
    let start = startNumber;
    const startTime = performance.now();

    const frame = () => {
      const timeElapsed = performance.now() - startTime;
      const progress = timeElapsed / duration;
      const currentNumber = Math.floor(
        startNumber + progress * (endNumber - startNumber)
      );

      if (start !== currentNumber) {
        setNumber(currentNumber);
        start = currentNumber;
      }

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setNumber(endNumber);
      }
    };

    requestAnimationFrame(frame);

    return () => {
      setNumber(startNumber);
    };
  }, [startNumber, endNumber, duration]);

  return number;
};

export default useNumberTicker;
