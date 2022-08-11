import type { NextPage } from "next";
import { Button, Col, Form, Row } from "react-bootstrap";
import Link from "next/link";

import Layout from "../components/layout";
import styles from "../styles/Signin.module.scss";

const ForgotPassword: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <Row className="justify-content-center">
          <Col md={5} className="bg-white rounded shadow p-2">
            <div className="text-center">
              <h1 className="mb-3">Forgot Password</h1>
              <p className="mb-3 text-light">
                Please enter the email associated with your account and we’ll
                send an email with instructions to reset your password.
              </p>
            </div>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <p className=" text-dark fs-3 fw-fold">E-mail address</p>
                <Form.Control
                  className={styles.input}
                  type="email"
                  placeholder="Enter yout e-mail address"
                />
              </Form.Group>
              <div className="d-grid gap-2 mb-3">
                <Button
                  variant="primary"
                  type="submit"
                  className="d-block py-1 rounded"
                  size="sm"
                >
                  Send email instructions
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default ForgotPassword;
