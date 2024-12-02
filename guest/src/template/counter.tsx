import { ZustandConfigComponent } from "@/utils/remoteComponents";
import CounterStoreProviderWithProps from "./counterSt";
import { useCounterStore } from "./counterSt";

const CounterPage = () => {
  console.log("HELLO", ZustandConfigComponent);

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
