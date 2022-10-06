import Image from "next/future/image";
import type { NextPage } from "next";

import { Button, Card, Col, Row } from "react-bootstrap";
import Link from "next/link";

const CardApplications: NextPage = () => {
  return (
    <Card className="p-2">
      <Row className="d-flex align-items-center">
        <Col md={3}>
          <Image
            className="img-fluid border rounded-circle"
            src="/images/avatar.png"
            width="80"
            height="80"
            alt=""
          />
        </Col>
        <Col md={7}>
          <h5>Guy Howkins</h5>
          <h6>WebDesign</h6>
          <h5 className="mt-1">
            $30 <span>/hr</span>
          </h5>
        </Col>
        <Col md={2}>
          <Image
            className="img-fluid"
            src="/images/heart.png"
            width="22"
            height="18"
            alt=""
          />
          <Image
            className="img-fluid"
            src="/images/feather-mail.png"
            width="22"
            height="18"
            alt=""
          />
        </Col>
        <Row className="mt-2 mb-2">
          <Col md={6}>
            <div className="rounded-40 d-grid gap-2">
              <Button variant="outline-primary" size="sm">
                Approve
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-grid">
              <Link href="/application-details" passHref>
                <Button variant="outline-primary" size="sm">
                  View Profile
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
        <hr className="mb-2" />
        <Col md={2}>
          <Image
            className="img-fluid border rounded-circle"
            src="/images/uni-california.png"
            width="40"
            height="40"
            alt=""
          />
        </Col>
        <Col md={10}>
          <h5>University of California ‘21</h5>
          <h6>Communication and Culture</h6>
        </Col>
      </Row>
    </Card>
  );
};

export default CardApplications;
