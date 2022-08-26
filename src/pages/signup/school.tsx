import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";
import Image from "next/image";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { useRouter } from "next/router";
import GoogleLogin from "react-google-login";

import Layout from "../../components/layout";
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

  const responseGoogleSuccess = (response) => {
    console.log(response);
    swal("Success", response, "success");
  };

  const responseGoogleError = (response) => {
    console.log("Error", response.error, "error");
  };

  return (
    <Layout>
      <Row className="justify-content-center">
        <Col md={5} className="bg-white rounded shadow p-2 text-center">
          <h2 className="mb-2">Getting started</h2>
          <p className="mb-2 text-muted">
            Complete the form below and our Partner Relations Team will be in
            touch soon!
          </p>
          <div className="mb-2">
            <GoogleLogin
              clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
              buttonText="Signup with Google"
              onSuccess={responseGoogleSuccess}
              onFailure={responseGoogleError}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <p className="mb-2 text-muted">OR</p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-2">
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
            </Row>
            <Form.Group className="mb-2">
              <Form.Control
                placeholder="School Name"
                aria-label="School Name"
                type="text"
                size="lg"
                isInvalid={errors.school_name ? true : false}
                {...register("school_name", { required: true })}
              />
            </Form.Group>

            <InputGroup className="mb-2" size="lg">
              <InputGroup.Text id="basic-addon1">
                <MdOutlineAlternateEmail />
              </InputGroup.Text>
              <Form.Control
                placeholder="Contact Email"
                aria-label="Contact Email"
                aria-describedby="basic-addon1"
                type="email"
                isInvalid={errors.email ? true : false}
                {...register("email", { required: true })}
              />
            </InputGroup>

            <InputGroup className="mb-2" size="lg">
              <InputGroup.Text id="basic-addon2">
                <FaLock />
              </InputGroup.Text>
              <Form.Control
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon2"
                type={showPassword ? "text" : "password"}
                isInvalid={errors.password ? true : false}
                {...register("password", { required: true })}
              />
              <InputGroup.Text
                id="basic-addon2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </InputGroup.Text>
            </InputGroup>
            <Form.Group className="mb-2">
              <PhoneInputWithCountry
                name="phone_number"
                control={control}
                className="form-control form-control-lg"
                placeholder="Phone Number (optional)"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                placeholder="Any additional comments (optional)"
                aria-label="Any additional comments (optional)"
                as="textarea"
                size="lg"
                rows={3}
                {...register("any_additional_comments")}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                disabled={loading}
              >
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
