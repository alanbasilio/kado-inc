import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import { MdOutlineAlternateEmail } from "react-icons/md";

import Layout from "../components/layout";

const ForgotPassword: NextPage = () => {
  return (
    <Layout signin>
      <Row className="justify-content-center">
        <Col md={5} className="bg-white rounded shadow p-2 text-center">
          <h2 className="mb-2">Create New Password</h2>
          <p className="mb-2 text-muted">
            Your new password must be different from previously used passswords.
          </p>
          <Form>
            <InputGroup className="mb-2" size="lg">
              <Form.Control
                placeholder="Enter your password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                type="password"
              />
            </InputGroup>
            <InputGroup className="mb-2" size="lg">
              <Form.Control
                placeholder="Confirm your password"
                aria-label="Confirm Password"
                aria-describedby="basic-addon1"
                type="password"
              />
            </InputGroup>
            <div className="d-grid gap-2">
              <Button href="/signin" variant="primary" type="submit" size="lg">
                Create
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default ForgotPassword;
