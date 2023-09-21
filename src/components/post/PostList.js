import React, { useEffect, useState } from 'react';
import LoadingUi from '../ui/LoadingUi';
import axios from 'axios';
import PostCard from './PostCard';
import TagList from './tag/TagList';
import { useSearchParams } from 'react-router-dom';

export default function PostList() {
  const [posts, setPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [tags, setTags] = useState();

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getAllPosts = async () => {
      const response = await axios.get(
        `${
          process.env.REACT_APP_API_SERVERURL
        }/posts?page=${currentPage}&tagId=${searchParams.get('tagId') || 0}`,
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
  }, [currentPage, searchParams]);

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

  // 태그가 변경될 때 페이지를 1로 초기화
  useEffect(() => {
    setCurrentPage(1);
  }, [searchParams]);

  if (posts) {
    return (
      <div className="">
        <div className="max-w-md mx-auto my-3 sm:mb-8">
          <TagList tags={tags} currentTag={searchParams.get('tagId')} />
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
