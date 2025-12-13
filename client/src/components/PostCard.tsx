import type { Post } from "../types/post";
import "../styles/PostCard.css";

interface Props {
  post: Post;
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function PostCard({ post, onUpdate, onDelete }: Props) {
  return (
    <div className="post-card">
      <p>{post.content}</p>
      <button onClick={() => onUpdate(post._id)}>Edit</button>
      <button onClick={() => onDelete(post._id)}>Delete</button>
    </div>
  );
}
