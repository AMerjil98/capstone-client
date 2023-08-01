import {useEffect, useState} from "react";

import Post from "../pages/post-1";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('https://vidyanews-2dd3196bd5f5.herokuapp.com/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <div>
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </div>
  );
}