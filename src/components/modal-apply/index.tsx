import UserImage from "@/utils/userImage";
import Image from "next/future/image";
import Link from "next/link";
import { Badge, Button, Col, Container, Modal, Row } from "react-bootstrap";
import { HiOutlineClock } from "react-icons/hi";
import { TbDots } from "react-icons/tb";
import { TiAttachment } from "react-icons/ti";

const ModalApply = ({ show, handleClose, project }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{project.project_title_role}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={2}>
              <Image
                className="img-fluid border rounded-circle"
                src={UserImage()}
                width="55"
                height="55"
                alt=""
              />
            </Col>
            <Col md={10}>
              {project?.CompanyOrganization && (
                <p className="fs-20">{project?.CompanyOrganization?.name}</p>
              )}

              <p>
                <Badge bg="light" pill className="me-1 fs-10 ">
                  <TiAttachment className="fs-12" /> 21
                </Badge>
                <Badge bg="light" pill className="me-1 fs-10 ">
                  <HiOutlineClock className="fs-12" /> 1 Days left
                </Badge>
              </p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" className="w-100">
          Apply
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalApply;
