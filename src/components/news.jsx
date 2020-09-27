import React from 'react';
import './news.css';
const News = ({ title, contents, link, date, urlToImage }) => {
  return (
    <div className="news__container">
      <div className="blog-post">
        <div className="blog-post__img">
          <img src={urlToImage} alt="news image" />
        </div>
        <div className="blog-post__info">
          <div className="blog-post__date">
            <span>{new Date(date).toDateString()}</span>
          </div>
          <h1 className="blog-post__title">{title}</h1>
          <p className="blog-post__text">{contents}</p>
          <a href={link} target="_blank" className="blog-post__cta">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
