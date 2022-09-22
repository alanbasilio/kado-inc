import UsersAvatars from "@/components/users-avatars";
import { Badge, Card, ProgressBar } from "react-bootstrap";
import { faker } from "@faker-js/faker";
import ProgBar from "@/components/progress-bar";
import Link from "next/link";

const CardProjectProgbar = ({ status }) => {
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
    <Link href="/projects/14">
      <Card className="mb-2">
        <Card.Body>
          <Card.Title>{faker.name.jobTitle()}</Card.Title>
          <Card.Subtitle>{faker.company.name()}</Card.Subtitle>
          <Badge bg={badgeBg} pill className="my-2">
            {status === "completed"
              ? "COMPLETED"
              : `${faker.datatype.number(30)} days left`}
          </Badge>
          {status !== "todo" && (
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

export default CardProjectProgbar;
