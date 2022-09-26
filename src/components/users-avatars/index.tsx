import userImage from "@/utils/userImage";
import Image from "next/image";
import { useSelector } from "react-redux";

const UsersAvatars: React.FC = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div>
      <Image
        className="border rounded-circle"
        src={userImage(userInfo)}
        width={32}
        height={32}
        alt="teste"
      />
    </div>
  );
};

export default UsersAvatars;
