import { v2 as cloudinary } from "cloudinary";

import { cloudinaryConnection } from "../utils/cloudinary.js";
import { pool } from "../database/databaseConnection.js";
import { isValidInputs } from "../utils/isValidInputs.js";

cloudinaryConnection();

export const createPostController = async (req, res) => {
  try {
    const { content, cover, date, owner_id } = req.body;

    const isValid = isValidInputs([content, date]);

    if (isValid) {
      let imageCover;

      if (cover?.length) {
        imageCover = (
          await cloudinary.uploader.upload(
            "data:image/png;base64," + cover ?? "",
            {
              public_id: "post_cover" + owner_id,
            }
          )
        )?.url;
      }

      const createPost = await pool.query(
        "insert into posts (content,cover,date,owner_id) values ($1,$2,$3,$4) returning *",
        [content, imageCover ?? "", date, owner_id]
      );

      if (Object.keys(createPost)?.length) {
        res.status(201).json({ response: "Post created successfully 🎊" });
      } else {
        throw new Error("Something went wrong");
      }
    } else {
      throw new Error("Too short content");
    }
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};
