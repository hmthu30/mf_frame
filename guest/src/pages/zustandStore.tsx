// import { createContextStore } from "@/utils/remoteComponents";
// import { createStore } from "zustand/vanilla";

// export type CounterState = {
//   count: number;
// };

// export type CounterActions = {
//   incrementCount: () => void;
//   decrementCount: () => void;
// };

// export type CounterStore = CounterState & CounterActions;

// const defaultCounterState: CounterState = {
//   count: 0,
// };

// const [CounterStoreProvider, useCounterStore] = createContextStore<
//   CounterStore,
//   CounterState
// >((props) =>
//   createStore<CounterStore>()((set) => ({
//     ...defaultCounterState,
//     ...props,
//     incrementCount: () => set((state) => ({ count: state.count + 1 })),
//     decrementCount: () => set((state) => ({ count: state.count - 1 })),
//   }))
// );

// export { useCounterStore };

// export default function RemoteCounterStoreProviderWithProps({
//   children,
//   ...props
// }: React.PropsWithChildren<CounterState>) {
//   return <CounterStoreProvider {...props}>{children}</CounterStoreProvider>;
// }
import React from 'react'

const zustandStore = () => {
  return (
    <div>zustandStore</div>
  )
}

export default zustandStore
