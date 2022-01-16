import type { AppProps } from "next/app";

import { disableReactDevTools } from "shared/scripts/disableReactDevtools";
import GTagScript from "shared/scripts/gtag";

import "@/_assets/styles/normalize.css";
import "@/_assets/styles/index.css";
import "@/_assets/styles/variables.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap"
        rel="stylesheet"
      ></link>
      <Component {...pageProps} />
      {disableReactDevTools()}
      <GTagScript />
    </>
  );
}
export default MyApp;
