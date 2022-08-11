import type { NextPage } from "next";
import { Button, Col, Form, Row } from "react-bootstrap";

import Layout from "../components/layout";
import styles from "../styles/Home.module.scss";

const Signin: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <Row className="justify-content-center">
          <Col md={5} className="bg-white rounded shadow p-5">
            <div className="text-center">
              <h1>Sign in</h1>
              <p>Welcome back, you’ve been missed!</p>
              <Button variant="light" className="mb-2">
                Sign in with Google
              </Button>
            </div>
            <Form>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-muted">Forgot Password?</Form.Text>
              </Form.Group>
              <div className="d-grid gap-2 mb-2">
                <Button
                  variant="primary"
                  type="submit"
                  className="d-block"
                  size="lg"
                >
                  Sign in
                </Button>
              </div>
              <p>You can also sign in with a Magic link</p>
            </Form>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Signin;
