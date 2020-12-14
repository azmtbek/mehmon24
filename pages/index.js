import Head from "next/head";
// import styles from "../styles/Home.module.css";

// import LayoutRegister from "../components/LayoutRegister";
import Carousel from "../components/Carousel";
// import CardReview from "../components/CardReview";
// import CardMember from "../components/CardMember";
// import CardInfo from "../components/CardInfo";

import Reviews from "../components/Reviews";

import About from "../components/About";
import Members from "../components/Members";
import Contact from "../components/Contact";

import LayoutMain from "../components/LayoutMain";

export default function Home() {
  return (
    <div className="main">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LayoutMain>
        <Carousel />
        <About />
        {/* <CardReview /> */}
        {/* <CardMember /> */}
        {/* <CardInfo /> */}
        <Reviews />
        <Members />
        <Contact />
      </LayoutMain>
    </div>
  );
}
