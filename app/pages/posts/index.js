"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const PostsPage = () => {

  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  useEffect( () => fetchData(), [] )

  const postsToShow = posts.map( (post) => {
    return (
      <div key={post.id} className="flex flex-col justify-center items-center gap-4 p-4 rounded-lg shadow-xl" >
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p>{post.body}</p>
        <Link href={`/posts/${post.id}`} className="text-blue-500 underline" >
          <button className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded">Read More</button>
        </Link>
      </div>
    )
  } )

  return (
    <div className="flex flex-col justify-center items-center gap-4 w-100 mx-auto" >
      <h1 className="text-3xl font-bold underline">Hello, Posts!</h1>
      <p>Welcome to the posts page.</p>

      <div className="flex flex-col gap-4 overflow-y-auto max-h-145 p-4 border border-gray-300 rounded-lg shadow-xl" >
        {postsToShow}
      </div>
    </div> 
  )
}

export default PostsPage
