declare module "host/ZustandConfig" {
  import { ComponentType } from "react";
  import { StoreApi } from "zustand";

  export function createContextStore<TStore, TProps>(
    createStoreFn: (props: TProps) => StoreApi<TStore>
  ): readonly [
    ComponentType<PropsWithChildren<TProps & Record<string, unknown>>>,
    <T>(selector: (state: TStore) => T) => T
  ];

  const ZustandConfigComponent: ComponentType<{}>;
  export default ZustandConfigComponent;
}
