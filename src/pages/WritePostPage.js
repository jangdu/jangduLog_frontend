import React, { useEffect, useState } from 'react';
import MarkdownViewerUi from '../components/ui/MarkDownViewerUi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function WritePostPage() {
  const navigate = useNavigate();

  const [newPost, setNewPost] = useState({});
  const [isUploading, setIsUpLoading] = useState(false);

  useEffect(() => {});

  const handleResizeHeight = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
    handleChange(e);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((post) => ({ ...post, [name]: value }));
  };

  const handleChangeTagList = (e) => {
    const { value } = e.target;

    const tagArray = value.split(/[, ]+/);
    setNewPost((post) => ({ ...post, tagList: tagArray }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsUpLoading(true);

    const requestBody = {
      tagList: newPost.tagList,
      title: newPost.title,
      content: newPost.content,
      imgUrl:
        newPost.imgUrl ||
        'https://res.cloudinary.com/dyhnnmhcf/image/upload/v1695198411/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-09-20_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.26.45_zaxs3z.png',
    };

    await axios.post(
      `${process.env.REACT_APP_API_SERVERURL}/posts`,
      requestBody,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    navigate(`/posts`);

    setIsUpLoading(false);
  };
  return (
    <section className="flex w-full mx-auto">
      {isUploading && <p>업로드중 ... </p>}
      <div className="p-4">
        <form
          className="flex flex-col w-[80vw] max-w-xl mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="title"
            name="title"
            value={newPost.title ?? ''}
            required
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="imgUrl"
            name="imgUrl"
            value={newPost.imgUrl ?? ''}
            required
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="tagList"
            name="tagList"
            value={newPost.tagList ? newPost.tagList.join(', ') : ''}
            required
            onChange={handleChangeTagList}
          />
          <textarea
            rows={1}
            className="p-4 my-4 resize-none focus:border-none focus:outline-none"
            placeholder="내용을 입력하세요"
            name="content"
            value={newPost.content ?? ''}
            onChange={handleResizeHeight}
            required
          />
          <div className="fixed font-bold bottom-0 right-28 h-16 ">
            <button
              text={isUploading ? 'uploading...' : '저장'}
              disabled={isUploading}
            >
              {isUploading ? 'uploading...' : '저장'}
            </button>
          </div>
        </form>
      </div>
      <div className="mx-2 w-full p-4">
        <MarkdownViewerUi content={`${newPost.content}`} />
      </div>
    </section>
  );
}
