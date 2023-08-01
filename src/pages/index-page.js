import {useEffect, useState} from "react";
import axios from 'axios';

import Post from "../pages/post-1";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);

  // useEffect(() => {
  //   fetch('https://vidyanews-2dd3196bd5f5.herokuapp.com/post',
  //   {
  //     credentials: 'include'
  //   }
  //   )
  //   .then(response => {
  //     console.log(response)
  //     response.json()
  //   .then(posts => {
  //       setPosts(posts);
  //     });
  //   });
  // }, []);
  const getPosts = () => {
    axios.get('https://vidyanews-2dd3196bd5f5.herokuapp.com/post')
    .then(response => {
        
        setPosts(response.data);
      });
  }
  console.log(posts)

  useEffect(() => {
   getPosts()
  }, []);

  return (
    <div>
      {posts.length > 0 && posts.map(post => (
        <Post {...post} key={post._id} />
      ))}
    </div>
  );
}