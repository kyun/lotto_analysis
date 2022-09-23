import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { COLORS } from "constants/style";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={COLORS}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
