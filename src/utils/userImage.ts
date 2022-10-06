import UseUser from "@/utils/useUser";

const UserImage = () => {
  const { userInfo } = UseUser();

  if (typeof userInfo?.image_url_google === "string") {
    return userInfo?.image_url_google;
  }

  if (typeof userInfo?.image === "string") {
    return userInfo?.image;
  }

  return "/images/profile/avatar.png";
};

export default UserImage;
