import { useState } from "react";
import { createPost } from "../services/api";
import type { Post } from "../types/post";
import "../styles/components/NewPostForm.css";

interface Props {
  onPostCreated: (newPost: Post) => void;
}

export default function NewPostForm({ onPostCreated }: Props) {
  const [newPostContent, setNewPostContent] = useState("");

  const handleCreatePost = async () => {
    if (!newPostContent.trim()) return;

    try {
      const userId = "6931f06e6ed06c731481e0f5"; // Test userId
      const newPost = await createPost(newPostContent, userId);
      onPostCreated(newPost);
      setNewPostContent("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="new-post-form">
      <textarea
        placeholder="Write a new post..."
        value={newPostContent}
        onChange={(e) => setNewPostContent(e.target.value)}
      />
      <button onClick={handleCreatePost} disabled={!newPostContent.trim()}>
        Post
      </button>
    </div>
  );
}
