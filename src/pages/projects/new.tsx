import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import swal from "sweetalert";
import {
  Col,
  Row,
  Breadcrumb,
  Container,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";
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
  start_date: Date; //ok
  due_date: Date; //ok
  project_requeriments: string; //ok
  notify_project_following_users: string; //ok
  location_remote: boolean; //ok
  expiration_date: Date; //ok
  require_resume: number; //ok
  request_additional_documents: boolean; //ok
};

const NewProject: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [skills, setSkills] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // storing input name
    if (
      localStorage.getItem("user_kado") &&
      localStorage.getItem("token_kado")
    ) {
      setUser(JSON.parse(localStorage.getItem("user_kado")));
      setToken(JSON.parse(localStorage.getItem("token_kado")));
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
  } = useForm<Inputs>({
    defaultValues: {
      user_id: 3,
      profile_id: 3,
      location_city_id: 1,
      photo_id: 19,
      company_organization_id: 1,
      proposal_title_role: "Web Design",
      proposal_description:
        "Review requirements, study industry standards and apply it to design a website.Deliverables: Collaborate with out Marketing team to define marketing strategy and create marketing collaterals Create the end-to-end website along with Google Analytics ",
      job_skills: "Social Media Marketing,Web Design,User Interface,HTML",
      paid: true,
      duration_hours_week: 30,
      start_date: moment("2021-12-10", "YYYY-MM-DD").toDate(),
      due_date: moment("2021-12-10", "YYYY-MM-DD").toDate(),
      project_requeriments:
        "Familiarity with webiste design best practices, attention to detail and collaborative working style. Website content management software experience preferred ( like Wordpress, Squarespace etc.)",
      notify_project_following_users: "All,Match location",
      location_remote: true,
      expiration_date: moment("2021-12-12", "YYYY-MM-DD").toDate(),
      require_resume: 1,
      request_additional_documents: true,
    },
  });

  const values = watch();

  const users = [
    { value: 1, label: "All" },
    { value: 2, label: "Match Location" },
  ];

  const handleCategory = (id) => {
    setCategory(id);
    setStep(2);
  };

  const getCities = () => {
    API.get("/cities", {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        const results = response.data.data.map((result) => {
          return {
            value: result.id,
            label: result.city,
          };
        });
        localStorage.setItem("cities_kado", JSON.stringify(results));
        setCities(results);
      })
      .catch((err) => {
        setLoading(false);
        console.log(
          "Error",
          err.response?.data?.message
            ? err.response?.data?.message
            : "An error occured: " + err,
          "error"
        );
      });
  };

  const getSkills = () => {
    API.get("/job-skills", {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        const results = response.data.data.map((result) => {
          return {
            value: result.label,
            label: result.label,
          };
        });
        localStorage.setItem("skills_kado", JSON.stringify(results));
        setSkills(results);
      })
      .catch((err) => {
        setLoading(false);
        console.log(
          "Error",
          err.response?.data?.message
            ? err.response?.data?.message
            : "An error occured: " + err,
          "error"
        );
      });
  };

  const getCompanies = () => {
    API.get("/companies", {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        const results = response.data.data.map((result) => {
          return {
            value: result.id,
            label: result.name,
          };
        });
        localStorage.setItem("companies_kado", JSON.stringify(results));
        setCompanies(results);
      })
      .catch((err) => {
        setLoading(false);
        console.log(
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
    const defaultValues = {
      user_id: user ? user.id : 3,
      profile_id: 3,
      location_city_id: 1,
      photo_id: 19,
      company_organization_id: 1,
      proposal_title_role: "Web Design",
      proposal_description:
        "Review requirements, study industry standards and apply it to design a website.Deliverables: Collaborate with out Marketing team to define marketing strategy and create marketing collaterals Create the end-to-end website along with Google Analytics ",
      job_skills: "Social Media Marketing,Web Design,User Interface,HTML",
      paid: true,
      duration_hours_week: 30,
      start_date: "2021-12-10",
      due_date: "2021-12-10",
      project_requeriments:
        "Familiarity with webiste design best practices, attention to detail and collaborative working style. Website content management software experience preferred ( like Wordpress, Squarespace etc.)",
      notify_project_following_users: "All,Match location",
      location_remote: true,
      expiration_date: "2021-12-12",
      require_resume: 1,
      request_additional_documents: true,
    };
    API.post("/project", defaultValues, {
      headers: {
        Authorization: `${token}`,
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

  // useEffect(() => {
  //   console.log(values);
  // }, [values]);

  useEffect(() => {
    if (token) {
      if (localStorage.getItem("cities_kado")) {
        setCities(JSON.parse(localStorage.getItem("cities_kado")));
      }
      if (localStorage.getItem("companies_kado")) {
        setCompanies(JSON.parse(localStorage.getItem("companies_kado")));
      }
      if (localStorage.getItem("skills_kado")) {
        setSkills(JSON.parse(localStorage.getItem("skills_kado")));
      }

      getCompanies();
      getCities();
      getSkills();
    }
  }, [token]);

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
                    defaultValue=""
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
                    initialValue={values.proposal_description}
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
                    defaultValue=""
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
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      value={values.paid ? 1 : 2}
                      checked={values.paid === true}
                      onChange={() => setValue("paid", !values.paid)}
                    />
                  </div>
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
                    initialValue={values.project_requeriments}
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
                    defaultValue=""
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
                <Col sm={3} className="mb-2 d-flex align-items-center">
                  <div className="form-check form-check-inline me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="location_remote"
                      id="inlineRadio1"
                      value={1}
                      checked={values.location_remote === true}
                      onChange={() => setValue("location_remote", true)}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Remote
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="location_remote"
                      id="inlineRadio2"
                      value={2}
                      checked={values.location_remote === false}
                      onChange={() => setValue("location_remote", false)}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Local
                    </label>
                  </div>
                </Col>
                <Col sm={5} className="mb-2">
                  {!values.location_remote && (
                    <Select
                      defaultValue=""
                      placeholder="Select city"
                      options={cities}
                      control={control}
                      name="location_city_id"
                      required={true}
                      setValue={setValue}
                      errors={errors}
                    />
                  )}
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
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="require_resume"
                      id="inlineRadio3"
                      value={1}
                      checked={values.require_resume === 1}
                      onChange={() => setValue("require_resume", 1)}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio3">
                      Yes
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="require_resume"
                      id="inlineRadio4"
                      value={2}
                      checked={values.require_resume === 2}
                      onChange={() => setValue("require_resume", 2)}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio4">
                      No
                    </label>
                  </div>
                </Col>
                <Form.Label column sm={4}>
                  Request Additional Documents
                </Form.Label>
                <Col sm={8} className="mb-2 mt-1">
                  <div className="form-check form-switch form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="request_additional_documents"
                      value={1}
                      checked={values.request_additional_documents === true}
                      onChange={() =>
                        setValue(
                          "request_additional_documents",
                          !values.request_additional_documents
                        )
                      }
                    />
                  </div>
                </Col>
                <Col md={12} className="text-center my-2">
                  <Button type="submit" size="lg" disabled={loading}>
                    {loading && <Spinner animation="border" />}{" "}
                    {loading ? "Publishing" : "Preview and Submit"}
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
