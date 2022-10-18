import Layout from "@/components/dashboard-layout";
import ModalApply from "@/components/modal-apply";
import {
  getProject,
  setBookmark,
} from "@/store/slices/projectsSlice/projectsActions";
import { IsStudent } from "@/utils/profileType";
import UserImage from "@/utils/userImage";
import moment from "moment";
import type { NextPage } from "next";
import Image from "next/future/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Badge, Button, Col, Row } from "react-bootstrap";
import { HiOutlineClock } from "react-icons/hi";
import { IoBriefcase } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const ProjectDetails: NextPage = () => {
  const { project } = useSelector((state) => state.projects);
  const { userInfo } = useSelector((state) => state.user);
  const [showApply, setShowApply] = useState(false);

  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getProject({ id: id }));
  }, [dispatch, id]);

  useEffect(() => {
    if (!project?.Users.find((user) => user.id === userInfo?.id)) {
      setShowApply(true);
    }
  }, [project, userInfo]);

  const handleBookmark = () => {
    dispatch(
      setBookmark({
        id: id,
        data: {
          favorites: [
            {
              estudent_id: userInfo?.id,
              favorite: true,
            },
          ],
        },
      })
    );
  };

  return (
    <Layout title={project?.project_title_role}>
      <Row className="bg-white rounded p-4">
        <Col
          md={IsStudent() && showApply ? 9 : 12}
          className="d-flex align-items-center"
        >
          <Image
            className="img-fluid border rounded-circle me-2"
            src={UserImage()}
            width="55"
            height="55"
            alt=""
          />
          <div>
            {project?.CompanyOrganization && (
              <p className="fs-20 text-muted">
                {project?.CompanyOrganization?.name}
              </p>
            )}
            <p className="mb-0">
              {project?.location_remote && (
                <Badge bg="primary" pill className="me-1 fs-14">
                  Remote
                </Badge>
              )}
              <Badge bg="primary" pill className="me-1 fs-14">
                <IoBriefcase /> {project?.duration_hours_week} hrs/week
              </Badge>
            </p>
          </div>
        </Col>
        {IsStudent() && showApply && (
          <Col md={3} className="text-end">
            <Button onClick={handleShow}>Apply</Button>
            <Button
              onClick={handleBookmark}
              variant="outline-primary"
              className="ms-2"
            >
              Save
            </Button>
          </Col>
        )}
        <Col md={12}>
          <p className="text-muted fs-12 my-2">
            Posted on {moment(project?.created_at).format("LL")}
          </p>
        </Col>
        <Col md={3}>
          <p className="text-uppercase text-muted fs-12">Start Date</p>
          <Badge bg="light" pill className="text-muted">
            <HiOutlineClock /> {moment(project?.start_date).format("LL")}
          </Badge>
        </Col>
        <Col md={3}>
          <p className="text-uppercase text-muted fs-12">Compensation</p>
          <Badge bg="light" pill className="text-muted">
            ${project?.duration_hours_week} /hr
          </Badge>
        </Col>
        <Col md={6}>
          <p className="text-uppercase text-muted fs-12">Timeline</p>
          <Badge bg="light" pill className="text-muted text-uppercase">
            <HiOutlineClock />{" "}
            {moment(project?.due_date).diff(
              moment(project?.start_date),
              "days"
            )}{" "}
            days
          </Badge>
        </Col>
        <Col md={12}>
          <hr className="my-5" />
          <h6 className="fw-medium mb-3">Description</h6>
          <div
            className="text-muted fs-12 fw-medium mb-5"
            dangerouslySetInnerHTML={{
              __html: project?.project_description,
            }}
          />
          {/* <Button variant="link" className="p-0 text-uppercase fs-12" size="sm">
            show full description
          </Button> */}
        </Col>
        <Col md={12}>
          <h6 className="fw-medium mb-3">Attachment</h6>
          <p className="text-muted fs-12 fw-medium mb-5">
            {/* {project?.PhotoProject
              ? project?.PhotoProject?.map((photo, index) => (
                  <Image
                    key="index"
                    src={photo.icon}
                    width={228}
                    height={138}
                    className="img-fluid me-1"
                    alt=""
                  />
                ))
              : "No attachments yet"} */}
            No attachments yet
          </p>
        </Col>
        <Col md={12}>
          <h6 className="fw-medium mb-3">Skills</h6>
          <p className="text-muted fs-12 fw-medium mb-5">
            {project?.Skill
              ? project?.Skill?.map((skill, index) => (
                  <Badge key="index" bg="primary" pill className="me-1 fs-14">
                    {skill.label}
                  </Badge>
                ))
              : "No skills yet"}
          </p>
        </Col>
        {/* <Col md={12}>
          <h6 className="fw-medium mb-3">Posted by</h6>
          <p className="text-muted fs-12 fw-medium mb-5"></p>
        </Col> */}
        {IsStudent() && showApply && (
          <Col md={12}>
            <Button onClick={handleShow}>Apply</Button>
          </Col>
        )}
      </Row>
      <ModalApply show={show} handleClose={handleClose} project={project} />
    </Layout>
  );
};

export default ProjectDetails;
