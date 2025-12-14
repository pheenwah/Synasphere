import type { Post } from "../types/post";
import "../styles/PostCard.css";
import { useState } from "react";

interface Props {
  post: Post;
  onUpdate: (id: string, newContent: string) => void;
  onDelete: (id: string) => void;
}

export default function PostCard({ post, onUpdate, onDelete }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(post.content);
  const [isSaving, setIsSaving] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);

    const minimumTimer = new Promise((resolve) => setTimeout(resolve, 1000));

    await Promise.all([onUpdate(post._id, editedContent), minimumTimer]);

    setIsSaving(false);
    setIsEditing(false);
  };

  return (
    <div className="post-card">
      {isEditing ? (
        <>
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            rows={3}
            className="post-card-textarea"
          />
          <button onClick={handleSave} disabled={isSaving}>
            {isSaving ? <div className="loader loader-button"></div> : "Save"}
          </button>
          <button
            onClick={() => {
              setEditedContent(post.content);
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <p>{post.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(post._id)}>Delete</button>
          <button
            onClick={() => setShowComments(!showComments)}
            className="post-card-comments-toggle"
          >
            Comments
          </button>
        </>
      )}
    </div>
  );
}
