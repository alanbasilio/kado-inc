import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";
import Image from "next/image";
import { useRouter } from "next/router";

import Layout from "../components/layout";
import API from "../services";

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
      <Row>
        <h2 className="mb-2">Upload your photo</h2>
      </Row>
      <Row
        className=" bg-white rounded shadow p-2"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Col md={12}>
          <h4 className="mb-2">Personal and Company Information</h4>
        </Col>
        <Col md={2}>
          <div className="mb-2">
            <Image
              className="img-fluid border rounded-circle"
              src="/images/photo.png"
              width="151"
              height="151"
              alt="React Bootstrap logo"
            />
          </div>
        </Col>
        <Col md={3}>
          <Button className="w-100" variant="primary" type="button" size="lg">
            Upload new picture
          </Button>
        </Col>
        <Col md={2}>
          <Button className="w-100" variant="light" type="button" size="lg">
            Remove
          </Button>
        </Col>
      </Row>
    </Layout>
  );
};

export default Company;
