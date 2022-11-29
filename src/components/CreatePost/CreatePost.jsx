import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";
import { createPost } from "../../services/Posts";

function CreatePost() {
  const titleRef = useRef()
  const bodyRef = useRef()
  const linkRef = useRef()
  const categoryRef = useRef()

  let navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = {
        title: titleRef.current.value,
        body: bodyRef.current.value,
        link: linkRef.current.value,
        category: categoryRef.current.value,
      };
      const res = await createPost(form);
      console.log(res)
      const id = res.id
      navigate(`/post/${id}`, {replace: true});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="entire-page">
      <div className="create-post-container">
        <h3 className="create-a-post">Create a post</h3>
        <hr id="line"></hr>

        <form onSubmit={handleSubmit} className="post-details">
          <div className="input-flex">
            <input
              type="text"
              id="post-title"
              placeholder="Title"
              name="title"
              ref = {titleRef}
            />
            <input
              type="text"
              id="post-text"
              placeholder="Spread your thoughts..."
              name="body"
              ref = {bodyRef}
            />
            <input
              type="text"
              id="post-link"
              placeholder="Link (optional)"
              name="link"
              ref = {linkRef}
            />
            <input
              type="text"
              id="post-category"
              placeholder="Category (optional)"
              name="category"
              ref = {categoryRef}
            />
          </div>

          <hr id="line"></hr>

          <div className="post-button-flex">
            <button type="submit" id="post-button">Post</button>
          </div>
        </form>
      </div>

      <div className="rules-container">
        <h5>Posting to Breddit</h5>
        <ol className="rules-list">
          <li id="list">Remember the human</li>
          <li id="list">Behave like you would in real life</li>
          <li id="list">Look for the original source of content</li>
          <li id="list">Search for duplicates before posting</li>
          <li id="list">Read the community rules</li>
        </ol>
        <div className="etiquitte">Please be mindful of breddit's content policy and practice good breddiquette.</div>
      </div>
    </div>
  );
}

export default CreatePost;

{
  /* <div className="file-flex">
          <form action="/url" method="GET" >
            <input type="file" id="file-button"/>
          </form>
        </div> */
}
