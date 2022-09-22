import { Row, Col } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

const ProgBar = (props) => {
  return (
    <Row className="align-items-center">
      <Col xs={10}>
        <ProgressBar {...props} />
      </Col>
      <Col xs={2}>
        <small>{props.now} %</small>
      </Col>
    </Row>
  );
};

export default ProgBar;
