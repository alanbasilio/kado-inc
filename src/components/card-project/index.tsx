import UsersAvatars from "@/components/users-avatars";
import { Badge, Card, ProgressBar } from "react-bootstrap";
import { faker } from "@faker-js/faker";
import ProgBar from "@/components/progress-bar";
import Link from "next/link";

const CardProject = ({ status, project }) => {
  let badgeBg;
  if (status === "todo") {
    badgeBg = "light";
  }
  if (status === "ongoing") {
    badgeBg = "warning";
  }
  if (status === "completed") {
    badgeBg = "success";
  }
  return (
    <Link href={`/projects/${project.id}`} passHref>
      <Card className="mb-2" as={"a"}>
        <Card.Body>
          <Card.Title>{project.project_title_role}</Card.Title>
          {project.CompanyOrganization && (
            <Card.Subtitle>{project.CompanyOrganization.name}</Card.Subtitle>
          )}
          <Badge bg={badgeBg} pill className="my-2">
            {project.ProjectStatus?.id === 1 &&
              `${faker.datatype.number(30)} days left`}

            {project.ProjectStatus?.id === 3 && "COMPLETED"}
          </Badge>
          {project.ProjectStatus?.id !== 1 && (
            <div className="mb-2">
              <ProgBar now={faker.datatype.number(100)} />
            </div>
          )}
          <UsersAvatars />
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CardProject;
