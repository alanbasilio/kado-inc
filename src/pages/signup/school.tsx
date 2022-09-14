import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { useRouter } from "next/router";

import Layout from "../../components/main-layout";
import API from "../../services";

const School: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.account_id = 2;
    setLoading(true);
    API.post("/user", data)
      .then((response) => {
        setLoading(false);
        reset();
        swal(
          "Success",
          "Our Partner Relations Team will be in touch soon!",
          "success"
        ).then(function () {
          setLoading(false);
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
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default School;
