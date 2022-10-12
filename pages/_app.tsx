import '../styles/globals.css';
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { wrapper } from '../store/store';
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <NextNProgress color="#9C1B66" />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
