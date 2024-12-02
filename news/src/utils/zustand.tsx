import { createContext, PropsWithChildren, useContext, useRef } from "react";
import { StoreApi, useStore } from "zustand";

export function createContextStore<TStore, TProps>(
  createStoreFn: (props: TProps) => StoreApi<TStore>
) {
  const StoreContext = createContext<StoreApi<TStore> | undefined>(undefined);

  function Provider({
    children,
    ...props
  }: PropsWithChildren<TProps & Record<string, unknown>>) {
    const storeRef = useRef<StoreApi<TStore>>();
    if (!storeRef.current) {
      storeRef.current = createStoreFn(props as TProps);
    }

    return (
      <StoreContext.Provider value={storeRef.current}>
        {children}
      </StoreContext.Provider>
    );
  }

  function useProviderStore<T>(selector: (state: TStore) => T): T {
    const store = useContext(StoreContext);
    if (!store) {
      throw new Error("useProviderStore must be used within a Provider");
    }
    return useStore(store, selector);
  }

  return [Provider, useProviderStore] as const;
}
