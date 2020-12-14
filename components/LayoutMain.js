import Header from "../components/Header";
import Footer from "../components/Footer";

function LayoutMain({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default LayoutMain;
