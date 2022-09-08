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
  user_id: number; //user
  profile_id: number; //user?
  location_city_id: number; //ok
  photo_id: number; //upload
  company_organization_id: number; //ok
  proposal_title_role: string; //ok
  proposal_description: string; //ok
  job_skills: string; //ok
  paid: boolean; //ok
  duration_hours_week: number; //ok
  start_date: string; //ok
  due_date: string; //ok
  project_requeriments: string; //ok
  notify_project_following_users: string; //ok
  location_remote: boolean; //ok
  expiration_date: string; //ok
  require_resume: number; //ok
  request_additional_documents: boolean; //ok
};

const NewProject: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState();
  // const [paid, setPaid] = useState(true);
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

  // const handlePaid = (checked) => {
  //   setPaid(checked);
  // };

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
    // const data = {
    //   user_id: 3,
    //   profile_id: 3,
    //   location_city_id: 1,
    //   photo_id: 19,
    //   company_organization_id: 1,
    //   proposal_title_role: "Web Desingn",
    //   proposal_description:
    //     "Review requirements, study industry standards and apply it to design a website.Deliverables: Collaborate with out Marketing team to define marketing strategy and create marketing collaterals Create the end-to-end website along with Google Analytics ",
    //   job_skills: "Social Media Marketing,Web Design,User Interface,HTML",
    //   paid: true,
    //   duration_hours_week: 30,
    //   start_date: "2021-12-10",
    //   due_date: "2021-12-10",
    //   project_requeriments:
    //     "Familiarity with webiste design best practices, attention to detail and collaborative working style. Website content management software experience preferred ( like Wordpress, Squarespace etc.)",
    //   notify_project_following_users: "All,Match location",
    //   location_remote: true,
    //   expiration_date: "2021-12-12",
    //   require_resume: 1,
    //   request_additional_documents: true,
    // };

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
    console.log(values);
  }, [values]);

  useEffect(() => {
    setValue("due_date", null);
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <Container className="container-md">
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
                    name="company_organization_id"
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
                    isInvalid={errors.proposal_title_role && true}
                    {...register("proposal_title_role", { required: true })}
                  />
                </Col>
                <Form.Label column sm={4}>
                  Project Description
                </Form.Label>
                <Col sm={8} className="mb-2">
                  <HTMLEditor
                    name={"proposal_description"}
                    control={control}
                    required={true}
                    setValue={setValue}
                  />
                </Col>
                <Form.Label column sm={4}>
                  Project Icon
                </Form.Label>
                <Col sm={8} className="mb-2">
                  <FileUploader
                    required={true}
                    setValue={setValue}
                    name="icon"
                  />
                </Col>
                <Form.Label column sm={4}>
                  Job Skills
                </Form.Label>
                <Col sm={8} className="mb-2">
                  <Select
                    placeholder="Search your skills"
                    options={skills}
                    control={control}
                    name="job_skills"
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
                  <Form.Check
                    type="switch"
                    id="paid"
                    isInvalid={errors.paid && true}
                    {...register("paid")}
                  />
                </Col>

                <Form.Label column sm={4}>
                  Duration (hours)
                </Form.Label>
                <Col sm={8} className="mb-2">
                  <Form.Control
                    placeholder="Hours"
                    type="number"
                    isInvalid={errors.duration_hours_week && true}
                    {...register("duration_hours_week", { required: true })}
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
                    name="due_date"
                    setValue={setValue}
                    minDate={values.start_date}
                  />
                </Col>
                <Form.Label column sm={4}>
                  Project Requirements
                </Form.Label>
                <Col sm={8} className="mb-2">
                  <HTMLEditor
                    name={"project_requeriments"}
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
                    name="notify_project_following_users"
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
                    type="radio"
                    checked
                    {...register("location_remote")}
                  />
                  <Form.Check
                    inline
                    label="Local"
                    type="radio"
                    {...register("location_remote")}
                  />
                </Col>
                <Col sm={5} className="mb-2">
                  <Select
                    placeholder="Select city"
                    options={cities}
                    control={control}
                    name="location_city_id"
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
                    type="radio"
                    checked
                    {...register("require_resume")}
                  />
                  <Form.Check
                    inline
                    label="No"
                    type="radio"
                    {...register("require_resume")}
                  />
                </Col>
                <Form.Label column sm={4}>
                  Request Additional Documents
                </Form.Label>
                <Col sm={8} className="mb-2">
                  <Form.Check
                    inline
                    type="switch"
                    {...register("request_additional_documents")}
                  />
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
      </form>
    </Layout>
  );
};

export default NewProject;
