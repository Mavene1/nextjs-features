import React from "react";

const PostCard = ({title, body}: PostProps) => {
  return (
    <div>
      <h1 className="text-bold" >{title}</h1>
      <p className="text-2xl">{body}</p>
    </div>
  );
};

export default PostCard;
