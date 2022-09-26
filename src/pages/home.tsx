import type { NextPage } from "next";
import Image from "next/image";
import { Button, Col, Row } from "react-bootstrap";

import Layout from "@/components/dashboard-layout";

const Home: NextPage = () => {
  return (
    <Layout
      title="Good day, Guy"
      subtitle="Have an amazing and productive time with ease"
    >
      <Row className="d-flex justify-content-center">
        <Col className="bg-white rounded shadow p-2" md={8}>
          <h4 className="my-2">Profile summary</h4>
          <hr className="my-2"></hr>
          <Row>
            <Col md={2}>
              <Image
                className=" border rounded-circle"
                src="/images/avatar.png"
                width="80"
                height="80"
                alt=""
              />
            </Col>
            <Col md={6}>
              <h5>Guy Howkins</h5>
              <p className="text-muted">Student</p>
              <p className="text-muted">Computer Science</p>
              <p className="text-muted">Toronto, ON</p>
            </Col>

            <Col md={4}>
              <Row>
                <Col className="text-center" md={12}>
                  <Image
                    className=""
                    src="/images/uni-toronto.png"
                    width="150"
                    height="70"
                    alt=""
                  />
                </Col>
                <Col md={12} className="text-center">
                  <Image
                    className=""
                    src="/images/feather-mail.png"
                    width="22"
                    height="18"
                    alt=""
                  />
                  <Image
                    className=""
                    src="/images/linkedin.png"
                    width="22"
                    height="18"
                    alt=""
                  />
                  <Image
                    className=""
                    src="/images/share.png"
                    width="22"
                    height="18"
                    alt=""
                  />
                  <div className="d-grid">
                    <Button variant="outline-primary" type="submit" size="sm">
                      View School
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>

            <hr className="my-2" />
            <Col md={8}>
              <h4 className="mb-2 text-muted">Summary</h4>
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
              <h4 className="mb-2 text-muted">Skills</h4>
              <p className="mb-2 text-muted">SEO</p>
              <p className="mb-2 text-muted">Mobile Development</p>
              <p className="mb-2 text-muted">Mobile Design</p>
              <p className="mb-2 text-muted">Full Stack</p>
              <p className="mb-2 text-muted">User Interface Design</p>
              <p className="mb-2 text-muted">Front-end Development</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
