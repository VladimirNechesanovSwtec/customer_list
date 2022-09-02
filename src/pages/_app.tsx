import type { AppProps } from 'next/app';

import '../styles/globals.css';

const TestTaskApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <div id="loader-container" className="loader-container">
        <div className="loader" />
      </div>
      <>
        <Component {...pageProps} />
      </>
    </>
  );
};

export default TestTaskApp;
