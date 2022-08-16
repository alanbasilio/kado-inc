import type { NextPage } from "next";
import { Button, Col, Form, Row, Card } from "react-bootstrap";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Layout from "../../components/layout";

const Signup: NextPage = () => {
  const [active, setActive] = useState("");
  return (
    <Layout>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2 className="mb-2 fs-2">Project Interest</h2>
          <p className="mb-5 text-muted">
            Select a maximum of 5 categories from below
          </p>
          <Row className="mb-5">
            <Col>
              <Card className={active === "student-1" ? "active" : ""}>
                <Card.Img
                  className="no-border"
                  width={65}
                  height={65}
                  src="/images/design.png"
                />

                <Card.Body>
                  <Card.Title>Graphics & Design</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={active === "school-1" ? "active" : ""}>
                <Card.Img
                  className="no-border"
                  width={65}
                  height={65}
                  src="/images/marketing.png"
                />

                <Card.Body>
                  <Card.Title>Digital Marketing</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={active === "business-1" ? "active" : ""}>
                <Card.Img
                  className="no-border"
                  width={65}
                  height={65}
                  src="/images/write.png"
                />

                <Card.Body>
                  <Card.Title>Writing & Translation</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <Card className={active === "student-1" ? "active" : ""}>
                <Card.Img
                  className="no-border"
                  width={65}
                  height={65}
                  src="/images/video.png"
                />

                <Card.Body>
                  <Card.Title>Video & Animation</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={active === "school-1" ? "active" : ""}>
                <Card.Img
                  className="no-border"
                  width={65}
                  height={65}
                  src="/images/music.png"
                />

                <Card.Body>
                  <Card.Title>Music & Audio</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={active === "business-1" ? "active" : ""}>
                <Card.Img
                  width={65}
                  height={65}
                  src="/images/programming.png"
                />

                <Card.Body>
                  <Card.Title>Programming & Tech</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <Card className={active === "student-1" ? "active" : ""}>
                <Card.Img
                  className="no-border"
                  width={65}
                  height={65}
                  src="/images/data.png"
                />

                <Card.Body>
                  <Card.Title>Data</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={active === "school-1" ? "active" : ""}>
                <Card.Img
                  className="no-border"
                  width={65}
                  height={65}
                  src="/images/business.png"
                />

                <Card.Body>
                  <Card.Title>Business</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={active === "business-1" ? "active" : ""}>
                <Card.Img
                  className="no-border"
                  width={65}
                  height={65}
                  src="/images/lifestyle.png"
                />

                <Card.Body>
                  <Card.Title>Lifestyle</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Link href={`/signup/student-4`} passHref>
            <Button
              variant="primary"
              type="submit"
              size="lg"
              className="w-50"
              disabled={!active}
            >
              Continue
            </Button>
          </Link>
        </Col>
      </Row>
    </Layout>
  );
};

export default Signup;
