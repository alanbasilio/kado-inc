import type { NextPage } from "next";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useRouter } from "next/router";

import Layout from "../../components/dashboard-layout";
import API from "../../services";

const Agreements: NextPage = () => {
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
        <h4 className="mb-2">Review Terms and Post the Project!</h4>

        <Col
          className="bg-white rounded shadow p-2"
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          md={{
            span: 8,
            offset: 2,
          }}
        >
          <h4 className="mb-2">Project Terms of Service Agreement</h4>
          <hr />

          <Row>
            <Col className="align-items-center mt-2">
              <div
                className="bg-light"
                style={{
                  width: "100%",
                  height: "auto",
                  overflow: "hidden",
                  borderRadius: 10,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: 300,
                    overflowY: "scroll",
                    padding: 20,
                    fontSize: 14,
                    lineHeight: "27px",
                    borderRadius: 20,
                  }}
                >
                  <h4>Project Posting - Terms and Conditions</h4>
                  <p className="mt-2">
                    Thank you for agreeing to post a project and help bridge the
                    gap between education and meaningful work experience within
                    your community. Please read and understand the following
                    terms when posting a project. By submitting your project you
                    are agreeing to the following terms between you, (the
                    “Poster”) and the applicant (the “Project Recipient”). You
                    must agree to these terms to post a project. Please feel
                    free to contact us if you have any questions. Payment for
                    projects If this project is a paid project, you, the Poster,
                    are responsible for arranging payment with the Project
                    Recipient. If payments for the project exceed $600 in any
                    calendar year, the Poster is responsible for any necessary
                    tax documents such as a W9 or 1099. Thank you for agreeing
                    to post a project and help bridge the gap between education
                    and meaningful work experience within your community. Please
                    read and understand the following terms when posting a
                    project. By submitting your project you are agreeing to the
                    following terms between you, (the “Poster”) and the
                    applicant (the “Project Recipient”). You must agree to these
                    terms to post a project. Please feel free to contact us if
                    you have any questions. Payment for projects If this project
                    is a paid project, you, the Poster, are responsible for
                    arranging payment with the Project Recipient. If payments
                    for the project exceed $600 in any calendar year, the Poster
                    is responsible for any necessary tax documents such as a W9
                    or 1099.
                  </p>
                </div>
              </div>
              <p className="text-muted mt-2">Your Signature</p>
            </Col>
            <Col md={9} className="mx-10">
              <Form.Group className="mb-2">
                <Form.Control
                  className="text-center"
                  placeholder="Sign your name here"
                  type="text"
                  isInvalid={errors.first_name ? true : false}
                  {...register("first_name", { required: true })}
                />
              </Form.Group>
            </Col>
            <Row className="d-flex align-items-center">
              <Col md={6}>
                <Form>
                  <Form.Check
                    type="checkbox"
                    label="I've read and agree to the terms"
                    isInvalid={errors.agree ? true : false}
                    {...register("agree", { required: true })}
                  />
                </Form>
              </Col>
              <Col md={6}>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" disabled={loading}>
                    Post Project
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

export default Agreements;
