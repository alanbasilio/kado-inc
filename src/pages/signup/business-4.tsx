import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

import Layout from "../../components/layout";
import Image from "next/image";

const CompanyInfo: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Layout>
      <Row className="justify-content-center">
        <Col md={5} className="bg-white rounded shadow p-2 text-center">
          <h1 className="mb-2">Company Info</h1>
          <p className="text-muted mb-2">Add company details</p>

          <Form>
            <InputGroup className="mb-2" size="lg">
              <Form.Control
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
                type="text"
              />
            </InputGroup>
            <InputGroup className="mb-2" size="lg">
              <Form.Control
                placeholder="Location"
                aria-label="Location"
                aria-describedby="basic-addon1"
                type="email"
              />
            </InputGroup>
            <InputGroup className="mb-2" size="lg">
              <Form.Control
                placeholder="Website"
                aria-label="Website"
                aria-describedby="basic-addon1"
                type="url"
              />
            </InputGroup>

            <InputGroup className="mb-2" size="lg">
              <Form.Control
                placeholder="Phone Number"
                aria-label="Phone Number"
                aria-describedby="basic-addon1"
                type="tel"
              />
            </InputGroup>

            <div className="d-grid gap-2">
              <Link href={"./business-5"} passHref>
                <Button variant="primary" type="submit" size="lg">
                  Continue
                </Button>
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default CompanyInfo;
