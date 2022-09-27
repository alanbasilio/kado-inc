import { useSelector } from "react-redux";

const UseUser = () => useSelector((state) => state.user);

export default UseUser;
