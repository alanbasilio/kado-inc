import type { NextPage } from "next";
import { Col, Row } from "react-bootstrap";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useState } from "react";

import Layout from "../../components/main-layout";
import CardApplications from "../../components/card-applications";

const Signup: NextPage = () => {
  const [active, setActive] = useState("");
  return (
    <Layout>
      <Row className="d-flex justify-content-left">
        <Col md={12}>
          <h2 className="mt-5 fs-2">Projects</h2>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center">
        <Col md={10}>
          <h4 className="text-muted mt-5">Applications</h4>
          <hr className="my-5" />
          <h3 className="mb-2">Gem Website Design Project</h3>
          <Row>
            <Col md={4} className="mb-2">
              <CardApplications />
            </Col>

            <Col md={4} className="mb-2">
              <CardApplications />
            </Col>

            <Col md={4} className="mb-2">
              <CardApplications />
            </Col>
            <Col md={4} className="mb-2">
              <CardApplications />
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default Signup;
