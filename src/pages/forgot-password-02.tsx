import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

import Layout from "../components/layout";
import Image from "next/image";

const CompanyInfo: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Layout>
      <Row className="justify-content-center">
        <Col md={5} className="bg-white rounded shadow p-2 text-center">
          <div className="mb-2">
            <Image
              width="150"
              height="135"
              src="/images/check-email.png"
              alt="React Bootstrap logo"
            />
          </div>
          <h2 className="mb-2">Check your e-mail</h2>
          <p className="mb-2 text-muted">
            We have sent an instruction on how to recover your password to your
            email.
          </p>

          <div className="d-grid gap-2 my-2">
            <Link href={"./create-new-password"} passHref>
              <Button variant="primary" type="submit" size="lg">
                Open Mail
              </Button>
            </Link>
            <Form.Text className="text-center">
              Did not receive any mail? Check your spam filter, or{" "}
              <Link href="/signin" passHref>
                <a className="primary">try another email address</a>
              </Link>
            </Form.Text>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default CompanyInfo;
