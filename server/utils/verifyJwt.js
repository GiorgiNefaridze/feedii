import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const verifyJwt = (token) => {
  return jwt.verify(token, process.env.SECRET)?.id;
};
