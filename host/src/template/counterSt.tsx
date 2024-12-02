import { createContextMutation } from "@/utils/MutationProvider";
import { createContextStore } from "@/utils/zustand";
import { useMutation } from "react-query";
import { createStore } from "zustand/vanilla";

export type CounterState = {
  count: number;
};

export type CounterActions = {
  incrementCount: () => void;
  decrementCount: () => void;
};

export type CounterStore = CounterState & CounterActions;

const defaultCounterState: CounterState = {
  count: 0,
};

const [CounterStoreProvider, useCounterStore] = createContextStore<
  CounterStore,
  CounterState
>((props) =>
  createStore<CounterStore>()((set) => ({
    ...defaultCounterState,
    ...props,
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
  }))
);

export { useCounterStore };

const myMutationFunction = async (data: { title: string; body: string }) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create post");
  }

  return response.json();
};

const [MyMutationProvider, useMyMutation] = createContextMutation(() => {
  return useMutation(myMutationFunction);
});

export { MyMutationProvider, useMyMutation };

export default function CounterStoreProviderWithProps({
  children,
  ...props
}: React.PropsWithChildren<CounterState>) {
  return <CounterStoreProvider {...props}>{children}</CounterStoreProvider>;
}
