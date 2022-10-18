import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_ENV === "development"
      ? process.env.NEXT_PUBLIC_BASEURL_DEV
      : process.env.NEXT_PUBLIC_BASEURL,
});

export default api;
