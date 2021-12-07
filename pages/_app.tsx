import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { StyledEngineProvider } from "@mui/styled-engine";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}

export default MyApp;
