import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import {
  CounterActionSession,
  CounterStateSession,
  defaultCounterState,
} from "./counterPersistType";

export const useCounterSession = create(
  persist(
    immer<CounterStateSession & CounterActionSession>((set, get) => ({
      ...defaultCounterState,
      addCounterSession() {
        set((store) => {
          store.countSeesion = get().countSeesion + 1;
        });
      },
      subtractCounterSession() {
        set((store) => {
          store.countSeesion = get().countSeesion - 1;
        });
      },
    })),
    {
      name: "counter_session",
      version: 1,
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
