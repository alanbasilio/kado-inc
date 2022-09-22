import type { NextPage } from "next";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

import CardApplications from "@/components/card-applications";
import Layout from "@/components/dashboard-layout";

const Applications: NextPage = () => {
  return (
    <Layout title="Applications">
      <Row className="d-flex justify-content-center">
        <Col md={10}>
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

export default Applications;
