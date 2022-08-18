import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";

import Layout from "../../components/layout";
import API from "../../services";
import Image from "next/image";

const Company: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isWaitingList, setIsWaitingList] = useState(true);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.account_id = 1;
    API.post("/user", data)
      .then((response) => {
        console.log(response);
        reset();
        swal(
          "Success",
          "Now you are in the waiting list. We will contact you very soon.",
          "success"
        );
      })
      .catch((err) => {
        swal("Oops", "An error occured: " + err, "error");
      });
  };

  return (
    <Layout>
      <Row className="justify-content-center">
        {isWaitingList && (
          <Col md={5} className="bg-white rounded shadow p-2 text-center">
            <h1 className="mb-2">Join Waitlist</h1>
            <p className="mb-2 text-muted">Create an account to continue!</p>
            <a className="mb-2 d-block">
              <Image
                src="/images/login-google.png"
                width={231}
                height={51}
                alt="login with google"
              />
            </a>
            <p className="mb-2 text-muted">OR</p>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col>
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
                <Col>
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
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  disabled={loading}
                >
                  Join Waitlist
                </Button>
              </div>
            </Form>
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
                alt="React Bootstrap logo"
              />
            </div>

            <Button className="w-50" variant="light" type="button" size="lg">
              Upload Photo
            </Button>
            <div className="d-grid gap-2 my-2">
              <Button
                variant="primary"
                type="button"
                size="lg"
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
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-2">
                    <Form.Control
                      placeholder="Intro yourself"
                      aria-label="Intro yourself"
                      aria-describedby="basic-addon1"
                      as="textarea"
                      size="lg"
                      rows={3}
                    />
                  </Form.Group>
                  <div className="d-grid gap-2 mt-2">
                    <Button
                      variant="primary"
                      type="button"
                      size="lg"
                      onClick={() => setStep(4)}
                    >
                      Next
                    </Button>
                    <a className="text-muted" onClick={() => setStep(4)}>
                      Skip
                    </a>
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
        )}
        {!isWaitingList && step === 3 && (
          <Col md={5} className="bg-white rounded shadow p-2 text-center">
            <h1 className="mb-2">Company Info</h1>
            <p className="text-muted mb-2">Add company details</p>

            <Form>
              <InputGroup className="mb-2" size="lg">
                <Form.Control
                  placeholder="Name"
                  aria-label="Name"
                  aria-describedby="basic-addon1"
                  type="text"
                />
              </InputGroup>
              <InputGroup className="mb-2" size="lg">
                <Form.Control
                  placeholder="Location"
                  aria-label="Location"
                  aria-describedby="basic-addon1"
                  type="email"
                />
              </InputGroup>
              <InputGroup className="mb-2" size="lg">
                <Form.Control
                  placeholder="Website"
                  aria-label="Website"
                  aria-describedby="basic-addon1"
                  type="url"
                />
              </InputGroup>

              <InputGroup className="mb-2" size="lg">
                <Form.Control
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  aria-describedby="basic-addon1"
                  type="tel"
                />
              </InputGroup>

              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="button"
                  size="lg"
                  onClick={() => setStep(4)}
                >
                  Continue
                </Button>
              </div>
            </Form>
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
                alt="React Bootstrap logo"
              />
            </div>
            <Form>
              <Form.Group className="mb-2">
                <Form.Control
                  placeholder="Enter VIP code"
                  aria-label="First Name"
                  aria-describedby="basic-addon1"
                  type="email"
                  size="lg"
                />
              </Form.Group>
            </Form>
            <div className="d-grid gap-2 my-2">
              <Button
                variant="primary"
                type="button"
                size="lg"
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
