import { Router } from "express";

import { createPostController } from "../controllers/createPostController.js";
import { getAllPostController } from "../controllers/getAllPostController.js";
import { getLikedPostController } from "../controllers/getLikedPostController.js";
import { likePostController } from "../controllers/likePostController.js";
import { removeLikeController } from "../controllers/removeLikeController.js";
import { getCommentsController } from "../controllers/getCommentsController.js";

const router = Router();

//Get all posts
router.get("/", getAllPostController);

//Create a post
router.post("/", createPostController);

//Check users' liked posts
router.post("/liked-post", getLikedPostController);

//Like post
router.post("/like", likePostController);

//Remove like from post
router.delete("/like", removeLikeController);

//Get comments
router.get("/commets/:post_id", getCommentsController);

export default router;
