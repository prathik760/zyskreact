import React from 'react';
import BlogPost from './Blog2';
import '../Blog/Blog.css';
import postImage1 from  '/Users/prathik/Desktop/ zysk/prathik/src/assets/Blog/1.png';
import postImage2 from '/Users/prathik/Desktop/ zysk/prathik/src/assets/Blog/2.png';
import postImage3 from '/Users/prathik/Desktop/ zysk/prathik/src/assets/Blog/3.png';
import authorImage from '/src/profile.png';  

const Blog = () => {
  const posts = [
    {
      image: postImage1,
      category: 'Design',
      title: 'UX review presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      author: 'Olivia Rhye',
      authorImg: authorImage,
      date: '20 Jan 2024',
    },
    {
      image: postImage2,
      category: 'Product',
      title: 'Migrating to Linear 101',
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
      author: 'Phoenix Baker',
      authorImg: authorImage,
      date: '19 Jan 2024',
    },
    {
      image: postImage3,
      category: 'Software Engineering',
      title: 'Building your API stack',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      author: 'Lana Steiner',
      authorImg: authorImage,
      date: '18 Jan 2024',
    },
  ];

  return (
    <div className="blog-container">
      <div className="blog-header">
        <div className="blog-text">
          <p className='our-blog'>Our Blog</p>
          <h2>Latest blog posts</h2>
          <p>Tools and strategies modern teams need to help their companies grow.</p>
        </div>
        <button className="view-all-btn">View all posts</button>
      </div>
      <div className="posts-grid">
        {posts.map((post, index) => (
          <BlogPost
            key={index}
            image={post.image}
            category={post.category}
            title={post.title}
            description={post.description}
            author={post.author}
            authorImg={post.authorImg}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
