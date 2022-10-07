import HTMLEditor from "@/components/editor";
import UserImage from "@/utils/userImage";
import Image from "next/future/image";
import {
  Badge,
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IoBriefcase } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";

const ModalApply = ({ show, handleClose, project }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    setFocus,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{project?.project_title_role}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container as="form" onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col className="d-flex align-items-center">
              <Image
                className="img-fluid border rounded-circle me-2"
                src={UserImage()}
                width="55"
                height="55"
                alt=""
              />
              <div>
                {project?.CompanyOrganization && (
                  <p className="fs-20">{project?.CompanyOrganization?.name}</p>
                )}

                <p>
                  {project.location_remote && (
                    <Badge bg="primary" pill className="me-1 fs-14">
                      Remote
                    </Badge>
                  )}
                  <Badge bg="primary" pill className="me-1 fs-14">
                    <IoBriefcase /> {project.duration_hours_week} hrs/week
                  </Badge>
                </p>
              </div>
            </Col>
            <Col md={12}>
              {project?.project_description && (
                <>
                  <hr />
                  <h5 className="fw-semibold mb-2">Job Details</h5>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: project?.project_description,
                    }}
                  />
                </>
              )}
              <hr />
              <h5 className="fw-semibold mb-2">Proposed Compensation</h5>
              <Row className="align-items-center">
                <Col md={2}>
                  <InputGroup>
                    <InputGroup.Text>
                      <MdAttachMoney />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      isInvalid={errors.proposed_compensation ? true : false}
                      {...register("proposed_compensation", { required: true })}
                    />
                  </InputGroup>
                </Col>
                <Col md={5}>
                  <p>/hr</p>
                </Col>
              </Row>
              <hr />
              <h5 className="fw-semibold mb-2">Cover letter (optional)</h5>
              <HTMLEditor
                initialValue={null}
                name={"cover_letter"}
                control={control}
                required={true}
                setValue={setValue}
                size={200}
              />
            </Col>
          </Row>
          <Button variant="primary" className="w-100 mt-5" type="submit">
            Apply
          </Button>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ModalApply;
