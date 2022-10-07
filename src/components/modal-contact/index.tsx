import { Modal } from "react-bootstrap";

const ModalContact = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>IN PROGRESS</Modal.Body>
      {/* <Modal.Footer>
        <Button variant="primary" className="w-100">
          Apply
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default ModalContact;
