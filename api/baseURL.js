import axios from "axios";

export const axiosInstance = () => {
  const token = "token";

  return axios.create({
    baseURL: "http://192.168.100.2:3600",
    headers: { Authorization: "Bearer" + token },
  });
};
