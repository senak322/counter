import { create } from "zustand";

type CounterStoreType = {
    count: number;
    incrementCount: (value: number) => void;
    decrementCount: (value: number) => void;
}

export const useCounterStore = create<CounterStoreType>((set, get) => ({
    count: 0,
    incrementCount: (value) => set({count: get().count += value}),
    decrementCount: (value) => set({count: get().count -= value}),
}))