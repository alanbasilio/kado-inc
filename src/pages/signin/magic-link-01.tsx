import type { NextPage } from "next";
import Link from "next/link";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { MdOutlineAlternateEmail } from "react-icons/md";

import Layout from "@/components/main-layout";

const MagicLink: NextPage = () => {
  return (
    <Layout signup>
      <Row className="justify-content-center">
        <Col md={5} className="bg-white rounded shadow p-2 text-center">
          <h2 className="mb-2">Sign in</h2>
          <p className="mb-2 text-muted">Welcome back, you’ve been missed!</p>

          <Form>
            <InputGroup className="mb-2">
              <InputGroup.Text>
                <MdOutlineAlternateEmail />
              </InputGroup.Text>
              <Form.Control placeholder="Your E-mail" type="email" />
            </InputGroup>

            <div className="d-grid gap-2 my-2">
              <Button href="/magic-link-02" variant="primary">
                Sign in with email
              </Button>
            </div>
            <Form.Text className="text-center">
              You can also sign in with a{" "}
              <Link href="/signin" passHref>
                <a className="text-dark">Password</a>
              </Link>
            </Form.Text>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default MagicLink;
