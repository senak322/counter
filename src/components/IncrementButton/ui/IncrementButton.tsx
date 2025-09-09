import { useEffect, useState } from "react";
import { Button } from "../../Button/ui/Button";
import { useCounterStore } from "../../../shared/store/counterStore";
import { useShallow } from "zustand/shallow";
import { getDisableTime } from "../../../shared/lib/getDisableTime";


interface IncrementButtonProps {
  btn: number;
  startTimer: () => void;
}

export function IncrementButton({ btn, startTimer }: IncrementButtonProps) {
  const [isDisabled, setIsDisabled] = useState(false);

  const { incrementCount } = useCounterStore(
    useShallow((s) => ({
      incrementCount: s.incrementCount,
    }))
  );

  const disabledTime = getDisableTime(btn);

  const handleIncrement = () => {
    if(isDisabled) return null
    startTimer()
    setIsDisabled(true);
    incrementCount(btn);
  };
  
  useEffect(() => {

    if (!isDisabled) return;

    const timer = setTimeout(() => {
      setIsDisabled(false);
    }, disabledTime);

    return () => clearTimeout(timer);
  }, [isDisabled, disabledTime]);

  return <Button title={`+${btn}`} handleClick={handleIncrement} isDisabled={isDisabled} />;
}
