import type { NextPage } from "next";
import { Button, Col, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MdOutlineAlternateEmail } from "react-icons/md";

import Layout from "@/components/main-layout";
import { forgotPassword } from "@/store/slices/userSlice/userActions";
import { useDispatch, useSelector } from "react-redux";

const ForgotPassword: NextPage = () => {
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.url_origin = `${window.location.origin}/signin/new-password`;
    dispatch(forgotPassword(data));
  };

  return (
    <Layout signup>
      <Row className="justify-content-center">
        <Col md={5} className="bg-white rounded shadow p-2 text-center">
          <h2 className="mb-2">Forgot Password</h2>
          <p className="mb-2 text-muted">
            Please enter the email associated with your account and we’ll send
            an email with instructions to reset your password.
          </p>
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
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" disabled={loading}>
                {loading && <Spinner animation="border" />}{" "}
                {loading ? "Loading..." : "Send email instructions"}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default ForgotPassword;
