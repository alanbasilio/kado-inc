import type { NextPage } from "next";
import Image from "next/future/image";
import { useState } from "react";
import { Button, Col, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

import Layout from "@/components/main-layout";
import { registerUser } from "@/store/slices/userSlice/userActions";
import { useDispatch, useSelector } from "react-redux";

const Company: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isWaitingList, setIsWaitingList] = useState(true);
  const [step, setStep] = useState(1);

  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.account_id = 3;
    dispatch(registerUser(data));
  };

  return (
    <Layout signin>
      <Row
        className="justify-content-center"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        {isWaitingList && (
          <Col md={5} className="bg-white rounded shadow p-2 text-center">
            <h2 className="mb-2">Join Waitlist</h2>
            <p className="mb-2 text-muted">Create an account to continue!</p>

            <Form.Group className="mb-2">
              <Form.Control
                placeholder="Company Name"
                type="text"
                isInvalid={errors.name ? true : false}
                {...register("name", { required: true })}
              />
            </Form.Group>

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
            <Form.Group
              className="mb-2 text-start text-muted"
              id="formGridCheckbox"
            >
              <Form.Check
                type="checkbox"
                label="I agree to the Terms & Conditions"
                isInvalid={errors.agree ? true : false}
                {...register("agree", { required: true })}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" disabled={loading}>
                {loading && <Spinner animation="border" className="me-2" />}
                {loading ? "Loading..." : "Join Waitlist"}
              </Button>
            </div>
          </Col>
        )}
        {!isWaitingList && step === 1 && (
          <Col md={5} className="bg-white rounded shadow p-2 text-center">
            <p className="mb-2 text-muted">Step 1 of 2</p>
            <h2 className="mb-2">Upload your photo</h2>
            <div className="mb-2">
              <Image
                className="img-fluid border rounded-circle"
                src="/images/photo.png"
                width="151"
                height="151"
                alt=""
              />
            </div>

            <Button className="w-50" variant="light" type="button">
              Upload Photo
            </Button>
            <div className="d-grid gap-2 my-2">
              <Button
                variant="primary"
                type="button"
                onClick={() => setStep(2)}
              >
                Next
              </Button>
              <a className="text-muted" onClick={() => setStep(2)}>
                Skip
              </a>
            </div>
          </Col>
        )}
        {!isWaitingList && step === 2 && (
          <Col md={5} className="bg-white rounded shadow p-2 text-center">
            <p className="mb-2 text-muted">Step 2 of 2</p>
            <h2 className="mb-2">Intro yourself</h2>

            <Row>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Control
                    placeholder="Intro yourself"
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <div className="d-grid gap-2 mt-2">
                  <Button
                    variant="primary"
                    type="button"
                    onClick={() => setStep(3)}
                  >
                    Next
                  </Button>
                  <a className="text-muted" onClick={() => setStep(4)}>
                    Skip
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        )}
        {!isWaitingList && step === 3 && (
          <Col md={5} className="bg-white rounded shadow p-2 text-center">
            <h2 className="mb-2">Company Info</h2>
            <p className="text-muted mb-2">Add company details</p>

            <InputGroup className="mb-2">
              <Form.Control placeholder="Name" type="text" />
            </InputGroup>
            <InputGroup className="mb-2">
              <Form.Control placeholder="Location" type="email" />
            </InputGroup>
            <InputGroup className="mb-2">
              <Form.Control placeholder="Website" type="url" />
            </InputGroup>

            <InputGroup className="mb-2">
              <Form.Control placeholder="Phone Number" type="tel" />
            </InputGroup>

            <div className="d-grid gap-2">
              <Button
                variant="primary"
                type="button"
                onClick={() => setStep(4)}
              >
                Continue
              </Button>
            </div>
          </Col>
        )}
        {!isWaitingList && step === 4 && (
          <Col md={5} className="bg-white rounded shadow p-2 text-center">
            <h2 className="mb-2">Hang tight</h2>
            <h3 className="mb-2">You are currently the number 2345</h3>
            <div className="mb-2">
              <Image
                width="214"
                height="172"
                src="/images/sticker.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <Form.Group className="mb-2">
              <Form.Control placeholder="Enter VIP code" type="email" />
            </Form.Group>

            <div className="d-grid gap-2 my-2">
              <Button
                variant="primary"
                type="button"
                onClick={() => alert("Access unlocked")}
              >
                Unlock Access
              </Button>
            </div>
          </Col>
        )}
      </Row>
    </Layout>
  );
};

export default Company;
