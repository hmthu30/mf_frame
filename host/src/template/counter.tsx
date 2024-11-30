import CounterStoreProviderWithProps from "@/template/counterSt";
import { useCounterStore } from "@/template/counterSt";

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
  return (
    <CounterStoreProviderWithProps count={5 as number}>
      <CounterPage />
    </CounterStoreProviderWithProps>
  );
};

export default CounterTemplate;
