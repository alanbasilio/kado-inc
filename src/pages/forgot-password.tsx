import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import swal from "sweetalert";

import Layout from "../components/main-layout";
import API from "../services";

const ForgotPassword: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.url_origin = `${window.location.origin}/new-password`;
    setLoading(true);
    API.post("/user/update-password", data)
      .then((response) => {
        setLoading(false);
        router.push("/email-sent");
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
          <h2 className="mb-2">Forgot Password</h2>
          <p className="mb-2 text-muted">
            Please enter the email associated with your account and we’ll send
            an email with instructions to reset your password.
          </p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup className="mb-2" size="lg">
              <InputGroup.Text id="basic-addon1">
                <MdOutlineAlternateEmail />
              </InputGroup.Text>
              <Form.Control
                placeholder="Your E-mail"
                aria-label="Your E-mail"
                type="email"
                isInvalid={errors.email ? true : false}
                {...register("email", { required: true })}
              />
            </InputGroup>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                disabled={loading}
              >
                Send email instructions
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default ForgotPassword;
