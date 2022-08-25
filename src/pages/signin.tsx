import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useRouter } from "next/router";
import GoogleLogin from "react-google-login";

import API from "../services";
import Layout from "../components/layout";

const Signin: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const responseGoogle = (response) => {
    console.log(response);
  };

  const onSubmit = (data) => {
    setLoading(true);
    API.post("/user/authenticate", data)
      .then((response) => {
        setLoading(false);
        localStorage.setItem("user", JSON.stringify(response.data.data));
        reset();
        swal(
          "Success",
          response.data.data.first_name + ", you are logged in.",
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
          <h1 className="mb-2">Sign in</h1>
          <p className="mb-2 text-muted">Welcome back, you’ve been missed!</p>
          <GoogleLogin
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
            buttonText="Signin with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <p className="mb-2 text-muted">OR</p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup className="mb-2" size="lg">
              <InputGroup.Text id="basic-addon1">
                <MdOutlineAlternateEmail />
              </InputGroup.Text>
              <Form.Control
                placeholder="Your E-mail"
                aria-label="Your E-mail"
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
            <p className="text-start form-text">
              <Link href="/forgot-password-01" passHref>
                <a className="text-dark">Forgot password?</a>
              </Link>
            </p>
            <div className="d-grid gap-2 my-2">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                disabled={loading}
              >
                Sign in
              </Button>
            </div>
            <Form.Text className="text-center">
              You can also sign in with a{" "}
              <Link href="/magic-link-01" passHref>
                <a className="text-dark">Magic Link</a>
              </Link>
            </Form.Text>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default Signin;
