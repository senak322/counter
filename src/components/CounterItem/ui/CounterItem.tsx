import { useCounterStore } from "../../../shared/store/counterStore";
import styles from "./CounterItem.module.scss"

export function CounterItem() {
  const count  = useCounterStore((s) => s.count);

  return <p className={styles.count}>{count}</p>;
}
