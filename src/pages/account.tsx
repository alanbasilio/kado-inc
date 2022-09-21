import type { NextPage } from "next";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Image from "next/image";
import { useRouter } from "next/router";

import Layout from "@/components/dashboard-layout";
import API from "@/services";

const Account: NextPage = () => {
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
        <h2 className="mb-2">Account</h2>
      </Row>
      <Row
        className=" bg-white rounded shadow p-2"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Col md={12}>
          <h4 className="mb-2">Account Access</h4>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              placeholder="Email Address"
              type="text"
              isInvalid={errors.first_name ? true : false}
              {...register("first_name", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              placeholder="Phone Number"
              type="text"
              isInvalid={errors.last_name ? true : false}
              {...register("last_name", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col className="text-center text-md-end mb-2" md={12}>
          <Button variant="primary" size="md" disabled={loading}>
            Save Changes
          </Button>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Old Password</Form.Label>
            <Form.Control
              placeholder="Old Password"
              type="email"
              isInvalid={errors.email ? true : false}
              {...register("email", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              placeholder="New Password"
              type="tel"
              isInvalid={errors.phone ? true : false}
              {...register("phone", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col className="mb-2 text-center text-md-end" md={12}>
          <Button variant="primary" size="md" disabled={loading}>
            Change
          </Button>
        </Col>
        <Col className="text-center" md={12}>
          <hr />

          <Button className="me-1" variant="light" size="md" disabled={loading}>
            Request Account Deletion
          </Button>

          <Button className="me-1" variant="light" size="md" disabled={loading}>
            Contact Us
          </Button>
          <Button variant="light" size="md" disabled={loading}>
            Log Out
          </Button>
        </Col>
      </Row>
    </Layout>
  );
};

export default Account;
