import React from 'react';

const BlogPost = ({ image, category, title, description, author, authorImg, date }) => {
  return (
    <div className="post-card">
      <img src={image} alt={title} className="post-image" />
      <div className="post-content">
        <p className="post-category">{category}</p>
        <h3 className="post-title">{title}</h3>
        <p className="post-description">{description}</p>
        <div className="post-author">
          <img src={authorImg} alt={author} className="author-avatar" />
          <div>
            <p className="author-name">{author}</p>
            <p className="post-date">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
