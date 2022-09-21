import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import {
  Button,
  Col,
  Form,
  Row,
  InputGroup,
  Card,
  Spinner,
} from "react-bootstrap";
import { MdOutlineAlternateEmail } from "react-icons/md";

import Layout from "@/components/dashboard-layout";
import API from "@/services";

const Example: NextPage = () => {
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
      <Row className="my-3">
        <h2>Form</h2>
      </Row>
      <Row
        className="justify-content-center"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Control
              placeholder="Test"
              type="text"
              isInvalid={errors.test ? true : false}
              {...register("test", { required: true })}
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Control
              placeholder="Test 2"
              type="text"
              isInvalid={errors.test2 ? true : false}
              {...register("test2", { required: true })}
            />
          </Form.Group>
        </Col>

        <InputGroup className="mb-2">
          <InputGroup.Text>
            <MdOutlineAlternateEmail />
          </InputGroup.Text>
          <Form.Control
            placeholder="Your E-mail"
            type="email"
            isInvalid={errors.email ? true : false}
            {...register("email", { required: true })}
          />
        </InputGroup>

        <Button variant="primary" type="submit" disabled={!loading}>
          {loading && <Spinner animation="border" />}{" "}
          {loading ? "Loading..." : "Continue"}
        </Button>
      </Row>
      <Row className="my-3">
        <h2>Buttons (Two in a row)</h2>
      </Row>
      <Row className="my-3">
        <Col md={2}>
          <div>
            <Button variant="primary" size="sm" disabled={loading}>
              Webdesign
            </Button>
          </div>
        </Col>
        <Col md={2}>
          <div>
            <Button variant="primary" size="sm" disabled={loading}>
              Unisense
            </Button>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default Example;
