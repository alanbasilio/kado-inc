import axios from "axios";

const production = process.env.NEXT_PUBLIC_ENV === "production";

const api = axios.create({
  baseURL: production
    ? process.env.NEXT_PUBLIC_BASEURL
    : process.env.NEXT_PUBLIC_BASEURL_LOCAL,
});

export default api;
