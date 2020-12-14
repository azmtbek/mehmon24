import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
function LayoutMain({ children }) {
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
      <Header />
      {children}
    </div>
  );
}

export default LayoutMain;
