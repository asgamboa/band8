import Hero from "components/Hero";
import AboutUs from "containers/AboutUs";
import Footer from "containers/Footer";
import Header from "containers/Header";
import Location from "containers/Location";
import Video from "containers/Video";
import Head from "next/head";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Band 8 - Música que cura</title>
        <meta name='title' content='Band 8 - Música que cura' />
        <meta name='description' content='Tienda de música' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main>
        <Hero />
        <AboutUs />
        <Location />
        <Video />
      </main>

      <Footer />
    </>
  );
};

export default Home;
