import { Request, Response } from "express";
import { UserModel } from "../models/userModel";
import { calculateCompatibility } from "../utils/compatibility";

export const createUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const newUser = await UserModel.create(req.body);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find({});
    console.log("users", users);
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getUserByUsername = async (req: Request, res: Response) => {
  try {
    const username = req.params.username;
    const user = await UserModel.findOne({ username });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getCompatibility = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const currentUser = await UserModel.findById(userId);

    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log("Current user:", currentUser.username);

    const otherUsers = await UserModel.find({ _id: { $ne: currentUser._id } });
    console.log("Other users:", otherUsers);

    console.log("Calculating compatibility for", otherUsers.length, "users");

    const results = otherUsers.map((user) => ({
      ...user.toObject(),
      compatibilityScore: calculateCompatibility(currentUser, user),
    }));

    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error });
  }
};
