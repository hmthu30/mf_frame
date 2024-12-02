import { PropsWithChildren, createContext, useContext } from "react";
import { UseMutationResult } from "react-query";

export function createContextMutation<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(mutation: () => UseMutationResult<TData, TError, TVariables, TContext>) {
  type Mutation = ReturnType<typeof mutation>;

  const Context = createContext<Mutation | null>(null);

  function Provider({ children }: PropsWithChildren) {
    return <Context.Provider value={mutation()}>{children}</Context.Provider>;
  }

  function useProviderMutation() {
    const mutation = useContext(Context);
    if (!mutation) {
      throw new Error(
        "useProviderMutation must be used within a MutationProvider"
      );
    }
    return mutation;
  }

  return [Provider, useProviderMutation] as const;
}
