import { Router } from "express";

import { createPostController } from "../controllers/createPostController.js";
import { getAllPostController } from "../controllers/getAllPostController.js";

const router = Router();

//Get all posts
router.get("/", getAllPostController);

//Create a post
router.post("/", createPostController);

export default router;
