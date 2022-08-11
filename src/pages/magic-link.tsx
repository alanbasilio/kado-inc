import type { NextPage } from "next";
import Link from "next/link";
import { Button, Col, Form, Row } from "react-bootstrap";

import Layout from "../components/layout";
import styles from "../styles/Signin.module.scss";

const MagicLink: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <Row className="justify-content-center">
          <Col md={5} className="bg-white rounded shadow p-2">
            <div className="text-center">
              <h1 className="mb-3">Check your inbox</h1>
              <p className="mb-3 text-light">
                We have sent a magic link to <br />
                <span className="text-dark">bill.sanders@example.com</span>.
                <br /> The magic link expires shortly so please check your
                email.
              </p>
              <p className="mb-3 text-light">
                Not your email address?{" "}
                <Link href="/signin" passHref>
                  <a className="text-dark">Go back</a>
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default MagicLink;
