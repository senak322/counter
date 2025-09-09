import { CounterItem } from "../../CounterItem/ui/CounterItem";
import { IncrementButtons } from "../../IncrementButtons/ui/IncrementButtons";

export function Counter() {
  return (
    <main>
      <h1>Count</h1>
      <CounterItem />
      <IncrementButtons />
    </main>
  );
}
