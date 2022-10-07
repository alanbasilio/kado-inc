import HTMLEditor from "@/components/editor";
import { studentApply } from "@/store/slices/projectsSlice/projectsActions";
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
  Spinner,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IoBriefcase } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const ModalApply = ({ show, handleClose, project }) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const { userInfo, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(
      studentApply({
        user_id: userInfo?.id,
        project_id: project?.id,
        proposed_compensation: data.proposed_compensation,
        cover_letter: data.cover_letter,
      })
    );
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{project?.project_title_role}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container as="form" onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={12} className="d-flex align-items-center">
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
                <Col md={3}>
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
                required={false}
                setValue={setValue}
                size={200}
              />
            </Col>
            <Col md={12}>
              <Button
                variant="primary"
                type="submit"
                disabled={loading}
                className="w-100"
              >
                {loading && <Spinner animation="border" className="me-2" />}
                {loading ? "Loading..." : "Apply"}
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ModalApply;
