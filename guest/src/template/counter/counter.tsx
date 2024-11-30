import { useCounterSession } from "@/store/counterStore";
import DemoStoreProviderWithProps, {
  useDemoStore,
} from "@/template/counter/counterSt";

const CounterPage = () => {
  const { count, incrementCount, decrementCount } = useDemoStore(
    (state) => state
  );

  const {countSeesion} = useCounterSession(
    (state) => state
  )

  return (
    <div>
      Count: {count}
      <hr />
      <button type="button" onClick={() => void incrementCount()}>
        Increment Count
      </button>
      <button type="button" onClick={() => void decrementCount(countSeesion)}>
        Decrement Count
      </button>
    </div>
  );
};

const DemoTemplate = () => {

  return (
    <DemoStoreProviderWithProps count={10 as number}>
      <CounterPage />
    </DemoStoreProviderWithProps>
  );
};

export default DemoTemplate;
