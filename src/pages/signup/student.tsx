import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup, Card } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";
import Image from "next/image";
import { useRouter } from "next/router";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

import Layout from "../../components/main-layout";
import API from "../../services";

const Student: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [base64File, setBase64File] = useState();
  const [user, setUser] = useState();
  const [step, setStep] = useState(1);
  const [active, setActive] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    data.account_id = 1;
    API.post("/user", data)
      .then((response) => {
        setLoading(false);
        setUser(response.data.user);
        reset();
        setStep(2);
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

  const googleSignup = (data) => {
    setLoading(true);
    data.account_id = 1;
    API.post("/user/authenticate-google", data)
      .then((response) => {
        setLoading(false);
        setUser(response.data.user);
        reset();
        setStep(2);
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

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileRead = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    setBase64File(base64);
  };

  const uploadPhoto = () => {
    const data = {
      base64Image: base64File,
      fileName: "teste.png",
      user_id: user.id,
    };
    setLoading(true);
    API.post("/user/upload-single-base64", data, {
      headers: {
        Authorization: `${user.token}`,
      },
    })
      .then((response) => {
        setLoading(false);
        reset();
        setStep(3);
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

  const updateProfile = (data) => {
    data.user_id = user.id;
    setLoading(true);
    API.put("/user/update-profile", data)
      .then((response) => {
        setLoading(false);
        reset();
        setStep(4);
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
      <Row className="justify-content-center">
        {step === 1 && (
          <Col md={5} className="bg-white rounded shadow p-2 text-center">
            <h1 className="mb-2">Getting Started</h1>
            <p className="mb-2 text-muted">Create an account to continue!</p>
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
                  googleSignup(user);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
            <p className="mb-2 text-muted">OR</p>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Control
                      placeholder="First Name"
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
                      type="text"
                      size="lg"
                      isInvalid={errors.last_name ? true : false}
                      {...register("last_name", { required: true })}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <InputGroup className="mb-2" size="lg">
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
              <InputGroup className="mb-2" size="lg">
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
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  disabled={loading}
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
                src={base64File ? base64File : "/images/photo.png"}
                width="151"
                height="151"
                alt="React Bootstrap logo"
              />
            </div>

            <Form>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Control
                  type="file"
                  size="lg"
                  accept="image/*"
                  onChange={(e) => handleFileRead(e)}
                />
              </Form.Group>
            </Form>

            <div className="d-grid gap-2 my-2">
              <Button
                variant="primary"
                type="button"
                size="lg"
                disabled={!base64File}
                onClick={() => uploadPhoto()}
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

            <Form onSubmit={handleSubmit(updateProfile)}>
              <Row>
                <Col>
                  <Form.Group className="mb-2">
                    <Form.Control
                      placeholder="Intro yourself"
                      as="textarea"
                      size="lg"
                      rows={3}
                      isInvalid={errors.intro_yourself ? true : false}
                      {...register("intro_yourself", { required: true })}
                    />
                  </Form.Group>
                  <div className="d-grid gap-2 mt-2">
                    <Button variant="primary" type="submit" size="lg">
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
            <h3 className="mb-2 text-danger">PAGE IN PROGRESS</h3>
            <h2 className="mb-2">Project Interest</h2>
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
