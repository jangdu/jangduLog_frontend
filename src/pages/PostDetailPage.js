import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingUi from '../components/ui/LoadingUi';
import MarkdownViewerUi from '../components/ui/MarkDownViewerUi';
import Comment from '../components/post/Comment';

export default function PostDetailPage() {
  const { postId } = useParams();
  const [post, setPost] = useState();
  const [postView, setPostView] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_SERVERURL}/posts/${postId}`,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status === 200) {
        setPost(response.data.post);
        setPostView(response.data.views);
      } else {
        alert('데이터 가져오기 실패');
      }
    };

    getPost();
  }, [postId]);

  if (post) {
    return (
      <div className="max-w-4xl mx-auto flex flex-col sm:p-4">
        <div className="absolute top-14 max-h-36 sm:top-20 sm:max-h-72 left-0 overflow-hidden object-none w-full">
          <img alt={post.title} src={post.imgUrl} className="w-full "></img>
        </div>
        <div className="h-36 sm:h-72"></div>
        <header className="flex flex-col mt-4 sm:mt-8">
          <div className="flex justify-between">
            <div className="flex flex-row gap-1">
              {post.post_tag.map((tagItem) => {
                return (
                  <p
                    className="btn btn-sm normal-case text-md"
                    key={tagItem.id}
                    onClick={() => navigate(`/posts?tagId=${tagItem.tag.id}`)}
                  >
                    {tagItem.tag.name}
                  </p>
                );
              })}
            </div>
            <div className="flex text-slate-500">
              <p>조회수 {postView}</p>
            </div>
          </div>
          <h1 className="font-bold text-2xl sm:text-4xl my-2 ">{post.title}</h1>
          <div className="text-slate-500 font-semibold">
            {post.createdAt.substr(0, 10)}
          </div>
        </header>
        <div className="w-[70%] min-w-[300px] mx-auto bg-slate-500 my-2 sm:my-6 h-1"></div>
        <div className="w-full">
          <MarkdownViewerUi content={post.content}></MarkdownViewerUi>
        </div>
        <Comment id={post.id} />
      </div>
    );
  } else {
    return <LoadingUi />;
  }
}
