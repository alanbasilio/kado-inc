import moment from "moment";
import type { NextPage } from "next";
import Image from "next/future/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import CardProject from "@/components/card-project-compact";
import Layout from "@/components/dashboard-layout";
import StatusBox from "@/components/status-box";
import {
  getAllProjects,
  getMyProjects,
} from "@/store/slices/projectsSlice/projectsActions";
import { IsCompany, IsStudent } from "@/utils/profileType";
import UserImage from "@/utils/userImage";
import { MdModeEdit } from "react-icons/md";
import { isCompleted } from "@/utils/daysLeft";

const Home: NextPage = () => {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { myProjects, projects } = useSelector((state) => state.projects);
  const [allProjects, setAllProjects] = useState(null);
  const [userProjects, setUserProjects] = useState(null);

  useEffect(() => {
    dispatch(getMyProjects());
    dispatch(getAllProjects());
  }, [dispatch]);

  useEffect(() => {
    if (projects?.Project) {
      let temp = Object.entries(projects?.Project).map((entry) => entry[1]);
      temp = temp.filter((project) => !isCompleted(project?.due_date));
      setAllProjects(temp);
    }
  }, [projects]);

  useEffect(() => {
    if (IsStudent() && myProjects?.User?.[0]?.Projects) {
      setUserProjects(
        myProjects?.User?.[0]?.Projects?.filter(
          (project) => !isCompleted(project?.due_date)
        )
      );
    }
    if (!IsStudent() && myProjects?.Project) {
      setUserProjects(
        myProjects?.Project.filter((project) => !isCompleted(project?.due_date))
      );
    }
  }, [myProjects]);

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
            <Row>
              <Col>
                <StatusBox
                  status="completed"
                  title="Completed"
                  number={myProjects?.Overview?.completed}
                />
              </Col>
              <Col>
                <StatusBox
                  status="ongoing"
                  title="Ongoing"
                  number={myProjects?.Overview?.ongoing}
                />
              </Col>
              <Col>
                <StatusBox
                  status="overdue"
                  title="Overdue"
                  number={myProjects?.Overview?.todo}
                />
              </Col>
            </Row>
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
            <div className="bg-white rounded border px-4 py-2">
              <Row>
                <Col md={12}>
                  <p className="fw-medium mb-2">
                    Profile summary
                    <Link href="/profile" passHref>
                      <a className="float-end fs-20">
                        <MdModeEdit />
                      </a>
                    </Link>
                  </p>
                  <hr className="mb-4" />
                </Col>
                <Col md={8}>
                  <Row className="mb-7 align-items-center">
                    <Col xs={3}>
                      <Image
                        className="img-fluid border rounded-circle"
                        src={UserImage()}
                        width="80"
                        height="80"
                        alt=""
                      />
                    </Col>
                    <Col xs={9}>
                      <h5 className="fw-medium mb-1">
                        {userInfo?.first_name} {userInfo?.last_name}
                      </h5>
                      <p className="text-muted mb-0">Student</p>
                      {userInfo?.Profile?.location && (
                        <p className="text-muted mb-0">
                          {userInfo?.Profile?.location}
                        </p>
                      )}
                    </Col>
                  </Row>
                  <h5 className="fw-medium mb-1">Summary</h5>
                  <p className="text-muted fs-12 mb-5">
                    {userInfo?.Profile?.description
                      ? userInfo?.Profile?.description
                      : "No description yet."}
                  </p>
                  <h5 className="fw-medium mb-1">Experience</h5>
                  <p className="text-muted fs-12 mb-0">No experience yet</p>
                </Col>

                <Col md={4}>
                  <h5 className="fw-medium mb-2">Skills</h5>
                  <p className="mb-0 text-muted">No skills yet</p>
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
            {userProjects ? (
              userProjects?.map(
                (project, index) =>
                  index === 0 && (
                    <CardProject
                      key={index}
                      myproject={true}
                      project={project}
                    />
                  )
              )
            ) : (
              <p>No projects yet.</p>
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
              {allProjects ? (
                allProjects?.map(
                  (project, index) =>
                    index <= 3 && (
                      <CardProject
                        key={index}
                        myproject={false}
                        project={project}
                      />
                    )
                )
              ) : (
                <p>No projects yet.</p>
              )}
            </div>
          )}
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
