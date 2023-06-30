import React, { useState } from "react";
import CreatePostForm from "../CreatePostForm.js";
import Post from "./Form.js";

function PostList() {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (post) => {
    setPosts([...posts, { ...post, id: Math.random(), likes: 0, dislikes: 0 }]);
  };

  const handleLike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const handleDislike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, dislikes: post.dislikes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div>
      <CreatePostForm onSubmit={handleAddPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      ))}
    </div>
  );
}

export default PostList;
