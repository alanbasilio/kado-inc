import type { NextPage } from "next";
import { Button, Col, Form, Row, Card } from "react-bootstrap";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Layout from "../components/dashboard-layout";
import ProgBar from "../components/progress-bar/progress-bar";
import CardProject from "../components/card-project";
import CardProjectProgbar from "../components/card-project-progbar";

const MyProjects: NextPage = () => {
  const [active, setActive] = useState("");
  return (
    <Layout>
      <Row className="mt-2">
        <Col md={12} className="mb-2">
          <h3 className="mb-4">My Projects</h3>
        </Col>
        <Col md={4} className="mb-2">
          <h5 className="mb-2 fw-semibold">TODO</h5>
          <CardProject />
          <CardProject />
        </Col>

        <Col md={4} className="mb-2">
          <h5 className="mb-2 fw-semibold">ONGOING</h5>
          <CardProjectProgbar />
          <CardProjectProgbar />
        </Col>

        <Col md={4} className="mb-2">
          <h5 className="mb-2 fw-semibold">COMPLETED</h5>
          <CardProjectProgbar />
          <CardProjectProgbar />
        </Col>
      </Row>
    </Layout>
  );
};

export default MyProjects;
