import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";
import Image from "next/image";
import { useRouter } from "next/router";

import Layout from "../components/dashboard-layout";
import API from "../services";

const Company: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isWaitingList, setIsWaitingList] = useState(true);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.account_id = 3;
    setLoading(true);
    API.post("/user", data)
      .then((response) => {
        setLoading(false);
        reset();
        swal(
          "Success",
          "Now you are in the waiting list. We will contact you very soon.",
          "success"
        ).then(function () {
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
      </Row>
      <Row
        className=" bg-white rounded shadow p-2"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Col md={12}>
          <h4 className="mb-2">Project Terms of Service Agreement</h4>
          <hr />
        </Col>
        <Row>
          <Col className="align-items-center">
            <Card bg="light" border="light" className="mt-3">
              <Card.Body>
                <Card.Title className="text-muted">
                  Project Posting - Terms and Conditions
                </Card.Title>
                <Card.Text className="text-muted">
                  Thank you for agreeing to post a project and help bridge the
                  gap between education and meaningful work experience within
                  your community. Please read and understand the following terms
                  when posting a project. By submitting your project you are
                  agreeing to the following terms between you, (the “Poster”)
                  and the applicant (the “Project Recipient”). You must agree to
                  these terms to post a project. Please feel free to contact us
                  if you have any questions. Payment for projects If this
                  project is a paid project, you, the Poster, are responsible
                  for arranging payment with the Project Recipient. If payments
                  for the project exceed $600 in any calendar year, the Poster
                  is responsible for any necessary tax documents such as a W9 or
                  1099.
                </Card.Text>
              </Card.Body>
            </Card>
            <p className="text-muted mt-2">Your Signature</p>
          </Col>
        </Row>
        <Col md={10} className="mx-10">
          <Form.Group className="mb-2">
            <Form.Control
              placeholder="Sign your name here"
              aria-label="signature"
              type="text"
              size="lg"
              isInvalid={errors.first_name ? true : false}
              {...register("first_name", { required: true })}
            />
          </Form.Group>
        </Col>
      </Row>
    </Layout>
  );
};

export default Company;
