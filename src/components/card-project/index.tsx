import ProgBar from "@/components/progress-bar";
import UsersAvatars from "@/components/users-avatars";
import { DaysLeft, IsCompleted, IsOngoing, IsTodo } from "@/utils/daysLeft";
import PercentageDays from "@/utils/percentageDays";
import Link from "next/link";
import { Badge, Card } from "react-bootstrap";

const CardProject = ({ project }) => {
  let badgeBg;

  if (IsTodo(project?.start_date)) {
    badgeBg = "light";
  }
  if (IsOngoing(project?.start_date, project?.due_date)) {
    badgeBg = "warning";
  }
  if (IsCompleted(project?.due_date)) {
    badgeBg = "success";
  }
  if (project?.ProjectStatus?.id === 4) {
    badgeBg = "danger";
  }

  return (
    <Link href={`/projects/${project?.id}`} passHref>
      <Card className="mb-2" as={"a"}>
        <Card.Body>
          <Card.Title>{project?.project_title_role}</Card.Title>
          {project?.CompanyOrganization && (
            <Card.Subtitle>{project?.CompanyOrganization.name}</Card.Subtitle>
          )}
          <Badge bg={badgeBg} pill className="my-2">
            {IsCompleted(project?.due_date)
              ? "COMPLETED"
              : DaysLeft(project?.due_date)}
          </Badge>

          <div className="mb-2">
            <ProgBar
              now={PercentageDays(project?.start_date, project?.due_date)}
            />
          </div>

          <UsersAvatars />
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CardProject;
