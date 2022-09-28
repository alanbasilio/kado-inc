import type { NextPage } from "next";
import { Col, Row } from "react-bootstrap";

import CardProject from "@/components/card-project";
import Layout from "@/components/dashboard-layout";
import { getAllProjects } from "@/store/slices/projectsSlice/projectsActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Projects: NextPage = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);
  const [formattedProjects, setFormattedProjects] = useState(null);

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  useEffect(() => {
    if (projects.Project) {
      const temp = Object.entries(projects.Project).map((entry) => entry[1]);
      setFormattedProjects(temp);
    }
  }, [projects]);

  return (
    <Layout title="Projects">
      <Row>
        {formattedProjects &&
          formattedProjects.map((project, index) => (
            <Col md={4} key={index}>
              <CardProject status="todo" project={project} />{" "}
            </Col>
          ))}
      </Row>
    </Layout>
  );
};

export default Projects;
