import React from "react";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.imageSrc} />
      </a>
      <div className="content">
        <a href="author">{props.author}</a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text"> {props.text}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
