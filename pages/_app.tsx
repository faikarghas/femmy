import '../styles/globals.css';
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { wrapper } from '../store/store';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#9C1B66" />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
