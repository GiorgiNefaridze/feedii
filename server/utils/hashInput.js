import bcrypt from "bcrypt";
import { config } from "dotenv";

config();

export const hashInput = async (input) => {
  const salt = await bcrypt.genSalt(Number(process.env.SALT));

  return await bcrypt.hash(input, salt);
};
