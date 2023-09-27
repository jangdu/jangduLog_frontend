import React, { useEffect, useState } from 'react';
import LoadingUi from '../ui/LoadingUi';
import PostCard from './PostCard';
import axios from 'axios';

export default function PopularPosts() {
  const [popularPosts, setPopularPosts] = useState();

  useEffect(() => {
    const getTopPosts = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_SERVERURL}/ranks`,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status === 200) {
        setPopularPosts(response.data);
      } else {
        alert('데이터 가져오기 실패');
      }
    };

    getTopPosts();
  }, []);

  if (popularPosts) {
    return (
      <div className="absolute ">
        <div className="mx-auto flex flex-row gap-5">
          {popularPosts.map((post) => {
            return (
              <div className="w-[500px]">
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
