import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

import Layout from "../../components/layout";
import Image from "next/image";

const Upload: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Layout>
      <Row className="justify-content-center">
        <Col md={5} className="bg-white rounded shadow p-2 text-center">
          <p className="mb-2 text-muted">Step 1 of 2</p>
          <h2 className="mb-2">Upload your photo</h2>
          <div className="mb-2">
            <Image
              className="img-fluid border rounded-circle"
              src="/images/photo.png"
              width="151"
              height="151"
              alt="React Bootstrap logo"
            />
          </div>

          <Button className="w-50" variant="light" type="submit" size="lg">
            Upload Photo
          </Button>
          <div className="d-grid gap-2 my-2">
            <Link href={"./business-3"} passHref>
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
    </Layout>
  );
};

export default Upload;
