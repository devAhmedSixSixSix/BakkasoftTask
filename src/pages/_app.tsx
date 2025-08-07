import '../styles/globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider initialTheme={pageProps.theme || 'modern'}>
      <Head>
        <title>Bakkasoft</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
