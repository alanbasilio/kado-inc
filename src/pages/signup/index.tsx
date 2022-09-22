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
                className={`card-signup ${active === "student" && "active"}`}
              >
                <div className="border rounded-circle card-img-container">
                  <Card.Img
                    width={70}
                    height={70}
                    src="/images/student-icon.svg"
                  />
                </div>

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
                className={`card-signup ${active === "school" && "active"}`}
              >
                <div className="border rounded-circle card-img-container">
                  <Card.Img
                    width={70}
                    height={70}
                    src="/images/school-icon.svg"
                  />
                </div>

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
                className={`card-signup ${active === "company" && "active"}`}
              >
                <div className="border rounded-circle card-img-container">
                  <Card.Img
                    width={70}
                    height={70}
                    src="/images/business-icon.svg"
                  />
                </div>

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
