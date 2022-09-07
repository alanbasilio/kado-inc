import type { NextPage } from "next";
import { Button, Col, Form, Row, Card } from "react-bootstrap";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Layout from "../../components/main-layout";
import ProgBar from "../../components/progress-bar/progress-bar";

const Signup: NextPage = () => {
  const [active, setActive] = useState("");
  return (
    <Layout>
      <Row className="d-flex justify-content-left">
        <Col md={12} className="text-center">
          <h1 className="mb-2 fs-2">How do you plan on using Kado?</h1>
          <p className="mb-5 text-muted">
            We’ll streamline your experience accordingly
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-2">
          <h3>TODO</h3>
          <Card
            className="p-2"
            onClick={() => setActive("student")}
            // className={active === "student" ? "active" : ""}
          >
            <Row>
              <Col className="p-2">
                <h4 className="mt-2">Boxboard Multipurpose Ui Kit</h4>
                <h6 className="mb-2 text-muted">Boxboard</h6>
                <p className="mb-2 text-muted">15 Days left</p>
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
        </Col>

        <Col md={4} className="mb-2">
          <h3>ONGOING</h3>
          <Card
            className="p-2"
            onClick={() => setActive("student")}
            // className={active === "student" ? "active" : ""}
          >
            <Row>
              <Col className="p-2">
                <h4 className="mt-2">Boxboard Multipurpose Ui Kit</h4>
                <h6 className="mb-2 text-muted">Boxboard</h6>
                <p className="mb-2 text-muted">15 Days left</p>
                <ProgBar />
                <div className="mt-2">
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
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={4} className="mb-2">
          <h3>COMPLETED</h3>
          <Card
            className="p-2"
            onClick={() => setActive("student")}
            // className={active === "student" ? "active" : ""}
          >
            <Row>
              <Col className="p-2">
                <h4 className="mt-2">Boxboard Multipurpose Ui Kit</h4>
                <h6 className="mb-2 text-muted">Boxboard</h6>
                <p className="mb-2 text-muted">15 Days left</p>
                <ProgBar />
                <div className="mt-2">
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
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={4} className="mb-2">
          <Card
            className="p-2"
            onClick={() => setActive("student")}
            // className={active === "student" ? "active" : ""}
          >
            <Row>
              <Col className="p-2">
                <h4 className="mt-2">Boxboard Multipurpose Ui Kit</h4>
                <h6 className="mb-2 text-muted">Boxboard</h6>
                <p className="mb-2 text-muted">15 Days left</p>
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
        </Col>
        <Col md={4} className="mb-2">
          <Card
            className="p-2"
            onClick={() => setActive("student")}
            // className={active === "student" ? "active" : ""}
          >
            <Row>
              <Col className="p-2">
                <h4 className="mt-2">Boxboard Multipurpose Ui Kit</h4>
                <h6 className="mb-2 text-muted">Boxboard</h6>
                <p className="mb-2 text-muted">15 Days left</p>
                <ProgBar />
                <div className="mt-2">
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
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={4} className="mb-2">
          <Card
            className="p-2"
            onClick={() => setActive("student")}
            // className={active === "student" ? "active" : ""}
          >
            <Row>
              <Col className="p-2">
                <h4 className="mt-2">Boxboard Multipurpose Ui Kit</h4>
                <h6 className="mb-2 text-muted">Boxboard</h6>
                <p className="mb-2 text-muted">15 Days left</p>
                <ProgBar />
                <div className="mt-2">
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
                </div>
              </Col>
            </Row>
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
            <Button
              variant="primary"
              type="submit"
              size="lg"
              className="w-100"
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
