import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import CardProject from "@/components/card-project";
import CardProjectProgbar from "@/components/card-project-progbar";
import Layout from "@/components/dashboard-layout";
import API from "@/services";
import swal from "sweetalert";

const MyProjects: NextPage = () => {
  const [loading, setLoading] = useState(false);
  let token;

  const getProjects = () => {
    setLoading(true);
    API.get("/categories", {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        swal(
          "Error",
          err.response?.data?.message
            ? err.response?.data?.message
            : "An error occured: " + err,
          "error"
        );
      });
  };

  return (
    <Layout title="My projects">
      <Row className="mt-2">
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
