import type { NextPage } from "next";
import { Col, Row } from "react-bootstrap";

import CardProject from "@/components/card-project";
import Layout from "@/components/dashboard-layout";
import { getMyProjects } from "@/store/slices/projectsSlice/projectsActions";
import { IsCompleted, IsOngoing, IsTodo } from "@/utils/daysLeft";
import { IsCompany, IsSchool, IsStudent } from "@/utils/profileType";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

const MyProjects: NextPage = () => {
  const dispatch = useDispatch();
  const { myProjects } = useSelector((state) => state.projects);
  const [userProjects, setUserProjects] = useState([]);
  const router = useRouter();

  useEffect(() => {
    dispatch(getMyProjects());
  }, [dispatch]);

  useEffect(() => {
    if (IsStudent() && myProjects?.User?.[0]?.Projects) {
      setUserProjects(myProjects?.User?.[0]?.Projects);
    }
    if (!IsStudent() && myProjects?.Project) {
      setUserProjects(myProjects?.Project);
    }
  }, [myProjects]);

  useEffect(() => {
    if (IsSchool()) {
      router.push("/home");
    }
  }, [router]);

  return (
    <Layout title="My projects">
      {userProjects?.length > 0 ? (
        <Row>
          <Col md={4}>
            <h6 className="mb-2 fw-medium">TODO</h6>
            {userProjects?.map(
              (project, index) =>
                IsTodo(project?.start_date) && (
                  <CardProject key={index} project={project} />
                )
            )}
          </Col>

          <Col md={4}>
            <h6 className="mb-2 fw-medium">ONGOING</h6>
            {userProjects?.map(
              (project, index) =>
                IsOngoing(project?.start_date, project?.due_date) && (
                  <CardProject key={index} project={project} />
                )
            )}
          </Col>

          <Col md={4}>
            <h6 className="mb-2 fw-medium">COMPLETED</h6>
            {userProjects?.map(
              (project, index) =>
                IsCompleted(project?.due_date) && (
                  <CardProject key={index} project={project} />
                )
            )}
          </Col>
        </Row>
      ) : (
        <Row>
          <Col>
            <p>
              No projects yet.{" "}
              {IsCompany() ? (
                <Link href="/projects/new" passHref>
                  <a>Create a project.</a>
                </Link>
              ) : (
                <Link href="/projects" passHref>
                  <a>
                    <strong>Apply for a project.</strong>
                  </a>
                </Link>
              )}
            </p>
          </Col>
        </Row>
      )}
    </Layout>
  );
};

export default MyProjects;
