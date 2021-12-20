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
        <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicon/favicon-16x16.png' />
        <link rel='manifest' href='/assets/favicon/site.webmanifest' />
        <link rel='mask-icon' href='/assets/favicon/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <header>
        <Header />
      </header>

      <main>
        <Hero />
        <AboutUs />
        <Location />
        {/* <Video /> */}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
