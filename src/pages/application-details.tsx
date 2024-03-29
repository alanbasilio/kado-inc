import type { NextPage } from "next";
import Image from "next/future/image";

import { Button, Col, Row } from "react-bootstrap";
import Layout from "@/components/dashboard-layout";
import UserImage from "@/utils/userImage";

const ApplicationDetails: NextPage = () => {
  return (
    <Layout>
      <Row className="d-flex justify-content-center">
        <Col md={8}>
          <Row>
            <Col md={2}>
              <Image
                className="img-fluid border rounded-circle"
                src={UserImage()}
                width="80"
                height="80"
                alt=""
              />
            </Col>
            <Col md={3}>
              <h5>Guy Howkins</h5>
              <p>Student</p>
              <p>Computer Science</p>
              <p>Toronto, ON</p>
            </Col>
            <Col md={4}>
              <Row>
                <Col md={12}>
                  <Image
                    className="img-fluid"
                    src="/images/applications/uni-toronto.png"
                    width="150"
                    height="70"
                    alt=""
                  />
                </Col>
                <Col md={4}>
                  <Image
                    className="img-fluid"
                    src="/images/applications/feather-mail.png"
                    width="22"
                    height="18"
                    alt=""
                  />
                  <Image
                    className="img-fluid"
                    src="/images/applications/linkedin.png"
                    width="22"
                    height="18"
                    alt=""
                  />
                  <Image
                    className="img-fluid"
                    src="/images/applications/share.png"
                    width="22"
                    height="18"
                    alt=""
                  />
                </Col>
              </Row>
            </Col>

            <Col md={3}>
              <div className="rounded-40 d-grid gap-2 mb-1">
                <Button variant="outline-primary" size="sm">
                  Approve
                </Button>
              </div>
              <div className="d-grid">
                <Button variant="outline-primary" size="sm">
                  Decline
                </Button>
              </div>
            </Col>

            <hr className="my-2" />
            <Col md={8}>
              <h4 className="mb-2 ">Summary</h4>
              <p>
                I am a current student at University of Toronto studying
                Computer Science. I have experience in Full stack development
                projects.
              </p>
              <h4 className="mt-5 mb-2">Experience</h4>
              <Row>
                <Col md={6}>
                  <h5 className="mb-2">Full Stack developer Intern</h5>
                </Col>
                <Col md={6}>
                  <p className="text-right">June 2021 - Present</p>
                </Col>
              </Row>
              <p>Gekko.Co</p>
              <ul className="m-2">
                <li>Led the project for app developement</li>
                <li>Delivered the product in given deadlines</li>
              </ul>
              <Row>
                <Col md={6}>
                  <h5 className="mb-2">Full Stack developer Intern</h5>
                </Col>
                <Col md={6}>
                  <p className="text-right">June 2021 - May</p>
                </Col>
              </Row>
              <p>Gekko.Co</p>
              <ul className="m-2">
                <li>Led the project for app developement</li>
                <li>Delivered the product in given deadlines</li>
              </ul>
            </Col>
            <Col md={4}>
              <h4 className="mb-2 ">Skills</h4>
              <p className="mb-2 ">SEO</p>
              <p className="mb-2 ">Mobile Development</p>
              <p className="mb-2 ">Mobile Design</p>
              <p className="mb-2 ">Full Stack</p>
              <p className="mb-2 ">User Interface Design</p>
              <p className="mb-2 ">Front-end Development</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default ApplicationDetails;
