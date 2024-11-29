export type CounterStateSession = {
  countSeesion: number;
};

export type CounterActionSession = {
  addCounterSession(): void;
  subtractCounterSession(): void;
};

export const defaultCounterState: CounterStateSession = {
  countSeesion: 5,
};
