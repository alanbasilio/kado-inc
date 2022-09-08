import Image from "next/image";
import type { NextPage } from "next";

import { Card, Col, Row } from "react-bootstrap";
import ProgBar from "../progress-bar/progress-bar";

const CardProjectProgbar: NextPage = () => {
  return (
    <Card className="p-2">
      <Row>
        <Col className="p-2">
          <h4 className="mt-2">Boxboard Multipurpose Ui Kit</h4>
          <h6 className="mb-2 text-muted">Boxboard</h6>
          <p className="mb-2 text-muted">15 Days left</p>
          <ProgBar />
          <Image
            className="img-fluid border rounded-circle"
            src="/images/design.png"
            width="40"
            height="40"
            alt="React Bootstrap logo"
          />
          <Image
            className="img-fluid border rounded-circle"
            src="/images/design.png"
            width="40"
            height="40"
            alt="React Bootstrap logo"
          />
          <Image
            className="img-fluid border rounded-circle"
            src="/images/design.png"
            width="40"
            height="40"
            alt="React Bootstrap logo"
          />
          <Image
            className="img-fluid border rounded-circle"
            src="/images/design.png"
            width="40"
            height="40"
            alt="React Bootstrap logo"
          />
          <Image
            className="img-fluid border rounded-circle"
            src="/images/design.png"
            width="40"
            height="40"
            alt="React Bootstrap logo"
          />
        </Col>
      </Row>
    </Card>
  );
};

export default CardProjectProgbar;
