import React, { useState } from "react";

function Search({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleChange = (event) => {
    setTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search">
      <input type="text" id="search-input" placeholder="Search" value={term} onChange={handleChange} style={{width:1300, height:50,borderRadius:1000, backgroundColor:'nero'}}/>
    </div>
  );
}

export default Search;
