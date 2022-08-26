import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";
import Image from "next/image";
import { useRouter } from "next/router";

import Layout from "../components/layout";
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
        <h2 className="mb-2">Edit Profile</h2>
      </Row>
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
            <Button className="mx-2" variant="primary" type="button" size="lg">
              Upload new picture
            </Button>
            <Button variant="light" type="button" size="lg">
              Remove
            </Button>
          </Col>
        </Row>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder="First Name"
              aria-label="First Name"
              type="text"
              size="lg"
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
              aria-label="Last Name"
              type="text"
              size="lg"
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
              aria-label="Email Address"
              type="text"
              size="lg"
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
              aria-label="Phone Number"
              type="text"
              size="lg"
              isInvalid={errors.last_name ? true : false}
              {...register("last_name", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col md={12}>
          <Form.Group className="mb-2">
            <Form.Label>About</Form.Label>
            <Form.Control
              placeholder="About"
              aria-label="About"
              aria-describedby="basic-addon1"
              as="textarea"
              size="lg"
              rows={3}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              placeholder="Company Name"
              aria-label="Company Name"
              type="text"
              size="lg"
              isInvalid={errors.first_name ? true : false}
              {...register("first_name", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Location</Form.Label>
            <Form.Control
              placeholder="Location"
              aria-label="Location"
              type="text"
              size="lg"
              isInvalid={errors.last_name ? true : false}
              {...register("last_name", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Website</Form.Label>
            <Form.Control
              placeholder="Website"
              aria-label="Website"
              type="text"
              size="lg"
              isInvalid={errors.first_name ? true : false}
              {...register("first_name", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Company Phone Number</Form.Label>
            <Form.Control
              placeholder="Company Phone Number"
              aria-label="Company Phone Number"
              type="text"
              size="lg"
              isInvalid={errors.last_name ? true : false}
              {...register("last_name", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col md={12} className="text-end">
          <Button variant="primary" type="button" size="lg">
            Upload new picture
          </Button>
        </Col>
      </Row>
    </Layout>
  );
};

export default Company;
