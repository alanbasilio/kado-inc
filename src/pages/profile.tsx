import type { NextPage } from "next";
import Image from "next/future/image";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";

import Layout from "@/components/dashboard-layout";
import userImage from "@/utils/userImage";
import { useSelector } from "react-redux";

const Profile: NextPage = () => {
  const { loading, userInfo } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: userInfo,
  });

  const onSubmit = (data) => {};

  return (
    <Layout title="Edit Profile">
      <Row className="mt-2 m-0 bg-white rounded p-2">
        <Col md={12}>
          <h4 className="mb-2">Personal and Company Information</h4>
        </Col>
        <Row>
          <Col className="d-flex align-items-center mb-2">
            <Image
              className="img-fluid border rounded-circle"
              src={userImage()}
              width="151"
              height="151"
              alt=""
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
            {loading && <Spinner animation="border" className="me-2" />}
            {loading ? "Loading..." : "Submit"}
          </Button>
        </Col>
      </Row>
    </Layout>
  );
};

export default Profile;
