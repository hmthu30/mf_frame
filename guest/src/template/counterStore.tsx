import { useContext, useRef } from "react";
import { useStore } from "zustand";
import { createStore } from "zustand/vanilla";
import {
  CounterState,
  CounterStore,
  CounterStoreApi,
  CounterStoreContext,
  CounterStoreProviderProps,
  defaultInitState,
} from "./counterStoreType";

const createCounterStore = (initState: CounterState = defaultInitState) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
  }));
};

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
