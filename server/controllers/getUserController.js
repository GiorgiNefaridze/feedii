import { pool } from "../database/databaseConnection.js";
import { isValidInputs } from "../utils/isValidInputs.js";
import { verifyJwt } from "../utils/verifyJwt.js";

export const getUserController = async (req, res) => {
  try {
    const token = req.headers["authorization"];

    const plainToken = token.split(" ")[1];

    const isValid = isValidInputs([plainToken]);

    if (isValid) {
      const userId = verifyJwt(plainToken);

      const userData = await pool.query(
        "select id,firstname,lastname from users where id = $1",
        [Number(userId)]
      );

      res.status(200).json({ response: userData.rows?.[0] });
    } else {
      res.status(500).json({ response: "Something went wrong" });
    }
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
