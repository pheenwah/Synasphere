import express from "express";
import {
  createPost,
  getPosts,
  getPostsByUserId,
  updatePost,
  deletePost,
} from "../controllers/postController";

const postRouter = express.Router();

postRouter.post("/", createPost);

postRouter.get("/all", getPosts);

postRouter.get("/user-id/:userId", getPostsByUserId);

postRouter.put("/post-id/:postId", updatePost);

postRouter.delete("/post-id/:postId", deletePost);

export default postRouter;
