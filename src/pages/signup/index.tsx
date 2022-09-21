import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

import Layout from "@/components/main-layout";

const Signup: NextPage = () => {
  const [active, setActive] = useState("");
  return (
    <Layout signin>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2 className="mb-2">How do you plan on using Kado?</h2>
          <p className="mb-5 text-muted">
            We’ll streamline your experience accordingly
          </p>
          <Row>
            <Col md={4} className="mb-2">
              <Card
                onClick={() => setActive("student")}
                className={active === "student" ? "active" : ""}
              >
                <Card.Img
                  width={35}
                  height={35}
                  src="/images/student-icon.svg"
                />

                <Card.Body>
                  <Card.Title>As a student</Card.Title>
                  <Card.Text>
                    Connect you with opportunities to help advance your career.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-2">
              <Card
                onClick={() => setActive("school")}
                className={active === "school" ? "active" : ""}
              >
                <Card.Img
                  width={35}
                  height={35}
                  src="/images/school-icon.svg"
                />

                <Card.Body>
                  <Card.Title>As a school</Card.Title>
                  <Card.Text>
                    Connect you with opportunities to help advance your career.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-2">
              <Card
                onClick={() => setActive("company")}
                className={active === "company" ? "active" : ""}
              >
                <Card.Img
                  width={35}
                  height={35}
                  src="/images/business-icon.svg"
                />

                <Card.Body>
                  <Card.Title>As a company</Card.Title>
                  <Card.Text>
                    Connect you with opportunities to help advance your career.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={{
                span: 4,
                offset: 4,
              }}
              className="mt-md-3"
            >
              <Link href={`/signup/${active}`} passHref>
                <Button variant="primary" className="w-100" disabled={!active}>
                  Continue
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default Signup;
