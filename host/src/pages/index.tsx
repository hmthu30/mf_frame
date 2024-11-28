import {
  RemoteGuestHome,
  RemoteAuthUserHome,
  RemoteNewsHome,
} from "@/utils/remoteComponents";

export default function Home() {
  return (
    <>
      <div className="text-6xl">Hello from host (8000)</div>
      <RemoteGuestHome />
      <RemoteAuthUserHome />
      <RemoteNewsHome />
    </>
  );
}
