import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import swal from "sweetalert";
import { Col, Row, Breadcrumb, Container, Form, Button } from "react-bootstrap";
import moment from "moment";

import Layout from "../../components/dashboard-layout";
import FileUploader from "../../components/file-uploader";
import HTMLEditor from "../../components/editor";
import Select from "../../components/select";
import DatePicker from "../../components/datepicker";

import API from "../../services";
import ProjectCategories from "../../mocks/project-categories.json";
import Image from "next/image";

type Inputs = {
  title: string;
  duration: string;
  city: string;
  skills: [];
  users: [];
  company: string;
  icon: FileList;
  expiration_date: any;
  end_date: any;
  start_date: any;
};

const NewProject: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState();
  const [paid, setPaid] = useState(true);
  const router = useRouter();
  const editorRef = useRef(null);
  const API_KEY = process.env.NEXT_PUBLIC_TINY_CLOUD_KEY;
  const [user, setUser] = useState(null);

  useEffect(() => {
    // storing input name
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    } else {
      router.push("/");
    }
  }, [router]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    setFocus,
    formState: { errors },
  } = useForm<Inputs>();

  const values = watch();

  const companies = [
    { value: 1, label: "Kado Inc" },
    { value: 2, label: "Acme" },
    { value: 3, label: "John e Penny" },
  ];

  const cities = [
    { value: 1, label: "New York" },
    { value: 2, label: "Chicago" },
    { value: 3, label: "Salem" },
  ];

  const users = [
    { value: 1, label: "All" },
    { value: 2, label: "Match Location" },
  ];

  const skills = [
    { value: 1, label: "Javascript" },
    { value: 2, label: "CSS" },
    { value: 3, label: "HTML5" },
    { value: 4, label: "Design" },
    { value: 5, label: "Marketing" },
    { value: 6, label: "Technology" },
  ];

  const handlePaid = (checked) => {
    setPaid(checked);
  };

  const handleCategory = (id) => {
    setCategory(id);
    setStep(2);
  };

  const getCities = () => {
    API.get("/cities", {
      headers: {
        Authorization: `${user.token}`,
      },
    })
      .then((response) => {
        console.log(response);
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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    API.post("/project", data, {
      headers: {
        Authorization: `${user.token}`,
      },
    })
      .then((response) => {
        setLoading(false);
        reset();
        swal("Success", "Project created", "success").then(function () {
          router.push("/my-projects");
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

  useEffect(() => {
    if (user) {
      getCities();
    }
  }, [user]);

  useEffect(() => {
    setValue("end_date", null);
  }, [values.start_date, setValue]);

  return (
    <Layout>
      <Breadcrumb className="mb-2">
        <Breadcrumb.Item active={step === 1}>
          Select Project Template
        </Breadcrumb.Item>
        <Breadcrumb.Item active={step === 2}>Add Details</Breadcrumb.Item>
        <Breadcrumb.Item active={step === 3}>Preview Project</Breadcrumb.Item>
        <Breadcrumb.Item active={step === 4}>Post Project</Breadcrumb.Item>
      </Breadcrumb>

      <h3 className="fw-semibold">Create Project</h3>
      {step === 1 && (
        <>
          <p className="text-muted mb-4">Pick a category to get started</p>
          <Container className="container-md">
            <Row>
              {ProjectCategories.map((category) => (
                <Col key={category.id} md={4} sm={6} className="my-1">
                  <a
                    href="#"
                    className="bg-white rounded pt-4 pb-2 px-5 text-center d-block"
                    onClick={() => handleCategory(category.id)}
                  >
                    <Image
                      className="no-border"
                      width={65}
                      height={65}
                      src={category.icon}
                      alt="title"
                    />
                    <h5 className="mt-2 mb-0">{category.title}</h5>
                  </a>
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}

      {step === 2 && (
        <>
          <p className="text-muted mb-4">Add the details of the project.</p>
          <Container
            className="container-md"
            as="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Row className="mb-3 bg-white p-2 rounded">
              <Col sm={12}>
                <h5>Company Details</h5>
                <hr className="my-2" />
              </Col>
              <Form.Label column sm={4}>
                Company / Organization
              </Form.Label>
              <Col sm={8} className="mb-2">
                <Select
                  placeholder="Select or Search for a Company"
                  options={companies}
                  control={control}
                  name="company"
                  required={true}
                  setValue={setValue}
                  errors={errors}
                />
              </Col>
            </Row>
            <Row className="mb-3 bg-white p-2 rounded">
              <Col sm={12}>
                <h5>Project Basics</h5>
                <hr className="my-2" />
              </Col>
              <Form.Label column sm={4}>
                Project Title/Role
              </Form.Label>
              <Col sm={8} className="mb-2">
                <Form.Control
                  placeholder="Enter a title"
                  type="text"
                  isInvalid={errors.title && true}
                  {...register("title", { required: true })}
                />
              </Col>
              <Form.Label column sm={4}>
                Project Description
              </Form.Label>
              <Col sm={8} className="mb-2">
                <HTMLEditor
                  name={"description"}
                  control={control}
                  required={true}
                  setValue={setValue}
                />
              </Col>
              <Form.Label column sm={4}>
                Project Icon
              </Form.Label>
              <Col sm={8} className="mb-2">
                <FileUploader required={true} setValue={setValue} name="icon" />
              </Col>
              <Form.Label column sm={4}>
                Job Skills
              </Form.Label>
              <Col sm={8} className="mb-2">
                <Select
                  placeholder="Search your skills"
                  options={skills}
                  control={control}
                  name="skills"
                  required={true}
                  setValue={setValue}
                  errors={errors}
                  multiple
                />
              </Col>
            </Row>
            <Row className="mb-3 bg-white p-2 rounded">
              <Col sm={12}>
                <h5>Additional details</h5>
                <hr className="my-2" />
              </Col>
              <Form.Label column sm={4}>
                Paid
              </Form.Label>
              <Col sm={8} className="mb-2">
                <Form.Check type="switch" id="paid" />
              </Col>

              <Form.Label column sm={4}>
                Duration (hours)
              </Form.Label>
              <Col sm={8} className="mb-2">
                <Form.Control
                  placeholder="Hours"
                  type="number"
                  isInvalid={errors.duration && true}
                  {...register("duration", { required: true })}
                  className="w-25"
                />
              </Col>
              <Form.Label column sm={4}>
                Start Date
              </Form.Label>
              <Col sm={8} className="mb-2">
                <DatePicker
                  required={true}
                  errors={errors}
                  control={control}
                  name="start_date"
                  setValue={setValue}
                  minDate={moment().toDate()}
                />
              </Col>
              <Form.Label column sm={4}>
                Due Date
              </Form.Label>
              <Col sm={8} className="mb-2">
                <DatePicker
                  required={true}
                  errors={errors}
                  control={control}
                  name="end_date"
                  setValue={setValue}
                  minDate={values.start_date}
                />
              </Col>
              <Form.Label column sm={4}>
                Project Requirements
              </Form.Label>
              <Col sm={8} className="mb-2">
                <HTMLEditor
                  name={"requirements"}
                  control={control}
                  required={true}
                  setValue={setValue}
                />
              </Col>
            </Row>

            <Row className="mb-3 bg-white p-2 rounded">
              <Col sm={12}>
                <h5>Application Preferences</h5>
                <hr className="my-2" />
              </Col>
              <Form.Label column sm={4}>
                Notify this project to the following users
              </Form.Label>
              <Col sm={8} className="mb-2">
                <Select
                  placeholder="Select users"
                  options={users}
                  control={control}
                  name="users"
                  required={true}
                  setValue={setValue}
                  errors={errors}
                  multiple
                />
              </Col>
              <Form.Label column sm={4}>
                Location
              </Form.Label>
              <Col sm={3} className="mb-2">
                <Form.Check
                  inline
                  label="Remote"
                  name="location"
                  type="radio"
                  checked
                />
                <Form.Check inline name="location" label="Local" type="radio" />
              </Col>
              <Col sm={5} className="mb-2">
                <Select
                  placeholder="Select city"
                  options={cities}
                  control={control}
                  name="city"
                  required={true}
                  setValue={setValue}
                  errors={errors}
                />
              </Col>
              <Form.Label column sm={4}>
                Expiration Date
              </Form.Label>
              <Col sm={8} className="mb-2">
                <DatePicker
                  required={true}
                  errors={errors}
                  control={control}
                  name="expiration_date"
                  setValue={setValue}
                  minDate={moment().toDate()}
                />
              </Col>
              <Form.Label column sm={4}>
                Require resume
              </Form.Label>
              <Col sm={8} className="mb-2">
                <Form.Check
                  inline
                  label="Yes"
                  name="resume"
                  type="radio"
                  checked
                />
                <Form.Check inline label="No" name="resume" type="radio" />
              </Col>
              <Form.Label column sm={4}>
                Request Additional Documents
              </Form.Label>
              <Col sm={8} className="mb-2">
                <Form.Check inline name="documents" type="switch" />
              </Col>
              <Col md={12} className="text-center my-2">
                <Button type="submit" size="lg">
                  Preview and Submit
                </Button>
              </Col>
            </Row>
          </Container>
        </>
      )}

      {step === 3 && (
        <>
          <p className="text-muted mb-4">Pick a category to get started</p>
          <Container className="container-md">
            <Row>
              <Col></Col>
            </Row>
          </Container>
        </>
      )}
    </Layout>
  );
};

export default NewProject;
