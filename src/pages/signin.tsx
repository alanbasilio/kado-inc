import type { NextPage } from "next";
import Head from "next/head";
import { Col, Row } from "react-bootstrap";

import Layout from "../components/layout";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <Row>
          <Col></Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Home;
