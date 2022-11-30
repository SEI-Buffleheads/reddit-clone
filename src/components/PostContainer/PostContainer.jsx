import { useNavigate } from "react-router-dom";
import { BsArrowUpSquare } from "react-icons/bs";
import "./PostContainer.css";

function PostContainer(props) {
  const { post } = props;
  let navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/post/${id}`, { state: post });

  };

  console.log(post)

  return (
    <div className="individual-post-container">
      <div className="vote-post-flexbox">
        <div className="vote-container">
          <button id="up-arrow">
            <BsArrowUpSquare />
          </button>
          <p className="give-bread">Give Bread</p>
        </div>
            
      <div className="post-info-container"
        onClick={() => handleClick(post.id)}>
        <p className="posted-by">
          <span id="category-name">b/{post.category}</span> • Posted by {post.owner} {post.created_at} hours ago
        </p>
        <h3 className="new-post-title">{post.title}</h3>
          <p className="new-post-body">{post.body}</p>
          <p className="post-link">{post.link}</p>  
      </div>
      
        
      <div>
          
          
      </div>
        

      </div>
      
      <div className="view-comments-flexbox">
        <button className="view-comments" onClick={() => handleClick(post.id)}>View Comments</button>
      </div>

      <img src={post.link.thumbnail}></img>
    </div>
  );
}

export default PostContainer;
