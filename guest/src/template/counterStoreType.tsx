import { createContext, ReactNode } from "react";
import { createCounterStore } from "./counterStore";

export type CounterState = {
  count: number;
};

export type CounterActions = {
    decrementCount: () => void;
    incrementCount: () => void;
};

export const defaultInitState: CounterState = {
  count: 0,
};

export type CounterStore = CounterState & CounterActions;

export interface CounterStoreProviderProps {
  children: ReactNode;
  counter: number;
}

export type CounterStoreApi = ReturnType<typeof createCounterStore>;

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
  undefined
);
