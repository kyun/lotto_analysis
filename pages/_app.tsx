import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '~/styles/global';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Global styles={[globalStyles]} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
