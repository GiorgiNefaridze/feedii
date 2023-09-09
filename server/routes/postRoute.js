import { Router } from "express";

import { createPostController } from "../controllers/createPostController.js";
import { getAllPostController } from "../controllers/getAllPostController.js";
import { getLikedPostController } from "../controllers/getLikedPostController.js";
import { likePostController } from "../controllers/likePostController.js";
import { removeLikeController } from "../controllers/removeLikeController.js";
import { getCommentsController } from "../controllers/getCommentsController.js";
import { createCommentController } from "../controllers/createCommentController.js";
import { updateProfileController } from "../controllers/updateProfileController.js";
import { bookmarkController } from "../controllers/bookmarkController.js";
import { checkBookmarkController } from "../controllers/checkBookmarkController.js";
import { removeBookmarkController } from "../controllers/removeBookmarkController.js";
import { getAllBookmark } from "../controllers/getAllBookmark.js";

const router = Router();

//Get all posts
router.get("/", getAllPostController);

//Create a post
router.post("/", createPostController);

router.post("/update-profile", updateProfileController);

//Check users' liked posts
router.post("/liked-post", getLikedPostController);

//Like post
router.post("/like", likePostController);

//Remove like from post
router.delete("/like", removeLikeController);

//Get comments
router.get("/comments/:post_id", getCommentsController);

//Write comment
router.post("/comment", createCommentController);

//Bookmark post
router.post("/bookmark", bookmarkController);

//Remove bookmark
router.delete("/bookmark", removeBookmarkController);

//Check whether post is saved or not
router.post("/check-bookmark", checkBookmarkController);

//Get all bookmarked posts
router.get("/bookmark/:id", getAllBookmark);

export default router;
