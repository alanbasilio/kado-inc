import moment from "moment";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";

import Layout from "@/components/dashboard-layout";
import HTMLEditor from "@/components/editor";
import FileUploader from "@/components/file-uploader";
import Select from "@/components/select";
import categories from "@/mocks/project-categories.json";

import DatePicker from "@/components/datepicker";
import {
  getCities,
  getCompanies,
  getSkills,
  newProject,
  NewProjectData,
} from "@/store/slices/projectsSlice/projectsActions";
import { IsStudent } from "@/utils/profileType";
import UseProjects from "@/utils/useProjects";
import userImage from "@/utils/userImage";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const NewProject: NextPage = () => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState();
  const [subtitle, setSubtitle] = useState("Pick a category to get started.");
  const { loading, companies, cities, skills } = UseProjects();
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch<any>();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    setFocus,
    formState: { errors, isValid },
  } = useForm<NewProjectData>();

  const values = watch();

  const users = [
    { value: 1, label: "All" },
    { value: 2, label: "Match Location" },
  ];

  const handleCategory = (id) => {
    setCategory(id);
    setStep(2);
    setSubtitle("Add the details of the project.");
  };

  const onSubmit: SubmitHandler<NewProjectData> = (data) => {
    data.duration_hours_week = Number(data.duration_hours_week);
    data.start_date = moment(data.start_date).format("YYYY-MM-DD");
    data.due_date = moment(data.due_date).format("YYYY-MM-DD");
    data.expiration_date = moment(data.expiration_date).format("YYYY-MM-DD");
    data.location_remote = data.location_remote === "1";
    data.require_resume = data.require_resume === "1";
    data.user_id = userInfo?.id;
    dispatch(newProject(data));
  };

  useEffect(() => {
    dispatch(getCompanies());
    dispatch(getCities());
    dispatch(getSkills());
  }, [dispatch]);

  const breadcrumbArray = [
    "Select Project Template",
    "Add Details",
    "Preview Project",
    "Post Project",
  ];

  useEffect(() => {
    if (IsStudent()) {
      router.push("/home");
    }
  }, [router]);

  useEffect(() => {
    console.log("values", values);
  }, [values]);

  return (
    <Layout
      title="Create Project"
      subtitle={subtitle}
      breadcrumb={breadcrumbArray}
      step={step}
      setStep={setStep}
    >
      <Form onSubmit={handleSubmit(onSubmit)} className="container-md">
        {step === 1 && (
          <Row>
            {categories.map((item) => (
              <Col key={item.id} md={4} sm={6} className="my-1">
                <a
                  href="#"
                  className="bg-white rounded pt-4 pb-2 px-5 text-center d-block"
                  onClick={() => handleCategory(item.id)}
                >
                  <Image width={65} height={65} src={item.icon} alt="title" />
                  <h5 className="mt-2 mb-0">{item.title}</h5>
                </a>
              </Col>
            ))}
          </Row>
        )}

        {step === 2 && (
          <>
            <Row className="mb-3 bg-white p-2 rounded">
              <Col md={12}>
                <h5>Company Details</h5>
                <hr className="my-2" />
              </Col>
              <Form.Label column md={4}>
                Company / Organization
              </Form.Label>
              <Col md={8}>
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
              <Col md={12}>
                <h5>Project Basics</h5>
                <hr className="my-2" />
              </Col>
              <Form.Label column md={4}>
                Project Title/Role
              </Form.Label>
              <Col md={8} className="mb-md-2">
                <Form.Control
                  placeholder="Enter a title"
                  isInvalid={errors.project_title_role && true}
                  {...register("project_title_role", { required: true })}
                />
              </Col>
              <Form.Label column md={4}>
                Project Description
              </Form.Label>
              <Col md={8} className="mb-md-3">
                <HTMLEditor
                  initialValue={values.project_description}
                  name={"project_description"}
                  control={control}
                  required={true}
                  setValue={setValue}
                />
              </Col>
              <Form.Label column md={4}>
                Project Icon
              </Form.Label>
              <Col md={8} className="mb-md-2">
                <FileUploader
                  setValue={setValue}
                  iconName="icon"
                  base64Name="base64Image"
                />
              </Col>
              <Form.Label column md={4}>
                Job Skills
              </Form.Label>
              <Col md={8}>
                <Select
                  defaultValue=""
                  placeholder="Search your skills"
                  options={skills}
                  control={control}
                  name="job_skill_ids"
                  required={true}
                  setValue={setValue}
                  errors={errors}
                  multiple
                />
              </Col>
            </Row>
            <Row className="mb-3 bg-white p-2 rounded">
              <Col md={12}>
                <h5>Additional details</h5>
                <hr className="my-2" />
              </Col>

              <Form.Label column md={4}>
                Paid
              </Form.Label>
              <Col md={8} className="pt-1 mb-2">
                <Form.Check type="switch" id="paid" {...register("paid")} />
              </Col>

              <Form.Label column md={4}>
                Duration (hours)
              </Form.Label>
              <Col md={8} className="mb-md-2">
                <Form.Control
                  placeholder="Hours"
                  type="number"
                  isInvalid={errors.duration_hours_week && true}
                  {...register("duration_hours_week", { required: true })}
                />
              </Col>
              <Form.Label column md={4}>
                Start Date
              </Form.Label>
              <Col md={8} className="mb-md-2">
                <DatePicker
                  required={true}
                  errors={errors}
                  control={control}
                  name="start_date"
                  setValue={setValue}
                  minDate={moment().toDate()}
                />
              </Col>
              <Form.Label column md={4}>
                Due Date
              </Form.Label>
              <Col md={8} className="mb-md-2">
                <DatePicker
                  required={true}
                  errors={errors}
                  control={control}
                  name="due_date"
                  setValue={setValue}
                  minDate={values.start_date}
                />
              </Col>
              <Form.Label column md={4}>
                Project Requirements
              </Form.Label>
              <Col md={8}>
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
              <Col md={12}>
                <h5>Application Preferences</h5>
                <hr className="my-2" />
              </Col>
              <Form.Label column md={4}>
                Notify this project to the following users
              </Form.Label>
              <Col md={8}>
                <Select
                  defaultValue=""
                  placeholder="Select users"
                  options={users}
                  control={control}
                  name="notify_project_following_user_ids"
                  required={true}
                  setValue={setValue}
                  errors={errors}
                  multiple
                />
              </Col>
              <Form.Label column md={4}>
                Location
              </Form.Label>
              <Col md={3} className="d-flex align-items-center">
                <Form.Check
                  type="radio"
                  label="Remote"
                  value={1}
                  className="me-2 mb-md-2"
                  {...register("location_remote")}
                />
                <Form.Check
                  type="radio"
                  label="Local"
                  value={2}
                  className="mb-md-2"
                  {...register("location_remote")}
                />
              </Col>
              <Col md={5}>
                {values.location_remote === "2" && (
                  <Select
                    defaultValue=""
                    placeholder="Select city"
                    options={cities}
                    control={control}
                    name="location_city_id"
                    required={true}
                    setValue={setValue}
                    errors={errors}
                    className="mb-md-2"
                  />
                )}
              </Col>
              <Form.Label column md={4}>
                Expiration Date
              </Form.Label>
              <Col md={8}>
                <DatePicker
                  required={true}
                  errors={errors}
                  control={control}
                  name="expiration_date"
                  setValue={setValue}
                  minDate={moment().toDate()}
                />
              </Col>
              <Form.Label column md={4}>
                Require resume
              </Form.Label>
              <Col md={8} className="d-flex align-items-center">
                <Form.Check
                  type="radio"
                  label="Yes"
                  value={1}
                  className="me-2"
                  {...register("require_resume")}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  value={2}
                  {...register("require_resume")}
                />
              </Col>
              <Form.Label column md={4}>
                Request Additional Documents
              </Form.Label>
              <Col md={8} className="pt-1">
                <Form.Check
                  type="switch"
                  id="request_additional_documents"
                  {...register("request_additional_documents")}
                />
              </Col>
              <Col md={12} className="text-center my-2">
                <Button
                  size="lg"
                  onClick={() => {
                    setStep(3);
                    setSubtitle("Preview details of the project");
                    // if (isValid) {
                    //   setStep(3);
                    //   setSubtitle("Preview details of the project");
                    // } else {
                    //   swal("Error", "Please fill all fields", "error");
                    // }
                  }}
                >
                  Preview and Submit
                </Button>
              </Col>
            </Row>
          </>
        )}

        {step === 3 && (
          <Row className="mb-3 bg-white p-2 rounded">
            <Col md={12}>
              <h5>Company Details</h5>
              <hr className="my-2" />
            </Col>
            <Col md={8}>
              <Row className="mb-4 d-flex align-items-center">
                {values.icon && (
                  <Col md={2}>
                    <Image
                      src={values.base64Image}
                      width={47}
                      height={47}
                      alt={"icon"}
                    />
                  </Col>
                )}
                <Col md={9}>
                  <p>Kado</p>
                  <h5 className="fw-semibold">{values.project_title_role}</h5>
                </Col>
              </Row>
              <h5 className="fw-semibold">Project Description</h5>
              <div
                className="text-muted my-2"
                dangerouslySetInnerHTML={{
                  __html: values.project_description,
                }}
              ></div>

              <h5 className="fw-semibold">Project Requirements</h5>
              <div
                className="text-muted my-2"
                dangerouslySetInnerHTML={{
                  __html: values.project_requeriments,
                }}
              ></div>
            </Col>
            <Col md={4}>
              <p>Project Posted By:</p>
              <Row className="mt-1 mb-4 d-flex align-items-center">
                <Col md={3}>
                  <Image
                    src={userImage()}
                    width={47}
                    height={47}
                    alt={"icon"}
                    className="rounded-circle"
                  />
                </Col>

                <Col md={9}>
                  <p className="fw-semibold">
                    {userInfo?.first_name} {userInfo?.last_name}
                  </p>
                  <p className="fw-semibold small">{userInfo?.description}</p>
                </Col>
              </Row>
              <h5 className="fw-semibold">Posted on:</h5>
              <p className="text-muted text-small">{moment().format("LL")}</p>
              <h5 className="fw-semibold">Post Expires:</h5>
              <p className="text-muted text-small">
                {moment(values.expiration_date).format("LL")}
              </p>
              <h5 className="fw-semibold">Duration:</h5>
              <p className="text-muted text-small">
                {values.duration_hours_week} hours/week
              </p>
              <h5 className="fw-semibold">Start Date:</h5>
              <p className="text-muted text-small">
                {moment(values.start_date).format("LL")}
              </p>
              <h5 className="fw-semibold">Due Date:</h5>
              <p className="text-muted text-small">
                {moment(values.due_date).format("LL")}
              </p>
              <h5 className="fw-semibold">Compensation:</h5>
              <p className="text-muted text-small">
                {values.paid ? "Paid" : "Unpaid"}
              </p>
            </Col>
            <Row className="mt-5">
              <Col
                md={{
                  span: 4,
                  offset: 2,
                }}
              >
                <div className="d-grid gap-2">
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      setStep(2);
                      setSubtitle("Add the details of the project.");
                    }}
                  >
                    Go Back and Edit
                  </Button>
                </div>
              </Col>
              <Col md={4}>
                <div className="d-grid">
                  <Button
                    variant="primary"
                    onClick={() => {
                      setStep(4);
                      setSubtitle("Review Terms and Post the Project");
                    }}
                  >
                    Review Terms and Submit
                  </Button>
                </div>
              </Col>
            </Row>
          </Row>
        )}

        {step === 4 && (
          <Row className="mb-3 bg-white p-2 rounded">
            <h5>Project Terms of Service Agreement</h5>
            <hr />

            <Row>
              <Col className="align-items-center mt-2">
                <div
                  className="bg-light"
                  style={{
                    width: "100%",
                    height: "auto",
                    overflow: "hidden",
                    borderRadius: 10,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: 300,
                      overflowY: "scroll",
                      padding: 20,
                      fontSize: 14,
                      lineHeight: "27px",
                      borderRadius: 20,
                    }}
                  >
                    <h4>Project Posting - Terms and Conditions</h4>
                    <p className="mt-2">
                      Thank you for agreeing to post a project and help bridge
                      the gap between education and meaningful work experience
                      within your community. Please read and understand the
                      following terms when posting a project. By submitting your
                      project you are agreeing to the following terms between
                      you, (the “Poster”) and the applicant (the “Project
                      Recipient”). You must agree to these terms to post a
                      project. Please feel free to contact us if you have any
                      questions. Payment for projects If this project is a paid
                      project, you, the Poster, are responsible for arranging
                      payment with the Project Recipient. If payments for the
                      project exceed $600 in any calendar year, the Poster is
                      responsible for any necessary tax documents such as a W9
                      or 1099. Thank you for agreeing to post a project and help
                      bridge the gap between education and meaningful work
                      experience within your community. Please read and
                      understand the following terms when posting a project. By
                      submitting your project you are agreeing to the following
                      terms between you, (the “Poster”) and the applicant (the
                      “Project Recipient”). You must agree to these terms to
                      post a project. Please feel free to contact us if you have
                      any questions. Payment for projects If this project is a
                      paid project, you, the Poster, are responsible for
                      arranging payment with the Project Recipient. If payments
                      for the project exceed $600 in any calendar year, the
                      Poster is responsible for any necessary tax documents such
                      as a W9 or 1099.
                    </p>
                  </div>
                </div>
                <p className="text-muted mt-2">Your Signature</p>
              </Col>
              <Col md={9} className="mx-10">
                <Form.Group>
                  <Form.Control
                    className="text-center"
                    placeholder="Sign your name here"
                    type="text"
                    isInvalid={errors.signature && true}
                    {...register("signature", { required: true })}
                  />
                </Form.Group>
              </Col>
              <Row className="d-flex align-items-center">
                <Col md={6}>
                  <Form>
                    <Form.Check
                      type="checkbox"
                      label="I've read and agree to the terms"
                      isInvalid={errors.agree && true}
                      {...register("agree", { required: true })}
                    />
                  </Form>
                </Col>
                <Col md={6}>
                  <div className="d-grid gap-2">
                    <Button
                      variant={
                        !values.agree || !values.signature ? "light" : "primary"
                      }
                      type="submit"
                      disabled={loading || !values.agree || !values.signature}
                    >
                      {loading && <Spinner animation="border" />}{" "}
                      {loading ? "Publishing" : "Post Project"}
                    </Button>
                  </div>
                </Col>
              </Row>
            </Row>
          </Row>
        )}
      </Form>
    </Layout>
  );
};

export default NewProject;
