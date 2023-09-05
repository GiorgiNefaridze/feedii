import { pool } from "../database/databaseConnection.js";
import { isValidInputs } from "../utils/isValidInputs.js";
import { unHashInput } from "../utils/unHashInput.js";

export const updateProfileController = async (req, res) => {
  try {
    const { firstName, lastName, secret, user_id } = req.body;

    const isValid = isValidInputs([firstName, lastName, secret]);

    if (!isValid) {
      throw new Error("Credentials are too short");
    }

    const user = await pool.query("select secret from users where id = $1", [
      user_id,
    ]);

    if (!(await unHashInput(secret, user.rows[0]?.secret))) {
      throw new Error("Wrong secret");
    }

    const updateProfile = await pool.query(
      "update users set firstname = $1, lastname = $2 where id = $3 returning firstname,lastname,id",
      [firstName, lastName, user_id]
    );

    if (Object.keys(updateProfile.rows?.[0]).length) {
      res.status(201).json({ response: updateProfile.rows[0] });
    }
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
