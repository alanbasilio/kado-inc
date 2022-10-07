import UserImage from "@/utils/userImage";
import Image from "next/future/image";
import Link from "next/link";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { TbDots } from "react-icons/tb";
import { TiAttachment } from "react-icons/ti";
import { HiOutlineClock } from "react-icons/hi";
import ModalApply from "@/components/modal-apply";
import { useState } from "react";

const CardProjectCompact = ({ myproject, project }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let badgeBg;
  let badgeText;
  if (project?.ProjectStatus?.id === 1) {
    badgeBg = "light";
    badgeText = "todo";
  }
  if (project?.ProjectStatus?.id === 2) {
    badgeBg = "warning";
    badgeText = "ongoing";
  }
  if (project?.ProjectStatus?.id === 3) {
    badgeBg = "success";
    badgeText = "completed";
  }
  if (project?.ProjectStatus?.id === 4) {
    badgeBg = "danger";
    badgeText = "overdue";
  }
  return (
    <>
      <Container className="my-4 px-2">
        <Row>
          <Col md={3}>
            <Image
              className="img-fluid border rounded-circle"
              src={UserImage()}
              width="55"
              height="55"
              alt=""
            />
          </Col>
          <Col md={9}>
            <p className="fs-14 fw-bold mb-1">
              {project?.project_title_role}{" "}
              <Link href="/home" passHref>
                <a className="fs-4 float-end mt-n1">
                  <TbDots />
                </a>
              </Link>
            </p>

            <p>
              {project?.CompanyOrganization && (
                <span className="me-1 fs-10">
                  {project?.CompanyOrganization?.name}
                </span>
              )}
              <Badge bg="light" pill className="me-1 fs-10 ">
                <TiAttachment className="fs-12" /> 21
              </Badge>
              <Badge bg="light" pill className="me-1 fs-10 ">
                <HiOutlineClock className="fs-12" /> 1 Days left
              </Badge>
              {myproject && (
                <Link href={`/projects/${project?.id}`} passHref>
                  <a className="float-end fw-medium">View</a>
                </Link>
              )}
            </p>

            {myproject ? (
              <Badge bg={badgeBg} className="text-uppercase">
                {badgeText}
              </Badge>
            ) : (
              <Button
                variant="lightblue"
                size="sm"
                className="w-50"
                onClick={handleShow}
              >
                Apply
              </Button>
            )}
          </Col>
        </Row>
      </Container>
      <ModalApply show={show} handleClose={handleClose} project={project} />
    </>
  );
};

export default CardProjectCompact;
