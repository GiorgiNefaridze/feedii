import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const axiosInstance = async () => {
  const token = await AsyncStorage.getItem("token");

  return axios.create({
    baseURL: "http://192.168.100.2:3600",
    headers: { Authorization: "Bearer " + token },
  });
};
