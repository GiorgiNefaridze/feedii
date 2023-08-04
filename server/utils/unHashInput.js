import bcrypt from "bcrypt";

export const unHashInput = async (plainInput, hashedInput) => {
  return await bcrypt.compare(plainInput, hashedInput);
};
