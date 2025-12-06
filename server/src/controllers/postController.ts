import { Request, Response } from "express";
import { PostModel } from "../models/postModel";

export const createPost = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const newPost = await PostModel.create(req.body);
    res.status(201).send(newPost);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const Posts = await PostModel.find({});
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

    if (posts.length > 0) {
      res.status(200).json(posts);
    } else {
      res.status(404).json({ message: "Posts not found" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
