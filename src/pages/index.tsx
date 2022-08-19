import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>here the future home page or dashboard</Layout>
    </div>
  );
};

export default Home;
