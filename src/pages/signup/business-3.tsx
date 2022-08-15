import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

import Layout from "../../components/layout";
import Image from "next/image";

const Business3: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Layout>
      <Row className="justify-content-center">
        <Col md={5} className="bg-white rounded shadow p-2 text-center">
          <p className="mb-2 text-muted">Step 2 of 2</p>
          <h2 className="mb-2">Intro yourself</h2>

          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Control
                    placeholder="Intro yourself"
                    aria-label="Intro yourself"
                    aria-describedby="basic-addon1"
                    type="textarea"
                    size="lg"
                  />
                </Form.Group>
                <div className="d-grid gap-2 mt-2">
                  <Link href={"./business-4"} passHref>
                    <Button variant="primary" type="submit" size="lg">
                      Next
                    </Button>
                  </Link>
                  <Link href="./business-5" passHref>
                    <a className="text-muted">Skip</a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default Business3;
