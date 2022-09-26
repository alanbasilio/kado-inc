import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row, Spinner } from "react-bootstrap";

import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import {
  userLogin,
  userLoginGoogle,
} from "@/store/slices/userSlice/userActions";

import Layout from "@/components/main-layout";
import { useRouter } from "next/router";

type FormValues = {
  email: string;
  password: string;
};

const Signin: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loading, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch<any>();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(userLogin(data));
  };


  useEffect(() => {
    if (userInfo) {
      router.push("/home");
    }
  }, [userInfo, router]);

  return (
    <Layout signup>
      <Row className="justify-content-center">
        <Col md={5} className="bg-white rounded shadow p-2 text-center">
          <h2 className="mb-2">Sign in</h2>
          <p className="mb-2 text-muted">Welcome back, you’ve been missed!</p>
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
                {loading && <Spinner animation="border" />}{" "}
                {loading ? "Loading..." : "Sign in"}
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
