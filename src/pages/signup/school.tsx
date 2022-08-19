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

import Layout from "../../components/layout";
import API from "../../services";

const School: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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
        console.log(response);
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
        swal("Oops", "An error occured: " + err, "error");
      });
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
            <Form.Group className="mb-2">
              <Form.Control
                placeholder="Contact Email"
                aria-label="Contact Email"
                type="email"
                size="lg"
                isInvalid={errors.email ? true : false}
                {...register("email", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                placeholder="Password"
                aria-label="Password"
                type="password"
                size="lg"
                isInvalid={errors.password ? true : false}
                {...register("password", { required: true })}
              />
            </Form.Group>
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