import UseUser from "@/utils/useUser";

const UserImage = () => {
  const { userInfo } = UseUser();

  return userInfo?.image_url_google || userInfo?.image
    ? userInfo?.image_url_google || userInfo?.image
    : "/images/profile/avatar.png";
};

export default UserImage;
