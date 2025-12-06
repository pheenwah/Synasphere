import express from "express";
import {
  createUser,
  getUsers,
  getUserByUsername,
  getCompatibility,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/", createUser);

userRouter.get("/all", getUsers);

userRouter.get("/username/:username", getUserByUsername);

userRouter.get("/compatibility/:userId", getCompatibility);

export default userRouter;
