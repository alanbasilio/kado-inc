import type { NextPage } from "next";
import { Button, Col, Row } from "react-bootstrap";
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
        <h2>Create a project</h2>
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
          <h4 className="mb-2">Project Preview</h4>
          <hr />

          <Row className="d-flex align-items-center">
            <Col md={8}>
              <Row className="mb-4 d-flex align-items-center">
                <Col md={3}>
                  <Image
                    className="img-fluid border rounded-circle"
                    src="/images/design.png"
                    width="60"
                    height="60"
                    alt="React Bootstrap logo"
                  />
                </Col>
                <Col md={9}>
                  <p>Acme Co.</p>
                  <h4>Website Redesign & Branding</h4>
                </Col>
              </Row>
              <h4>Project Description</h4>
              <p>
                Review requirements, study industry standards and apply it to
                design a website.
              </p>
              <p> Deliverables: </p>
              <ul className="mb-4">
                <li>
                  Collaborate with out Marketing team to define marketing
                  strategy and create marketing collaterals
                </li>
                <li>
                  {" "}
                  Create the end-to-end website along with Google Analytics
                </li>
              </ul>
              <h4>Project Requirements</h4>
              <p>
                Familiarity with webiste design best practices, attention to
                detail and collaborative working style. Website content
                management software experience preferred ( like Wordpress,
                Squarespace etc.)
              </p>
            </Col>
            <Col md={4}>
              <h4>Project Posted By:</h4>
              <Row className="mt-1 mb-4">
                <Col md={3}>
                  <Image
                    className="img-fluid border rounded-circle"
                    src="/images/jerome.png"
                    width="60"
                    height="60"
                    alt="React Bootstrap logo"
                  />
                </Col>
                <Col md={9}>
                  <h4>Jerome Bell</h4>
                  <h5>Founder @ Acme Co.</h5>
                </Col>
              </Row>
              <h4>Posted on:</h4>
              <p>August 31st, 2021</p>
              <h4>Post Expires:</h4>
              <p>December 12th, 2021</p>
              <h4>Duration:</h4>
              <p>4 weeks</p>
              <h4>Start Date:</h4>
              <p>September 10th, 2021</p>
              <h4>Due Date:</h4>
              <p>December 10th, 2021</p>
              <h4>Compensation:</h4>
              <p>Paid</p>
            </Col>
            <Row className="mt-5">
              <Col md={6}>
                <div className="d-grid gap-2">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    disabled={loading}
                  >
                    Go Back and Edit
                  </Button>
                </div>
              </Col>
              <Col md={6}>
                <div className="d-grid">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    disabled={loading}
                  >
                    Review Terms and Submit
                  </Button>
                </div>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default ProjectDetails;
