import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import Layout from "@/components/dashboard-layout";
import Image from "next/image";
import userImage from "@/utils/userImage";

const Settings: NextPage = () => {
  const router = useRouter();
  const { loading, userInfo } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: userInfo,
  });

  const {
    register: registerAccount,
    handleSubmit: handleSubmitAccount,
    formState: { errors: errorsAccount },
  } = useForm({
    defaultValues: userInfo,
  });

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword },
  } = useForm();

  const onSubmit = (data) => {};
  const updatePassword = (data) => {};

  const notificationArray = [
    { id: "referral_orders_notifications", label: "Referral offers" },
    { id: "newsletter_notifications", label: "Newsletter" },
    { id: "unread_message_notifications", label: "Unread message(s) reminder" },
    { id: "invoice_received_notifications", label: "Invoice received" },
    {
      id: "unpaid_invoice_notifications",
      label: "Unpaid invoice reminder (weekly)",
    },
    { id: "new_activity_notifications", label: "New activity on a task" },
    { id: "email_notifications", label: "All Email Notifications" },
  ];

  const pushArray = [
    { id: "referral_orders_push", label: "Referral offers" },
    { id: "newsletter_push", label: "Newsletter" },
    { id: "unread_message_push", label: "Unread message(s) reminder" },
    { id: "invoice_received_push", label: "Invoice received" },
    {
      id: "unpaid_invoice_push",
      label: "Unpaid invoice reminder",
    },
    { id: "new_activity_push", label: "New activity on a task" },
    { id: "email_push", label: "All Push Notifications" },
  ];

  const handleSwitch = (e, itemsArray) => {
    if (e.target.name === itemsArray[itemsArray.length - 1].id) {
      itemsArray.forEach((item) => {
        setValue(item.id, e.target.checked);
      });
    }
  };

  return (
    <Layout title={"Notification"}>
      <Row>
        <Col md={12} className="mt-2">
          <div className="bg-white round p-2">
            <h5 className="fw-semibold mb-0">Email</h5>
            <hr />
            {notificationArray.map((item, index) => (
              <Form.Check
                key={index}
                type="switch"
                reverse={true}
                label={item.label}
                className="my-2"
                id={item.id}
                {...register(item.id)}
                onClick={(e) => handleSwitch(e, notificationArray)}
              />
            ))}
          </div>
        </Col>

        <Col md={12} className="mt-2">
          <div className="bg-white round p-2">
            <h5 className="fw-semibold mb-0">Push</h5>
            <hr />
            {pushArray.map((item, index) => (
              <Form.Check
                key={index}
                type="switch"
                reverse={true}
                label={item.label}
                className="my-2"
                id={item.id}
                {...register(item.id)}
                onClick={(e) => handleSwitch(e, pushArray)}
              />
            ))}
          </div>
        </Col>

        <Col md={12}>
          <h3 className="my-4 fw-semibold">Account</h3>
        </Col>
        <Col md={12}>
          <div className="bg-white round p-2">
            <Row>
              <Col md={12}>
                <h5 className="fw-semibold mb-0">Account Access</h5>
                <hr />
              </Col>
              <Row as="form" onSubmit={handleSubmitAccount(onSubmit)}>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      className="bg-light border-0"
                      placeholder="Email Address"
                      type="email"
                      isInvalid={errorsAccount.email ? true : false}
                      {...registerAccount("email", { required: true })}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      className="bg-light border-0"
                      placeholder="Phone Number"
                      type="tel"
                      isInvalid={errorsAccount.phone_number ? true : false}
                      {...registerAccount("phone_number", { required: true })}
                    />
                  </Form.Group>
                </Col>
                <Col className="text-center text-md-end my-2" md={12}>
                  <Button variant="primary" disabled={loading} type="submit">
                    Save Changes
                  </Button>
                </Col>
              </Row>
              <Row as="form" onSubmit={handleSubmitPassword(updatePassword)}>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Old Password</Form.Label>
                    <Form.Control
                      className="bg-light border-0"
                      placeholder="Old Password"
                      type="password"
                      isInvalid={errorsPassword.newPassword ? true : false}
                      {...registerPassword("newPassword", { required: true })}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      className="bg-light border-0"
                      placeholder="Password"
                      type="password"
                      isInvalid={
                        errorsPassword.confirmNewPassword ? true : false
                      }
                      {...registerPassword("confirmNewPassword", {
                        required: true,
                      })}
                    />
                  </Form.Group>
                </Col>
                <Col className="text-center text-md-end mt-2" md={12}>
                  <Button variant="primary" disabled={loading} type="submit">
                    Change
                  </Button>
                </Col>
              </Row>
              <Col className="text-center" md={12}>
                <hr />

                <Button
                  className="me-1 bg-light text-muted"
                  variant="light"
                  disabled={loading}
                >
                  Request Account Deletion
                </Button>

                <Button
                  className="me-1 bg-light text-muted"
                  variant="light"
                  disabled={loading}
                >
                  Contact Us
                </Button>

                <Button
                  className="bg-light text-muted"
                  variant="light"
                  disabled={loading}
                >
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
