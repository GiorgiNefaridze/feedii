import { isValidInputs } from "../utils/isValidInputs.js";
import { unHashInput } from "../utils/unHashInput.js";
import { hashInput } from "../utils/hashInput.js";
import { pool } from "../database/databaseConnection.js";

export const resetPasswordController = async (req, res) => {
  try {
    const { email, password, secret } = req.body;

    const isValid = isValidInputs([email, secret, password]);

    if (isValid) {
      const user = await pool.query(
        "select email,secret from users where email = $1",
        [email]
      );

      if (user?.rows?.length > 0 && Object.keys(user?.rows[0])?.length > 0) {
        const matchedSecret = await unHashInput(secret, user?.rows[0]?.secret);

        if (matchedSecret) {
          const hashedPassword = await hashInput(password);

          const updatedUser = await pool.query(
            "update users set password = $1 where email = $2 returning *",
            [hashedPassword, email]
          );

          if (
            updatedUser?.rows.length &&
            Object.keys(updatedUser?.rows?.[0])?.length
          ) {
            res
              .status(201)
              .json({ response: "Password updated successfully 🔐" });
          } else {
            throw new Error("Something went wrong");
          }
        } else {
          throw new Error("Invalid credentials");
        }
      } else {
        throw new Error("Invalid credentials");
      }
    } else {
      throw new Error("Enter a valid credentials");
    }
  } catch (error) {
    res.status(500).json({ response: error?.message });
  }
};
