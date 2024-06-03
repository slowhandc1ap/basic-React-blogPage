import blogs from "../data/blogs";
import "./Blogs.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Blogs() {
  const [search, setSearch] = useState("");
  const [filterBlog,setFilterBlog] = useState([])

  useEffect(() => {
    //filter data form val : blogs
    const result = blogs.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
  
    setFilterBlog(result) // เสดเเล้วเอาไปเเทนที่ 
   
  },[search]);
  return (
    <div className="blogs-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <article>
        {filterBlog.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id}>
            <div className="card">
              <h2>{item.title}</h2>

              <p>{item.content.substring(0, 360)}</p>
              <hr />
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
}
