import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { Button, Col, Form, Row, InputGroup, Card } from "react-bootstrap";
import { MdOutlineAlternateEmail } from "react-icons/md";

import Layout from "../components/dashboard-layout";
import API from "../services";

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
              size="lg"
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
              size="lg"
              isInvalid={errors.test2 ? true : false}
              {...register("test2", { required: true })}
            />
          </Form.Group>
        </Col>

        <InputGroup className="mb-2" size="lg">
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

        <Button variant="primary" type="submit" size="lg" disabled={!loading}>
          Continue
        </Button>
      </Row>
    </Layout>
  );
};

export default Example;
