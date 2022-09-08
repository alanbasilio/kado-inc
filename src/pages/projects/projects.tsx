import type { NextPage } from "next";
import { Button, Col, Form, Row, Card } from "react-bootstrap";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Layout from "../../components/main-layout";
import ProgBar from "../../components/progress-bar/progress-bar";
import CardProject from "../../components/card-project";
import CardProjectProgbar from "../../components/card-project-progbar";

const Signup: NextPage = () => {
  const [active, setActive] = useState("");
  return (
    <Layout>
      <Row className="d-flex justify-content-left">
        <Col md={12} className="text-center">
          <h1 className="mb-2 fs-2">How do you plan on using Kado?</h1>
          <p className="mb-5 text-muted">
            We’ll streamline your experience accordingly
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-2">
          <h3>TODO</h3>
          <CardProject />
        </Col>

        <Col md={4} className="mb-2">
          <h3>ONGOING</h3>
          <CardProjectProgbar />
        </Col>

        <Col md={4} className="mb-2">
          <h3>COMPLETED</h3>
          <CardProjectProgbar />
        </Col>
        <Col md={4} className="mb-2">
          <CardProject />
        </Col>
        <Col md={4} className="mb-2">
          <CardProjectProgbar />
        </Col>

        <Col md={4} className="mb-2">
          <CardProjectProgbar />
        </Col>

        <Col
          md={{
            span: 4,
            offset: 4,
          }}
          className="mt-md-3"
        >
          <Link href={`/signup/${active}`} passHref>
            <Button
              variant="primary"
              type="submit"
              size="lg"
              className="w-100"
              disabled={!active}
            >
              Continue
            </Button>
          </Link>
        </Col>
      </Row>
    </Layout>
  );
};

export default Signup;
