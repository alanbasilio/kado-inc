import type { NextPage } from "next";
import { Col, Row } from "react-bootstrap";

import CardProject from "@/components/card-project";
import Layout from "@/components/dashboard-layout";

const MyProjects: NextPage = () => {
  return (
    <Layout title="My projects">
      <Row>
        <Col md={4}>
          <h6 className="mb-2 fw-lightbold">TODO</h6>
          <CardProject status="todo" />
          <CardProject status="todo" />
        </Col>

        <Col md={4}>
          <h6 className="mb-2 fw-lightbold">ONGOING</h6>
          <CardProject status="ongoing" />
          <CardProject status="ongoing" />
          <CardProject status="ongoing" />
        </Col>

        <Col md={4}>
          <h6 className="mb-2 fw-lightbold">COMPLETED</h6>
          <CardProject status="completed" />
          <CardProject status="completed" />
          <CardProject status="completed" />
          <CardProject status="completed" />
        </Col>
      </Row>
    </Layout>
  );
};

export default MyProjects;
