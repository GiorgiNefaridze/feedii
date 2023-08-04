import { pool } from "../database/databaseConnection.js";
import { isValidInputs } from "../utils/isValidInputs.js";
import { signJwt } from "../utils/signJwt.js";
import { unHashInput } from "../utils/unHashInput.js";

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isValid = isValidInputs([email, password]);

    if (isValid) {
      const user = await pool.query(
        "select id,email,password from users where email = $1",
        [email]
      );

      if (Object.keys(user.rows?.[0])?.length) {
        const plainPassword = await unHashInput(
          password,
          user.rows?.[0]?.password
        );

        if (user.rows?.[0]?.email == email && plainPassword) {
          const token = signJwt({ id: user.rows?.[0]?.id });
          res.status(200).json({ response: token });
        } else {
          throw new Error("Wrong credentials");
        }
      } else {
        throw new Error("Something went wrong");
      }
    } else {
      throw new Error("Enter valid credentials");
    }
  } catch (error) {
    res.status(500).json({ response: error?.message });
  }
};
