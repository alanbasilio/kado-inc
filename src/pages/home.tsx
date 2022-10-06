import type { NextPage } from "next";
import Image from "next/future/image";
import { Button, Col, Row } from "react-bootstrap";

import Layout from "@/components/dashboard-layout";
import Link from "next/link";
import { IsCompany, IsStudent } from "@/utils/profileType";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  getAllProjects,
  getMyProjects,
} from "@/store/slices/projectsSlice/projectsActions";
import { useEffect, useState } from "react";
import CardProject from "@/components/card-project";

const Home: NextPage = () => {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { myProjects, projects } = useSelector((state) => state.projects);
  const [formattedProjects, setFormattedProjects] = useState([]);

  useEffect(() => {
    dispatch(getMyProjects());
    dispatch(getAllProjects());
  }, [dispatch]);

  useEffect(() => {
    if (projects.Project) {
      const temp = Object.entries(projects.Project).map((entry) => entry[1]);
      setFormattedProjects(temp);
    }
  }, [projects]);

  return (
    <Layout
      title={`Good ${
        moment().format("a") === "am" ? "Morning" : "Afternoon"
      }, ${userInfo?.first_name || userInfo?.name}`}
      subtitle="Have an amazing and productive time with ease"
    >
      <Row>
        <Col md={8}>
          <div className="bg-white rounded border p-2 mb-2">
            <p className="fw-medium">Overview</p>
            {/* <Row>
              <Col>
                <div className="status-box completed">
                  <div className="icon">
                    <i className="fa fa-facebook"></i>
                  </div>
                  <div className="status">completed</div>
                  <div className="number">5</div>
                </div>
              </Col>
              <Col>
                <div className="status-box completed">Ongoing</div>
              </Col>
              <Col>
                <div className="status-box completed">Overdue</div>
              </Col>
            </Row> */}
          </div>
          {IsCompany() && (
            <div className="bg-white rounded border p-2 mb-2">
              <p className="fw-medium">Trend</p>
              <hr />
              <p>No trends yet</p>
            </div>
          )}
          {IsCompany() && (
            <div className="bg-white rounded border p-2 mb-2">
              <p className="fw-medium">
                Students
                <Link href="/students" passHref>
                  <a className="float-end">View All</a>
                </Link>
              </p>
              <hr />
              <p>No students yet</p>
            </div>
          )}
          {IsStudent() && (
            <div className="bg-white rounded border p-2">
              <h4 className="my-2">Profile summary</h4>
              <hr className="my-2"></hr>
              <Row>
                <Col md={2}>
                  <Image
                    className="img-fluid border rounded-circle"
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
                        className="img-fluid"
                        src="/images/uni-toronto.png"
                        width="150"
                        height="70"
                        alt=""
                      />
                    </Col>
                    <Col md={12} className="text-center">
                      <Image
                        className="img-fluid"
                        src="/images/feather-mail.png"
                        width="22"
                        height="18"
                        alt=""
                      />
                      <Image
                        className="img-fluid"
                        src="/images/linkedin.png"
                        width="22"
                        height="18"
                        alt=""
                      />
                      <Image
                        className="img-fluid"
                        src="/images/share.png"
                        width="22"
                        height="18"
                        alt=""
                      />
                      <div className="d-grid">
                        <Button
                          variant="outline-primary"
                          type="submit"
                          size="sm"
                        >
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
                    Computer Science. I have experience in Full stack
                    development projects.
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
            </div>
          )}
        </Col>
        <Col md={4}>
          <div className="bg-white rounded border p-2 mb-2">
            <p className="fw-medium">
              My Projects
              <Link href="/my-projects" passHref>
                <a className="float-end">View All</a>
              </Link>
            </p>
            <hr />
            {IsStudent()
              ? myProjects?.User?.[0]?.Projects?.map(
                  (project, index) =>
                    index === 0 && (
                      <CardProject
                        key={index}
                        status="todo"
                        project={project}
                      />
                    )
                )
              : myProjects?.Project?.map(
                  (project, index) =>
                    index === 0 && (
                      <CardProject
                        key={index}
                        status="todo"
                        project={project}
                      />
                    )
                )}
          </div>
          {IsCompany() && (
            <div className="bg-white rounded border p-2">
              <p className="fw-medium">
                Recommended Schools
                <Link href="/schools" passHref>
                  <a className="float-end">View All</a>
                </Link>
              </p>
              <hr />
              <p>No school yet</p>
            </div>
          )}
          {IsStudent() && (
            <div className="bg-white rounded border p-2">
              <p className="fw-medium">
                Recommended Projects
                <Link href="/projects" passHref>
                  <a className="float-end">View All</a>
                </Link>
              </p>
              <hr />
              {formattedProjects.map(
                (project, index) =>
                  index <= 2 && (
                    <CardProject key={index} status="todo" project={project} />
                  )
              )}
            </div>
          )}
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
