import type { NextPage } from "next";
import { Col, Row } from "react-bootstrap";

import CardProject from "@/components/card-project";
import Layout from "@/components/dashboard-layout";
import { getMyProjects } from "@/store/slices/projectsSlice/projectsActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IsStudent } from "@/utils/profileType";

const MyProjects: NextPage = () => {
  const dispatch = useDispatch();
  const { myProjects } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getMyProjects());
  }, [dispatch]);

  return (
    <Layout title="My projects">
      <Row>
        <Col md={4}>
          <h6 className="mb-2 fw-medium">TODO</h6>
          {IsStudent()
            ? myProjects?.User?.[0]?.Projects?.map(
                (project, index) =>
                  project.ProjectStatus.id === 1 && (
                    <CardProject key={index} status="todo" project={project} />
                  )
              )
            : myProjects?.Project?.map(
                (project, index) =>
                  project.ProjectStatus.id === 1 && (
                    <CardProject key={index} status="todo" project={project} />
                  )
              )}
        </Col>

        <Col md={4}>
          <h6 className="mb-2 fw-medium">ONGOING</h6>
          {myProjects?.Project?.map(
            (project, index) =>
              project.ProjectStatus.id === 2 && (
                <CardProject key={index} status="todo" project={project} />
              )
          )}
        </Col>

        <Col md={4}>
          <h6 className="mb-2 fw-medium">COMPLETED</h6>
          {myProjects?.Project?.map(
            (project, index) =>
              project.ProjectStatus.id === 3 && (
                <CardProject key={index} status="todo" project={project} />
              )
          )}
        </Col>
      </Row>
    </Layout>
  );
};

export default MyProjects;
