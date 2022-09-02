import type { NextPage } from 'next';
import Head from 'next/head';

import MainComponent from '../components/MainComponent';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <MainComponent />
    </>
  );
};

export default Home;
