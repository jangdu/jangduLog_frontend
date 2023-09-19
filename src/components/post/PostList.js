import React, { useEffect, useState } from 'react';
import LoadingUi from '../ui/LoadingUi';
import axios from 'axios';
import PostCard from './PostCard';

export default function PostList() {
  const [posts, setPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTag, setCurrentTag] = useState(0);

  useEffect(() => {
    const getAllPosts = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_SERVERURL}/posts?page=${currentPage}&tagId=${currentTag}`,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(response);
      if (response.status === 200) {
        setPosts(response.data);
      } else {
        alert('데이터 가져오기 실패');
      }
    };

    getAllPosts();
  }, [currentPage, currentTag]);

  if (posts) {
    return (
      <div className="flex flex-col">
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-5">
          {posts.length > 0 &&
            posts.map((post) => {
              return (
                <div key={post.id}>
                  <PostCard post={post} />
                </div>
              );
            })}
        </div>
      </div>
    );
  } else {
    return <LoadingUi />;
  }
}
