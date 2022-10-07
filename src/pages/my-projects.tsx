import type { NextPage } from "next";
import { Col, Row } from "react-bootstrap";

import CardProject from "@/components/card-project";
import Layout from "@/components/dashboard-layout";
import { getMyProjects } from "@/store/slices/projectsSlice/projectsActions";
import { isCompleted, IsOngoing, IsTodo } from "@/utils/daysLeft";
import { IsStudent } from "@/utils/profileType";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyProjects: NextPage = () => {
  const dispatch = useDispatch();
  const { myProjects } = useSelector((state) => state.projects);
  const [userProjects, setUserProjects] = useState([]);

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

  return (
    <Layout title="My projects">
      <Row>
        <Col md={4}>
          <h6 className="mb-2 fw-medium">TODO</h6>
          {userProjects.map(
            (project, index) =>
              IsTodo(project?.start_date) && (
                <CardProject key={index} project={project} />
              )
          )}
        </Col>

        <Col md={4}>
          <h6 className="mb-2 fw-medium">ONGOING</h6>
          {userProjects.map(
            (project, index) =>
              IsOngoing(project?.start_date, project?.due_date) && (
                <CardProject key={index} project={project} />
              )
          )}
        </Col>

        <Col md={4}>
          <h6 className="mb-2 fw-medium">COMPLETED</h6>
          {userProjects.map(
            (project, index) =>
              isCompleted(project?.due_date) && (
                <CardProject key={index} project={project} />
              )
          )}
        </Col>
      </Row>
    </Layout>
  );
};

export default MyProjects;
