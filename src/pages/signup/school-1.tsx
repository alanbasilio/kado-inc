import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

import Layout from "../../components/layout";
import Image from "next/image";

const Signin: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Layout signin>
      <Row className="justify-content-center">
        <Col md={5} className="bg-white rounded shadow p-2 text-center">
          <h2 className="mb-2">Getting started</h2>
          <p className="mb-2 text-muted">
            Complete the form below and our Partner Relations Team will be in
            touch soon!
          </p>

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
              <Form.Control
                placeholder="School Name"
                aria-label="School Name"
                aria-describedby="basic-addon1"
                type="schoolname"
              />
            </InputGroup>
            <InputGroup className="mb-2" size="lg">
              <Form.Control
                placeholder="Contact Email"
                aria-label="Contact Email"
                aria-describedby="basic-addon1"
                type="contactemail"
              />
            </InputGroup>
            <InputGroup className="mb-2" size="lg">
              <Form.Control
                placeholder="Phone Number (optional)"
                aria-label="Phone Number (optional)"
                aria-describedby="basic-addon1"
                type="phonenumber"
              />
            </InputGroup>
            <Form.Group className="mb-2">
              <Form.Control
                placeholder="Any additional comments (optional)"
                aria-label="Any additional comments (optional)f"
                aria-describedby="basic-addon1"
                as="textarea"
                size="lg"
                rows={3}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" size="lg">
                Join Waitlist
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default Signin;
