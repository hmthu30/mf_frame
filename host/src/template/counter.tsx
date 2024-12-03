import { MyMutationProvider, useMyMutation } from "@/template/counterStPackage";
import CounterStoreProviderWithProps, {
  useCounterStore,
} from "@/template/counterStPackage";
import { greet } from "hmthu30-fe-package";

const CounterPage = () => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state
  );

  const mutation = useMyMutation();

  const handleSubmit = async () => {
    try {
      const data = { title: "New Post", body: "This is a placeholder post" };
      const result = await mutation.mutateAsync(data);
      console.log("Post created:", result);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  console.log(greet("Post created"));

  return (
    <>
      <div>
        <button onClick={handleSubmit} disabled={mutation.isLoading}>
          {mutation.isLoading ? "Creating Post..." : "Create Post"}
        </button>
        {mutation.isError && <p>Error: </p>}
        {mutation.isSuccess && <p>Post created successfully!</p>}
      </div>
      <br />
      <br />
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
    </>
  );
};

const CounterTemplate = () => {
  return (
    <MyMutationProvider>
      <CounterStoreProviderWithProps count={5 as number}>
        <CounterPage />
      </CounterStoreProviderWithProps>
    </MyMutationProvider>
  );
};

export default CounterTemplate;
