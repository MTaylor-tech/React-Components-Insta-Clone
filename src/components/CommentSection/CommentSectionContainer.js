// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [userCommentText, setUserCommentText] = useState();
  const [userComment, setUserComment] = useState({username:'', text:''});

  const editComment = (event) => {
    event.preventDefault();
    setUserCommentText(event.target.value);
  };

  const addComment = (event) => {
    event.preventDefault();
    const newComment = {text: userCommentText, username: 'User' };
    setUserComment(newComment);
  }


  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map(item=>{return <Comment comment={item} />})}
      {userComment.username===''?'':<Comment comment={userComment} />}
      <CommentInput changeComment={editComment} submitComment={addComment} comment={userCommentText} />
    </div>
  );
};

export default CommentSection;
