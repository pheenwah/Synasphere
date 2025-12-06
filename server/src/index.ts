import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter";
import postRouter from "./routes/postRouter";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.get("/", (req, res) => {
  res.send({
    user: {
      email: "email",
      username: "username",
      profileImage: "profile image",
      birthday: "birthday",
      sunSign: "sun sign",
      moonSign: "moon sign",
      risingSign: "rising sign",
    },
    post: {
      userId: "user id",
      content: "content",
      createdAt: "created at",
    },
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
