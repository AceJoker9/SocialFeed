import React, { useState } from "react";

function Post({ post, onLike, onDislike }) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    setLiked(true);
    setDisliked(false);
    onLike(post.id);
  };

  const handleDislike = () => {
    setDisliked(true);
    setLiked(false);
    onDislike(post.id);
  };

  return (
    <div>
      <h3>{post.name}</h3>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={handleLike} disabled={liked}>
        Like
      </button>
      <button onClick={handleDislike} disabled={disliked}>
        Dislike
      </button>
      <p>Likes: {post.likes}</p>
      <p>Dislikes: {post.dislikes}</p>
    </div>
  );
}

export default Post;
