import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css';

export default function PostCard({ post }) {
  const navigate = useNavigate();
  const [clickedCard, setClickedCard] = useState(false);

  const handleClickedCard = () => {
    setClickedCard(true);
    navigate(`/posts/${post.id}`);
  };
  //   ${clickedCard && 'scale-[500%] z-50 translate-y-36 duration-1000'}

  return (
    <div
      className={`bg-base-100 w-[100%] h-full rounded-md sm:rounded-lg overflow-hidden shadow-md sm:shadow-xl cursor-pointer ${
        !clickedCard &&
        'hover:scale-[103%] transition-transform ease-in-out duration-500'
      } ${clickedCard && ''}
      `}
      onClick={handleClickedCard}
    >
      <div className="flex justify-center bg-base-200 h-full w-full">
        <div className="flex flex-col w-full">
          <div className="overflow-hidden w-full mb-2 bg-base-200">
            <img
              alt={post.title}
              src={post.imgUrl}
              className="hover:scale-110 object-none h-[150px] sm:h-[250px] w-full transition-transform ease-in-out duration-500"
            ></img>
          </div>
          <h1 className="text-xl sm:text-2xl px-4 font-bold mb-4 ms-2 overflow-hidden">
            {post.title}
          </h1>
          <h1 className="my-2 text-slate-600 font-semibold ms-4 flex">
            {post.createdAt.substr(0, 10)}
          </h1>
        </div>
      </div>
    </div>
  );
}
