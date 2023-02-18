import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
function Post({ post, onLike, imageSrc, likesCount }) {
  const [liked, setLiked] = useState(false);

  const [posts, setPosts] = useState([]);
  const handleLike = () => {
    if (!liked) {
      onLike(post.id);
      setLiked(true);
    }
  };

  

  return (
    <div className="container-fluid mt-5">
        <div className="row text-center">
        <div className="card">
            <div>
            <div className="image"><img src={imageSrc} alt={post.title} id="img" style={{width:280,height:280, marginTop:20}}/>
            </div>
            <div className="card-body">
            <div style={{textAlign:'left'}}><h6>User ID : {post.id}</h6></div>
            <div><p className="card-title" style={{textAlign:'left'}}>Title : {post.title}</p>
            <div style={{textAlign:'left'}}>Likes : {likesCount} </div>
            </div>
            {/* <br />
            <p className="card-text" style={{textAlign:'left'}}>{post.body}</p> */}
            </div>
            </div>
            <button onClick={handleLike} disabled={liked} id="btn" style={{marginBottom:20}}>
            {liked ? "Liked" : "Like"}
            </button>
            
        </div>
        </div>
        </div>
  );
}

export default Post;
