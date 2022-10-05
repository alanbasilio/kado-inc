import Layout from "@/components/main-layout";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin, TbBrandTwitter } from "react-icons/tb";

const HomePage: NextPage = () => {
  return (
    <Layout fluid home>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>
              On-Demand Jobs for <span className="college-draw">College</span>{" "}
              <span className="students-draw">Students</span>.
            </h1>
            <p className="ff-poppins">
              On-demand marketplace connecting college students to projects,
              <br />
              internships, and full-time roles with great companies.
            </p>

            <div className="mt-3 mt-md-10">
              <Link href="/signup/company" passHref>
                <Button variant="primary">Hire Talent</Button>
              </Link>

              <Link href="/signup/student" passHref>
                <Button className="ms-2 p-1 " variant="link">
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
              alt=""
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

      <div className="d-flex background-wave align-items-center ff-poppins">
        <Container>
          <Row>
            <Col md={4} className="px-md-3">
              <div className="bg-white rounded shadow px-3 py-4 h-100">
                <Image
                  alt=""
                  width={67}
                  height={66}
                  src="/images/home/company-icon.svg"
                />
                <h5 className="my-1">COMPANIES LOVE THE SPEED</h5>
                <p className="fs-12">
                  Our algorithms make the smartest matches, but real-life human
                  experts support each student and employer, making the best
                  matches.
                </p>
                <Link href="/signup/company" passHref>
                  <a className="fw-semibold fs-12">LEARN MORE</a>
                </Link>
              </div>
            </Col>
            <Col md={4} className="px-md-3">
              <div className="bg-white rounded shadow px-3 py-4 h-100">
                <Image
                  alt=""
                  width={67}
                  height={66}
                  src="/images/home/school-icon.svg"
                />
                <h5 className="my-1">SCHOOLS PREPARE THEIR STUDENTS</h5>
                <p className="fs-12">
                  Launch and manage experiential learning projects using
                  Kado&apos;s powerful marketplace and project management tools.
                </p>
                <Link href="/signup/school" passHref>
                  <a className="fw-semibold fs-12">LEARN MORE</a>
                </Link>
              </div>
            </Col>
            <Col md={4} className="px-md-3">
              <div className="bg-white rounded shadow px-3 py-4 h-100">
                <Image
                  alt=""
                  width={67}
                  height={66}
                  src="/images/home/student-icon.svg"
                />
                <h5 className="my-1">STUDENTS LOVE THIS MODEL</h5>
                <p className="fs-12">
                  Complete Kado projects to gain hands-on experience,
                  demonstrate employable skills and network with employers.
                </p>
                <Link href="/signup/student" passHref>
                  <a className="fw-semibold fs-12">LEARN MORE</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mt-10">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <Image
              src="/images/home/students.svg"
              width="622"
              height="499"
              alt=""
            />
          </Col>
          <Col md={6}>
            <h2 className="fs-35">Discover the best talents</h2>
            <p className="mt-3 mb-2 fs-20 ff-poppins">
              Employers apply to students, not the other way around. Flip the
              script and enjoy the feeling when employers compete for you. It’s
              a refreshing change.
            </p>
            <Link href="/">
              <a className="fw-semibold">Talk With Us &#x2794;</a>
            </Link>
          </Col>
        </Row>
        <Row className="mt-10 align-items-center">
          <Col md={6}>
            <h2 className="fs-35">Earn Money and Gain Skills</h2>
            <p className="mt-3 mb-2 fs-20 ff-poppins">
              Students use Kado to work on projects, get internships/entry-level
              roles. They are building skills and real-world experience while
              earning a degree.
            </p>
            <Link href="/">
              <a className="fw-semibold">Talk With Us &#x2794;</a>
            </Link>
          </Col>
          <Col md={6} className="text-center">
            <Image
              src="/images/home/dashboard-example.png"
              width="997"
              height="759"
              alt=""
            />
          </Col>
        </Row>
        <Row className="mt-10 align-items-center">
          <Col md={6} className="text-center">
            <Image
              src="/images/home/integrations.svg"
              width="524"
              height="373"
              alt=""
            />
          </Col>
          <Col md={6}>
            <h2 className="fs-35">Integrated payment and 1099 filing.</h2>
            <p className="mt-3 mb-2 fs-20 ff-poppins">
              Students use our platform to track their time and get paid. At the
              end of the year, we file 1099s with the IRS and mail the student a
              copy so you do not have to.
            </p>
            <Link href="/">
              <a className="fw-semibold">Talk With Us &#x2794;</a>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container fluid className="mt-10 py-10 bg-light">
        <Row>
          <Col className="text-center" md={12}>
            <h2 className="fs-44">Get started with Kado</h2>
            <Link href="/signup" passHref>
              <Button className="mt-3" variant="primary">
                Register now
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="my-5">
          <Col
            md={2}
            xs={12}
            className="my-2 my-md-0 text-center text-md-start"
          >
            <Image src="/images/logo.svg" width="127" height="35" alt="" />
            <p className="fs-14 text-muted">
              © 2020 Rocket Global. <br />
              All rights reserved.
            </p>
          </Col>
          <Col md={2} xs={6} className="my-2 my-md-0">
            <p className="fs-14 fw-semibold">About</p>
            <p>
              <Link href="/" passHref>
                <a className="text-muted fs-14">Our Story</a>
              </Link>
            </p>
            <p>
              <Link href="/" passHref>
                <a className="text-muted fs-14">Carreers</a>
              </Link>
            </p>
            <p>
              <Link href="/" passHref>
                <a className="text-muted fs-14">Contact us</a>
              </Link>
            </p>
          </Col>
          <Col md={2} xs={6} className="my-2 my-md-0">
            <p className="fs-14 fw-semibold">Services</p>
            <p>
              <Link href="/" passHref>
                <a className="text-muted fs-14">For Students</a>
              </Link>
            </p>
            <p>
              <Link href="/" passHref>
                <a className="text-muted fs-14">For Companies</a>
              </Link>
            </p>
            <p>
              <Link href="/" passHref>
                <a className="text-muted fs-14">For Institutes</a>
              </Link>
            </p>
          </Col>
          <Col md={2} xs={6} className="my-2 my-md-0">
            <p className="fs-14 fw-semibold">Product</p>
            <p>
              <Link href="/" passHref>
                <a className="text-muted fs-14">Discover Projects</a>
              </Link>
            </p>
            <p>
              <Link href="/" passHref>
                <a className="text-muted fs-14">Discover Students</a>
              </Link>
            </p>
            <p>
              <Link href="/" passHref>
                <a className="text-muted fs-14">FAQ</a>
              </Link>
            </p>
          </Col>
          <Col md={2} xs={6} className="my-2 my-md-0">
            <p className="fs-14 fw-semibold">Legal</p>
            <p>
              <Link href="/" passHref>
                <a className="text-muted fs-14">Terms of Service</a>
              </Link>
            </p>
            <p>
              <Link href="/" passHref>
                <a className="text-muted fs-14">Privacy Policy</a>
              </Link>
            </p>
          </Col>
          <Col md={2} xs={12} className="my-2 my-md-0">
            <p className="fs-14 fw-semibold mb-3 mb-md-1">Get Social</p>
            <Row className="text-center text-md-start fs-28">
              <Col>
                <TbBrandLinkedin />
              </Col>
              <Col>
                <AiOutlineFacebook />
              </Col>
              <Col>
                <FaInstagram />
              </Col>
              <Col>
                <TbBrandTwitter />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default HomePage;
