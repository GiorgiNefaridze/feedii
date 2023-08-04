import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const signJwt = (data) => {
  return jwt.sign(data, process.env.SECRET);
};
