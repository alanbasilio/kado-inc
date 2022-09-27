import type { NextPage } from "next";
import { Col, Row } from "react-bootstrap";

import CardProject from "@/components/card-project";
import Layout from "@/components/dashboard-layout";
import { getAllProjects } from "@/store/slices/projectsSlice/projectsActions";
import UseProjects from "@/utils/useProjects";
import UseUser from "@/utils/useUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const MyProjects: NextPage = () => {
  const dispatch = useDispatch();
  const { myProjects } = UseProjects();
  const { userInfo } = UseUser();

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  return (
    <Layout title="My projects">
      <Row>
        <Col md={4}>
          <h6 className="mb-2 fw-lightbold">TODO</h6>
          {myProjects?.Project?.map(
            (project) =>
              project.ProjectStatus.id === 1 && (
                <CardProject status="todo" project={project} />
              )
          )}
        </Col>

        <Col md={4}>
          <h6 className="mb-2 fw-lightbold">ONGOING</h6>
          {myProjects?.Project?.map(
            (project) =>
              project.ProjectStatus.id === 2 && (
                <CardProject status="todo" project={project} />
              )
          )}
        </Col>

        <Col md={4}>
          <h6 className="mb-2 fw-lightbold">COMPLETED</h6>
          {myProjects?.Project?.map(
            (project) =>
              project.ProjectStatus.id === 3 && (
                <CardProject status="todo" project={project} />
              )
          )}
        </Col>
      </Row>
    </Layout>
  );
};

export default MyProjects;
