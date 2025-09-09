
import { incrementButtons } from "../../../shared/config/buttonsConfig";
import { useDecreseTimer } from "../../../shared/hooks/useDecreseTimer";
import { IncrementButton } from "../../IncrementButton/ui/IncrementButton";
import styles from "./IncrementButtons.module.scss"

export function IncrementButtons() {
  const startTimer = useDecreseTimer()

  return (
    <article className={styles.container}>
      {incrementButtons.map((btn) => (
        <IncrementButton btn={btn} key={btn} startTimer={startTimer}/>
      ))}
    </article>
  );
}
