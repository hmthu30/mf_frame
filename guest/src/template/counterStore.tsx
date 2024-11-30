import { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";
import { createStore } from "zustand/vanilla";

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

const createCounterStore = (initState: CounterState = defaultInitState) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
  }));
};

export interface CounterStoreProviderProps {
  children: ReactNode;
  counter: number;
}

export type CounterStoreApi = ReturnType<typeof createCounterStore>;

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
  undefined
);

const CounterStoreProvider = <T extends object>({
  children,
  counter,
}: CounterStoreProviderProps & T) => {
  const storeRef = useRef<CounterStoreApi>();

  if (!storeRef.current) {
    storeRef.current = createCounterStore({
      count: counter,
    });
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
};

const useCounterStore = <T,>(selector: (store: CounterStore) => T): T => {
  const counterStoreContext = useContext(CounterStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
};

export { createCounterStore, CounterStoreProvider, useCounterStore };
