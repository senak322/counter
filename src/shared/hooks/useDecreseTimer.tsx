import { useEffect, useRef } from "react";
import { useCounterStore } from "../store/counterStore";
import { useShallow } from "zustand/shallow";
import {
  DECREASING_INTERVAL,
  GLOBAL_DECREASING_TIME,
} from "../config/timerConfig";

export const useDecreseTimer = () => {
  const currentTimerRef = useRef<number | null>(null);
  const currentIntervalRef = useRef<number | null>(null);

  const { count, decrementCount } = useCounterStore(
    useShallow((s) => ({
      count: s.count,
      decrementCount: s.decrementCount,
    }))
  );

  const startTimer = () => {
    if (currentTimerRef.current) {
      stopTimer()
    }
    currentTimerRef.current = setTimeout(() => {
      if (!currentIntervalRef.current) {
        currentIntervalRef.current = setInterval(() => {
          decrementCount(1);
          
        }, DECREASING_INTERVAL);
      }
    }, GLOBAL_DECREASING_TIME);
  };

  const stopTimer = () => {
    if (currentTimerRef.current) {
      clearTimeout(currentTimerRef.current);
      currentTimerRef.current = null;
    }
    if (currentIntervalRef.current) {
      clearInterval(currentIntervalRef.current);
      currentIntervalRef.current = null;
    }
  };

  useEffect(() => {
    if (count === 0) {
      stopTimer();
    }
    return () => stopTimer();
  }, [count]);

  return startTimer;
};
