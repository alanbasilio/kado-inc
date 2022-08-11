import type { NextPage } from "next";
import Head from "next/head";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

import Layout from "../components/layout";
import styles from "../styles/Home.module.scss";

const Signin: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <Row>
          <Col className="md-6">
            <h1>Sign in</h1>
            <p>Welcome back, you’ve been missed!</p>
            <Button variant="light">Sign in with Google</Button>{" "}
            <InputGroup className="d-flex justify-content-center">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Your Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="d-flex justify-content-center">
              <InputGroup.Text id="basic-addon1">🔒</InputGroup.Text>
              <Form.Control
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <h2>Forgot Password?</h2>
            <Button type="submit">Sign in</Button>{" "}
            <p>You can also sign in with a Magic link</p>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Signin;
