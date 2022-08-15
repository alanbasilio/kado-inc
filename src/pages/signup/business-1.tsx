import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

import Layout from "../../components/layout";
import Image from "next/image";

const Waitlist: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Layout>
      <Row className="justify-content-center">
        <Col md={5} className="bg-white rounded shadow p-2 text-center">
          <h1 className="mb-2">Join Waitlist</h1>
          <p className="mb-2 text-muted">Create an account to continue!</p>
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
            <Row>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Control
                    placeholder="First Name"
                    aria-label="First Name"
                    aria-describedby="basic-addon1"
                    type="email"
                    size="lg"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Control
                    placeholder="Last Name"
                    aria-label="Last Name"
                    aria-describedby="basic-addon1"
                    type="email"
                    size="lg"
                  />
                </Form.Group>
              </Col>
            </Row>
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
            <InputGroup className="mb-2" size="lg">
              <InputGroup.Text id="basic-addon1">
                <FaLock />
              </InputGroup.Text>
              <Form.Control
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                type={showPassword ? "text" : "password"}
              />
              <InputGroup.Text
                id="basic-addon2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </InputGroup.Text>
            </InputGroup>
            <Form.Group
              className="mb-2 text-start text-muted"
              id="formGridCheckbox"
            >
              <Form.Check
                type="checkbox"
                label="I agree to the Terms & Conditions"
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Link href={"./business-2"} passHref>
                <Button variant="primary" type="submit" size="lg">
                  Join Waitlist
                </Button>
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default Waitlist;
