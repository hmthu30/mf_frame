import dynamic from "next/dynamic";

export const ZustandConfigComponent = dynamic(
  () => import("host/ZustandConfig"),
  { ssr: false }
);

// export const { createContextStore } = await import("host/ZustandConfig");
