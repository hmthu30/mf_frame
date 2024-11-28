import dynamic from "next/dynamic";

export type GuestHomePageProps = Record<string, never>;
export type AuthUserHomePageProps = Record<string, never>;
export type NewsHomePageProps = Record<string, never>;

export const RemoteGuestHome = dynamic<GuestHomePageProps>(
  () =>
    import("guest/GuestHomePage").then(
      (mod) => mod.default as React.ComponentType<GuestHomePageProps>
    ),
  { ssr: false }
);

export const RemoteAuthUserHome = dynamic<AuthUserHomePageProps>(
  () =>
    import("authUser/AuthUserHomePage").then(
      (mod) => mod.default as React.ComponentType<AuthUserHomePageProps>
    ),
  { ssr: false }
);

export const RemoteNewsHome = dynamic<NewsHomePageProps>(
  () =>
    import("news/NewsHomePage").then(
      (mod) => mod.default as React.ComponentType<NewsHomePageProps>
    ),
  { ssr: false }
);
