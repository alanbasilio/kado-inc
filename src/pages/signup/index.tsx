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
          <h1 className="mb-2 fs-2">How do you plan on using Kado?</h1>
          <p className="mb-5 text-muted">
            We’ll streamline your experience accordingly
          </p>
          <Row className="mb-5">
            <Col>
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
            <Col>
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
            <Col>
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
          </Row>

          <Link href={`/signup/waitlist`} passHref>
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
