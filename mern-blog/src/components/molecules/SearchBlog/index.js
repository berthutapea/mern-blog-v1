import React, { useState } from 'react';
import axios from 'axios';
import './searchBlog.scss';

function SearchBlog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async event => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    try {
      const response = await axios.get(`http://localhost:4000/v1/blog/post?search=${term}`);
      const results = response.data;
      setSearchResults(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      {searchResults.map((blog, index) => (
        <div key={index}>
          <p>{blog.title}</p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchBlog;
