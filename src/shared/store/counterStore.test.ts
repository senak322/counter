import { useCounterStore } from "./counterStore";
import { describe, it, expect, beforeEach } from "vitest";

describe("counterStore", () => {
  beforeEach(() => {
    useCounterStore.setState({ count: 0 });
  });

  it("increment value", () => {
    useCounterStore.getState().incrementCount(5);
    expect(useCounterStore.getState().count).toBe(5);
  });

  it("decrement value", () => {
    useCounterStore.setState({ count: 10 });
    useCounterStore.getState().decrementCount(3);
    expect(useCounterStore.getState().count).toBe(7);
  });
});
