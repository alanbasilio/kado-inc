import type { NextPage } from "next";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Image from "next/image";
import { useRouter } from "next/router";

import Layout from "@/components/dashboard-layout";
import API from "@/services";

const Settings: NextPage = () => {
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
    <Layout title="Edit Profile">
      <Row
        className=" bg-white rounded shadow p-2"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Col md={12}>
          <h4 className="mb-2">Personal and Company Information</h4>
        </Col>
        <Row>
          <Col className="d-flex align-items-center mb-2">
            <Image
              className="img-fluid border rounded-circle"
              src="/images/photo.png"
              width="151"
              height="151"
              alt="React Bootstrap logo"
            />
            <Button className="mx-2" variant="primary" type="button">
              Upload new picture
            </Button>
            <Button variant="light" type="button">
              Remove
            </Button>
          </Col>
        </Row>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder="First Name"
              type="text"
              isInvalid={errors.first_name ? true : false}
              {...register("first_name", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              placeholder="Last Name"
              type="text"
              isInvalid={errors.last_name ? true : false}
              {...register("last_name", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              placeholder="Email Address"
              type="email"
              isInvalid={errors.email ? true : false}
              {...register("email", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              placeholder="Phone Number"
              type="tel"
              isInvalid={errors.phone ? true : false}
              {...register("phone", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col md={12}>
          <Form.Group className="mb-2">
            <Form.Label>About</Form.Label>
            <Form.Control
              placeholder="About"
              as="textarea"
              rows={3}
              isInvalid={errors.about ? true : false}
              {...register("about", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              placeholder="Company Name"
              type="text"
              isInvalid={errors.company ? true : false}
              {...register("company", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Location</Form.Label>
            <Form.Control
              placeholder="Location"
              type="text"
              isInvalid={errors.location ? true : false}
              {...register("location", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Website</Form.Label>
            <Form.Control
              placeholder="Website"
              type="url"
              isInvalid={errors.website ? true : false}
              {...register("website", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Company Phone Number</Form.Label>
            <Form.Control
              placeholder="Company Phone Number"
              type="tel"
              isInvalid={errors.company_phone ? true : false}
              {...register("company_phone", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col md={12} className="text-end">
          <Button variant="primary" type="submit" disabled={loading}>
            {loading && <Spinner animation="border" />}{" "}
            {loading ? "Loading..." : "Submit"}
          </Button>
        </Col>
      </Row>
    </Layout>
  );
};

export default Settings;
