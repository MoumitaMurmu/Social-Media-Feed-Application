import React, { useState, useEffect } from "react";
import Post from "./Post";
import Search from "./Search";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
function App() {
  const [posts, setPosts] = useState([]);
  const [likesCount, setLikesCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    fetchPosts(currentPage);
  }, []);

  const fetchPosts = async (page) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`
    );
    const data = await response.json();
    setPosts((prevPosts) => [...prevPosts, ...data]);
  };

  const handleLike = (postId) => {
    setLikesCount((prevLikesCount) => prevLikesCount + 1);
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return { ...post, liked: true };
        }
        return post;
      })
    );
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    fetchPosts(currentPage + 1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className="container-fluid mt-5">
      <div className="row text-center">
      {filteredPosts.map((post) => (
        <div className="col-12 col-sm-6 col-md-3 col-lg-3 d-flex align-items-stretch" key={post.id}>
        
        <Post
          key={post.id}
          post={post}
          onLike={handleLike}
          imageSrc={`https://picsum.photos/200?random=${post.id}`}
          likesCount={likesCount}
        />
          
        </div>

      ))}
      <button id="load-btn" onClick={handleLoadMore}>Load More</button>
     
      </div>
      </div>
    </div>
  );
}

export default App;
