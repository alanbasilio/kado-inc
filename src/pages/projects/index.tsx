import type { NextPage } from "next";
import { Col, Row } from "react-bootstrap";

import CardProject from "@/components/card-project";
import Layout from "@/components/dashboard-layout";
import { getAllProjects } from "@/store/slices/projectsSlice/projectsActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IsTodo } from "@/utils/daysLeft";

const Projects: NextPage = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);
  const [formattedProjects, setFormattedProjects] = useState([]);

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  useEffect(() => {
    if (projects?.Project) {
      let temp = Object.entries(projects?.Project).map((entry) => entry[1]);
      temp = temp.filter((project) => IsTodo(project?.start_date));
      setFormattedProjects(temp);
    }
  }, [projects]);

  return (
    <Layout title="Projects">
      <Row>
        {formattedProjects?.length > 0 ? (
          formattedProjects?.map((project, index) => (
            <Col md={4} key={index}>
              <CardProject project={project} />{" "}
            </Col>
          ))
        ) : (
          <p>No projects yet.</p>
        )}
      </Row>
    </Layout>
  );
};

export default Projects;
