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
          <h2 className="mb-2">Hang tight</h2>
          <h3 className="mb-2">You are currently the nunber 2345</h3>
          <div className="mb-2">
            <Image
              width="214"
              height="172"
              src="/images/sticker.png"
              alt="React Bootstrap logo"
            />
          </div>
          <Form>
            <Form.Group className="mb-2">
              <Form.Control
                placeholder="Enter VIP code"
                aria-label="First Name"
                aria-describedby="basic-addon1"
                type="email"
                size="lg"
              />
            </Form.Group>
          </Form>
          <div className="d-grid gap-2 my-2">
            <Link href={"./business-3"} passHref>
              <Button variant="primary" type="submit" size="lg">
                Unlock Access
              </Button>
            </Link>
            <Link href="./business-5" passHref>
              <a className="text-muted">Skip</a>
            </Link>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default CompanyInfo;
