import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useRouter } from "next/router";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

import API from "../../services";
import Layout from "../../components/main-layout";

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

  const onSubmit = (data) => {
    setLoading(true);
    API.post("/user/authenticate", data)
      .then((response) => {
        setLoading(false);
        localStorage.setItem("user_kado", JSON.stringify(response.data.data));
        localStorage.setItem("token_kado", JSON.stringify(response.data.token));
        reset();
        router.push("/home");
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

  const googleSignin = async (user) => {
    setLoading(true);
    API.post("/user/authenticate-google", user, {
      headers: {
        Authorization: `${user.token_id}`,
      },
    })
      .then((response) => {
        setLoading(false);
        localStorage.setItem("user_kado", JSON.stringify(response.data.data));
        localStorage.setItem("token_kado", JSON.stringify(response.data.token));
        reset();
        router.push("/home");
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
    <Layout signup>
      <Row className="justify-content-center">
        <Col md={5} className="bg-white rounded shadow p-2 text-center">
          <h2 className="mb-2">Sign in</h2>
          <p className="mb-2 text-muted">Welcome back, you’ve been missed!</p>
          <div className="mb-2 d-flex justify-content-center">
            <GoogleLogin
              onSuccess={({ credential }) => {
                const userInfo = jwtDecode(credential);
                const user = {
                  email: userInfo.email,
                  first_name: userInfo.family_name,
                  last_name: userInfo.given_name,
                  google_id: userInfo.sub,
                  image_url_google: userInfo.picture,
                  name: userInfo.name,
                  token_id: credential,
                };
                googleSignin(user);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
          <p className="mb-2 text-muted">OR</p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup className="mb-2">
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
            <p className="text-start form-text">
              <Link href="/signin/forgot-password" passHref>
                <a className="text-dark">Forgot password?</a>
              </Link>
            </p>
            <div className="d-grid gap-2 my-2">
              <Button variant="primary" type="submit" disabled={loading}>
                Sign in
              </Button>
            </div>
            <Form.Text className="text-center">
              You can also sign in with a{" "}
              <Link href="/signin/magic-link-01" passHref>
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
