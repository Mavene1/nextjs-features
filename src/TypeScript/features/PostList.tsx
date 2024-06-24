"use client";

import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const getData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (e) {
    throw new Error("Failed, Check your Network Connection");
  }
};

const PostList = () => {
  const [info, setInfo] = useState<PostProps[]>([]);
  useEffect(() => {
    async function myData() {
      const data:PostProps[] = await getData();
      setInfo(data);
      console.log("PostData: ", data);
    }
    myData();
  }, []);

  return (
    <div className="postList">
      {/* <PostCard
        id={1}
        title="My TypeScript"
        body="My First TypeScript integration in Nextjs"
      /> */}
      {(info || []).map((inf:PostProps) => (
        <PostCard key={inf.id} {...inf} />
      ))}
    </div>
  );
};

export default PostList;
