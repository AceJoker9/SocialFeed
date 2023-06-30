import React, { useState } from "react";

import "./CreatePostForm.css";

function CreatePostForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, name });
    setTitle("");
    setContent("");
    setName("");
  };

  return (
    <div className="create-post-form">
      <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>

          <div className="new-expense__control">
            <label>
              Title:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <br />
            <div className="new-expense__control">
              <label>
                Content:
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </label>
              <br className="new-expenese__actions" />
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatePostForm;
