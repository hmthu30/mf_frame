import {
  RemoteGuestHome,
  RemoteAuthUserHome,
  RemoteNewsHome,
} from "@/utils/remoteComponents";

function HomePage() {
  return (
    <>
      <div className="text-6xl">Hello from host (8000)</div>
      <RemoteGuestHome />
      <RemoteAuthUserHome />
      <RemoteNewsHome />
    </>
  );
}

const HomeTemplate = () => {
  return <HomePage />;
};

export default HomeTemplate;
