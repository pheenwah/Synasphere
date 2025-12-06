import express from "express";
import {
  createPost,
  getPosts,
  getPostsByUserId,
} from "../controllers/postController";

const postRouter = express.Router();

postRouter.post("/", createPost);

postRouter.get("/all", getPosts);

postRouter.get("/user-id/:userId", getPostsByUserId);

export default postRouter;
