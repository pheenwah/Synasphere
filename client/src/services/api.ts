import type { Post } from "../types/post";

const API_URL = "http://localhost:5000/api/posts";

export const createPost = async () => {
  // Implementation for creating a post
};

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${API_URL}/all`);

  const data = await res.json();
  return data;
};

export const updatePost = async (
  postId: string,
  updatedContent: string
): Promise<Post> => {
  const res = await fetch(`${API_URL}/post-id/${postId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: updatedContent }),
  });

  if (!res.ok) {
    throw new Error("Failed to update post");
  }

  return res.json();
};

export const deletePost = async (postId: string): Promise<Post[]> => {
  const res = await fetch(`${API_URL}/post-id/${postId}`, { method: "DELETE" });

  if (!res.ok) {
    throw new Error("Failed to delete post");
  }

  return res.json();
};
