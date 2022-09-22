const userImage = (userInfo) => {
  return userInfo.image_url_google || userInfo.image
    ? userInfo.image_url_google || userInfo.image
    : "/images/profile/avatar.png";
};

export default userImage;
