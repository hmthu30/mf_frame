import { createContextStore } from "@/utils/zustand";
import { createStore } from "zustand/vanilla";

export type CounterState = {
  count: number;
};

export type CounterActions = {
  incrementCount: () => void;
  decrementCount: (countSeesion: number) => void;
};

export type CounterStore = CounterState & CounterActions;

const defaultCounterState: CounterState = {
  count: 0,
};

const [DemoStoreProvider, useDemoStore] = createContextStore<
  CounterStore,
  CounterState
>((props) =>
  createStore<CounterStore>()((set) => ({
    ...defaultCounterState,
    ...props,
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
    decrementCount: (countSeesion) =>
      set((state) => ({ count: state.count - countSeesion })),
  }))
);

export { useDemoStore };

export default function DemoStoreProviderWithProps({
  children,
  ...props
}: React.PropsWithChildren<CounterState>) {
  return <DemoStoreProvider {...props}>{children}</DemoStoreProvider>;
}
