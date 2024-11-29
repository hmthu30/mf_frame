import { CounterStoreProvider, useCounterStore } from "./counterStore";

const CounterPage = () => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state
  );

  return (
    <div>
      Count: {count}
      <hr />
      <button type="button" onClick={() => void incrementCount()}>
        Increment Count
      </button>
      <button type="button" onClick={() => void decrementCount()}>
        Decrement Count
      </button>
    </div>
  );
};

const CounterTemplate = () => {
  const counter = 3;
  return (
    <CounterStoreProvider counter={counter as number}>
      <CounterPage />
    </CounterStoreProvider>
  );
};

export default CounterTemplate;
