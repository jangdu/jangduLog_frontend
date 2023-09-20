import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PostCard({ post }) {
  const navigate = useNavigate();
  const [clickedCard, setClickedCard] = useState(false);

  const handleClickedCard = () => {
    setClickedCard(true);

    setTimeout(() => {
      navigate(`/posts/${post.id}`);
    }, 500);
  };
  //   ${clickedCard && 'scale-[500%] z-50 translate-y-36 duration-1000'}

  return (
    <div
      className={`mockup-browser border bg-base-300 shadow-md sm:shadow-xl cursor-pointer ${
        !clickedCard && 'hover:scale-[103%]'
      } transition duration-500 ease-in-out 
      `}
      onClick={handleClickedCard}
    >
      <div className="mockup-browser-toolbar">
        <div className="input">https://jangdu.site/posts/{post.id}</div>
      </div>

      <div className="flex justify-center bg-base-200 w-full">
        <div className="flex flex-col w-full">
          <div className="overflow-hidden w-full mb-2 bg-white rounded-b-sm sm:rounded-b-md">
            <img
              alt={post.title}
              src={post.imgUrl}
              className="hover:scale-110 object-none h-[150px] sm:h-[250px] w-full transition-transform ease-in-out duration-500"
            ></img>
          </div>
          <h1 className="text-xl sm:text-2xl px-4 font-bold mb-4 ms-2 overflow-hidden">
            {post.title}
          </h1>
          <h1 className="my-2 text-slate-600 font-semibold me-4 flex justify-end">
            {post.createdAt.substr(0, 10)}
          </h1>
        </div>
      </div>
    </div>
  );
}
