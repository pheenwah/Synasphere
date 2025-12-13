import { useEffect, useState } from "react";
import type { Post } from "../types/post";
import { updatePost, deletePost, fetchPosts } from "../services/api";
import PostCard from "../components/PostCard";
import "../styles/Feed.css";

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const handleUpdate = async (id: string) => {
    const newContent = prompt("Enter new content:");
    if (!newContent) return;

    const updated = await updatePost(id, newContent);
    setPosts((prev) => prev.map((p) => (p._id === id ? updated : p)));
  };
  const handleDelete = async (id: string) => {
    await deletePost(id);
    setPosts((prev) => prev.filter((p) => p._id !== id));
  };

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="feed-container">
      {posts.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}{" "}
    </div>
  );
}
