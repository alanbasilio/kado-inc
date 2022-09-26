import type { NextPage } from "next";
import { Col, Row } from "react-bootstrap";

import CardProject from "@/components/card-project";
import Layout from "@/components/dashboard-layout";
import { getAllProjects } from "@/store/slices/projectsSlice/projectsActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const FindJobs: NextPage = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  useEffect(() => {
    console.log(projects);
  }, [projects]);

  return (
    <Layout title="Find Jobs">
      <Row>
        {projects.Project.map((project, index) => (
          <Col md={4} key={index}>
            <CardProject status="todo" project={project} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default FindJobs;
