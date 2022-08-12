import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import Link from "next/link";

import Layout from "../components/layout";
import styles from "../styles/Signin.module.scss";

const Signin: NextPage = () => {
  return (
    <Layout>
      <Row className="justify-content-center">
        <Col
          md={5}
          className="bg-white rounded shadow p-2 d-flex flex-column align-items-center"
        >
          <h1 className="mb-2">Sign in</h1>
          <p className="mb-2 text-muted">Welcome back, you’ve been missed!</p>
          <Button variant="light" className="mb-2 my-auto">
            Sign in with Google
          </Button>
          <p className="mb-2 text-muted">OR</p>
          <Form className="w-100">
            <InputGroup className="mb-2">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Your E-mail"
                aria-label="Your E-mail"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-2">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
              <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
            </InputGroup>
            <Form.Text>
              <Link href="/forgot-password" passHref>
                <a className="text-dark">Forgot password?</a>
              </Link>
            </Form.Text>
            <div className="d-grid gap-2 my-2">
              <Button variant="primary" type="submit">
                Sign in
              </Button>
            </div>
          </Form>
          <p>
            You can also sign in with a{" "}
            <Link href="/magic-link" passHref>
              <a className="text-dark fw-bold">Magic Link</a>
            </Link>
          </p>
        </Col>
      </Row>
    </Layout>
  );
};

export default Signin;
