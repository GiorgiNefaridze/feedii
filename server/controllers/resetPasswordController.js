import { isValidInputs } from "../utils/isValidInputs.js";
import { unHashInput } from "../utils/unHashInput.js";
import { hashInput } from "../utils/hashInput.js";
import { pool } from "../database/databaseConnection.js";

export const resetPasswordController = async (req, res) => {
  try {
    const { email, newPassword, secret } = req.body;

    const isValid = isValidInputs([email, secret, newPassword]);

    if (isValid) {
      const user = await pool.query(
        "select email,secret from users where email = $1",
        [email]
      );

      if (Object.keys(user.rows[0])?.length) {
        const matchedSecret = await unHashInput(secret, user.rows[0]?.secret);

        if (matchedSecret) {
          const hashedNewPassword = await hashInput(newPassword);

          const updatedUser = await pool.query(
            "update users set password = $1 where email = $2 returning *",
            [hashedNewPassword, email]
          );

          res.send(updatedUser);
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
