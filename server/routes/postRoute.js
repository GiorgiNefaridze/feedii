import { Router } from "express";

import { createPostController } from "../controllers/createPostController.js";
import { getAllPostController } from "../controllers/getAllPostController.js";
import { getlikesController } from "../controllers/getlikesController.js";

const router = Router();

//Get all posts
router.get("/", getAllPostController);

//Create a post
router.post("/", createPostController);

//Get likes for posts
router.get("/likes", getlikesController);

export default router;
