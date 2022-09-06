import type { NextPage } from "next";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";

import swal from "sweetalert";
import Image from "next/image";
import { useRouter } from "next/router";

import Layout from "../../components/dashboard-layout";
import API from "../../services";

const ProjectDetails: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    API.post("/user", data)
      .then((response) => {
        setLoading(false);
        reset();
        swal("Success", "Message", "success").then(function () {
          router.push("/");
        });
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
    <Layout>
      <Row>
        <h2>Projects</h2>
        <h4 className="mb-2">Preview details of the project.</h4>

        <Col
          className="bg-white rounded shadow p-2"
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          md={{
            span: 8,
            offset: 2,
          }}
        >
          <div className="mb-3">
            <Button variant="light" type="submit" size="lg" disabled={loading}>
              Mark complete
            </Button>
          </div>
          <hr />
          <h2 className="mt-3">Gem Website Design Project</h2>
          <p className="text-muted">Added by Jerome Bell, 4 hours ago</p>
          <Row className="mt-3 mb-3 d-flex align-items-center">
            <Col md={12}>
              <Row className="d-flex align-items-center">
                <Col md={4}>
                  <p className="text-muted">START DATE</p>
                  <p className="text-muted">September 9, 2021</p>
                </Col>
                <Col md={4}>
                  <p className="text-muted">Labels</p>

                  <Row className="mb-3">
                    <Col md={5}>
                      <div>
                        <Button
                          variant="primary"
                          type="submit"
                          size="sm"
                          disabled={loading}
                        >
                          Webdesign
                        </Button>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div>
                        <Button
                          variant="primary"
                          type="submit"
                          size="sm"
                          disabled={loading}
                        >
                          Unisense
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={4}>
                  <p className="text-muted">DUE DATE</p>
                  <p className="text-muted">December 9, 2021</p>
                </Col>
              </Row>
              <hr />
              <h4 className="mt-3">Description</h4>
              <p>
                Move Multipurpose Template comes with a multitude of carefully
                designed page layouts; purpose-built content blocks, that when
                pieced together, create stunning professional layouts. To make
                your workflow as productive as possible, we created 4
                high-quality pre-built home pages and 28 additional pages that
                you can use as the basis for a website you create.
              </p>
              <h5 className="text-muted">SHOW FULL DESCRIPTION</h5>

              <h4 className="mt-4">Attachment</h4>
              <Row className="bg-light py-2">
                <Col md={3}>
                  <Image
                    className="img-fluid border"
                    src="/images/design.png"
                    width="150"
                    height="150"
                    alt="React Bootstrap logo"
                  />
                </Col>
                <Col md={4}>
                  <h4>Move_01.jpg</h4>
                  <p className="text-muted">384 KB</p>
                </Col>
              </Row>

              <h4 className="mt-4">Timeline</h4>
              <Row>
                <Col md={1}>
                  <p>40%</p>
                </Col>
                <Col md={11} className="d-flex align-items-center">
                  <div
                    style={{ background: "#ccc", width: "50%", height: "5px" }}
                  ></div>
                  <div
                    style={{
                      background: "#e5e5e5",
                      width: "100%",
                      height: "5px",
                      zIndex: 1,
                    }}
                  ></div>
                </Col>
              </Row>
              <h4 className="mt-4">Applications</h4>
              <Row className="mt-5">
                <Col md={3}>
                  <Image
                    className="img-fluid border rounded-circle"
                    src="/images/design.png"
                    width="40"
                    height="40"
                    alt="React Bootstrap logo"
                  />
                  <Image
                    className="img-fluid border rounded-circle"
                    src="/images/design.png"
                    width="40"
                    height="40"
                    alt="React Bootstrap logo"
                  />
                  <Image
                    className="img-fluid border rounded-circle"
                    src="/images/design.png"
                    width="40"
                    height="40"
                    alt="React Bootstrap logo"
                  />
                  <Image
                    className="img-fluid border rounded-circle"
                    src="/images/design.png"
                    width="40"
                    height="40"
                    alt="React Bootstrap logo"
                  />
                </Col>
                <Col md={4}>
                  <div>
                    <Button
                      variant="primary"
                      type="submit"
                      size="sm"
                      disabled={loading}
                    >
                      View Applications
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default ProjectDetails;
