import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";

config();

export const cloudinaryConnection = () => {
  return cloudinary.config({
    cloud_name: process.env.ClOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
};
