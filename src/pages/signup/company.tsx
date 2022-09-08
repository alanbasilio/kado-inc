import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";
import Image from "next/image";
import { useRouter } from "next/router";

import Layout from "../../components/main-layout";
import API from "../../services";

const Company: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isWaitingList, setIsWaitingList] = useState(true);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.account_id = 3;
    setLoading(true);
    API.post("/user", data)
      .then((response) => {
        setLoading(false);
        reset();
        swal(
          "Success",
          "Now you are in the waiting list. We will contact you very soon.",
          "success"
        ).then(function () {
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
    <Layout>
      <Row
        className="justify-content-center"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        {isWaitingList && (
          <Col md={5} className="bg-white rounded shadow p-2 text-center">
            <h1 className="mb-2">Join Waitlist</h1>
            <p className="mb-2 text-muted">Create an account to continue!</p>
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
                Join Waitlist
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
                alt="React Bootstrap logo"
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
          </Col>
        )}
        {!isWaitingList && step === 3 && (
          <Col md={5} className="bg-white rounded shadow p-2 text-center">
            <h1 className="mb-2">Company Info</h1>
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
                alt="React Bootstrap logo"
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
