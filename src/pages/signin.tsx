import type { NextPage } from "next";
import { Button, Col, Form, Row } from "react-bootstrap";
import Link from "next/link";

import Layout from "../components/layout";
import styles from "../styles/Signin.module.scss";

const Signin: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <Row className="justify-content-center">
          <Col md={5} className="bg-white rounded shadow p-2">
            <div className="text-center">
              <h1 className="mb-3">Sign in</h1>
              <p className="mb-3 text-light">
                Welcome back, you’ve been missed!
              </p>
              <Button variant="light">Sign in with Google</Button>
              <p className={styles.or}>OR</p>
            </div>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  className={styles.input}
                  type="email"
                  placeholder="Your Email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  className={styles.input}
                  type="password"
                  placeholder="Password"
                />
                <Link href="/forgot-password" passHref>
                  <a className="text-dark">Forgot password?</a>
                </Link>
              </Form.Group>
              <div className="d-grid gap-2 mb-3">
                <Button
                  variant="primary"
                  type="submit"
                  className="d-block mt-3 py-1 rounded"
                  size="sm"
                >
                  Sign in
                </Button>
              </div>
              <p className="text-center">
                You can also sign in with a{" "}
                <Link href="/magic-link" passHref>
                  <a className="text-dark fw-bold">Magic Link</a>
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Signin;
