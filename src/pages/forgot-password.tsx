import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import { MdOutlineAlternateEmail } from "react-icons/md";

import Layout from "../components/layout";

const ForgotPassword: NextPage = () => {
  return (
    <Layout signin>
      <Row className="justify-content-center">
        <Col md={5} className="bg-white rounded shadow p-2 text-center">
          <h1 className="mb-2">Forgot Password</h1>
          <p className="mb-2 text-muted">
            Please enter the email associated with your account and we’ll send
            an email with instructions to reset your password.
          </p>
          <Form>
            <InputGroup className="mb-2" size="lg">
              <InputGroup.Text id="basic-addon1">
                <MdOutlineAlternateEmail />
              </InputGroup.Text>
              <Form.Control
                placeholder="Your E-mail"
                aria-label="Your E-mail"
                aria-describedby="basic-addon1"
                type="email"
              />
            </InputGroup>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" size="lg">
                Send email instructions
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default ForgotPassword;
