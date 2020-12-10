import Head from "next/head";
import styles from "../styles/Home.module.css";
// import Header from "../components/Header";
// import LayoutRegister from "../components/LayoutRegister";
import Carousel from "../components/Carousel";
export default function Home() {
  return (
    <div className={styles.container}>
      {" "}
      {/* <Header /> */}
      <Carousel />
    </div>
  );
}
