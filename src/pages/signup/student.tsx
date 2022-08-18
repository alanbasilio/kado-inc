import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup, Card } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";
import Image from "next/image";

import Layout from "../../components/layout";
import API from "../../services";

const Student: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [active, setActive] = useState("");

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
        {step === 1 && (
          <Col md={5} className="bg-white rounded shadow p-2 text-center">
            <h1 className="mb-2">Getting Started</h1>
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
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-2">
                    <Form.Control
                      placeholder="First Name"
                      aria-label="First Name"
                      aria-describedby="basic-addon1"
                      type="email"
                      size="lg"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-2">
                    <Form.Control
                      placeholder="Last Name"
                      aria-label="Last Name"
                      aria-describedby="basic-addon1"
                      type="email"
                      size="lg"
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
                />
              </InputGroup>
              <InputGroup className="mb-2" size="lg">
                <InputGroup.Text id="basic-addon1">
                  <FaLock />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  type={showPassword ? "text" : "password"}
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
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="button"
                  size="lg"
                  onClick={() => setStep(2)}
                >
                  Signup
                </Button>
              </div>
            </Form>
          </Col>
        )}

        {step === 2 && (
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
                onClick={() => setStep(3)}
              >
                Next
              </Button>
              <a className="text-muted" onClick={() => setStep(3)}>
                Skip
              </a>
            </div>
          </Col>
        )}

        {step === 3 && (
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

        {step === 4 && (
          <Col md={8} className="text-center">
            <h2 className="mb-2 fs-2">Project Interest</h2>
            <p className="mb-5 text-muted">
              Select a maximum of 5 categories from below
            </p>
            <Row className="mb-5">
              <Col>
                <Card>
                  <Card.Img
                    className="no-border"
                    width={65}
                    height={65}
                    src="/images/design.png"
                  />

                  <Card.Body>
                    <Card.Title>Graphics & Design</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    className="no-border"
                    width={65}
                    height={65}
                    src="/images/marketing.png"
                  />

                  <Card.Body>
                    <Card.Title>Digital Marketing</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    className="no-border"
                    width={65}
                    height={65}
                    src="/images/write.png"
                  />

                  <Card.Body>
                    <Card.Title>Writing & Translation</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <Card>
                  <Card.Img
                    className="no-border"
                    width={65}
                    height={65}
                    src="/images/video.png"
                  />

                  <Card.Body>
                    <Card.Title>Video & Animation</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    className="no-border"
                    width={65}
                    height={65}
                    src="/images/music.png"
                  />

                  <Card.Body>
                    <Card.Title>Music & Audio</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    width={65}
                    height={65}
                    src="/images/programming.png"
                  />

                  <Card.Body>
                    <Card.Title>Programming & Tech</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <Card>
                  <Card.Img
                    className="no-border"
                    width={65}
                    height={65}
                    src="/images/data.png"
                  />

                  <Card.Body>
                    <Card.Title>Data</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    className="no-border"
                    width={65}
                    height={65}
                    src="/images/business.png"
                  />

                  <Card.Body>
                    <Card.Title>Business</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    className="no-border"
                    width={65}
                    height={65}
                    src="/images/lifestyle.png"
                  />

                  <Card.Body>
                    <Card.Title>Lifestyle</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Button
              variant="primary"
              type="button"
              size="lg"
              className="w-50"
              disabled={!active}
              onClick={() => alert("ok")}
            >
              Continue
            </Button>
          </Col>
        )}
      </Row>
    </Layout>
  );
};

export default Student;
