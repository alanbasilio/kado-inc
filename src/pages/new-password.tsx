import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import swal from "sweetalert";

import Layout from "../components/main-layout";
import API from "../services";

const NewPassword: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { token } = router.query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirm_password) {
      swal("Error", "The passwords must match.", "error");
      return;
    }

    setLoading(true);
    API.post("/user/update-password", data, {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        setLoading(false);
        swal("Success", "Your password was updated.", "success").then(
          function () {
            router.push("/signin");
          }
        );
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
          <h2 className="mb-2">Create New Password</h2>
          <p className="mb-2 text-muted">
            Your new password must be different from previously used passswords.
          </p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup className="mb-2" size="lg">
              <Form.Control
                placeholder="Enter your password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                type="password"
                isInvalid={errors.password ? true : false}
                {...register("password", { required: true })}
              />
            </InputGroup>
            <InputGroup className="mb-2" size="lg">
              <Form.Control
                placeholder="Confirm your password"
                aria-label="Confirm Password"
                aria-describedby="basic-addon1"
                type="password"
                isInvalid={errors.confirm_password ? true : false}
                {...register("confirm_password", { required: true })}
              />
            </InputGroup>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                disabled={loading}
              >
                Create
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default NewPassword;
