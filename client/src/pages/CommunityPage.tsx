import { useEffect, useState } from "react";
import type { Post } from "../types/post";
import {
  updatePost,
  deletePost,
  fetchPosts,
  createPost,
} from "../services/api";
import PostCard from "../components/PostCard";
import LoadingPage from "./LoadingPage";

import "../styles/pages/Community.css";

export default function CommunityPage() {
  const [newPostContent, setNewPostContent] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const handleCreatePost = async () => {
    if (!newPostContent.trim()) return;

    try {
      const userId = "6931f06e6ed06c731481e0f5"; // Test userId
      const newPost = await createPost(newPostContent, userId);
      setPosts((prev) => [newPost, ...prev]);
      setNewPostContent("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleUpdate = async (id: string, newContent: string) => {
    try {
      const updated = await updatePost(id, newContent);
      setPosts((prev) => prev.map((p) => (p._id === id ? updated : p)));
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmed) return;

    await deletePost(id);
    setPosts((prev) => prev.filter((p) => p._id !== id));
  };

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <div className="feed-container">
      <div className="create-post">
        <textarea
          placeholder="Write a new post..."
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        />
        <button onClick={handleCreatePost} disabled={!newPostContent.trim()}>
          Post
        </button>
      </div>
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
