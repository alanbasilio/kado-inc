import UseUser from "@/utils/useUser";

const IsStudent = () => {
  const { userInfo } = UseUser();

  return userInfo?.Profile?.AccountType?.id === 1;
};

const IsSchool = () => {
  const { userInfo } = UseUser();

  return userInfo?.Profile?.AccountType?.id === 2;
};

const IsCompany = () => {
  const { userInfo } = UseUser();

  return userInfo?.Profile?.AccountType?.id === 3;
};

export { IsStudent, IsSchool, IsCompany };
