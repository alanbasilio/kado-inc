import Image from "next/image";
import { faker } from "@faker-js/faker";
import fakerGenerator from "@/utils/fakerGenerator";

const UsersAvatars: React.FC = () => {
  const clientsSchema = {
    image: "{{image.avatar}}",
  };

  const imagesArray = fakerGenerator(clientsSchema, 1, 7);

  return (
    <div>
      {imagesArray.map((item, index) => {
        return (
          <img
            key={index}
            className="me-n1 border rounded-circle"
            src={item.image}
            width={32}
            height={32}
            alt="teste"
          />
        );
      })}
    </div>
  );
};

export default UsersAvatars;
