"use client";
import React, { useEffect, useState, Suspense } from "react";
import getAllData from "@/firebase/firestore/getAllData";

const PostCard = React.lazy(() => import("./postcard"));

const Posts = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllData();
        setItems(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <h1 className="mb-4 text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-black">
        All posts
      </h1>
      <div>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        {items.map((doc) => (
          <PostCard postdetails={doc} key={doc.id} />
        ))}
        {/* </Suspense> */}
      </div>
    </div>
  );
};

export default Posts;
