import React from "react";
import "./style.scss";

import Arrow from "../../shared/arrow/Arrow";

function BlogCard({ user, date, image, title, discription, read }) {
  return (
    <div className="blog-card">
      <div className="image-section">
        <img src={image} alt={title} />
      </div>
      <div className="content-section">
        <div className="info-bar">
          <div className="user-name">By {user}</div>
          <div className="posted-date">By {date}</div>
        </div>
        <h3>{title}</h3>
        <p>{discription}</p>
        <div className="readmore-cta">
          <a href={read} target="_blank">
            Read more
          </a>
          <Arrow />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
