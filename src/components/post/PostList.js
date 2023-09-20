import React, { useEffect, useState } from 'react';
import LoadingUi from '../ui/LoadingUi';
import axios from 'axios';
import PostCard from './PostCard';
import TagList from './tag/TagList';

export default function PostList() {
  const [posts, setPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTag, setCurrentTag] = useState(0);
  const [tags, setTags] = useState();

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

      if (response.status === 200) {
        setPosts(response.data);
      } else {
        alert('데이터 가져오기 실패');
      }
    };

    getAllPosts();
  }, [currentPage, currentTag]);

  useEffect(() => {
    const getAllTags = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_SERVERURL}/tags`,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status === 200) {
        setTags([{ name: 'All', id: 0 }, ...response.data]);
      } else {
        alert('데이터 가져오기 실패');
      }
    };

    getAllTags();
  }, []);

  if (posts) {
    return (
      <div className="">
        <div className="max-w-md mx-auto my-3 sm:mb-8">
          <TagList
            tags={tags}
            setCurrentTag={setCurrentTag}
            currentTag={currentTag}
            setCurrentPage={setCurrentPage}
          />
        </div>
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
