import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

import Layout from "@/components/dashboard-layout";
import API from "@/services";

const Settings: NextPage = () => {
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
    API.post("/user", data)
      .then((response) => {
        setLoading(false);
        reset();
        swal("Success", "Message", "success").then(function () {
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
    <Layout title="Notification Settings">
      <Row>
        <Col md={12} className="mt-2">
          <div className="bg-white round p-2">
            <h5 className="mb-2 fw-semibold">Email</h5>
            <hr />
            <Form.Check
              type="switch"
              reverse={true}
              id="referral-offers"
              label="Referral offers"
              className="my-2"
            />
            <Form.Check
              type="switch"
              reverse={true}
              id="newsletter"
              label="Newsletter"
              className="my-2"
            />
            <Form.Check
              type="switch"
              reverse={true}
              id="unread-messages-reminder"
              label="Unread message(s) reminder"
              className="my-2"
            />
            <Form.Check
              type="switch"
              reverse={true}
              id="invoice-received"
              label="Invoice received"
              className="my-2"
            />
            <Form.Check
              type="switch"
              reverse={true}
              id="unpaid-invoice-reminder"
              label="Unpaid invoice reminder (weekly)"
              className="my-2"
            />
            <Form.Check
              type="switch"
              reverse={true}
              id="new-activity-on-a-task"
              label="New activity on a task"
              className="my-2"
            />
            <Form.Check
              type="switch"
              reverse={true}
              id="all-email-notifications"
              label="All Email Notifications"
              className="my-2"
            />
          </div>
        </Col>

        <Col md={12} className="mt-2">
          <div className="bg-white round p-2">
            <h5 className="mb-2 fw-semibold">Push</h5>
            <hr />
            <Form.Check
              type="switch"
              reverse={true}
              id="push-referral-offers"
              label="Referral offers"
              className="my-2"
            />
            <Form.Check
              type="switch"
              reverse={true}
              id="push-newsletter"
              label="Newsletter"
              className="my-2"
            />
            <Form.Check
              type="switch"
              reverse={true}
              id="push-unread-messages-reminder"
              label="Unread message(s) reminder"
              className="my-2"
            />
            <Form.Check
              type="switch"
              reverse={true}
              id="push-invoice-received"
              label="Invoice received"
              className="my-2"
            />
            <Form.Check
              type="switch"
              reverse={true}
              id="push-unpaid-invoice-reminder"
              label="Unpaid invoice reminder (weekly)"
              className="my-2"
            />
            <Form.Check
              type="switch"
              reverse={true}
              id="push-new-activity-on-a-task"
              label="New activity on a task"
              className="my-2"
            />
            <Form.Check
              type="switch"
              reverse={true}
              id="push-all-email-notifications"
              label="All Email Notifications"
              className="my-2"
            />
          </div>
        </Col>
        <Col md={12}>
          <h3 className="my-4 fw-semibold">Account Settings</h3>
        </Col>
        <Col md={12}>
          <div className="bg-white round p-2">
            <Row>
              <Col md={12}>
                <h5 className="mb-2 fw-semibold">Account Access</h5>
                <hr />
              </Col>
              <Col md={6}>
                <Form.Group className="mb-2">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    placeholder="Email Address"
                    type="text"
                    isInvalid={errors.first_name ? true : false}
                    {...register("first_name", { required: true })}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-2">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    placeholder="Phone Number"
                    type="text"
                    isInvalid={errors.last_name ? true : false}
                    {...register("last_name", { required: true })}
                  />
                </Form.Group>
              </Col>
              <Col className="text-center text-md-end mb-2" md={12}>
                <Button variant="primary" disabled={loading}>
                  Save Changes
                </Button>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-2">
                  <Form.Label>Old Password</Form.Label>
                  <Form.Control
                    placeholder="Old Password"
                    type="email"
                    isInvalid={errors.email ? true : false}
                    {...register("email", { required: true })}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-2">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    placeholder="New Password"
                    type="tel"
                    isInvalid={errors.phone ? true : false}
                    {...register("phone", { required: true })}
                  />
                </Form.Group>
              </Col>
              <Col className="mb-2 text-center text-md-end" md={12}>
                <Button variant="primary" disabled={loading}>
                  Change
                </Button>
              </Col>
              <Col className="text-center" md={12}>
                <hr />

                <Button className="me-1" variant="light" disabled={loading}>
                  Request Account Deletion
                </Button>

                <Button className="me-1" variant="light" disabled={loading}>
                  Contact Us
                </Button>
                <Button variant="light" disabled={loading}>
                  Log Out
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default Settings;
