import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { StyledEngineProvider } from "@mui/styled-engine";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}

export default MyApp;
