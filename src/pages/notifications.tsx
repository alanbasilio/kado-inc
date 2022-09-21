import type { NextPage } from "next";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Image from "next/image";
import { useRouter } from "next/router";

import Layout from "@/components/dashboard-layout";
import API from "@/services";

const Account: NextPage = () => {
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
    <Layout>
      <Row>
        <h2 className="mb-2">Notifications</h2>
      </Row>
      <Row
        className=" bg-white rounded shadow p-2"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Col md={12}>
          <h4 className="mb-2">Email</h4>
          <hr />

          <Form.Check
            type="switch"
            id="referral-offers"
            label="Referral offers"
            className="my-2"
          />
          <Form.Check
            type="switch"
            id="newsletter"
            label="Newsletter"
            className="my-2"
          />
          <Form.Check
            type="switch"
            id="unread-messages-reminder"
            label="Unread message(s) reminder"
            className="my-2"
          />
          <Form.Check
            type="switch"
            id="invoice-received"
            label="Invoice received"
            className="my-2"
          />
          <Form.Check
            type="switch"
            id="unpaid-invoice-reminder"
            label="Unpaid invoice reminder (weekly)"
            className="my-2"
          />
          <Form.Check
            type="switch"
            id="new-activity-on-a-task"
            label="New activity on a task"
            className="my-2"
          />
          <Form.Check
            type="switch"
            id="all-email-notifications"
            label="All Email Notifications"
            className="my-2"
          />
        </Col>
      </Row>

      <Row
        className=" bg-white rounded shadow p-2 my-5"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Col md={12}>
          <h4 className="mb-2">Push</h4>
          <hr />

          <Form.Check
            type="switch"
            id="push-referral-offers"
            label="Referral offers"
            className="my-2"
          />
          <Form.Check
            type="switch"
            id="push-newsletter"
            label="Newsletter"
            className="my-2"
          />
          <Form.Check
            type="switch"
            id="push-unread-messages-reminder"
            label="Unread message(s) reminder"
            className="my-2"
          />
          <Form.Check
            type="switch"
            id="push-invoice-received"
            label="Invoice received"
            className="my-2"
          />
          <Form.Check
            type="switch"
            id="push-unpaid-invoice-reminder"
            label="Unpaid invoice reminder (weekly)"
            className="my-2"
          />
          <Form.Check
            type="switch"
            id="push-new-activity-on-a-task"
            label="New activity on a task"
            className="my-2"
          />
          <Form.Check
            type="switch"
            id="push-all-email-notifications"
            label="All Email Notifications"
            className="my-2"
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default Account;
