import type { NextPage } from "next";
import { Button, Card, Col, Row, Container } from "react-bootstrap";
import Image from "next/image";
import Layout from "../components/main-layout";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout fluid home>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>On-Demand Jobs for College Students.</h1>
            <p>
              On-demand marketplace connecting college students to projects,
              <br />
              internships, and full-time roles with great companies.
            </p>

            <div className="mt-3 mt-md-10">
              <Link href="/signup/company" passHref>
                <Button variant="primary" type="submit">
                  Hire Talent
                </Button>
              </Link>

              <Link href="/signup/student" passHref>
                <Button
                  className="ms-2 p-1 text-primary"
                  variant="link"
                  type="submit"
                >
                  Find Jobs
                </Button>
              </Link>
            </div>
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <Image
              src="/images/home/sapiens.svg"
              width="649"
              height="587"
              alt="React Bootstrap logo"
            />
          </Col>
        </Row>
        <Row>
          <Col
            md={{
              span: 4,
              offset: 4,
            }}
            className="my-2 my-md-7"
          >
            <hr className="text-primary" />
          </Col>
        </Row>
      </Container>

      <Row>
        <Col className="text-center mb-7" md={12}>
          <h1>The new way students get hired.</h1>
        </Col>
      </Row>

      <div className="d-flex background-wave align-items-center">
        <Container>
          <Row>
            <Col md={4} className="px-md-4">
              <div className="bg-white rounded shadow p-3 h-100">
                <Image
                  alt=""
                  width={67}
                  height={66}
                  src="/images/home/company-icon.svg"
                />
                <h5 className="my-1">COMPANIES LOVE THE SPEED</h5>
                <p>
                  Our algorithms make the smartest matches, but real-life human
                  experts support each student and employer, making the best
                  matches.
                </p>
                <a href="#">Learn more</a>
              </div>
            </Col>
            <Col md={4} className="px-md-4">
              <div className="bg-white rounded shadow p-3 h-100">
                <Image
                  alt=""
                  width={67}
                  height={66}
                  src="/images/home/school-icon.svg"
                />
                <h5 className="my-1">SCHOOLS PREPARE THEIR STUDENTS</h5>
                <p>
                  Launch and manage experiential learning projects using
                  Kado&apos;s powerful marketplace and project management tools.
                </p>
                <a href="#">Learn more</a>
              </div>
            </Col>
            <Col md={4} className="px-md-4">
              <div className="bg-white rounded shadow p-3 h-100">
                <Image
                  alt=""
                  width={67}
                  height={66}
                  src="/images/home/student-icon.svg"
                />
                <h5 className="my-1">STUDENTS LOVE THIS MODEL</h5>
                <p>
                  Complete Kado projects to gain hands-on experience,
                  demonstrate employable skills and network with employers.
                </p>
                <a href="#">Learn more</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className="mt-5 align-items-center">
          <Col md={6}>
            <Image
              className="img-fluid"
              src="/images/student-card.png"
              width="1863"
              height="1495"
              alt="React Bootstrap logo"
            />
          </Col>
          <Col md={6}>
            <h4>Earn Money and Gain Skills</h4>
            <p>
              Students use Kado to work on projects, get internships/entry-level
              roles. They are building skills and real-world experience while
              earning a degree.
            </p>
            {/* <a href="/">Talk With Us &#x2794;</a> */}
          </Col>
        </Row>
        <Row className="mt-5 align-items-center">
          <Col md={6}>
            <h4>Earn Money and Gain Skills</h4>
            <p>
              Students use Kado to work on projects, get internships/entry-level
              roles. They are building skills and real-world experience while
              earning a degree.
            </p>
            {/* <a href="/">Talk With Us &#x2794;</a> */}
          </Col>
          <Col md={6}>
            <Image
              className="img-fluid"
              src="/images/dashboard-example.png"
              width="997"
              height="759"
              alt="React Bootstrap logo"
            />
          </Col>
        </Row>
        <Row className="mt-5 align-items-center">
          <Col md={6}>
            <Image
              className="img-fluid"
              src="/images/integrated-payment.png"
              width="1863"
              height="1495"
              alt="React Bootstrap logo"
            />
          </Col>
          <Col md={6}>
            <h4>Integrated payment and 1099 filing.</h4>
            <p>
              Students use our platform to track their time and get paid. At the
              end of the year, we file 1099s with the IRS and mail the student a
              copy so you do not have to.
            </p>
            {/* <a href="/">Talk With Us &#x2794;</a> */}
          </Col>
        </Row>
        <Row className="my-5">
          <Col className="text-center" md={12}>
            <h1>Get started with Kado</h1>
            <Button
              className="p-1 mt-3"
              variant="primary"
              type="submit"
              size="lg"
            >
              Register now
            </Button>
          </Col>
        </Row>
      </Container>

      <Row className="my-5 d-none">
        <Col>
          <Image
            className="img-fluid"
            src="/images/footer-logo.png"
            width="127"
            height="35"
            alt="React Bootstrap logo"
          />
          <p>
            <span style={{ fontSize: "14px" }}>
              © 2020 Rocket Global.
              <br />
              All rights reserved.
            </span>
          </p>
        </Col>
        <Col className="offset-1">
          <h5>About</h5>
          <p>{/* <a href="/">Our Story</a> */}</p>
          <p>{/* <a href="/">Carreers</a> */}</p>
          <p>{/* <a href="/">Contact us</a> */}</p>
        </Col>
        <Col>
          <h5>Services</h5>
          <p>{/* <a href="/">For Students</a> */}</p>
          <p>{/* <a href="/">For Companies</a> */}</p>
          <p>{/* <a href="/">For Institutes</a> */}</p>
        </Col>
        <Col>
          <h5>Product</h5>
          <p>{/* <a href="/">Discover Projects</a> */}</p>
          <p>{/* <a href="/">Discover Students</a> */}</p>
          <p>{/* <a href="/">FAQ</a> */}</p>
        </Col>
        <Col>
          <h5>Legal</h5>
          <p>{/* <a href="/">Terms of Service</a> */}</p>
          <p>{/* <a href="/">Privacy Policy</a> */}</p>
        </Col>
        <Col>
          <h5>Get Social</h5>
          <Row>
            <Col md={3}>
              <Image
                className="img-fluid"
                src="/images/footer-linkedin.png"
                width="24"
                height="26"
                alt="React Bootstrap logo"
              />
            </Col>
            <Col md={3}>
              <Image
                className="img-fluid"
                src="/images/footer-facebook.png"
                width="24"
                height="26"
                alt="React Bootstrap logo"
              />
            </Col>
            <Col md={3}>
              <Image
                className="img-fluid"
                src="/images/footer-instagram.png"
                width="24"
                height="26"
                alt="React Bootstrap logo"
              />
            </Col>
            <Col md={3}>
              <Image
                className="img-fluid"
                src="/images/footer-twitter.png"
                width="24"
                height="26"
                alt="React Bootstrap logo"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
