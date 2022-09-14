import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import Link from "next/link";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Image from "next/image";

import Layout from "../../components/main-layout";

const MagicLink: NextPage = () => {
  return (
    <Layout signin>
      <Row className="justify-content-center">
        <Col md={5} className="bg-white rounded shadow p-2 text-center">
          <h2 className="mb-2">Sign in</h2>
          <p className="mb-2 text-muted">Welcome back, you’ve been missed!</p>
          <Link href="#" passHref>
            <a className="mb-2 d-block">
              <Image
                src="/images/login-google.png"
                width={231}
                height={51}
                alt="login with google"
              />
            </a>
          </Link>
          <p className="mb-2 text-muted">OR</p>
          <Form>
            <InputGroup className="mb-2">
              <InputGroup.Text>
                <MdOutlineAlternateEmail />
              </InputGroup.Text>
              <Form.Control placeholder="Your E-mail" type="email" />
            </InputGroup>

            <div className="d-grid gap-2 my-2">
              <Button href="/magic-link-02" variant="primary" type="submit">
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
