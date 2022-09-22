import Image from "next/image";
import type { NextPage } from "next";

import { Card, Col, Row } from "react-bootstrap";

const CardProject: NextPage = () => {
  return (
    <Card className="p-2 mb-2">
      <Row>
        <Col className="p-2">
          <h5 className="mt-2">Boxboard Multipurpose Ui Kit</h5>
          <h6 className="mb-2 text-muted">Boxboard</h6>
          <p className="mb-2 text-muted">15 Days left</p>

          <Image
            className=" border rounded-circle"
            src="/images/jerome.png"
            width="40"
            height="40"
            alt="React Bootstrap logo"
          />
          <Image
            className=" border rounded-circle"
            src="/images/jerome.png"
            width="40"
            height="40"
            alt="React Bootstrap logo"
          />
          <Image
            className=" border rounded-circle"
            src="/images/jerome.png"
            width="40"
            height="40"
            alt="React Bootstrap logo"
          />
          <Image
            className=" border rounded-circle"
            src="/images/jerome.png"
            width="40"
            height="40"
            alt="React Bootstrap logo"
          />
          <Image
            className=" border rounded-circle"
            src="/images/jerome.png"
            width="40"
            height="40"
            alt="React Bootstrap logo"
          />
        </Col>
      </Row>
    </Card>
  );
};

export default CardProject;
