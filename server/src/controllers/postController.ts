import { Request, Response } from "express";
import { PostModel } from "../models/postModel";

export const createPost = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const newPost = await PostModel.create(req.body);
    res.status(201).send(newPost);
  } catch (error: any) {
    console.error("createPost error:", error);
    res.status(400).send(error);
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const Posts = await PostModel.find({})
      .sort({ createdAt: -1 })
      .populate("userId", "username sunSign");
    console.log("Posts", Posts);
    res.status(200).send(Posts);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getPostsByUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const posts = await PostModel.find({ userId });
    console.log("Fetching posts for userId:", userId, "Found:", posts.length);

    if (posts.length > 0) {
      res.status(200).json(posts);
    } else {
      res.status(404).json({ message: "Posts not found" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    const updatedData = req.body;
    console.log("Updating post:", postId, "with data:", updatedData);

    const updatedPost = await PostModel.findByIdAndUpdate(postId, updatedData, {
      new: true,
    });

    if (updatedPost) {
      res.status(200).json(updatedPost);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;

    const deletedPost = await PostModel.findByIdAndDelete(postId);
    console.log("Deleted post ID:", postId);

    if (deletedPost) {
      res.status(200).json({ message: "Post deleted successfully" });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
