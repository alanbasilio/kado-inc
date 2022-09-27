import type { NextPage } from "next";
import { useState } from "react";
import { Button, Col, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";

import Layout from "@/components/main-layout";
import { registerUser } from "@/store/slices/userSlice/userActions";
import { useDispatch, useSelector } from "react-redux";

const School: NextPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.account_id = 2;
    dispatch(registerUser(data));
  };

  return (
    <Layout signin>
      <Row className="justify-content-center">
        <Col md={5} className="bg-white rounded shadow p-2 text-center">
          <h2 className="mb-2">Getting started</h2>
          <p className="mb-2 text-muted">
            Complete the form below and our Partner Relations Team will be in
            touch soon!
          </p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-2">
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
                  <Form.Control
                    placeholder="Last Name"
                    type="text"
                    isInvalid={errors.last_name ? true : false}
                    {...register("last_name", { required: true })}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-2">
              <Form.Control
                placeholder="School Name"
                type="text"
                isInvalid={errors.school_name ? true : false}
                {...register("school_name", { required: true })}
              />
            </Form.Group>

            <InputGroup className="mb-2">
              <InputGroup.Text>
                <MdOutlineAlternateEmail />
              </InputGroup.Text>
              <Form.Control
                placeholder="Contact Email"
                type="email"
                isInvalid={errors.email ? true : false}
                {...register("email", { required: true })}
              />
            </InputGroup>

            <InputGroup className="mb-2">
              <InputGroup.Text>
                <FaLock />
              </InputGroup.Text>
              <Form.Control
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                isInvalid={errors.password ? true : false}
                {...register("password", { required: true })}
              />
              <InputGroup.Text onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </InputGroup.Text>
            </InputGroup>
            <Form.Group className="mb-2">
              <PhoneInputWithCountry
                name="phone_number"
                control={control}
                className="form-control"
                placeholder="Phone Number (optional)"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                placeholder="Any additional comments (optional)"
                as="textarea"
                rows={3}
                {...register("any_additional_comments")}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" disabled={loading}>
                {loading && <Spinner animation="border" />}{" "}
                {loading ? "Loading..." : "Submit"}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default School;
