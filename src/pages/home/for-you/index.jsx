import Post from "~/components/post";
import { posts as postData } from "~/mock/posts";
import { WVList } from "virtua";
import { useState } from "react";

const ForYou = () => {
  const [posts, setPosts] = useState(postData);

  return (
    <WVList
      onRangeChange={(start, end) => {
        if (end + 1 === posts.length) {
          setPosts((prev) => [...prev, ...postData]);
        }
      }}
    >
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </WVList>
  );
};
export default ForYou;
