import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <h1>HERE THE FUTURE HOME PAGE OR DASHBOARD</h1>
      </Layout>
    </div>
  );
};

export default Home;
