import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import blogs from "../data/blogs";
import "./Details.css"
export default function Details() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [author, setAutho] = useState("");

  useEffect(() => {
    // ingest blogs Data
    const result = blogs.find((item) => item.id === parseInt(id));
    setTitle(result.title);
    setImage(result.image_url);
    setContent(result.content);
    setAutho(result.author);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
        <h2 className="title">{title}</h2>
        <img src={image} alt="title"  className="blog-img"/>
        <div className="blog-detail">
            <strong>author: {author}</strong>
            <p>{content}</p>
        </div>
     
    </div>
  );
}
