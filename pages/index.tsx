import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Main from './Component/Main'
import Healthy from './Component/Healthy'
import Body from './Component/Body'
import Works from './Component/Works'
import Footer from './Component/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gym Baran</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
      <Healthy />
      <Body />
      <Works />
      <Footer />

    </>
  );
};

export default Home;
