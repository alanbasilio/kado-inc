import type { NextPage } from "next";
import { Col, Row } from "react-bootstrap";

import CardProject from "@/components/card-project";
import Layout from "@/components/dashboard-layout";
import { getAllProjects } from "@/store/slices/projectsSlice/projectsActions";
import UseProjects from "@/utils/useProjects";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Projects: NextPage = () => {
  const dispatch = useDispatch();
  const { projects } = UseProjects();

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  return (
    <Layout title="Projects">
      <Row>
        {projects?.Project?.map((project, index) => (
          <Col md={4} key={index}>
            <CardProject status="todo" project={project} />{" "}
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Projects;
